import Daniel from "@/components/Daniel";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Daniel | Scarlet Kundalini Activation",
  description: "Awaken Scarlet empowers spiritual individuals through Kundalini activation. Unlock your highest potential with expert guidance and transformative experiences.",
  // other metadata
};

const DanielPage = () => {
  return (
    <div className="mt-24">
      <Daniel />
    </div>
  );
};

export default DanielPage;
