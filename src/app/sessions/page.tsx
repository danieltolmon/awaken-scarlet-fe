import Sessions from "@/components/Sessions";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sessions | Scarlet Kundalini Activation",
  description: "Awaken Scarlet empowers spiritual individuals through Kundalini activation. Unlock your highest potential with expert guidance and transformative experiences.",
  applicationName: 'Awaken Scarlet',
  authors: [{ name: 'Daniel', url: 'https://github.com/danieltolmon' }],
  generator: 'Next.js',
  keywords: ['kundalini', 'kundalini activation', 'Barcelona', 'tantra', 'chakra', 'energy', 'energy healing'],
  openGraph: {
    images: ['https://www.awakenscarlet.com/images/logo-color.png']
  },
  metadataBase: new URL(`https://www.awakenscarlet.com`),
  alternates: {
    canonical: './',
  }
};

const SessionsPage = () => {
  return (
    <div className="mt-24">
      <Sessions isPage />
    </div>
  );
};

export default SessionsPage;
