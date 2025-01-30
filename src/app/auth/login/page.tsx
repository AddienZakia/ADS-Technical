"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Typography from "@/components/ui/Typography";

export default function Page() {
  const router = useRouter();

  const { status } = useSession();
  useEffect(() => {
    if (status === "authenticated") return router.push("/admin");
  }, []);

  const [user, setUser] = React.useState({
    identifier: "",
    password: "",
  });

  const onValueChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { value, id } = e.target;

    setUser((pre) => ({
      ...pre,
      [id]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    signIn("credentials", {
      identifier: user.identifier,
      password: user.password,
      redirect: false,
    }).then((res) => {
      if (res?.ok) router.push("/admin");
      else
        toast.error(
          res?.error === "CredentialsSignin" && "Email or password is invalid",
        );
    });
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
              Welcome Back
            </Typography>
            <Typography className="font-medium">
              We’re so excited to see you again!
            </Typography>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="w-full space-y-4">
              <Input
                id="identifier"
                type="email"
                placeholder="Username / Email"
                className="w-full px-3 py-5 shadow-none"
                onChange={onValueChange}
                required
              />
              <Input
                id="password"
                type="password"
                placeholder="Password"
                className="w-full px-3 py-5 shadow-none"
                onChange={onValueChange}
                required
              />
              <Link href="/">
                <Typography className="mt-2 text-left text-blueCustom">
                  Lupa Password?
                </Typography>
              </Link>
            </div>

            <Button
              type="submit"
              className="mt-4 w-full rounded-md bg-blueCustom py-5 text-white"
            >
              Sign In
            </Button>
          </form>

          <Typography className="font-medium">
            Butuh buat akun?{" "}
            <Link href="/auth/register">
              <span className="text-blueCustom">Daftar di sini</span>
            </Link>
          </Typography>
        </div>
      </div>
    </section>
  );
}
