import React, { FunctionComponent } from 'react'
import Script from 'next/script'
import Link from 'next/link';




const Bookings: FunctionComponent = () => {

  return (
    <>
      <section id="booking" className="py-16 md:py-20 lg:py-28 bg-light mt-16">
        <div className='container border border-solid border-black'>

          <div className="tidycal-embed" data-path="danielawakenscarlet/15-minute-meeting" />
          <Script src="https://asset-tidycal.b-cdn.net/js/embed.js" async />


        </div>
      </section>
    </>
  );
};

export default Bookings;

