import GithubIcon from "../../../public/github.svg";
import LinkedinIcon from "../../../public/linkedin.svg";
import { Mail, Contact2 } from "lucide-react";
import { TbFileCv } from "react-icons/tb";
import Link from "next/link";
import Image from "next/image";
import profilePhoto from "../../../public/headshot.jpeg";
import { AuroraBackground } from "../ui/aurora-background";
export default function Hero() {
  return (
    <section
      id="home"
      className="flex items-center min-h-screen justify-center lg:justify-start sticky top-0 "
    >
      <AuroraBackground
        className="absolute inset-0 -z-10"
        showRadialGradient={true}
      />

      <div className="flex flex-col justify-center items-center md:flex-row gap-0 md:gap-4  lg:px-[15%]  content-center  ">
        <Image
          src={profilePhoto}
          alt="Profile Photo"
          className="rounded-full flex-shrink-0 w-52 h-52 md:w-52 md:h-52 lg:w-64 lg:h-64  "
          width={512}
          height={512}
          priority={true}
        />

        <div className="flex-col flex  justify-center">
          <div className="flex-row  justify-center md:justify-start flex gap-4 order-last md:order-first pt-5 md:pt-0">
            <Link
              href="https://github.com/Abdelrahman-Abdelaziz1"
              target="_blank"
              className="social-link"
              aria-label="Visit my GitHub profile"
            >
              <Image
                src={GithubIcon}
                alt="GitHub"
                className="invert-0 dark:invert transition-all duration-300"
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
                className="invert-0 dark:invert transition-all duration-300"
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
              <Mail width={24} height={24} />
            </Link>

            <Link href="/cv">
              <TbFileCv
                size={23} // Increased from default 20/24
                strokeWidth={2.5} // Makes the lines thicker to match the brand logos
                className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
              />
            </Link>
          </div>
          <h1 className="text-7xl md:pt-4 lg:pt-8 font-serif text-center md:text-left  text-primary">
            <span>Abdelrahman</span> {/* Add a space for the inline view */}
            <span className="block lg:inline text-primary">Abdelaziz</span>
          </h1>
          <p className="font-serif text-xl pt-4 lg:pt-9 text-muted-foreground">
            Data Scientist | MSc Student
          </p>
        </div>
      </div>
    </section>
  );
}
