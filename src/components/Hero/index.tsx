import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative  h-screen flex items-center z-10 overflow-hidden bg-light pb-16 pt-[150px] dark:bg-gray-dark md:pb-[120px] md:pt-[133px] xl:pb-[160px] xl:pt-[200px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >


        <div className="container items-center">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4">
              <div className=" max-w-[800px] text-left hidden">
                <h1 className="drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] font-luto mb-12 text-3xl font-bold leading-tight text-light dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  Kundalini Activation
                </h1>
                {/* <p className="font-quicksand mb-12 text-base !leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg md:text-xl">
                  Awaken Your Inner Life Force Energy and Transform Your Self
                </p> */}
                <div className="flex flex-col items-center justify-start space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                 
                  <Link
                    href="/kundalini"
                    className="font-quicksand inline-block rounded-md bg-black px-8 py-4 text-xs md:text-base font-semibold text-white duration-300 ease-in-out hover:bg-black/90 dark:bg-white/10 dark:text-white dark:hover:bg-white/5"
                  >
                    What is Kundalini Activation ?
                  </Link>
                  <Link
                    href="/sessions"
                    className="font-quicksand rounded-md bg-light px-8 py-4 text-xs md:text-base font-semibold text-black duration-300 ease-in-out hover:bg-light/80"
                  >
                    Book your Session
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>




        <div className="absolute top-1/2 transform -translate-y-1/2 right-0 z-[-1]">

          <video className="h-screen lg:h-[1200px] w-screen object-cover object-right" autoPlay loop muted playsInline controls={false}>
            <source src="/images/hero/1005.mp4" type="video/mp4" />
            video not sopported.
          </video>
        </div>
      </section>
    </>
  );
};

export default Hero;
