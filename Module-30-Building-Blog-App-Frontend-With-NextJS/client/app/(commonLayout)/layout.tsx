import { LpNavbar1 } from "@/components/layout/lp-navbar-1";
import React from "react";

function CommonLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <LpNavbar1 />
      {children}
    </div>
  );
}

export default CommonLayout;
