import Typography from "@/components/ui/Typography";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Contact({ ...props }) {
  return (
    <section
      {...props}
      className="relative flex min-h-[70vh] flex-col justify-between bg-blueCustom py-16"
    >
      <div className="relative z-20 flex flex-col items-start justify-center gap-6 px-8 lg:flex-row lg:px-20 xl:pl-40 2xl:pl-52">
        <div className="space-y-12">
          <Image src="/Logo-white.png" width={350} height={67} alt="logo" />
          <Typography className="text-white md:w-[80%]">
            Fowardin is your ultimate communication management solution. We
            empower businesses of all sizes with efficient message forwarding,
            streamlined contact management, and powerful campaign scheduling.
            Our mission is to simplify your communication processes, helping you
            engage with your audience effectively and effortlessly. Join us in
            transforming your communication game today!
          </Typography>
        </div>

        <div className="space-y-5">
          <Typography
            variant="h5"
            weight="bold"
            className="text-2xl text-white"
          >
            Contact Us
          </Typography>
          <Typography className="text-white">
            Join our mailing list to receive updates, exclusive content, and
            early access to upcoming events. By signing up, you become an
            integral part of our community, spreading the message of compassion
            and making a difference.
            <br />
            <br />
            Email: info@fowarin
            <br />
            Phone: +1 (123) 456-7890
          </Typography>
        </div>

        <div className="w-full space-y-5">
          <Typography
            variant="h5"
            weight="bold"
            className="text-2xl text-white"
          >
            Let&apos;s Talk
          </Typography>
          <ul className="text-white">
            <Link href="/">
              <li>Facebook</li>
            </Link>
            <Link href="/">
              <li>Instagram</li>
            </Link>
            <Link href="/">
              <li>Twitter</li>
            </Link>
          </ul>
        </div>
      </div>

      <div className="relative z-20 flex items-center justify-center space-x-4 max-md:mb-10 max-md:mt-32 md:mt-52">
        <Typography className="text-white">powered by</Typography>
        <Image
          src="/FORWARDIN.png"
          width={273}
          height={67}
          alt="logo"
          className="max-md:w-[30%] lg:w-[12%]"
        />
      </div>

      <div>
        <Image
          src="/images/gradient-bottom.png"
          width={2880}
          height={2202}
          alt="assets"
          className="absolute bottom-0 hidden w-full lg:block"
        />
        <Image
          src="/images/gradient-bottom-mobile.png"
          width={786}
          height={1116}
          alt="assets"
          className="absolute -top-72 w-full lg:hidden"
        />
      </div>
    </section>
  );
}
