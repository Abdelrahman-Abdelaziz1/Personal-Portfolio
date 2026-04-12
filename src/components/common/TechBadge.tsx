// components/common/TechBadge.tsx

import Image from "next/image";
import {
  IconBrandGithub,
  IconBrandReact,
  IconDatabase,
  IconBrandNodejs,
  IconBrandNextjs,
  IconBrandPython,
  IconTable, // For SQL/Databases
  IconChartBar, // For Power BI/Tableau if SVGs aren't available
  IconMail, // For Resend
  IconShieldCheck, // For Zod/Validation
  IconBrandTypescript,
  IconBrandCpp,
  IconGitBranch,
  IconBolt, // For FastAPI
  IconSearch, // For TanStack Query
  IconGhost,
  IconBrandTailwind,
  IconBrandSupabase,
  IconBrandVercel,
  IconBrandFramerMotion,
  IconBrandPrisma,
  IconBrandOauth,
  IconBrandHtml5,
  IconBrandCss3,
  IconBrandMongodb,
  IconBrandJavascript,
  IconBrandDocker,
  IconBrandDjango,
  IconBrandStripe,
} from "@tabler/icons-react";

import { SiWhatsapp } from "react-icons/si";

import { JSX } from "react";

const getTechIcon = (tech: string): JSX.Element | null => {
  const normalizedTech = tech.toLowerCase().replace(/[.\s]/g, "");

  const techIcons: { [key: string]: JSX.Element } = {
    // TABLER ICONS: Added 'text-white'
    react: <IconBrandReact size={14} className="inline mr-1.5 text-white" />,
    nextjs: <IconBrandNextjs size={14} className="inline mr-1.5 text-white" />,
    stripe: <IconBrandStripe size={14} className="inline mr-1.5 text-white" />,
    whatsapp: <SiWhatsapp size={14} className="inline mr-1.5 text-white" />,

    nodejs: <IconBrandNodejs size={14} className="inline mr-1.5 text-white" />,
    typescript: (
      <IconBrandTypescript size={14} className="inline mr-1.5 text-white" />
    ),
    tailwindcss: (
      <IconBrandTailwind size={14} className="inline mr-1.5 text-white" />
    ),
    supabase: (
      <IconBrandSupabase size={14} className="inline mr-1.5 text-white" />
    ),
    vercel: <IconBrandVercel size={14} className="inline mr-1.5 text-white" />,
    framermotion: (
      <IconBrandFramerMotion size={14} className="inline mr-1.5 text-white" />
    ),
    prisma: <IconBrandPrisma size={14} className="inline mr-1.5 text-white" />,
    github: <IconBrandGithub size={14} className="inline mr-1.5 text-white" />,
    postgresql: <IconDatabase size={14} className="inline mr-1.5 text-white" />,
    html: <IconBrandHtml5 size={14} className="inline mr-1.5 text-white" />,
    css: <IconBrandCss3 size={14} className="inline mr-1.5 text-white" />,
    oauth: <IconBrandOauth size={14} className="inline mr-1.5 text-white" />,
    mongodb: (
      <IconBrandMongodb size={14} className="inline mr-1.5 text-white" />
    ),
    javascript: (
      <IconBrandJavascript size={14} className="inline mr-1.5 text-white" />
    ),
    django: <IconBrandDjango size={14} className="inline mr-1.5 text-white" />,
    docker: <IconBrandDocker size={14} className="inline mr-1.5 text-white" />,
    cpp: <IconBrandCpp size={14} className="inline mr-1.5 text-white" />,
    git: <IconGitBranch size={14} className="inline mr-1.5 text-white" />,
    fastapi: <IconBolt size={14} className="inline mr-1.5 text-white" />, // Removed text-emerald-500
    tanstackquery: (
      <IconSearch size={14} className="inline mr-1.5 text-white" />
    ), // Removed text-red-500
    zustand: <IconGhost size={14} className="inline mr-1.5 text-white" />, // Removed text-orange-400
    python: <IconBrandPython size={14} className="inline mr-1.5 text-white" />,
    sql: <IconTable size={14} className="inline mr-1.5 text-white" />,
    zod: <IconShieldCheck size={14} className="inline mr-1.5 text-white" />, // Removed text-blue-400
    resend: <IconMail size={14} className="inline mr-1.5 text-white" />,

    // IMAGE LOGOS: Added 'brightness-0 invert' to make them pure white
    heroku: (
      <span className="inline-flex items-center mr-1.5">
        <Image
          src="/heroku.svg"
          alt="Heroku"
          className="brightness-0 invert"
          width={14}
          height={14}
        />
      </span>
    ),
    powerbi: (
      <span className="inline-flex items-center mr-1.5">
        <Image
          src="/powerbi.svg"
          alt="Power BI"
          className="brightness-0 invert"
          width={14}
          height={14}
        />
      </span>
    ),
    tableau: (
      <span className="inline-flex items-center mr-1.5">
        <Image
          src="/tableau.svg"
          alt="Tableau"
          className="brightness-0 invert"
          width={14}
          height={14}
        />
      </span>
    ),
    pandas: (
      <span className="inline-flex items-center mr-1.5">
        <Image
          src="/pandas.svg"
          alt="Pandas"
          className="brightness-0 invert"
          width={14}
          height={14}
        />
      </span>
    ),
    tensorflow: (
      <span className="inline-flex items-center mr-1.5">
        <Image
          src="/tensorflow.svg"
          alt="TensorFlow"
          className="brightness-0 invert"
          width={14}
          height={14}
        />
      </span>
    ),
    shadcnui: (
      <span className="inline-flex items-center mr-1.5">
        <Image
          src="/shadcn-ui.svg"
          alt="Shadcn UI"
          className="brightness-0 invert"
          width={14}
          height={14}
        />
      </span>
    ),
    express: (
      <span className="inline-flex items-center mr-1.5">
        <Image
          src="/express.svg"
          alt="Express"
          className="brightness-0 invert"
          width={14}
          height={14}
        />
      </span>
    ),
    java: (
      <span className="inline-flex items-center mr-1.5">
        <Image
          src="/java.svg"
          alt="Java"
          className="brightness-0 invert"
          width={14}
          height={14}
        />
      </span>
    ),
    c: (
      <span className="inline-flex items-center mr-1.5">
        <Image
          src="/c.svg"
          alt="C"
          className="brightness-0 invert"
          width={14}
          height={14}
        />
      </span>
    ),
  };
  return techIcons[normalizedTech] || null;
};

export default function TechBadge({ tech }: { tech: string }) {
  return (
    <span className="px-2 py-1 text-xs rounded bg-secondary text-secondary-foreground flex items-center">
      {getTechIcon(tech)}
      {tech}
    </span>
  );
}
