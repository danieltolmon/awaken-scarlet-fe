"use client"
import React, { FunctionComponent, useEffect } from 'react'
import Script from 'next/script'
import Link from 'next/link';
import { usePathname } from 'next/navigation';


const Bookings: FunctionComponent = () => {

  useEffect(() => {
    // Manually reinitialize TidyCal if needed, when component mounts
    if (window.TidyCal) {
      window.TidyCal.init();
    }
  }, []);


  return (
    <>
      <section className="py-16 md:py-20 lg:py-28 bg-light mt-16">
        <div className='container border border-solid border-black' id="tidycal-container">


          <div className="tidycal-embed"
            data-path="danielawakenscarlet/15-minute-meeting"
            data-widget="embed"
          />
          <Script src="https://asset-tidycal.b-cdn.net/js/embed.js"
            async
            strategy="lazyOnload"
            onLoad={() => {
              if (window.TidyCal) {
                window.TidyCal.init(); // Reinitialize when script is loaded
              }
            }}

          />


        </div>
      </section>
    </>
  );
};

export default Bookings;

