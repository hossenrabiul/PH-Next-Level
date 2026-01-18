import Link from "next/link";
import React from "react";

const PracticeLayout = ({
  children,
  marketingSlot,
  salesSlot,
}: {
  children: React.ReactNode;
  marketingSlot: React.ReactNode;
  salesSlot: React.ReactNode;
}) => {
  return (
    <div className="w-full">
      <nav className="flex justify-center items-center p-10 gap-7">
        <Link href={"/department"}>Department</Link>
        <Link href={"/sales"}>Sales</Link>
        <Link href={"/marketing"}>Marketing</Link>
        <Link href={"/marketing/settings"}>Settings</Link>
      </nav>
      <div className="flex">
        {marketingSlot}
        {salesSlot}
      </div>
      {children}
    </div>
  );
};

export default PracticeLayout;
