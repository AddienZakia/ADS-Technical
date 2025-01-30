"use client";

import React from "react";
import Typography from "@/components/ui/Typography";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Bell, Calendar, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Charts from "./(container)/Charts";
import GrafikCharts from "./(container)/GrafikChart";
import TrendChart from "./(container)/TrendChart";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

type sessionType = {
  expires: string;
  user: {
    id: string;
    email: string;
    username: string;
    password: string;
  };
};

export default function Page() {
  const { data: session, status } = useSession();
  if (status === "unauthenticated") return redirect("/auth/login");

  return (
    <section className="mx-8 my-5 space-y-8">
      {/* Head */}
      <div className="flex w-full justify-end gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white">
          <Bell />
        </div>
        <div className="flex items-center justify-center gap-10 rounded-full bg-white pl-14 pr-1">
          {/* sesuai session */}
          <Typography className="font-medium">
            {(session as sessionType)?.user?.username}
          </Typography>
          <Avatar>
            <AvatarFallback>A</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white">
          <Settings />
        </div>
      </div>

      {/* Greeting */}
      <div className="flex items-center justify-between">
        <Typography weight="bold" variant="h5">
          Selamat siang, {(session as sessionType)?.user?.username}
        </Typography>

        <div className="flex items-center justify-end gap-2">
          <div className="text-end">
            <Typography className="font-medium text-gray-400 md:text-sm">
              Tanggal hari ini
            </Typography>
            <Typography className="font-medium text-gray-500 md:text-sm">
              Selasa, 29 Agustus 2023
            </Typography>
          </div>
          <Calendar />
        </div>
      </div>

      {/* Starter & Last seen */}
      <div className="flex gap-6">
        {/* Starter */}
        <div className="w-[90%] rounded-lg bg-white p-12 pb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <Typography className="w-[20%] font-medium leading-5">
                Paket saat ini
              </Typography>

              <div className="flex items-center justify-center gap-2">
                <Typography variant="h5" weight="bold">
                  <span>Starter </span>
                </Typography>
                <Badge className="rounded-full bg-black text-white">Free</Badge>
              </div>
            </div>
            <div className="text-end">
              <Typography className="font-medium text-gray-400 md:text-sm">
                Aktif sampai dengan
              </Typography>
              <Typography className="font-medium text-black md:text-sm">
                Selasa, 29 Agustus 2023
              </Typography>
            </div>
          </div>

          <div className="mt-6 flex justify-between space-x-10">
            <div className="flex w-[60%] flex-col justify-between">
              <div className="flex items-center space-x-8">
                <Typography className="w-[30%] font-medium">Device</Typography>
                <div className="w-full space-y-1">
                  <Progress value={80} className="w-full bg-[#D14343]" />
                  <Typography className="text-gray-400 md:text-xs">
                    8 dari 10 device tersedia
                  </Typography>
                </div>
              </div>
              <div className="flex items-center space-x-8">
                <Typography className="w-[30%] font-medium">
                  Contacts
                </Typography>
                <div className="w-full space-y-1">
                  <Progress value={20} className="w-full bg-[#4FBEAB]" />
                  <Typography className="text-gray-400 md:text-xs">
                    5 dari 100 kontak yang tersedia
                  </Typography>
                </div>
              </div>
            </div>

            <div className="flex w-[40%] flex-col items-end justify-between space-y-4">
              <Typography className="w-full text-end font-medium text-black md:text-sm">
                Upgrade paket untuk meningkatkan batasan fitur yang ada
              </Typography>

              <Button className="w-full rounded-md border border-blueCustom text-blueCustom shadow-none">
                Upgrade Paket
              </Button>
            </div>
          </div>

          <Typography className="mt-6 cursor-pointer text-center font-medium text-gray-400">
            Tampilkan kapasitas fitur lainnya
          </Typography>
        </div>

        {/* last seen */}
        <div className="w-[50%] rounded-lg bg-white p-6 pb-4">
          <Typography variant="t2" className="font-medium">
            Pesan terakhir
          </Typography>

          <div className="mt-2 space-y-3">
            <div className="flex items-center justify-between rounded-md bg-blueLightCustom px-4 py-2">
              <div className="flex items-center justify-center gap-4">
                <Avatar>
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="-space-y-1">
                  <Typography weight="bold">Anda</Typography>
                  <Typography>Apa kabar</Typography>
                </div>
              </div>

              <Typography className="rounded-lg bg-blueCustom px-3 text-white">
                Terkirim
              </Typography>
            </div>

            <div className="flex items-center justify-between rounded-md bg-blueLightCustom px-4 py-2">
              <div className="flex items-center justify-center gap-4">
                <Avatar>
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="-space-y-1">
                  <Typography weight="bold">Anda</Typography>
                  <Typography>Apa kabar</Typography>
                </div>
              </div>

              <Typography className="rounded-lg bg-blueCustom px-3 text-white">
                Terkirim
              </Typography>
            </div>

            <div className="flex items-center justify-between rounded-md bg-blueLightCustom px-4 py-2">
              <div className="flex items-center justify-center gap-4">
                <Avatar>
                  <AvatarFallback className="bg-teal-500">CN</AvatarFallback>
                </Avatar>
                <div className="-space-y-1">
                  <Typography weight="bold">Anda</Typography>
                  <Typography>Apa kabar</Typography>
                </div>
              </div>

              <Typography className="rounded-lg bg-teal-500 px-3 text-white">
                Diterima
              </Typography>
            </div>
          </div>

          <Typography className="mt-2 cursor-pointer text-center font-medium text-blueCustom">
            Tampilkan lainnya
          </Typography>
        </div>
      </div>

      {/* Analitik */}
      <div className="w-full rounded-lg bg-white p-8 pb-4">
        <Typography weight="bold" variant="h5">
          Analitik
        </Typography>

        {/* Ringkasan & Statistik */}
        <div className="mt-6 flex gap-6">
          {/* Ringkasan */}
          <div className="w-[60%] rounded-xl border-2 border-gray-300 p-6">
            <Typography weight="bold" variant="t1">
              Ringkasan hari ini
            </Typography>

            <div className="mt-4 grid grid-cols-3 gap-4">
              <div className="relative col-span-2">
                <p className="font absolute top-2 px-3 text-[12px] font-medium">
                  Device
                </p>
                <Select defaultValue="RMX3263">
                  <SelectTrigger className="flex justify-between bg-blueLightCustom py-7 pt-9 text-black">
                    <SelectValue
                      placeholder="Pilih layanan anda"
                      className="font-bold"
                    />
                  </SelectTrigger>
                  <SelectContent className="border-none bg-white">
                    <SelectGroup>
                      <SelectItem
                        value="RMX3263"
                        className="bg-white font-bold text-black"
                      >
                        RMX3263
                      </SelectItem>
                      <SelectItem
                        value="RMX3261"
                        className="bg-white font-bold text-black"
                      >
                        RMX3261
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col justify-center rounded-lg bg-blueLightCustom p-3 text-black">
                <Typography className="text-black md:text-sm">
                  Aktif sejak
                </Typography>
                <Typography className="font-semibold">29.8.2023</Typography>
              </div>
              <div className="flex flex-col justify-center -space-y-1 text-black">
                <Typography className="text-black md:text-sm">
                  Pesan Keluar
                </Typography>
                <Typography className="font-semibold">24</Typography>
              </div>
              <div className="flex flex-col justify-center -space-y-1 text-black">
                <Typography className="text-black md:text-sm">
                  Pesan Masuk
                </Typography>
                <Typography className="font-semibold">7</Typography>
              </div>
              <div className="flex flex-col justify-center -space-y-1 text-black">
                <Typography className="text-black md:text-sm">
                  Pesan Gagal
                </Typography>
                <Typography className="font-semibold">0</Typography>
              </div>
            </div>
          </div>

          {/* Statistik */}
          <div className="flex w-full items-start justify-between rounded-xl border-2 border-gray-300 p-6">
            <div className="flex h-full flex-col justify-between">
              <Typography weight="bold" variant="t1">
                Total statistik pesan
              </Typography>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Typography variant="t2" className="text-black md:text-sm">
                    Total Pesan Keluar
                  </Typography>
                  <Typography className="font-semibold" variant="t1">
                    45
                  </Typography>
                </div>
                <div>
                  <Typography variant="t2" className="text-black md:text-sm">
                    Total Pesan Gagal
                  </Typography>
                  <Typography className="font-semibold" variant="t1">
                    8
                  </Typography>
                </div>
                <div>
                  <Typography variant="t2" className="text-black md:text-sm">
                    Total Pesan Masuk
                  </Typography>
                  <Typography className="font-semibold" variant="t1">
                    23
                  </Typography>
                </div>
              </div>
            </div>

            <div>
              <Charts />
            </div>
          </div>
        </div>

        {/* Grafik */}
        <div className="mt-6 w-full space-y-8 rounded-xl border-2 border-gray-300 p-6">
          <div className="flex space-x-4">
            <div className="flex w-[150px] flex-col justify-center rounded-lg bg-blueLightCustom p-3 text-black">
              <Typography className="text-black md:text-sm">
                Hari ini
              </Typography>
              <Typography className="font-semibold">24</Typography>
            </div>
            <div className="flex w-[150px] flex-col justify-center rounded-lg bg-blueLightCustom p-3 text-black">
              <Typography className="text-black md:text-sm">
                Rata-rata harian
              </Typography>
              <Typography className="font-semibold">7</Typography>
            </div>
            <div className="flex w-[150px] flex-col justify-center rounded-lg bg-blueLightCustom p-3 text-black">
              <Typography className="text-black md:text-sm">
                Bulan ini
              </Typography>
              <Typography className="font-semibold">23</Typography>
            </div>
            <div className="flex w-[150px] flex-col justify-center rounded-lg bg-blueLightCustom p-3 text-black">
              <Typography className="text-black md:text-sm">
                Rata-rata waktu
              </Typography>
              <Typography className="font-semibold">00:02:42</Typography>
            </div>
          </div>

          {/* Grafik chart */}
          <div className="space-y-6">
            <Typography className="font-semibold">
              Grafik chart perjam
            </Typography>
            <GrafikCharts />
          </div>

          {/* Trend */}
          <div className="space-y-6">
            <Typography className="font-semibold">
              Trend Interaksi Pesan
            </Typography>
            <TrendChart />
          </div>
        </div>
      </div>
    </section>
  );
}
