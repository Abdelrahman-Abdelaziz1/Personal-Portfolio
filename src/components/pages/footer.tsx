import GithubIcon from "../../../public/github.svg";
import LinkedinIcon from "../../../public/linkedin.svg";
import WhatsappIcon from "../../../public/whatsapp.svg"; // Make sure these files exist
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex flex-col gap-4 md:flex-row py-4 w-full shrink-0 items-center px-4 md:px-6 border-t">
      <p className="text-xs text-muted-foreground order-last md:order-first">
        Developed and designed by Abdelrahman Abdelaziz.
      </p>
      <nav className="md:ml-auto flex gap-4 md:gap-6">
        {/* GitHub */}
        <Link
          href="https://github.com/Abdelrahman-Abdelaziz1"
          className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-all hover:scale-110"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={GithubIcon}
            alt="GitHub"
            className="invert-0 dark:invert"
            width={20}
            height={20}
          />
        </Link>

        {/* LinkedIn */}
        <Link
          href="https://www.linkedin.com/in/abdelrahman-abdelaziz-8a1b99204/"
          className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-all hover:scale-110"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={LinkedinIcon}
            alt="LinkedIn"
            className="invert-0 dark:invert"
            width={20}
            height={20}
          />
        </Link>

        {/* WhatsApp */}
        <Link
          href="https://wa.me/4915256589211" // Use format: https://wa.me/49123456789
          className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-all hover:scale-110"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={WhatsappIcon}
            alt="WhatsApp"
            className="invert-0 dark:invert"
            width={20}
            height={20}
          />
        </Link>
      </nav>
    </footer>
  );
}
