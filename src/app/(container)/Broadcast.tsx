import Typography from "@/components/ui/Typography";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

export default function Broadcast({ ...props }) {
  return (
    <section
      {...props}
      className={cn(
        "flex min-h-screen min-w-full flex-col-reverse items-center justify-center bg-grayCustom lg:justify-end",
        "gap-8 px-8 lg:flex-row-reverse lg:px-20 xl:gap-8 xl:pl-56",
      )}
    >
      <div className="relative z-20 space-y-7 md:w-[80%] 2xl:w-[35%]">
        <Typography
          as="h4"
          variant="h4"
          weight="bold"
          className="max-md:text-2xl"
        >
          Reach Further with Ease
        </Typography>

        <Typography font="Inter" className="font-medium max-md:text-sm">
          Fowardin memberikan Anda akses cepat untuk memperluas jangkauan
          komunikasi Anda. Dengan fitur Broadcast kami, Anda dapat mengirim
          pesan kepada banyak kontak dan grup sekaligus. Menjangkau audiens Anda
          tidak pernah semudah ini.
        </Typography>
      </div>

      <Image
        src="/images/BroadcastContainer.png"
        width={1316}
        height={903}
        alt="assets"
        className="relative z-20 md:w-[80%] lg:w-[50%]"
      />
    </section>
  );
}
