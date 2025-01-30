import React from "react";
import Image from "next/image";
import Typography from "@/components/ui/Typography";
import {
  ChartNoAxesColumnDecreasing,
  ChevronDown,
  ContactRound,
  Flower,
  Headset,
  LayoutDashboard,
  ListRestart,
  LogOut,
  MailOpen,
  MailPlus,
  Mails,
  Megaphone,
  MessageSquare,
  RadioTower,
  Settings,
  Smartphone,
  Users,
} from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { signOut } from "next-auth/react";

export default function DashboardAdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex min-h-screen min-w-full">
      <div className="scrollbar-custom h-screen max-w-[300px] overflow-y-scroll bg-white px-8 py-12">
        <Image
          src="/Logo-biru.png"
          width={302}
          height={58}
          alt="assets"
          className="mx-auto w-[80%]"
        />

        <div className="mt-8 space-y-2">
          <div className="flex cursor-pointer items-center justify-start gap-3 rounded-lg bg-blueCustom px-5 py-3 text-white hover:bg-blue-700">
            <LayoutDashboard className="text-white" />
            <Typography variant="bt" className="font-medium text-white">
              Dashboard{" "}
            </Typography>
          </div>

          <div className="flex cursor-pointer items-center justify-start gap-3 rounded-lg px-5 py-3 text-black hover:bg-blueLightCustom">
            <Smartphone />
            <Typography variant="bt" className="font-medium">
              Device
            </Typography>
          </div>

          <Collapsible>
            <CollapsibleTrigger className="group flex w-full cursor-pointer items-center justify-between rounded-lg px-5 py-3 text-black hover:bg-blueLightCustom data-[state=open]:bg-blueLightCustom">
              <div className="flex justify-center gap-3">
                <ContactRound />
                <Typography variant="bt" className="font-medium">
                  Contacts
                </Typography>
              </div>
              <ChevronDown />
            </CollapsibleTrigger>
            <CollapsibleContent className="space-y-2">
              <div className="flex cursor-pointer items-center justify-start gap-3 rounded-lg px-8 py-3 text-black hover:bg-blueLightCustom">
                <ContactRound />
                <Typography variant="bt" className="font-medium">
                  Contacts
                </Typography>
              </div>
              <div className="flex cursor-pointer items-center justify-start gap-3 rounded-lg px-8 py-3 text-black hover:bg-blueLightCustom">
                <Users />
                <Typography variant="bt" className="font-medium">
                  Groups
                </Typography>
              </div>
            </CollapsibleContent>
          </Collapsible>

          <Collapsible>
            <CollapsibleTrigger className="group flex w-full cursor-pointer items-center justify-between rounded-lg px-5 py-3 text-black hover:bg-blueLightCustom data-[state=open]:bg-blueLightCustom">
              <div className="flex justify-center gap-3">
                <MessageSquare />
                <Typography variant="bt" className="font-medium">
                  Message List
                </Typography>
              </div>
              <ChevronDown />
            </CollapsibleTrigger>
            <CollapsibleContent className="space-y-2">
              <div className="flex cursor-pointer items-center justify-start gap-3 rounded-lg px-8 py-3 text-black hover:bg-blueLightCustom">
                <Mails />
                <Typography variant="bt" className="font-medium">
                  Messanger
                </Typography>
              </div>
              <div className="flex cursor-pointer items-center justify-start gap-3 rounded-lg px-8 py-3 text-black hover:bg-blueLightCustom">
                <MailOpen />
                <Typography variant="bt" className="font-medium">
                  Incoming Chat
                </Typography>
              </div>
              <div className="flex cursor-pointer items-center justify-start gap-3 rounded-lg px-8 py-3 text-black hover:bg-blueLightCustom">
                <MailPlus />
                <Typography variant="bt" className="font-medium">
                  Outgoing Chat
                </Typography>
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>

        <div className="mt-4">
          <Typography className="font-semibold">Tools</Typography>

          <div className="flex cursor-pointer items-center justify-start gap-3 rounded-lg px-5 py-3 text-black hover:bg-blueLightCustom">
            <RadioTower />
            <Typography variant="bt" className="font-medium">
              Broadcast
            </Typography>
          </div>
          <div className="flex cursor-pointer items-center justify-start gap-3 rounded-lg px-5 py-3 text-black hover:bg-blueLightCustom">
            <Megaphone />
            <Typography variant="bt" className="font-medium">
              Campaign
            </Typography>
          </div>
          <div className="flex cursor-pointer items-center justify-start gap-3 rounded-lg px-5 py-3 text-black hover:bg-blueLightCustom">
            <ListRestart />
            <Typography variant="bt" className="font-medium">
              Auto Reply
            </Typography>
          </div>
          <div className="flex cursor-pointer items-center justify-start gap-3 rounded-lg px-5 py-3 text-black hover:bg-blueLightCustom">
            <Headset />
            <Typography variant="bt" className="font-medium">
              Customer Service
            </Typography>
          </div>
          <div className="flex cursor-pointer items-center justify-start gap-3 rounded-lg px-5 py-3 text-black hover:bg-blueLightCustom">
            <ChartNoAxesColumnDecreasing />
            <Typography variant="bt" className="font-medium">
              Analytics
            </Typography>
          </div>
          <div className="flex cursor-pointer items-center justify-start gap-3 rounded-lg px-5 py-3 text-black hover:bg-blueLightCustom">
            <Flower />
            <Typography variant="bt" className="font-medium">
              Forwardin API
            </Typography>
          </div>
        </div>

        <div className="mt-4">
          <Typography className="font-semibold">Others</Typography>

          <div className="flex cursor-pointer items-center justify-start gap-3 rounded-lg px-5 py-3 text-black hover:bg-blueLightCustom">
            <Settings />
            <Typography variant="bt" className="font-medium">
              Settings
            </Typography>
          </div>
          <div
            className="flex cursor-pointer items-center justify-start gap-3 rounded-lg px-5 py-3 text-black hover:bg-blueLightCustom"
            onClick={() => {
              signOut({ redirect: true, callbackUrl: "/auth/login" });
            }}
          >
            <LogOut />
            <Typography variant="bt" className="font-medium">
              Sign Out
            </Typography>
          </div>
        </div>
      </div>

      <div className="m-5 w-full rounded-lg bg-blueLightCustom">{children}</div>
    </section>
  );
}
