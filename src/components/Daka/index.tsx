import Link from "next/link";

const Scarlet = () => {
  return (
    <>
      <section id="scarlet" className="py-6 md:py-8 lg:py-10 container">

        <div className="w-full justify-start items-center gap-8 flex flex-col lg:flex-row-reverse">

          <div className="w-full flex-col justify-start lg:items-start items-center gap-10 inline-flex">
            <div className="w-full flex-col justify-start lg:items-start items-center gap-4 flex">
  
              <h2 className="font-luto text-gray-900 text-4xl font-bold font-manrope  text-center">DAKA</h2>
              <p className="font-quicksand text-gray-500 text-base font-normal leading-relaxed  text-justify">
                En tantra, Daka es un guía espiritual y sanador masculino que trabaja con energías sutiles para facilitar la sanación, el despertar espiritual y la transformación personal. Es el complemento masculino de la Dakini.
                <br /><br />
                Daka es mucho más que un practicante espiritual: es un canal de energía divina, un facilitador que ayuda a otros a reconocer su propia esencia energética y a liberar bloqueos que limitan su bienestar. A través de prácticas tántricas como la sexualidad sagrada, la transmisión energética y el masaje de toque consciente.
                <br /><br />
                És un guía para quienes buscan equilibrio, expansión y sanación. Para los valientes que queiren verdaderamente aprender a AMAR, con el corazón abierto.
                Su presencia consciente y sin juicio crea un espacio seguro donde las personas pueden explorar su energía vital, desbloquear emociones reprimidas y descubrir el potencial transformador de su propio SER.
                <br /><br />
                Además, Daka juega un papel esencial en la integración de la sexualidad sagrada, ayudando a las personas a reconectar con su energía sexual desde una perspectiva consciente y espiritual. 
              </p>
            </div>
            {/* <Link
              href="/kundalini"
              className="font-quicksand rounded-md bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
            >
              What is Kundalini Activation ?
            </Link> */}
          </div>

          {/* <video className="lg:mx-0 mx-auto object-cover h-[600px]" autoPlay loop muted playsInline controls>
            <source src="https://res.cloudinary.com/sail-away/video/upload/v1728110395/IMG_6011_2.mp4" type="video/mp4" />
            video not sopported.
          </video> */}

          <video className="lg:mx-0 mx-auto object-cover h-[600px]" autoPlay loop muted playsInline controls={false}>
            <source src="/images/scarlet/megan2.mp4" type="video/mp4" />
            video not sopported.
          </video>


        </div>

      </section>
    </>
  );
};

export default Scarlet;
