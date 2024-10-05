import Link from "next/link";

const Scarlet = () => {
  return (
    <>
      <section id="scarlet" className="py-16 md:py-20 lg:py-28 container">

        <div className="w-full justify-start items-center gap-8 flex flex-col lg:flex-row-reverse">

          <div className="w-full flex-col justify-start lg:items-start items-center gap-10 inline-flex">
            <div className="w-full flex-col justify-start lg:items-start items-center gap-4 flex">
              <h2 className="font-luto text-gray-900 text-4xl font-bold font-manrope  text-center">SCARLET</h2>
              <p className="font-quicksand text-gray-500 text-base font-normal leading-relaxed  text-justify">
                <b>Welcome to Scarlet,</b> a transformative journey dedicated to awakening the power of Kundalini energy within you. Our mission is to guide you through a profound exploration of self-discovery, healing, and spiritual awakening.
                <br />  <br />
                The name Scarlet reflects the vibrant energy and transformative potential that lies at the heart of our practice. It ignites passion and vitality, to evoke the fire of transformation within you, helping you rise above limiting beliefs and embrace your true essence.
                <br />  <br />
                Kundalini activation is a journey that encompasses emotional healing, mental clarity, and physical vitality. Our approach integrates ancient wisdom with modern techniques, providing a safe and nurturing environment for exploration and growth.
                <br />  <br />
                Join us as we embrace the power of Scarlet—a symbol of rebirth, passion, and profound awakening. Together, let’s illuminate the path to a more vibrant, conscious, and empowered life.</p>
            </div>
            <Link
              href="/kundalini"
              className="font-quicksand rounded-md bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
            >
              What is Kundalini Activation ?
            </Link>
          </div>

          {/* <video className="lg:mx-0 mx-auto object-cover h-[600px]" autoPlay loop muted playsInline controls>
            <source src="https://res.cloudinary.com/sail-away/video/upload/v1728110395/IMG_6011_2.mp4" type="video/mp4" />
            video not sopported.
          </video> */}

          <video className="lg:mx-0 mx-auto object-cover h-[600px]" autoPlay loop muted playsInline>
            <source src="/images/scarlet/megan.mp4" type="video/mp4" />
            video not sopported.
          </video>


        </div>

      </section>
    </>
  );
};

export default Scarlet;
