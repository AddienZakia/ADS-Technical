import { Input } from "@/components/ui/input";
import Typography from "@/components/ui/Typography";
import { Search } from "lucide-react";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ({ ...props }) {
  return (
    <section
      {...props}
      className="flex h-screen items-center justify-center bg-blueCustom"
    >
      <div className="relative z-20 space-y-8 px-8 md:space-y-16 md:px-12">
        <Typography
          variant="h5"
          weight="bold"
          className="text-center text-2xl text-white"
        >
          Frequently Asked Questions
        </Typography>

        <div className="space-y-6 lg:w-[550px]">
          <div className="flex items-center justify-center gap-4">
            <Input type="text" className="bg-white" />
            <Search className="cursor-pointer text-white" />
          </div>

          <div>
            <Accordion type="single" collapsible className="space-y-3">
              <AccordionItem value="item-1">
                <AccordionTrigger className="rounded-lg bg-white px-4 text-lg font-bold">
                  Apa itu Forwardin?
                </AccordionTrigger>
                <AccordionContent className="rounded-b-lg bg-white px-4 font-medium">
                  Forwardin adalah sebuah platform alat pengelolaan pesan
                  WhatsApp yang dirancang untuk membantu Anda mengirim pesan ke
                  banyak nomor dan grup WhatsApp secara bersamaan. Forwardin
                  juga menyediakan berbagai fitur canggih seperti auto-reply,
                  fitur broadcast, manajemen kampanye, serta sinkronisasi kontak
                  WhatsApp dan kontak Google.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="rounded-lg bg-white px-4 text-lg font-bold">
                  Apakah Forwardin cocok untuk saya?
                </AccordionTrigger>
                <AccordionContent className="rounded-b-lg bg-white px-4 font-medium">
                  Forwardin adalah sebuah platform alat pengelolaan pesan
                  WhatsApp yang dirancang untuk membantu Anda mengirim pesan ke
                  banyak nomor dan grup WhatsApp secara bersamaan. Forwardin
                  juga menyediakan berbagai fitur canggih seperti auto-reply,
                  fitur broadcast, manajemen kampanye, serta sinkronisasi kontak
                  WhatsApp dan kontak Google.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="rounded-lg bg-white px-4 text-lg font-bold">
                  Apakah Forwardin perlu di-install ke komputer?
                </AccordionTrigger>
                <AccordionContent className="rounded-b-lg bg-white px-4 font-medium">
                  Forwardin adalah sebuah platform alat pengelolaan pesan
                  WhatsApp yang dirancang untuk membantu Anda mengirim pesan ke
                  banyak nomor dan grup WhatsApp secara bersamaan. Forwardin
                  juga menyediakan berbagai fitur canggih seperti auto-reply,
                  fitur broadcast, manajemen kampanye, serta sinkronisasi kontak
                  WhatsApp dan kontak Google.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
