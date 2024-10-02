import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const Daniel = () => {
  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className=" flex flex-wrap items-center justify-between  mx-auto">
            <div className="w-full px-4 lg:w-1/2">

              <div
                className="mr-4"
              >
                <h2 className="mb-4 text-center text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
                  Daniel
                </h2>
                <p className="text-base text-justify !leading-relaxed text-body-color md:text-lg">
                  I have always had a deep sensitivity to the energies that flow through and around us. Over the years, this awareness has expanded into a profound understanding of how energy shapes our experiences and connects us to the greater universe. I now work as a Kundalini activator, helping others tap into their inner energy to awaken deeper levels of consciousness and personal transformation.
                  <br /><br />
                  In this role, I guide people on their spiritual journeys, facilitating the release of old patterns and helping them align with their true selves. My work is about empowering others to harness their energy, embrace change, and unlock their highest potential.
                  <br /><br />
                  I have always had a deep sensitivity to the energies that flow through and around us. Over the years, this awareness has expanded into a profound understanding of how energy shapes our experiences and connects us to the greater universe. I now work as a Kundalini activator, helping others tap into their inner energy to awaken deeper levels of consciousness and personal transformation.
                  <br /><br />
                  In this role, I guide people on their spiritual journeys, facilitating the release of old patterns and helping them align with their true selves. My work is about empowering others to harness their energy, embrace change, and unlock their highest potential.

                </p>
              </div>


            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div className="relative mx-auto aspect-[400/600] lg:mr-0">
                <Image
                  // src="/images/daniel/daniel.png"
                  src="/images/daniel/3.png"
                  alt="about-image"
                  fill
                  className="mx-auto max-w-full drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-0"
                />

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Daniel;
