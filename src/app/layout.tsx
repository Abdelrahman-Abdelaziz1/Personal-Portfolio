import type { Metadata } from "next";
import { Roboto_Serif, Geist } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "@/app/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import CustomCursor from "@/components/custom-cursor";
import NavbarRes from "@/components/navbar";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const robotoSerif = Roboto_Serif({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://abdelrahmanabdelaziz.site"),
  title: "Abdelrahman Abdelaziz - Data Scientist",
  description:
    "The portfolio of Abdelrahman Abdelaziz, a passionate Data Scientist creating dynamic and user-friendly web applications.",
  keywords: [
    "Abdelrahman Abdelaziz",
    "Data Scientist | Master student",
    "Next.js",
    "React",
    "TypeScript",
    "Portfolio",
    "Full Stack",
    "Web Development",
  ],
  authors: [
    {
      name: "Abdelrahman Abdelaziz",
      url: "https://www.abdelrahmanabdelaziz.site",
    },
  ],
  creator: "Abdelrahman Abdelaziz",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    url: "https://abdelrahmanabdelaziz.site",
    title: "Abdelrahman Abdelaziz - Data Scientist | MSc Student",
    description: "The portfolio of Abdelrahman Abdelaziz...",
    images: [
      {
        url: "https://www.abdelrahmanabdelaziz.site/porto.png",
        width: 1200,
        height: 630,
        alt: "Abdelrahman Abdelaziz Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Abdelrahman Abdelaziz - Data Scientist | MSc Student",
    description: "The portfolio of Abdelrahman Abdelaziz...",
    images: ["https://www.abdelrahmanabdelaziz.site/porto.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(robotoSerif.className, "font-sans", geist.variable)} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen flex-grow">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen flex-grow">
            <CustomCursor />
            <NavbarRes />
            <main className="flex-grow relative z-10">
              {children}
              <Analytics />
              <SpeedInsights />
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
