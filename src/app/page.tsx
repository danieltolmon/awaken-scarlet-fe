import Daniel from "@/components/Daniel";
import Blog from "@/components/Blog";
import Video from "@/components/Video";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Scarlet from "@/components/Scarlet";
import Hero from "@/components/Hero";
import Sessions from "@/components/Sessions";
import Testimonials from "@/components/Testimonials";
import Quote from "@/components/Quote";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Next.js Template for Startup and SaaS",
  description: "This is Home for Startup Nextjs Template",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Quote />
      <Scarlet />
      <Sessions />
      <Daniel />
      <Video />
      <Testimonials />
      {/* <Blog /> */}
      <Contact />
    </>
  );
}
