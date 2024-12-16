import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Link, Save } from "lucide-react";

const WorkspaceHeader = () => {
  return (
    <div className="p-3 border-b flex justify-between items-center">
      <div className="flex items-center gap-2">
        <Image src={"/logo.svg"} height={40} width={40} alt="logo" />
        <h2>File Name</h2>
      </div>
      <div className="flex gap-2">
      <Button className="flex gap-2 bg-yellow-500 hover:bg-yellow-600 text-white">Save<Save/></Button>
      <Button className="flex gap-2 bg-blue-600 hover:bg-blue-700">Share<Link/></Button>
      </div>
     
    </div>
  );
};

export default WorkspaceHeader;
