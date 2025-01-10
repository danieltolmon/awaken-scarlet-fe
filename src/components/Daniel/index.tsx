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
                  Viviendo entre India y Barcelona, Daniel encarna una forma de vida espiritual, tejiendo la sabiduría de Oriente en el mundo moderno. Su camino une tradiciones ancestrales con conocimientos contemporáneos, fusionando mente y cuerpo, espiritualidad y ciencia.
                  <br /> <br />
                  El viaje de Daniel comenzó en la ingeniería de energías renovables y el desarrollo de software, donde pasó varios años creando soluciones para el mundo físico. Sin embargo, la vida lo guió en una dirección diferente: una dedicada a elevar la energía humana y desmantelar sistemas de creencias limitantes. Su misión es ayudar a las personas a transformar su percepción de la vida y conectarlas con su ser superior.
                  <br /> <br />
                  A través de las prácticas de yoga, meditación y tantra, Daniel ha desarrollado una sensibilidad elevada hacia la energía, lo que le permite guiar y empoderar a las personas hacia estados superiores de conciencia. Fomenta un cambio colectivo hacia una humanidad más consciente y conectada, imaginando un futuro donde el despertar espiritual sea la base de cómo vivimos, amamos y evolucionamos.
                  <br /> <br />
                  Únete a Daniel en este viaje hacia una nueva era de despertar espiritual, donde la dualidad se disuelve y nos reunimos con lo divino.
                </p>

              </div>


            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div className="relative mx-auto aspect-[400/600] lg:mr-0">
                <Image
                  // src="/images/daniel/daniel.png"
                  src="/images/daniel/3.png"
                  alt="awakenDaniel Daka daniel"
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
