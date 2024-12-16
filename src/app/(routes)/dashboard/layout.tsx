"use client";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { useConvex } from "convex/react";
import React, { useEffect, useState } from "react";
import { api } from "../../../../convex/_generated/api";
import Sidenav from "./_components/Sidenav";
import { useRouter } from "next/navigation";
import { FileListContext } from "@/app/_context/FileListContext";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

function DashboardLayout({ children }: DashboardLayoutProps) {
  const router = useRouter();
  const convex = useConvex();
  const { user }: any = useKindeBrowserClient();
  const [FileList,setFileList]= useState();
  useEffect(() => {
    user && checkTeam();
  }, [user]);

  const checkTeam = async () => {
    const result = await convex.query(api.teams.getTeam, {
      email: user?.email,
    });
    if (!result?.length) {
      router.push("teams/create");
    }
  };

  return (
    <div>
      <FileListContext.Provider value={{FileList,setFileList}}>
      <div className="grid grid-cols-4">
        <div className="h-screen w-72 fixed" >
          <Sidenav />
        </div>
        <div className="col-span-4 ml-72">
          {children}
          </div>
      </div>
      </FileListContext.Provider>
      
    </div>
  );
}

export default DashboardLayout;
