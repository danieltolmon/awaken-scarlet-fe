import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | Daniel Daka",
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

const ContactPage = () => {
  return (
    <div className="mt-24">
      <Contact />
    </div>
  );
};

export default ContactPage;