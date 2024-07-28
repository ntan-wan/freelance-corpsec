import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { CustomNavbar } from "@/components/layouts/CustomNavbar";
import { CustomFooter } from "@/components/layouts/CustomFooter";
import "./globals.css";
import { GlobalProvider } from "@/providers/GlobalProvider";
import dynamic from "next/dynamic";

const inter = Inter({ subsets: ["latin"] });
const CustomSidebar = dynamic(() => import("@/components/ui/CustomSidebar").then((mod) => mod.CustomSidebar));

export const metadata: Metadata = {
  title: "Corpsec",
  description:
    "Incorporating a company as a service provides businesses with streamlined, expert assistance in legally forming and registering their corporation, ensuring compliance with all necessary regulations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GlobalProvider>
        <body className={inter.className}>
          <CustomNavbar />
          <CustomSidebar />
          <div className="container">{children}</div>
          <CustomFooter className="mt-auto" />
        </body>
      </GlobalProvider>
    </html>
  );
}
