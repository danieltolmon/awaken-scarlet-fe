"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Poppins } from "next/font/google";
import localFont from 'next/font/local'
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";

const atteron = localFont({
  src: '../../public/fonts/Atteron.ttf',
  variable: '--font-atteron',
  display: 'swap'
})
const brittany = localFont({
  src: '../../public/fonts/BrittanySignature.ttf',
  variable: '--font-brittany',
  display: 'swap',
})
const luto = localFont({
  src: '../../public/fonts/Luto.ttf',
  variable: '--font-luto',
  display: 'swap',
})
const quicksand = Poppins({ subsets: ["latin"], weight: '300', variable: '--font-quicksand', display: 'swap', });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html suppressHydrationWarning lang="en" className={`${atteron.variable} ${brittany.variable} ${luto.variable} ${quicksand.variable}`}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      {/* <body className={`bg-light dark:bg-black ${inter.className}`}> */}
      <body className={`bg-light dark:bg-black  }`}>
        <Providers>
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}

import { Providers } from "./providers";
