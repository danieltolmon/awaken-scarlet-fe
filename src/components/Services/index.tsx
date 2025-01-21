import React, { FunctionComponent } from 'react'
import Link from 'next/link';
import Image from 'next/image'

type Props = {
  isPage?: boolean
}


const Sessions: FunctionComponent<Props> = ({ isPage }) => {

  return (
    <>
      <section id="sessions" className={`${isPage ? 'bg-light' : 'bg-light2'}`}>
        <div className=''>

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
          </div>
          {/* <div className="mb-14 text-center ">
            <h2 className="font-luto text-2xl text-left font-bold text-gray-900 leading-[3.25rem] mb-6 max-w-max ">
              Servicios
            </h2>
          </div> */}
          <div className="flex flex-col sm:flex-row justify-center">

            <Link href='/sessions' className="max-w-[600px]">
            <Image
                src="/images/services/energy.png"
                alt="energy Daniel Daka"
             
                height={600}
                width={600}
                className="mx-auto max-w-full drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-0 hover:opacity-[0.6]"
              />
            </Link>

            <Link href='/sendero-tantrico' className="inline-block max-w-[600px]">
            <Image
                src="/images/services/tantra.png"
                alt="energy Daniel Daka"
             
                height={600}
                width={600}
                className="mx-auto max-w-full drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-0 hover:opacity-[0.6]"
              />
            </Link>



          </div>
        </div>
      </section>
    </>
  );
};

export default Sessions;
