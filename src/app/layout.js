import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import QueryProvider from "@/components/QueryProvider";
import AuthContextProvider from "./context/AuthContext";
import ToasterProvider from "@/components/ToasterProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "GlassyBlog",
  description:
    "GlassyBlog, crafted by Muhammad Hassan Raza, is a cutting-edge blogging platform that empowers users to effortlessly create, share, and explore high-quality content through a sophisticated glassmorphic interface designed for an exceptional user experience.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthContextProvider>
          <QueryProvider>
            <ToasterProvider />
            {children}
          </QueryProvider>
        </AuthContextProvider>
      </body>
    </html>
  );
}
