import Daniel from "@/components/Daniel";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Daka from "@/components/Daka";
import Hero from "@/components/Hero";
import Sessions from "@/components/Sessions";
import Testimonials from "@/components/Testimonials";
import Quote from "@/components/Quote";
import QuoteImage from "@/components/QuoteImage"
import ogImage from './opengraph-image.png'

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Daniel Daka",
  description: "Daniel Daka empowers spiritual individuals through Kundalini activation. Unlock your highest potential with expert guidance and transformative experiences.",
  applicationName: 'Daniel Daka',
  authors: [{ name: 'Daniel', url: 'https://github.com/danieltolmon' }],
  generator: 'Next.js',
  keywords: ['Kundalini Activation Barcelona', 'kundalinia activation online', 'Kundalini awakening Barcelona', 'kundalinia awakening online', 'kundalini', 'kundalini activation', 'tantra', 'sexualidad sagrada', 'amor', 'conexion', 'masaje tantrico'],
  openGraph: {
    images: [{
      url: ogImage.src,
      width: ogImage.width,
      height: ogImage.height
    }]
  },
  metadataBase: new URL(`https://www.danieldaka.com`),
  alternates: {
    canonical: './',
  }
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Quote />
      <Daka />
      <Sessions />
      {/* <Testimonials /> */}
      <Daniel />
      {/* <QuoteImage /> */}
      <Contact />
    </>
  );
}
