import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";
import "react-lazy-load-image-component/src/effects/blur.css";


const inter = Inter({
  weight: "400",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <LazyLoadComponent>
        </LazyLoadComponent> */}
          <NextUIProvider>{children}</NextUIProvider>
      </body>
    </html>
  );
}
