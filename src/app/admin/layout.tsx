"use client";

import DashboardAdminLayout from "@/layout/DashboardAdmin";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return <DashboardAdminLayout>{children}</DashboardAdminLayout>;
}
