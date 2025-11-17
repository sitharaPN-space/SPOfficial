import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import SidebarNav from "@/components/SidebarNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sithara Pitiyage - Portfolio",
  description: "Computer Engineer | Full Stack Developer | AI Engineer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <Header />
        <SidebarNav />
        <main className="min-h-screen lg:ml-64">{children}</main>
      </body>
    </html>
  );
}
