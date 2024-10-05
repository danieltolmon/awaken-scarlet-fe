// import Kundalini from "@/components/Kundalini";

import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kundalini | Scarlet Kundalini Activation",
  description: "Awaken Scarlet empowers spiritual individuals through Kundalini activation. Unlock your highest potential with expert guidance and transformative experiences.",
  // other metadata
};

const KundaliniPage = () => {
  return (
    <div className="mt-60 h-80">
      <h1 className="font-luto text-black animate-pulse mb-4 text-center text-3xl font-bold !leading-tight dark:text-white sm:text-4xl md:text-[45px]">
        Coming Soon
      </h1>
      <p className="font-quicksand text-black text-lg mb-8 text-center">
        We&apos;re working so hard to explain what is kundalini activation in detail. <strong>Stay tuned!</strong>
        <br />
        For now, if you want to know more, you can:
      </p>

      <div className="flex gap-4 justify-center">

        <Link href='/contact' className="font-quicksand py-2 px-5 border border-solid border-primary rounded-md gap-2 text-md text-black font-semibold flex items-center justify-between transition-all duration-500 hover:bg-white/5">
          Contact me
        </Link>
        <Link href='https://tidycal.com/danielawakenscarlet/free-call' target='_blank' className="font-quicksand bg-primary py-2 px-5 border border-solid border-primary rounded-md gap-2 text-md text-white font-semibold flex items-center justify-between transition-all duration-500 hover:bg-primary/80">
          Book free call
        </Link>
      </div>
    </div>
  );
};

export default KundaliniPage;
