"use client";

import Typography from "@/components/ui/Typography";
import React, { useState } from "react";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Opportunity({ ...props }) {
  const [state, setState] = useState(1);

  return (
    <section
      {...props}
      className="flex min-h-screen min-w-full flex-col items-center justify-center gap-6 bg-white px-8 py-20 lg:px-20"
    >
      <Typography
        as="h4"
        variant="h4"
        weight="bold"
        className="text-center text-blueCustom max-md:text-2xl lg:mx-auto lg:w-[80%] xl:w-[60%]"
      >
        "One Step Closer to More Effective and Connected Communication!"
      </Typography>

      <div className="flex flex-col items-center justify-center space-y-6 md:flex-row lg:space-y-0 lg:pr-10 xl:pl-14 xl:pr-0 2xl:pl-20">
        <Image
          src="/images/OpportunityContainer.png"
          width={506}
          height={486}
          alt="assets"
          className="w-full md:w-[50%]"
        />

        <div className="flex flex-col items-center justify-between space-y-8 lg:items-start">
          <div className="w-full lg:hidden">
            <Select defaultValue="Bisnis dan Pemasaran">
              <SelectTrigger className="bg-blueCustom text-white">
                <SelectValue placeholder="Pilih layanan anda" />
              </SelectTrigger>
              <SelectContent className="border-none bg-white" align="center">
                <SelectGroup>
                  <SelectItem value="Bisnis dan Pemasaran" className="bg-white">
                    Bisnis dan Pemasaran
                  </SelectItem>
                  <SelectItem
                    value="Komersial dan Penjualan"
                    className="bg-white"
                  >
                    Komersial dan Penjualan
                  </SelectItem>
                  <SelectItem value="Organisasi Sosial" className="bg-white">
                    Organisasi Sosial
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="hidden items-center justify-center gap-5 lg:flex">
            <Button
              className={cn(
                "cursor-pointer rounded-md border border-blueCustom text-blueCustom transition-all duration-200 hover:bg-blueCustom/5",
                state === 1 && "bg-blueCustom text-white hover:bg-blue-700",
              )}
              onClick={() => setState(1)}
            >
              Bisnis dan Pemasaran
            </Button>
            <Button
              className={cn(
                "cursor-pointer rounded-md border border-blueCustom text-blueCustom transition-all duration-200 hover:bg-blueCustom/5",
                state === 2 && "bg-blueCustom text-white hover:bg-blue-700",
              )}
              onClick={() => setState(2)}
            >
              Komersial dan Penjualan
            </Button>
            <Button
              className={cn(
                "cursor-pointer rounded-md border border-blueCustom text-blueCustom transition-all duration-200 hover:bg-blueCustom/5",
                state === 3 && "bg-blueCustom text-white hover:bg-blue-700",
              )}
              onClick={() => setState(3)}
            >
              Organisasi Sosial
            </Button>
          </div>

          <Typography variant="bt" className="font-medium">
            Bidang ini dapat memanfaatkan fitur broadcast untuk mengirim
            promosi, pengumuman, dan informasi produk kepada pelanggan dalam
            jumlah besar secara efisien. Sementara itu, fitur campaign dapat
            membantu merencanakan dan menyampaikan pesan iklan dengan waktu yang
            tepat kepada target audiens yang sesuai.
          </Typography>
        </div>
      </div>
    </section>
  );
}
