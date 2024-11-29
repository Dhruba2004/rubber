import React from "react";

import SidenavTopSection from "./SidenavTopSection";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

const Sidenav = () => {
  // const {user}:any = useKindeBrowserClient();
  
  return (
    <div className="bg-gray-100 dark:bg-gray-900/70 h-screen fixed w-72 border-r p-6">
      <SidenavTopSection/>
    </div>
  );
};

export default Sidenav;
