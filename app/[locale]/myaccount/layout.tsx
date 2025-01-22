import React from "react";
import Sidebar from "./Sidebar/page";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container max-w-[1400px] mx-auto flex mt-10">
      <Sidebar />
      <main className="flex-grow">{children}</main>
    </div>
  );
}