
import Breadcrumb from "@/components/Common/Breadcrumb";
import SenderoTantrico from "@/components/SenderoTantrico"

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sendero Tantrico | Daniel Daka",
  description: "ADaniel Daka te ayuda a empoderarte a traves del sexo, el amor y la consciencia. Desbloquea tu mayor potencial a traves de tu energia",
  applicationName: 'Awaken Scarlet',
  authors: [{ name: 'Daniel', url: 'https://github.com/danieltolmon' }],
  generator: 'Next.js',
  keywords: ['Kundalini Activation Barcelona', 'kundalinia activation online', 'Kundalini awakening Barcelona', 'kundalinia awakening online', 'kundalini', 'kundalini activation'],
  openGraph: {
    images: ['https://www.danieldaka.com/images/logo-color.png']
  },
  metadataBase: new URL(`https://www.danieldaka.com`),
  alternates: {
    canonical: './',
  }
};

const SenderoTantricoPage = () => {
  return (
    <>
      <div className="absolute  left-1/2 transform -translate-x-1/2 w-screen top-[-100px] h-[600px] sm:h-[800px] max-w-[1800px] mx-auto -z-10 font-bold text-gray-700 rounded-b-full bg-primary flex items-center justify-center font-mono"></div>
      <div className="mt-24">
        <SenderoTantrico />
      </div>
    </>
  );
};

export default SenderoTantricoPage;

