import React from "react";
import type { Metadata } from "next";
import "./globals.css";
import AuthSession from "@/app/AuthSession";
export const metadata: Metadata = {
  title: "YoriJori!!",
  description: "Get Recipes",
};

export default function RootLayout({children}:{ children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
      <AuthSession>
          {children}
      </AuthSession>
      </body>
    </html>
  );
}
