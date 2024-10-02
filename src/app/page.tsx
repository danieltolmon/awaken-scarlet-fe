import Daniel from "@/components/Daniel";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Scarlet from "@/components/Scarlet";
import Hero from "@/components/Hero";
import Sessions from "@/components/Sessions";
import Testimonials from "@/components/Testimonials";
import Quote from "@/components/Quote";
import QuoteImage from "@/components/QuoteImage"

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Awaken Scarlet Kundalini Activation",
  description: "Awaken Scarlet empowers individuals on their spiritual journey through Kundalini activation and energy awakening. Unlock your highest potential with expert guidance and transformative experiences.",
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
      {/* <Testimonials /> */}
      <Daniel />
      {/* <QuoteImage /> */}
      <Contact />
    </>
  );
}
