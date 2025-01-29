import Typography from "@/components/ui/Typography";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

export default function Campaign({ ...props }) {
  return (
    <section
      {...props}
      className={cn(
        "flex min-h-screen min-w-full flex-col-reverse items-center justify-center bg-grayCustom lg:justify-end",
        "gap-8 px-8 lg:flex-row-reverse lg:px-20 xl:gap-12 xl:pl-56",
      )}
    >
      <div className="space-y-7 md:w-[80%] 2xl:w-[30%]">
        <Typography
          as="h4"
          variant="h4"
          weight="bold"
          className="max-md:text-2xl"
        >
          Respond Faster with the Convenience of Auto Reply
        </Typography>

        <Typography font="Inter" className="font-medium max-md:text-sm">
          Fowardin memungkinkan Anda untuk merencanakan pengiriman iklan yang
          tepat sasaran. Manfaatkan fitur Campaign kami untuk mengoptimalkan
          pesan iklan Anda sehingga hasilnya lebih akurat dan sukses. Dengan
          Fowardin, setiap pesan iklan memiliki dampak yang lebih besar.
        </Typography>
      </div>

      <Image
        src="/images/ReplyContainer.png"
        width={1316}
        height={903}
        alt="assets"
        className="md:w-[80%] lg:w-[50%]"
      />
    </section>
  );
}
