import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppProvider } from "@/context/AppContext";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"], // <-- add needed font weights
});

export const metadata: Metadata = {
  title: "Hydra Aesthetics",
  description: "Hydra Aesthetics",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {" "}
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
