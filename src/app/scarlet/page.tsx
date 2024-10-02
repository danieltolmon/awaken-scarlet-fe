import Scarlet from "@/components/Scarlet";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Scarlet Kundalini Activation",
  description: "Awaken Scarlet empowers spiritual individuals through Kundalini activation. Unlock your highest potential with expert guidance and transformative experiences.",
  // other metadata
};

const ScarletPage = () => {
  return (
    <div className="mt-24">
      <Scarlet />
    </div>
  );
};

export default ScarletPage;
