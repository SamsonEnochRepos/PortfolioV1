import type { ReactNode } from "react";

export type SkillCategory = string;

export type Skill = {
  name: string;
  category: SkillCategory;
  icon: ReactNode;
  href?: string;
};

const DevIcon = ({ name, colorVariant = "original" }: { name: string, colorVariant?: string }) => (
  // eslint-disable-next-line @next/next/no-img-element
  <img
    src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${name}/${name}-${colorVariant}.svg`}
    alt={name}
    className="w-11 h-11 block"
  />
);

const GenericIcon = ({ bg, textCol, text }: { bg: string, textCol: string, text: string }) => (
  <div
    className="w-11 h-11 rounded-[10px] flex items-center justify-center font-bold text-[14px] tracking-tight leading-none"
    style={{ backgroundColor: bg, color: textCol }}
  >
    {text}
  </div>
);

export const skillsData: Skill[] = [
  // --- PROGRAMMING LANGUAGES ---
  { name: "Python", category: "Programming Languages", icon: <DevIcon name="python" /> },
  { name: "Java", category: "Programming Languages", icon: <DevIcon name="java" /> },
  { name: "C", category: "Programming Languages", icon: <DevIcon name="c" /> },
  { name: "C++", category: "Programming Languages", icon: <DevIcon name="cplusplus" /> },
  { name: "JavaScript", category: "Programming Languages", icon: <DevIcon name="javascript" /> },
  { name: "TypeScript", category: "Programming Languages", icon: <DevIcon name="typescript" /> },
  { name: "MySQL", category: "Programming Languages", icon: <DevIcon name="mysql" colorVariant="original-wordmark" /> },

  // --- DATABASES & DATA ANALYTICS ---
  { name: "MySQL", category: "Databases & Analytics", icon: <DevIcon name="mysql" colorVariant="original-wordmark" /> },
  { name: "PostgreSQL", category: "Databases & Analytics", icon: <DevIcon name="postgresql" /> },
  { name: "Pandas", category: "Databases & Analytics", icon: <DevIcon name="pandas" /> },
  { name: "NumPy", category: "Databases & Analytics", icon: <DevIcon name="numpy" /> },
  { name: "Matplotlib", category: "Databases & Analytics", icon: <DevIcon name="matplotlib" /> },
  { name: "Power BI", category: "Databases & Analytics", icon: <DevIcon name="powerbi" /> },
  { name: "Tableau", category: "Databases & Analytics", icon: <DevIcon name="tableau" /> },

  // --- FRAMEWORKS & TECHNOLOGIES ---
  { name: "HTML", category: "Frameworks & Tech", icon: <DevIcon name="html5" /> },
  { name: "CSS", category: "Frameworks & Tech", icon: <DevIcon name="css3" /> },
  { name: "ReactJS", category: "Frameworks & Tech", icon: <DevIcon name="react" /> },
  { name: "Django", category: "Frameworks & Tech", icon: <DevIcon name="django" colorVariant="plain" /> },
  { name: "Flask", category: "Frameworks & Tech", icon: <DevIcon name="flask" colorVariant="original" /> },
  { name: "Scikit-learn", category: "Frameworks & Tech", icon: <DevIcon name="scikit-learn" /> },
  { name: "TensorFlow", category: "Frameworks & Tech", icon: <DevIcon name="tensorflow" /> },
  { name: "PyTorch", category: "Frameworks & Tech", icon: <DevIcon name="pytorch" /> },
  { name: "Node.js", category: "Frameworks & Tech", icon: <DevIcon name="nodejs" /> },
  { name: "REST API", category: "Frameworks & Tech", icon: <GenericIcon bg="#1E3A8A" textCol="#BFDBFE" text="API" /> },
  { name: "Object-Oriented Programming (OOP)", category: "Frameworks & Tech", icon: <GenericIcon bg="#4C1D95" textCol="#DDD6FE" text="OOP" /> },

  // --- TOOLS & PLATFORMS ---
  { name: "Git", category: "Tools & Platforms", icon: <DevIcon name="git" /> },
  { name: "GitHub", category: "Tools & Platforms", icon: <DevIcon name="github" colorVariant="original" /> },
  { name: "VS Code", category: "Tools & Platforms", icon: <DevIcon name="vscode" /> },
  { name: "UiPath Studio", category: "Tools & Platforms", icon: <GenericIcon bg="#EA580C" textCol="#FFEDD5" text="Ui" /> },
  { name: "Docker", category: "Tools & Platforms", icon: <DevIcon name="docker" /> },
  { name: "AWS", category: "Tools & Platforms", icon: <DevIcon name="amazonwebservices" colorVariant="original-wordmark" /> },
  { name: "Agile/Scrum", category: "Tools & Platforms", icon: <GenericIcon bg="#0D9488" textCol="#CCFBF1" text="Ag" /> },
  { name: "Linux", category: "Tools & Platforms", icon: <DevIcon name="linux" /> },
  { name: "Deluge", category: "Tools & Platforms", icon: <GenericIcon bg="#0F766E" textCol="#CCFBF1" text="Dl" /> },
];
