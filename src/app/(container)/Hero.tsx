import { Button } from "@/components/ui/button";
import Typography from "@/components/ui/Typography";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Hero({ ...props }) {
  return (
    <section
      {...props}
      className={cn(
        "flex min-h-screen min-w-full flex-col-reverse items-center justify-center bg-grayCustom md:justify-start",
        "gap-8 px-8 lg:flex-row lg:px-20 xl:gap-4 xl:pl-56",
      )}
    >
      <div className="relative z-20 space-y-7 md:w-[80%] 2xl:w-[40%]">
        <Typography
          as="h4"
          variant="h4"
          weight="bold"
          className="max-md:text-2xl"
        >
          Elevate Your Messaging Efficiency with Our Innovative Admin Tools
        </Typography>

        <Typography font="Inter" className="font-medium max-md:text-sm">
          Selamat datang di Fowardin! Pengelolaan pesan Anda menjadi lebih mudah
          dengan Admin Tools kami. Tingkatkan komunikasi Anda dan pelanggan
          dengan fitur pesan otomatis. Menyimpan kontak menjadi lebih praktis
          dengan fitur sinkronasi Google Concact. Dapatkan kendali penuh pesan
          dengan manajemen konten yang praktis.
        </Typography>

        <Button size="lg" className="relative bg-black pr-16 text-white">
          <div className="absolute bottom-0 right-0 top-0 flex items-center justify-center border-l-2 border-l-white/20 px-3">
            <ArrowRight />
          </div>
          Daftar Sekarang
        </Button>
      </div>

      <Image
        src="/images/HeroContainer.png"
        width={1316}
        height={903}
        alt="assets"
        className="relative z-20 md:w-[80%] lg:w-[50%]"
      />

      <div className="relative z-[19]">
        <Image
          src="/images/gradient-top.png"
          width={2880}
          height={2202}
          alt="assets"
          className="absolute left-0 top-0 hidden w-full lg:block"
        />
        <Image
          src="/images/gradient-top-mobile.png"
          width={786}
          height={1116}
          alt="assets"
          className="absolute -bottom-72 left-0 w-full lg:hidden"
        />
      </div>
    </section>
  );
}
