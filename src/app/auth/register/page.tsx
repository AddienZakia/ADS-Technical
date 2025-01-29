"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Typography from "@/components/ui/Typography";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function page() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    identifier: "",
    password: "",
    username: "",
  });

  const onValueChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { value, id } = e.target;

    setUser((pre) => ({
      ...pre,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: user.username,
        email: user.identifier,
        password: user.password,
      }),
    });

    if (res.ok) {
      toast.success("Register Success");
      setTimeout(() => router.push("/auth/login"), 1500);
    } else {
      toast.error("Register failed: " + res.statusText);
    }
  };

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center bg-white py-32 lg:bg-grayCustom">
      <Image
        src="/Logo.png"
        width={354}
        height={69}
        alt="assets"
        className="absolute top-10 w-[35%] max-[350px]:w-[40%] lg:left-0 lg:top-0 lg:m-8 lg:mx-24 lg:w-[15%] xl:w-[10%]"
      />

      <div className="flex w-full items-center justify-center lg:space-x-24">
        <div className="hidden lg:block lg:w-[40%] xl:w-[35%]">
          <Image
            src="/images/HeroContainer.png"
            width={1316}
            height={903}
            alt="assets"
            className="w-full"
          />
          <Typography variant="h5" weight="bold">
            Elevate Your Messaging Efficiency with Our Innovative Admin Tools
          </Typography>
          <Typography className="font-medium">
            Selamat datang di Fowardin! Pengelolaan pesan Anda menjadi lebih
            mudah dengan Admin Tools kami. Tingkatkan komunikasi Anda dan
            pelanggan dengan fitur pesan otomatis. Menyimpan kontak menjadi
            lebih praktis dengan fitur sinkronasi Google Concact. Dapatkan
            kendali penuh pesan dengan manajemen konten yang praktis.
          </Typography>
        </div>

        <div className="w-full space-y-8 rounded-md bg-white p-8 text-center md:w-[60%] lg:w-[350px] lg:p-8 lg:shadow-[0px_17px_42px_0px_rgba(0,0,0,0.08)] xl:w-[450px]">
          <div>
            <Typography weight="bold" variant="h6" className="">
              Welcome to Forwardin
            </Typography>
            <Typography className="mx-auto w-[80%] font-medium">
              Revolutionize your communication journey with Fowardin today
            </Typography>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="w-full space-y-4">
              <Input
                id="identifier"
                type="email"
                placeholder="Email"
                className="w-full px-3 py-5 shadow-none"
                onChange={onValueChange}
              />
              <Input
                id="username"
                type="text"
                placeholder="Username"
                className="w-full px-3 py-5 shadow-none"
                onChange={onValueChange}
              />

              <div className="flex w-full items-center justify-center gap-3">
                <Select defaultValue="62">
                  <SelectTrigger className="w-fit border text-black">
                    <SelectValue placeholder="Pilih layanan anda" />
                  </SelectTrigger>
                  <SelectContent className="border-none bg-white text-black">
                    <SelectGroup>
                      {/* <SelectLabel>North America</SelectLabel> */}
                      <SelectItem value="62" className="bg-white text-black">
                        (ID) +62
                      </SelectItem>
                      <SelectItem value="61" className="bg-white text-black">
                        (ID) +62
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <Input
                  type="text"
                  placeholder="Phone number"
                  className="w-full px-3 py-5 shadow-none"
                />
              </div>

              <Input
                id="password"
                type="password"
                placeholder="Password"
                className="w-full px-3 py-5 shadow-none"
                onChange={onValueChange}
              />
              <Link href="/">
                <Typography className="mt-2 text-left text-blueCustom">
                  Lupa Password?
                </Typography>
              </Link>
            </div>

            <Button className="w-full rounded-md bg-blueCustom py-5 text-white">
              Sign Up
            </Button>
          </form>

          <Typography className="font-medium">
            Sudah punya akun?{" "}
            <Link href="/auth/login">
              <span className="text-blueCustom">Masuk di sini</span>
            </Link>
          </Typography>
        </div>
      </div>
    </section>
  );
}
