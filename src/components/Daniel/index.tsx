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
                className="mr-4 mb-16 lg:mb-0"
              >
                <h2 className="font-luto mb-4 text-center text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
                  Daniel
                </h2>
                <p className="font-quicksand text-base text-justify !leading-relaxed text-body-color md:text-lg">
                  Living between India and Barcelona, Daniel embodies a spiritual way of life, weaving the wisdom of the East into the modern world. His journey unites ancient traditions with contemporary knowledge, merging mind and body, spirituality and science.
                  <br /> <br />
                  Daniel&apos;s path began in renewable energy engineering and software development, where he spent several years creating solutions for the physical world. However, life chose a different direction for him—one dedicated to elevating human energy and dismantling limiting belief systems. His mission is to help people transform their perception of life and connecting them with their higher selves.
                  <br /> <br />
                  Through the practices of yoga, meditation, and tantra, Daniel has developed a heightened sensitivity to energy, allowing him to guide and empower individuals toward higher states of consciousness. He nurtures a collective shift towards a more aware and connected humanity, envisioning a future where spiritual awakening becomes the foundation for how we live, love, and grow as humanity.
                  <br /> <br />
                  Join Daniel on this journey towards the new era of spiritual awakening, where duality dissolves and we reunite with the divine.
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
