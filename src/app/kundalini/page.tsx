// import Kundalini from "@/components/Kundalini";

import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kundalini | Daniel Daka",
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
          contacta me
        </Link>
        <Link href='https://tidycal.com/danieldaka/free-call' target='_blank' className="font-quicksand bg-primary py-2 px-5 border border-solid border-primary rounded-md gap-2 text-md text-white font-semibold flex items-center justify-between transition-all duration-500 hover:bg-primary/80">
          reserva llamada gratuita
        </Link>
      </div>
    </div>
  );
};

export default KundaliniPage;
