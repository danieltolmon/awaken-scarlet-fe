"use client";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="relative z-10 bg-primary pt-8 dark:bg-gray-dark ">
        <div className="container">
          <div className="flex flex-wrap">

            <div className="max-w-[360px] mx-auto">
              <Link href="/" className="mb-8 inline-block">
                <Image
                  src="/images/logo/2.svg"
                  alt="logo"
                  className="w-full dark:hidden"
                  width={40}
                  height={80}
                />
                <Image
                  src="/images/logo/1.svg"
                  alt="logo"
                  className="hidden w-full dark:block"
                  width={40}
                  height={80}
                />
              </Link>

            </div>



          </div>

          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D2D8E183] to-transparent dark:via-[#959CB183]"></div>
          <div className="py-4">
            <p className="text-center text-base text-light dark:text-primary">
              Made with 🤍 by {" "}
              <a
                href="https://github.com/danieltolmon"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
              >
                Daniel
              </a>{" "}
            </p>
            <p className="text-center text-base text-light dark:text-primary" >© Copyright 2024 awakenscarlet.com • All Rights Reserved</p>
          </div>
        </div>

      </footer>
    </>
  );
};

export default Footer;
