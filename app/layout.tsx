import React from "react";
import type { Metadata } from "next";
import "@styles/globals.css";

export const metadata: Metadata = {
  title: "Lunaria Finance",
  description: "An premium expense tracker website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
