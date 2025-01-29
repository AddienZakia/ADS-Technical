import React from "react";
import Navbar from "./Navbar";

export default function Layout({
  withNavbar,
  children,
}: {
  withNavbar?: boolean;
  children: React.ReactNode;
}) {
  return (
    <>
      {withNavbar && <Navbar />}
      {children}
    </>
  );
}
