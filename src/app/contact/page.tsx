import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | Scarlet Kundalini Activation",
  description: "Awaken Scarlet empowers spiritual individuals through Kundalini activation. Unlock your highest potential with expert guidance and transformative experiences.",
  applicationName: 'Awaken Scarlet',
  authors: [{name:'Daniel', url:'https://github.com/danieltolmon'}],
  generator:'Next.js',
  keywords: ['kundalini', 'kundalini activation', 'Barcelona', 'tantra', 'chakra', 'energy', 'energy healing']
};

const ContactPage = () => {
  return (
    <div className="mt-24">
      <Contact />
    </div>
  );
};

export default ContactPage;
