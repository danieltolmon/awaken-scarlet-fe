import Scarlet from "@/components/Scarlet";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Scarlet Kundalini Activation",
  description: "Awaken Scarlet empowers spiritual individuals through Kundalini activation. Unlock your highest potential with expert guidance and transformative experiences.",
  applicationName: 'Awaken Scarlet',
  authors: [{ name: 'Daniel', url: 'https://github.com/danieltolmon' }],
  generator: 'Next.js',
  keywords: ['kundalini', 'kundalini activation', 'Barcelona', 'tantra', 'chakra', 'energy', 'energy healing'],
  openGraph: {
    images: ['	https://www.awakenscarlet.com/images/logo/1.svg']
  },
  metadataBase: new URL(`https://www.awakenscarlet.com`),
  alternates: {
    canonical: './',
  }
};

const ScarletPage = () => {
  return (
    <div className="mt-24">
      <Scarlet />
    </div>
  );
};

export default ScarletPage;
