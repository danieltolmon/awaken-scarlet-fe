import React, { FunctionComponent } from 'react'
import sessions from './sessionsData'
import Link from 'next/link';

type Props = {
  isPage?: boolean
}


const Sessions: FunctionComponent<Props> = ({ isPage }) => {

  return (
    <>
      <section id="sessions" className={`py-16 md:py-20 lg:py-28 ${isPage ? 'bg-light' : 'bg-light2'}`}>
        <div className='container'>

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
          </div>
          <div className="mb-14 text-center ">
            <h2 className="text-4xl text-left font-bold text-gray-900 leading-[3.25rem] mb-6 max-w-max ">
              Sessions
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-lg mx-auto md:max-w-2xl lg:max-w-full">

            {sessions.map(session => <div key={session.id} className="relative w-full h-auto md:col-span-2">
              <div className="bg-primary/80 shadow-two border-black border-solid rounded-2xl flex  justify-between flex-row flex-wrap cursor-pointer">
                <div className="p-5 xl:p-8 w-full md:w-1/2 flex flex-col justify-between">
                  <h3 className="text-lg font-bold xl:text-xl text-white py-5 w-full xl:w-64">
                    {session.title}
                  </h3>
                  <p className="text-xs font-normal text-gray-300 w-full mb-4 xl:w-64">
                    {session.description}
                  </p>
                  <p className="text-md font-normal text-gray-300 w-full mb-4 xl:w-64">
                    {session.price}
                  </p>
                  <div className='flex gap-4 mb-4'>
                    <Link href='/contact' className=" py-2 px-5 border border-solid border-gray-300 rounded-md gap-2 text-xs text-white font-semibold flex items-center justify-between transition-all duration-500 hover:bg-white/5">
                      Contact
                    </Link>
                    {session.booking &&
                      <Link href={session.bookingLink} target='_blank' className="bg-primary py-2 px-5 border border-solid border-gray-300 rounded-md gap-2 text-xs text-white font-semibold flex items-center justify-between transition-all duration-500 hover:bg-white/5">
                        Book
                      </Link>}
                  </div>

                </div>
                <div className="relative hidden h-auto md:w-1/2 md:block rounded-tr-md">
                  <img src={session.imageURL} alt="Header tailwind Section" className="h-full ml-auto object-cover rounded-r-2xl" />
                  {/* <a href="#" className=" absolute w-full h-full top-0 left-0 bg-primary opacity-0 z-10 transition-opacity duration-300 hover:opacity-40 rounded-r-2xl"></a> */}
                </div>
              </div>
            </div>

            )
            }



          </div>
        </div>
      </section>
    </>
  );
};

export default Sessions;
