"use client";
import { Button } from "@/components/ui/button";
import {
  LogoutLink,
  useKindeBrowserClient,
} from "@kinde-oss/kinde-auth-nextjs";
import { useConvex,useMutation } from "convex/react";
import React, { useEffect } from "react";
import { api } from "../../../../convex/_generated/api";

const Dashboard = () => {
  const convex=useConvex();
  const {user}:any = useKindeBrowserClient();


  const createUser=useMutation(api.user.createUser);
  useEffect(()=>{
      if(user)
      {
        checkUser()
      }
  },[user])
  

  const checkUser=async()=>{
    const result=await convex.query(api.user.getUser,{email:user?.email});
    if(!result?.length)
    {
        createUser({
          name:user.given_name,
          email:user.email,
          image:user.picture
        }).then((resp)=>{
          console.log(resp)
        })
    }

  }
  return (
    <div>
      
    </div>
  );
};

export default Dashboard;
