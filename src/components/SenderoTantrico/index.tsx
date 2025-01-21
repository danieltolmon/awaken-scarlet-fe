"use client";
import Image from "next/image";
import Link from "next/link";
import senderoTantricoData from './senderotantricoData'
import { Accordion } from "flowbite-react";


const Contact = () => {


  return (
    <section id="contact" className="overflow-hidden py-6 md:py-8 lg:py-10">
      <div className="container">
        <div className="-mx-4 flex flex-col-reverse lg:flex-row">

          <div className="w-full px-4 mb-16">
            <div
              className="lg:mr-4 mr-0"
            >
              <h2 className="font-luto mb-4 mt-4 text-center text-3xl !leading-tight text-light dark:text-white sm:text-3xl md:text-[45px] lg:text-[60px]">
                El Sendero del <br />Hombre Tántrico
              </h2>
              <p className="font-quicksand text-base !leading-relaxed text-light md:text-2xl text-center mt-8">Transformate en un hombre multiorgásmico, eleva tu energía vital y abre tu corazón al amor incondicional.</p>
            </div>


            <div className="font-quicksand flex flex-col gap-12 items-start mt-20  ml-0">



              <div className="w-full px-4 mb-16 flex justify-center aspect-w-16 aspect-h-9">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/CMOjvRweB-s?fs=0&modestbranding=1&playsinline=1&rel=0"
                  title="EL sendero del hombre tantrico"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              </div>



              {/* LOGROS */}

              <p className="font-luto font-bold text-xl leading-relaxed text-primary">¿Qué lograrás en esta transformación?</p>
              <div className="flex gap-8">
                <div className="hidden md:block">

                  <Image
                    className="flex rounded-md "
                    src="/images/sendero/chakras.jpg"
                    alt="chakras"
                    width={300}
                    height={400}
                  />
                </div>

                <div className="flex-1">

                  {
                    senderoTantricoData.logros.map((logro, i) => <li key={i} className="font-quicksand mb-4 list-none">
                      <span className="underline underline-offset-2">{logro.title}</span>: {logro.description}
                    </li>
                    )
                  }
                </div>

              </div>

              {/* PROGRAMA */}
              <div>
                <p className="font-luto font-bold text-xl leading-relaxed text-primary  text-justify mb-4">Referencia del programa </p>
                <p className="font-quicksand  mb-4 mt-8">{senderoTantricoData.programa.description}</p>

                <Accordion collapseAll alwaysOpen className="divide-primary border-primary" >
                  {
                    senderoTantricoData.programa.semanas.map((semana, i) => <Accordion.Panel key={i}>
                      <Accordion.Title theme={{
                        "arrow": {
                          "base": "h-6 w-6 shrink-0",
                          "open": {
                            "off": "",
                            "on": "rotate-180"
                          }
                        },
                        "base": "flex w-full items-center justify-between p-4 text-left font-medium text-primary border-primary first:rounded-t last:rounded-b",
                        "flush": {
                          "off": "text-white hover:bg-light2 focus:ring-2 focus:ring-primary",
                          "on": "bg-transparent"
                        },
                        "heading": "border-primary",
                        "open": {
                          "off": "text-primary",
                          "on": "bg-light2 text-primary"
                        }

                      }
                      }><span className="underline underline-offset-2 font-luto text-sm">SEMANA {i + 1}</span>: {semana.titulo}</Accordion.Title>
                      <Accordion.Content>
                        <div className="mb-3 text-primary dark:text-primary">
                          {semana.puntos.map((punto, i) => <li key={i}>{punto}</li>)}
                        </div>

                      </Accordion.Content>
                    </Accordion.Panel>)
                  }



                </Accordion>

              </div>

              {/* PARA QUIEN ES */}
              <div>
                <p className="font-luto font-boldtext-xl leading-relaxed text-primary text-xl text-justify ">Este programa es para...</p>
                <div className="flex gap-8 mt-8">

                  <Image
                    className="sm:flex rounded-md rounded-tr-[80px] hidden"
                    src="/images/sendero/daniel.jpg"
                    alt="chakras"
                    width={300}
                    height={400}
                  />

                  <div className="flex flex-col justify-between">
                    <div className="md:mt-8">

                      {
                        senderoTantricoData.para.map((p, i) => <li key={i} className="font-quicksand list-none mb-4 ">
                          {p}
                        </li>
                        )
                      }
                    </div>
                    <div className="mb-8">
                      <p className="font-luto mb-4 font-bold">Conóceme !</p>
                      <Link
                        href='https://tidycal.com/danieldaka/free-call'
                        target="_blank"
                        className="text-sm md:text-xl hover:text-primary-500 hover:text-primary font-semibold text-light hover:bg-light bg-primary py-2 px-4 border border-primary rounded">
                        Reserva una llamada gratuita
                      </Link>
                    </div>
                  </div>


                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section >
  );
};

export default Contact;
