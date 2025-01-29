"use client";

import Typography from "@/components/ui/Typography";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type cardType = {
  name: string;
  description: string;
  price: string;
  priceYear: string;
};

const contents: cardType[] = [
  {
    name: "Starter",
    description:
      "Mulai perjalanan Anda dengan paket Starter selama 14 hari. Nikmati pesan otomatis, siaran pesan, dan manajemen kontak yang efisien. Dapatkan integrasi yang membantu dan sinkronisasi kontak WhatsApp.",
    price: "Gratis",
    priceYear: "-",
  },
  {
    name: "Basic",
    description:
      "Dapatkan akses selama 1 bulan dengan paket Basic. Manfaatkan fitur pesan otomatis, siaran pesan, dan manajemen kontak yang ditingkatkan. Rasakan kenyamanan integrasi yang luas dengan sinkronisasi kontak Google dan WhatsApp.",
    price: "Rp. 65.000 ",
    priceYear: "Rp. 650.000 /tahun",
  },
  {
    name: "Premium",
    description:
      "Perpanjang pengalaman Anda dengan paket Premium selama 1 bulan. Nikmati manfaat pesan otomatis, siaran pesan, dan manajemen kontak tanpa batasan. Aktifkan integrasi yang luas dengan sinkronisasi kontak Google dan WhatsApp.",
    price: "Rp. 76.000 ",
    priceYear: "Rp. 800.000 /tahun",
  },
  {
    name: "Pro",
    description:
      "Jelajahi seluruh fitur dengan paket Pro selama 1 bulan. Dapatkan keuntungan dari pesan otomatis, siaran pesan, serta manajemen kontak yang tidak terbatas. Aktifkan integrasi yang luas dengan sinkronisasi kontak Google dan WhatsApp.",
    price: "Rp. 86.000 ",
    priceYear: "Rp. 900.000 /tahun",
  },
];

function Card({ name, description, price, priceYear }: cardType) {
  return (
    <div
      className={cn(
        "relative flex w-[320px] flex-col items-start space-y-6 p-4 pb-5 xl:w-[280px]",
        name === "Basic" &&
          "rounded-xl bg-white shadow-[0px_17px_42px_0px_rgba(0,0,0,0.08)]",
      )}
    >
      <div className="space-y-3">
        <Typography variant="t1" className="text-2xl font-black">
          {name}
        </Typography>

        <Typography className="font-medium">{description}</Typography>
      </div>

      <div>
        <Typography variant="t1" className="text-2xl font-black">
          {price ?? "Gratis"}{" "}
          <span className="text-lg font-medium text-black">/bulan</span>
        </Typography>

        <Typography className="font-medium text-gray-500 opacity-80">
          {priceYear ?? "-"}
        </Typography>
      </div>

      <Button
        className={cn(
          "w-full rounded-md bg-blueCustom font-semibold text-white",
          name === "Basic" && "bg-orangeCustom",
        )}
      >
        Start Now
      </Button>

      <div className="space-y-2">
        <div className="flex items-center justify-start gap-3">
          <Image
            src="/images/icons/time_auto.svg"
            width={24}
            height={24}
            alt="assets"
          />
          <Typography variant="bt" className="font-medium">
            100 Auto reply
          </Typography>
        </div>
        <div className="flex items-center justify-start gap-3">
          <Image
            src="/images/icons/cast.svg"
            width={24}
            height={24}
            alt="assets"
          />
          <Typography variant="bt" className="font-medium">
            500 Broadcast
          </Typography>
        </div>
        <div className="flex items-center justify-start gap-3">
          <Image
            src="/images/icons/data_exploration.svg"
            width={24}
            height={24}
            alt="assets"
          />
          <Typography variant="bt" className="font-medium">
            50 Campaign
          </Typography>
        </div>
        <div className="flex items-center justify-start gap-3">
          <Image
            src="/images/icons/contacts.svg"
            width={24}
            height={24}
            alt="assets"
          />
          <Typography variant="bt" className="font-medium">
            500 Contact
          </Typography>
        </div>
        <div className="flex items-center justify-start gap-3">
          <Image
            src="/images/icons/ad_units.svg"
            width={24}
            height={24}
            alt="assets"
          />
          <Typography variant="bt" className="font-medium">
            50 Device
          </Typography>
        </div>
        <div className="flex items-center justify-start gap-3">
          <Image
            src="/images/icons/article.svg"
            width={24}
            height={24}
            alt="assets"
          />
          <Typography variant="bt" className="font-medium">
            Excel / CSV Contact Import
          </Typography>
        </div>
        <div className="flex items-center justify-start gap-3">
          <Image
            src="/images/icons/sync_saved_locally.svg"
            width={24}
            height={24}
            alt="assets"
          />
          <Typography variant="bt" className="font-medium">
            Google Contact Sync
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default function Pricing({ ...props }) {
  return (
    <section
      {...props}
      className="flex min-h-screen min-w-full flex-col items-center justify-center gap-6 bg-white px-8 py-20 lg:px-20"
    >
      <Typography
        as="h4"
        variant="h4"
        className="text-center font-black max-md:text-2xl lg:mx-auto lg:w-[80%] xl:w-[60%]"
      >
        Our Pricing
      </Typography>

      <div className="flex items-center justify-center gap-3 rounded-full px-3 py-2 shadow-[0px_17px_42px_0px_rgba(0,0,0,0.08)]">
        <div>
          <Typography className="px-4 py-2 font-medium">Monthly</Typography>
        </div>
        <div>
          <Typography className="rounded-full bg-blueCustom px-6 py-2 font-medium text-white">
            Yearly
          </Typography>
        </div>
      </div>

      <div className="rounded-md bg-gray-200 px-5 py-3">
        <Typography className="font-medium text-blueCustom">
          Hemat hingga 25% dengan paket tahunan
        </Typography>
      </div>

      <div className="flex flex-col flex-wrap items-center justify-center gap-6 lg:flex-row xl:flex-nowrap 2xl:pl-40">
        {contents.map((x) => {
          return <Card {...x} key={x.name} />;
        })}
      </div>
    </section>
  );
}
