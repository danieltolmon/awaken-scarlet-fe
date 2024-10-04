import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative min-h-screen flex items-center z-10 overflow-hidden bg-light pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        <div className="container items-center">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[800px] text-left">
                <h1 className="font-luto mb-2 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  Kundalini Activations
                </h1>
                <p className="font-quicksand mb-12 text-base !leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg md:text-xl">
                  Awaken Your Inner Energy and Transform Your Self
                </p>
                <div className="flex flex-col items-center justify-start space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Link
                    href="/sessions"
                    className="font-quicksand rounded-md bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                  >
                    Book your Session
                  </Link>
                  <Link
                    href="/kundalini"
                    className="font-quicksand inline-block rounded-md bg-black px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-black/90 dark:bg-white/10 dark:text-white dark:hover:bg-white/5"
                  >
                    What is Kundalini Activation ?
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute right-0 bottom-0 z-[-1] opacity-30 md:opacity-100">
          <Image
            src="/images/hero/hero.webp"
            alt="logo"
            width={350}
            height={350}
            className="max-w-full dark:hidden"
          />
        </div>

      </section>
    </>
  );
};

export default Hero;
