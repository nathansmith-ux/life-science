import { Inter } from "next/font/google";
import "./globals.css";
import { AI } from "./api/action";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Life Science Paper Search Engine Powered By Springer",
  description: "Easily find any paper or journal using natural language prompts instead of manually searching pubmed.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AI>
        <body className={inter.className}>{children}</body>
      </AI>
    </html>
  );
}
