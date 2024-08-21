import type { Metadata } from "next";
import "../globals.css";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import Navbar from "@/components/Navbar";
const Menu = React.lazy(() => import("../../components/Menu"))

export const metadata: Metadata = {
  title: "School Management Dashboard",
  description: "Next.js School Management System",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex bg-[#091B31]">
      <div className="sidebar w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%]">
        <Link
          href="/"
          className="flex item-center justify-center gap-2 lg:justify-start p-4"
        >
          <Image
            src="/sm.png"
            alt="logo"
            width={32}
            height={32}
            style={{ borderRadius: "25px" }}
          />
          <span className="hidden lg:block text-white">AcademIQ</span>
        </Link>
        <Menu/>
      </div>
      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#0A152F] text-white">
        <Navbar/>
        {children}
      </div>
    </div>
  );
}
