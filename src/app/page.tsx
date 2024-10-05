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
  title: "Scarlet Kundalini Activation",
  description: "Awaken Scarlet empowers spiritual individuals through Kundalini activation. Unlock your highest potential with expert guidance and transformative experiences.",
  applicationName: 'Awaken Scarlet',
  authors: [{name:'Daniel', url:'https://github.com/danieltolmon'}],
  generator:'Next.js',
  keywords: ['kundalini', 'kundalini activation', 'Barcelona', 'tantra', 'chakra', 'energy', 'energy healing']
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
