// 1. Change the import
import GithubIcon from "../../../public/github.svg";
import LinkedinIcon from "../../../public/linkedin.svg";
import { Mail } from "lucide-react";
import { TbFileCv } from "react-icons/tb";
import Link from "next/link";
import Image from "next/image";
import profilePhoto from "../../../public/headshot.jpeg";
// Change import from AuroraBackground to Vortex
import { Vortex } from "../ui/vortex";

export default function Hero() {
  return (
    <section
      id="home"
      className="w-full mx-auto rounded-md h-screen overflow-hidden"
    >
      {/* 2. New Dynamic Background Wrapper */}
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={220} // This hue provides that nice deep blue/dark aesthetic you use
        className="flex items-center w-full h-full justify-center lg:justify-start overflow-hidden px-4 md:px-10 py-4 w-full h-full"
      >
        <div className="flex flex-col justify-center items-center md:flex-row gap-0 md:gap-8 lg:px-[15%] content-center">
          <Image
            src={profilePhoto}
            alt="Profile Photo"
            className="rounded-full flex-shrink-0 w-52 h-52 md:w-52 md:h-52 lg:w-64 lg:h-64 shadow-2xl border-4 border-white/10" // Reduced border thickness slightly
            width={512}
            height={512}
            priority={true}
          />

          <div className="flex-col flex justify-center">
            {/* Social Links Container - Moved inside the same stack for centering on mobile */}
            <div className="flex-row justify-center md:justify-start flex gap-4 order-last md:order-first pt-5 md:pt-0">
              <Link
                href="https://github.com/Abdelrahman-Abdelaziz1"
                target="_blank"
                className="social-link"
                aria-label="Visit my GitHub profile"
              >
                <Image
                  src={GithubIcon}
                  alt="GitHub"
                  className="invert-0 dark:invert transition-all duration-300 hover:scale-110"
                  width={24}
                  height={24}
                />
              </Link>
              <Link
                href="https://www.linkedin.com/in/abdelrahman-abdelaziz-8a1b99204/"
                target="_blank"
                className="social-link"
                aria-label="Visit my LinkedIn profile"
              >
                <Image
                  src={LinkedinIcon}
                  alt="LinkedIn"
                  className="invert-0 dark:invert transition-all duration-300 hover:scale-110"
                  width={24}
                  height={24}
                />
              </Link>
              <Link
                href="mailto:abdelrahman.foad2002@gmail.com"
                target="_blank"
                className="social-link"
                aria-label="Send me an email"
              >
                <Mail
                  className="hover:scale-110 transition-transform text-white/70 hover:text-white"
                  width={24}
                  height={24}
                />
              </Link>

              <Link href="/cv">
                <TbFileCv
                  size={23}
                  strokeWidth={2.5}
                  className="text-white/70 hover:text-white transition-all cursor-pointer hover:scale-110"
                />
              </Link>
            </div>

            <h1 className="text-7xl md:pt-4 lg:pt-8 font-serif text-center md:text-left text-white tracking-tight">
              <span>Abdelrahman</span>
              <span className="block lg:inline text-white"> Abdelaziz</span>
            </h1>

            <p className="font-serif text-xl pt-4 lg:pt-9 text-white/70 text-center md:text-left">
              Web Developer | MSc Data Science Student
            </p>
          </div>
        </div>
      </Vortex>
    </section>
  );
}
