import { SiMui, SiTailwindcss, SiPostgresql } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { DiMongodb, DiSwift } from "react-icons/di";
import Image from "next/image";

interface Skill {
  icon: React.ReactNode;
  label: string;
  important?: boolean;
}

interface SkillsSection {
  title: string;
  skills: Skill[];
}

const Skills: React.FC = () => {
  const SkillsSection: SkillsSection[] = [
    {
      title: "Design",
      skills: [
        {
          icon: (
            <Image
              src="/figma-gradient.svg"
              alt="/figma-gradient"
              className="w-5 h-5"
              width={20}
              height={20}
            />
          ),
          label: "figma",
          important: true,
        },
        {
          icon: <SiTailwindcss />,
          label: "tailwind",
        },
      ],
    },
    {
      title: "Front-end",
      skills: [
        {
          icon: (
            <Image
              src="/react-gradient.svg"
              alt="/react-gradient"
              className="w-5 h-5"
              width={20}
              height={20}
            />
          ),
          label: "react.js",
          important: true,
        },
        {
          icon: <SiMui />,
          label: "Material UI",
        },
        {
          icon: (
            <Image
              src="/typescript-gradient.svg"
              alt="/typescript-gradient"
              className="w-5 h-5"
              width={20}
              height={20}
            />
          ),
          label: "typescript",
          important: true,
        },
        {
          icon: <DiSwift />,
          label: "SwiftUI",
        },
      ],
    },
    {
      title: "Back-end",
      skills: [
        {
          icon: (
            <Image
              src="/express-gradient.svg"
              alt="/express-gradient"
              className="w-5 h-5"
              width={20}
              height={20}
            />
          ),
          label: "express",
          important: true,
        },
        {
          icon: <DiMongodb />,
          label: "MongoDB",
        },
        {
          icon: (
            <Image
              src="/nodejs-gradient.svg"
              alt="/nodejs-gradient"
              className="w-5 h-5"
              width={20}
              height={20}
            />
          ),
          label: "node.js",
          important: true,
        },
        {
          icon: <SiPostgresql />,
          label: "PostgreSQL",
        },
      ],
    },
    {
      title: "Autres",
      skills: [
        {
          icon: <FaGithub />,
          label: "git & github",
        },
        {
          icon: (
            <Image
              src="/docker-gradient.svg"
              alt="/docker-gradient"
              className="w-5 h-5"
              width={20}
              height={20}
            />
          ),
          label: "Docker",
          important: true,
        },
      ],
    },
  ];
  return (
    <div className="w-full">
      <h2 className="text-4xl text-center text-white font-bold mb-10">
        Skills
      </h2>
      <div className="flex justify-between">
        {SkillsSection.map((skill, index) => {
          return (
            <div key={index}>
              <h3 className="text-white text-2xl font-bold mb-4">
                {skill.title}
              </h3>
              <ul className="text-white flex flex-col gap-2">
                {skill.skills.map((value, index) => {
                  return (
                    <li
                      className="flex justify-start text-lg items-center gap-2"
                      key={index}
                    >
                      <i>{value.icon}</i>
                      <p
                        className={`${
                          value.important && "gradient-primary font-bold"
                        }`}
                      >
                        {value.label}
                      </p>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
