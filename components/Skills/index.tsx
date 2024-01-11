"use client";

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
          label: "postgresql",
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

  const order = ["Back-end", "Front-end", "Autres", "Design"];

  // Crée une copie du tableau SkillsSection avec slice()
  const skillsCopy = SkillsSection.slice();

  // Trie les sections
  const sortedSkillsSections = skillsCopy.sort(
    (a, b) => order.indexOf(a.title) - order.indexOf(b.title)
  );

  // Retire les compétences "MongoDB" et "SwiftUI"
  const filteredSkillsSections = sortedSkillsSections.map((section) => ({
    ...section,
    skills: section.skills.filter(
      (skill) => skill.label !== "MongoDB" && skill.label !== "SwiftUI"
    ),
  }));

  return (
    <div className="w-full">
      <h2 className="text-4xl text-center text-white font-bold mb-10">
        Compétences
      </h2>
      <div className="grid grid-cols-2 gap-4 sm:flex sm:justify-between">
        {/* DESKTOP SECTION */}
        {SkillsSection.map((skill, index) => {
          return (
            <div
              className="hidden sm:flex flex-col items-center justify-start"
              key={index}
            >
              <h3 className="text-white text-2xl font-bold mb-4">
                {skill.title}
              </h3>
              <ul className="flex flex-col gap-2 text-white ">
                {skill.skills.map((skill, index) => {
                  return (
                    <li
                      className="flex justify-start text-lg items-center gap-2"
                      key={index}
                    >
                      <i>{skill.icon}</i>
                      <p
                        className={`${
                          skill.important && "gradient-primary font-bold"
                        }`}
                      >
                        {skill.label}
                      </p>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
        {/* MOBILE SECTION */}
        {filteredSkillsSections.map((skill, index) => {
          return (
            <div
              className="mb-10 flex flex-col items-center justify-center sm:hidden"
              key={index}
            >
              <h3 className="text-white text-2xl font-bold mb-4">
                {skill.title}
              </h3>
              <ul className="flex flex-col gap-2 text-white">
                {skill.skills.map((skill, index) => {
                  return (
                    <li
                      className="flex justify-start text-lg items-center gap-2"
                      key={index}
                    >
                      <i>{skill.icon}</i>
                      <p
                        className={`${
                          skill.important && "gradient-primary font-bold"
                        }`}
                      >
                        {skill.label}
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
