import { NextRequest, NextResponse } from "next/server";
import cloudinary from "@/lib/cloudinary";

import { connectDB } from "@/lib/mongoose";
import { requireRoleDynamic } from "@/lib/roleCheck";
import { ProductModel, ProductCategory } from "@/model/Product";

export const config = {
  api: {
    bodyParser: false,
  },
};



type Params = { id: string };

function getPublicIdFromUrl(url: string) {
  const parts = url.split("/");
  const filename = parts[parts.length - 1];
  const publicIdWithExtension = `products/${filename}`;
  const publicId = publicIdWithExtension.replace(/\.[^/.]+$/, "");
  return publicId;
}

export const PATCH = requireRoleDynamic<Params>(["admin", "moderator"])(
  async (req: NextRequest, context: { params: Params }) => {
    await connectDB();

    try {
      const formData = await req.formData();
      const id = context.params.id; // Get ID from params instead of formData
      const name = formData.get("name") as string;
      const category = formData.get("category") as ProductCategory;
      const price = formData.get("price") as string;
      const description = formData.get("description") as string;
      const newImage = formData.get("image") as File | null;

      if (!id) {
        return NextResponse.json(
          { error: "Missing product id" },
          { status: 400 }
        );
      }

      const product = await ProductModel.findById(id);
      if (!product) {
        return NextResponse.json(
          { error: "Product not found" },
          { status: 404 }
        );
      }

      // Get old public_id from existing image URL
      let imageUrl = product.image;
      let publicId: string | null = imageUrl
        ? getPublicIdFromUrl(imageUrl)
        : null;

      // If new image is uploaded, delete old image and upload new one
      if (newImage) {
        if (publicId) {
          await cloudinary.uploader.destroy(publicId);
        }

        const buffer = Buffer.from(await newImage.arrayBuffer());

        const result: { secure_url: string; public_id: string } =
          await new Promise((resolve, reject) => {
            const stream = cloudinary.uploader.upload_stream(
              { folder: "/public/images" },
              (error, result) => {
                if (error) return reject(error);
                if (!result)
                  return reject(new Error("Cloudinary upload failed"));
                resolve(result as { secure_url: string; public_id: string });
              }
            );
            stream.end(buffer);
          });

        imageUrl = result.secure_url;
        publicId = result.public_id;
      }

      // Update product fields only if provided
      if (name) product.name = name;
      if (category) product.category = category;
      if (price) product.price = Number(price);
      if (description) product.description = description;
      product.image = imageUrl;

      await product.save();

      return NextResponse.json(product, { status: 200 });
    } catch (error) {
      console.error("Update error:", error);
      return NextResponse.json(
        { error: "Internal server error" },
        { status: 500 }
      );
    }
  }
);


export const GET = requireRoleDynamic<Params>(["admin", "moderator"])(
  async (req: NextRequest, context: { params: Params }) => {
    await connectDB();

    try {
      const id = context.params?.id;

      if (!id) {
        return NextResponse.json(
          { error: "Missing product id" },
          { status: 400 }
        );
      }

      const product = await ProductModel.findById(id);
      if (!product) {
        return NextResponse.json(
          { error: "Product not found" },
          { status: 404 }
        );
      }

      return NextResponse.json(product, { status: 200 });
    } catch (error) {
      console.error("Fetch error:", error);
      return NextResponse.json(
        { error: "Internal server error" },
        { status: 500 }
      );
    }
  }
);

export const DELETE = requireRoleDynamic<Params>(["admin", "moderator"])(
  async (req: NextRequest, context: { params: Params }) => {
    try {
      await connectDB();

      const id = context.params?.id;

      if (!id) {
        return NextResponse.json(
          { error: "Product ID is required" },
          { status: 400 }
        );
      }

      const product = await ProductModel.findById(id);

      const imageUrl = product?.image;
      if (imageUrl) {
        const publicId = getPublicIdFromUrl(imageUrl);
        await cloudinary.uploader.destroy(publicId);
      }

      if (!product) {
        return NextResponse.json(
          { error: "Product not found" },
          { status: 404 }
        );
      }

      const deleted = await ProductModel.findByIdAndDelete(id);

      if (!deleted) {
        return NextResponse.json(
          { error: "Product not found" },
          { status: 404 }
        );
      }

      return NextResponse.json({
        success: true,
        message: "Product successfully deleted",
      });
    } catch (err) {
      return NextResponse.json(
        { error: "Internal Server Error", details: err },
        { status: 500 }
      );
    }
  }
);
