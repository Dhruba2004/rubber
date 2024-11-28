"use client"
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import ThemeTogglebutton from "@/components/ui/ThemeToggle";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from '@/components/ui/button';
import { LoginLink, RegisterLink } from '@kinde-oss/kinde-auth-nextjs';
import { AlignJustify } from 'lucide-react';

const Header = () => {
  const MenuOptions = [
    {
      id: 1,
      name: "About",
      path: "/",
    },
    {
      id: 2,
      name: "Careers",
      path: "/",
    },
    {
      id: 3,
      name: "History",
      path: "/",
    },
    {
      id: 4,
      name: "Services",
      path: "/",
    },
    {
      id: 5,
      name: "Projects",
      path: "/",
    }
  ];
  return (
    <header className="shadow-sm border border-b-2 dark:bg-gray-900/80" >
    <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
      <div className="flex h-16 items-center justify-between">
        <div className="md:flex md:items-center md:gap-12">
          <Image src={"/logo.svg"} height={50} width={50} alt='logo'/>

        </div>
  
        <div className="lg:flex gap-5 items-center hidden ">
        {MenuOptions.map((item, index) => (
          <ul className="flex gap-5 items-center " key={index}>
            <li className="hover:text-violet-700 transition-all">
              <Link href={item.path}>
                {item.name}
              </Link>
            </li>
          </ul>
        ))}
      </div>
  
        <div className="flex items-center gap-4">
          <div className="sm:flex sm:gap-4">
            <Button variant={'outline'}><LoginLink postLoginRedirectURL='/dashboard'>Login</LoginLink></Button>
          
  
            <div className="hidden sm:flex">
              <Button><RegisterLink>Register</RegisterLink></Button>

            </div>
            <ThemeTogglebutton className="top-2 right-6"/>
          </div>
  
          <div className="block md:hidden">
          <Sheet>
          <SheetTrigger className="lg:hidden sm:block">
            {" "}
            <AlignJustify height={30} width={30}/>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetDescription>
                <div className="flex flex-col space-y-7 justify-center items-center mt-[10rem]">
                  {MenuOptions.map((item, index) => (
                    <ul className="flex gap-5 items-center" key={index}>
                      <li className="">
                        <Link
                          className="text-3xl text-black dark:text-white  dark:hover:text-violet-700  hover:text-violet-700 transition-all"
                          href={item.path}
                        >
                          {item.name}
                        </Link>
                      </li>
                    </ul>
                  ))}
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
            
          </div>
        </div>
      </div>
    </div>
  </header>
  
  )
}

export default Header