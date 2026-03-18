import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiMysql,
  SiFirebase,
  SiGit,
  SiFigma,
  SiMui,
  SiCanva,
  SiAdobephotoshop,
  SiPython,
  SiScikitlearn,
  SiStreamlit,
  SiSupabase,
  SiPostgresql,
  SiPandas,
  SiLooker,
  SiGooglesheets,
  SiFreelancer,
} from "react-icons/si";
import { IconType } from "react-icons";

export const getSkillIcon = (skill: string): IconType => {
  const skillLower = skill.toLowerCase();

  switch (skillLower) {
    case "html":
      return SiHtml5;
    case "css":
      return SiCss3;
    case "javascript":
      return SiJavascript;
    case "js":
      return SiJavascript;
    case "typescript":
      return SiTypescript;
    case "ts":
      return SiTypescript;
    case "react":
      return SiReact;
    case "next js":
    case "nextjs":
    case "next.js":
      return SiNextdotjs;
    case "tailwind":
    case "tailwindcss":
      return SiTailwindcss;
    case "node js":
    case "nodejs":
    case "node.js":
      return SiNodedotjs;
    case "mongodb":
      return SiMongodb;
    case "mysql":
      return SiMysql;
    case "firebase":
      return SiFirebase;
    case "git":
      return SiGit;
    case "figma":
      return SiFigma;
    case "materialui":
    case "mui":
      return SiMui;
    case "canva":
      return SiCanva;
    case "photoshop":
      return SiAdobephotoshop;
    case "python":
      return SiPython;
    case "scikit-learn":
    case "scikitlearn":
      return SiScikitlearn;
    case "streamlit":
      return SiStreamlit;
    case "supabase":
      return SiSupabase;
    case "postgresql":
    case "postgres":
      return SiPostgresql;
    case "pandas":
      return SiPandas;
    case "smote":
      return SiScikitlearn;
    case "power bi":
    case "powerbi":
      return SiLooker;
    case "dax":
      return SiLooker;
    case "power query":
      return SiLooker;
    case "data modeling":
      return SiLooker;
    case "excel":
      return SiGooglesheets;
    default:
      return SiFreelancer; // Fallback icon
  }
};

export const getSkillColor = (skill: string): string => {
  const skillLower = skill.toLowerCase();
  switch (skillLower) {
    case "html":
      return "#ef4444"; // Red-500
    case "css":
      return "#dc2626"; // Red-600
    case "javascript":
      return "#b91c1c"; // Red-700
    case "typescript":
      return "#ef4444"; // Red-500
    case "react":
      return "#dc2626"; // Red-600
    case "next js":
    case "nextjs":
    case "next.js":
      return "#ffffff"; // Keep white for contrast
    case "tailwind":
      return "#991b1b"; // Red-800
    case "node js":
    case "nodejs":
      return "#b91c1c"; // Red-700
    case "mongodb":
      return "#7f1d1d"; // Red-900
    case "mysql":
      return "#991b1b"; // Red-800
    case "firebase":
      return "#ef4444"; // Red-500
    case "git":
      return "#dc2626"; // Red-600
    case "figma":
      return "#b91c1c"; // Red-700
    case "materialui":
    case "mui":
      return "#ef4444"; // Red-500
    case "python":
      return "#dc2626"; // Red-600
    case "scikit-learn":
    case "streamlit":
    case "supabase":
    case "postgresql":
    case "pandas":
    case "smote":
    case "power bi":
    case "dax":
    case "power query":
    case "data modeling":
    case "excel":
      return "#b91c1c"; // Red-700
    default:
      return "#ef4444"; // Default Red
  }
};
