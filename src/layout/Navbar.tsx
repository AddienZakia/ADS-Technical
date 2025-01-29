"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [hide, setHide] = useState(false);

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
        <section className="relative top-8 z-40 flex items-center justify-between space-x-12 rounded-xl bg-white px-8 py-4 lg:fixed">
          <Image
            src="/Logo.png"
            width={354}
            height={69}
            alt="assets"
            className="relative z-40 w-[20%]"
          />

          <div className="flex items-center justify-center space-x-5">
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

          <Button className="rounded-md bg-blueCustom px-8 py-2 text-white hover:bg-blue-700">
            Sign In
          </Button>
        </section>
      </div>
    </>
  );
}
