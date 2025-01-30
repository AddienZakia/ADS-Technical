"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Navbar() {
  const [hide, setHide] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const pos = window.scrollY || document.documentElement.scrollTop;

      if (pos > 0) setHide(true);
      else setHide(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hide]);

  return (
    <>
      <div
        className={cn(
          "flex items-center justify-center transition-all duration-200",
          hide && "opacity-0",
        )}
      >
        <section className="relative top-0 z-40 flex items-center justify-between space-x-12 rounded-xl bg-white px-8 py-4 lg:fixed lg:top-8">
          <Image
            src="/Logo.png"
            width={354}
            height={69}
            alt="assets"
            className="relative z-40 w-[40%] lg:w-[20%]"
          />

          <div className="hidden items-center justify-center space-x-5 lg:flex">
            <Link href="/">
              <li className="list-none font-medium hover:text-blueCustom">
                Features
              </li>
            </Link>
            <Link href="/">
              <li className="list-none font-medium hover:text-blueCustom">
                Pricing
              </li>
            </Link>
            <Link href="/">
              <li className="list-none font-medium hover:text-blueCustom">
                Demo
              </li>
            </Link>
            <Link href="/">
              <li className="list-none font-medium hover:text-blueCustom">
                Blog
              </li>
            </Link>
          </div>

          <div
            className={cn(
              "absolute -left-12 w-full bg-white p-4 text-center transition-all duration-200 lg:hidden",
              active ? "top-12" : "-top-96",
            )}
          >
            <Link href="/">
              <li className="my-4 list-none font-medium hover:text-blueCustom">
                Features
              </li>
            </Link>
            <Link href="/">
              <li className="my-4 list-none font-medium hover:text-blueCustom">
                Pricing
              </li>
            </Link>
            <Link href="/">
              <li className="my-4 list-none font-medium hover:text-blueCustom">
                Demo
              </li>
            </Link>
            <Select>
              <SelectTrigger className="mx-auto w-fit bg-blueCustom text-white">
                <SelectValue placeholder="Sign In" />
              </SelectTrigger>
              <SelectContent className="border-none bg-white" align="center">
                <SelectGroup>
                  <Link href="/auth/login">
                    <SelectItem
                      value="admin"
                      className="bg-white text-gray-500"
                    >
                      Sign in as Admin
                    </SelectItem>
                  </Link>
                  <SelectItem value="cs" className="bg-white text-gray-500">
                    Sign in as Customer Service
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <Menu
            size={24}
            className="cursor-pointer text-blueCustom lg:hidden"
            onClick={() => setActive((pre) => !pre)}
          />
          <Link href="/auth/login" className="hidden lg:block">
            <Button className="rounded-md bg-blueCustom px-8 py-2 text-white hover:bg-blue-700">
              Sign In
            </Button>
          </Link>
        </section>
      </div>
    </>
  );
}
