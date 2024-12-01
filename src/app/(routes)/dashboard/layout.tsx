"use client";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { useConvex } from "convex/react";
import React, { useEffect } from "react";
import { api } from "../../../../convex/_generated/api";
import Sidenav from "./_components/Sidenav";
import { useRouter } from "next/navigation";
interface DashboardLayoutProps {
  children: React.ReactNode;
}

function DashboardLayout({ children }: DashboardLayoutProps) {
  const router = useRouter();
  const convex = useConvex();
  const { user }: any = useKindeBrowserClient();
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
      <div className="grid grid-cols-4">
        <div >
          <Sidenav />
        </div>
        <div className="grid-cols-3">
          {children}
          </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
