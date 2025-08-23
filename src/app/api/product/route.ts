import { NextResponse, NextRequest } from "next/server";
import cloudinary from "@/lib/cloudinary";
import { ProductModel } from "@/model/Product"; // your model import
import { connectDB } from "@/lib/mongoose"; // your DB connection
import { requireRoleStatic } from "@/lib/roleCheck";

interface FormDataFields {
  name: string;
  category: string;
  price: string;
  description: string;
  image: File;
}

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

export const POST = requireRoleStatic(["admin", "moderator"])(
  async (req: Request) => {
    await connectDB();

    try {
      const formData = await req.formData();
      const formDataObj: Partial<FormDataFields> = {
        name: formData.get("name") as string,
        category: formData.get("category") as string,
        price: formData.get("price") as string,
        description: formData.get("description") as string,
        image: formData.get("image") as File,
      };

      // Validate required fields
      if (
        !formDataObj.name ||
        !formDataObj.category ||
        !formDataObj.price ||
        !formDataObj.image
      ) {
        return NextResponse.json(
          { error: "Missing required fields (name, category, price, image)" },
          { status: 400 }
        );
      }

      // Convert file to buffer
      const file = formDataObj.image;
      const buffer = Buffer.from(await file.arrayBuffer());
      interface CloudinaryResult {
        secure_url: string;
        public_id: string;
      }
      // Upload to Cloudinary
      const result: CloudinaryResult = await new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          { folder: "products" },
          (error, result) => {
            if (error) return reject(error);
            if (!result) return reject(new Error("Cloudinary upload failed"));
            resolve(result as CloudinaryResult);
          }
        );
        stream.end(buffer);
      });
      // Create product in DB
      const newProduct = await ProductModel.create({
        name: formDataObj.name,
        category: formDataObj.category,
        price: Number(formDataObj.price),
        description: formDataObj.description,
        image: result.secure_url,
      });

      return NextResponse.json(newProduct, { status: 201 });
    } catch (error) {
      console.error("Upload error:", error);
      return NextResponse.json(
        { error: "Internal server error" },
        { status: 500 }
      );
    }
  }
);

export async function GET(req: NextRequest) {
  await connectDB();

  const { searchParams } = new URL(req.url);

  const category = searchParams.get("category"); // ?category=vitamin
  const limit = parseInt(searchParams.get("limit") || "10", 10); // items per page
  const page = parseInt(searchParams.get("page") || "1", 10); // current page

  const filter: Record<string, unknown> = {};
  if (category) {
    filter.category = category;
  }

  const skip = (page - 1) * limit;

  const [products, total] = await Promise.all([
    ProductModel.find(filter).skip(skip).limit(limit).exec(),
    ProductModel.countDocuments(filter).exec(),
  ]);

  return NextResponse.json({
    products,
    pagination: {
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    },
  });
}
