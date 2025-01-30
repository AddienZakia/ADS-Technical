/* eslint-disable */
"use client";

import Broadcast from "./(container)/Broadcast";
import Hero from "./(container)/Hero";
import Campaign from "./(container)/Campaign";
import Reply from "./(container)/Reply";
import Opportunity from "./(container)/Opportunity";
import Pricing from "./(container)/Pricing";
import Contact from "./(container)/Contact";
import FAQ from "./(container)/FAQ";
import Layout from "@/layout/Layout";
import Typography from "@/components/ui/Typography";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type sectionType = {
  id: string;
  ref: React.RefObject<any>;
};

export default function Home() {
  const [position, setPosition] = useState("");
  const [hide, setHide] = useState(false);

  const heroRef = useRef(null);
  const broadcastRef = useRef(null);
  const campaignRef = useRef(null);
  const replyRef = useRef(null);
  const opportunityRef = useRef(null);
  const pricingRef = useRef(null);
  const faqRef = useRef(null);
  const contactRef = useRef(null);

  const sections: sectionType[] = [
    { id: "hero", ref: heroRef },
    { id: "broadcast", ref: broadcastRef },
    { id: "campaign", ref: campaignRef },
    { id: "reply", ref: replyRef },
    { id: "opportunity", ref: opportunityRef },
    { id: "pricing", ref: pricingRef },
    { id: "faq", ref: faqRef },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const pos = window.scrollY || document.documentElement.scrollTop;

      if (pos > 0) setHide(true);
      else setHide(false);

      sections.forEach(({ id, ref }) => {
        const sectionTop = ref.current?.offsetTop || 0;
        const sectionHeight = ref.current?.offsetHeight || 0;

        if (pos >= sectionTop - 100 && pos < sectionTop + sectionHeight - 100) {
          setPosition(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hide, sections]);

  return (
    <>
      <div
        className={cn(
          "fixed left-5 hidden min-h-screen items-center justify-center transition-all duration-200 lg:flex",
          !hide && "opacity-0",
        )}
      >
        <div className="border-l-2 border-l-gray-300 pl-3 lg:block">
          <Link href={"/"}>
            <Typography
              className={cn(
                "mt-1 font-medium",
                position === "hero" ? "text-black" : "text-gray-400",
              )}
            >
              Get Started
            </Typography>
          </Link>
          <Link href={"/"}>
            <Typography
              className={cn(
                "mt-1 font-medium",
                position === "broadcast" ? "text-black" : "text-gray-400",
              )}
            >
              Broadcast
            </Typography>
          </Link>
          <Link href={"/"}>
            <Typography
              className={cn(
                "mt-1 font-medium",
                position === "campaign" ? "text-black" : "text-gray-400",
              )}
            >
              Campaign
            </Typography>
          </Link>
          <Link href={"/"}>
            <Typography
              className={cn(
                "mt-1 font-medium",
                position === "reply" ? "text-black" : "text-gray-400",
              )}
            >
              Auto Reply
            </Typography>
          </Link>
          <Link href={"/"}>
            <Typography
              className={cn(
                "mt-1 font-medium",
                position === "opportunity" ? "text-black" : "text-gray-400",
              )}
            >
              Opportunity
            </Typography>
          </Link>
          <Link href={"/"}>
            <Typography
              className={cn(
                "mt-1 font-medium",
                position === "pricing" ? "text-black" : "text-gray-400",
              )}
            >
              Pricing
            </Typography>
          </Link>
          <Link href={"/"}>
            <Typography
              className={cn(
                "mt-1 font-medium",
                position === "faq" ? "text-black" : "text-gray-400",
              )}
            >
              FAQ
            </Typography>
          </Link>
        </div>
      </div>

      <Layout withNavbar>
        <Hero ref={heroRef} />
        <Broadcast ref={broadcastRef} />
        <Campaign ref={campaignRef} />
        <Reply ref={replyRef} />
        <Opportunity ref={opportunityRef} />
        <Pricing ref={pricingRef} />
        <FAQ ref={faqRef} />
        <Contact ref={contactRef} />
      </Layout>
    </>
  );
}
