import React from "react";
import type { Metadata } from "next";
import "./globals.css";
import AuthSession from "@/app/AuthSession";
import {MSWComponent} from "@/app/_component/MSWComponent";
export const metadata: Metadata = {
  title: "YoriJori!!",
  description: "Get Recipes",
};

export default function RootLayout({children}:{ children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
      <MSWComponent/>
      <AuthSession>
          {children}
      </AuthSession>
      </body>
    </html>
  );
}
