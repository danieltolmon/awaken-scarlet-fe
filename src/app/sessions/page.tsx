import Sessions from "@/components/Sessions";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sessions | Scarlet Kundalini Activation",
  description: "Awaken Scarlet empowers spiritual individuals through Kundalini activation. Unlock your highest potential with expert guidance and transformative experiences.",
  // other metadata
};

const SessionsPage = () => {
  return (
    <div className="mt-24">
      <Sessions isPage />
    </div>
  );
};

export default SessionsPage;
