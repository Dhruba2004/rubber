import React from "react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import SidenavTopSection from "./SidenavTopSection";

const Sidenav = () => {
  
  return (
    <div className="bg-gray-100 h-screen fixed w-72 border-r p-6">
      <SidenavTopSection/>
    </div>
  );
};

export default Sidenav;
