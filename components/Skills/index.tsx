"use client";

import { useEffect, useState } from "react";

import Image from "next/image";
import { usePathname } from "next/navigation";

import {
  SiNginx,
  SiTailwindcss,
  SiPostgresql,
  SiStrapi,
  SiNextdotjs,
} from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { fadeInAnimationsVariants } from "@/lib/fadeInAnimation";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Import des images pour les icônes des technologies
import figmaGradient from "@/public/figma-gradient.svg";
import reactGradient from "@/public/react-gradient.svg";
import shadcn from "@/public/shadcn.svg";
import typescriptGradient from "@/public/typescript-gradient.svg";
import expressGradient from "@/public/express-gradient.svg";
import nodejsGradient from "@/public/nodejs-gradient.svg";
import dockerGradient from "@/public/docker-gradient.svg";

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
  const pathname = usePathname();

  const others = pathname === "/fr" ? "Autres" : "Others";
  const mainTitle = pathname === "/fr" ? "Compétences" : "Skills";

  const SkillsSection: SkillsSection[] = [
    {
      title: "Design",
      skills: [
        {
          icon: (
            <Image
              src={figmaGradient}
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
              src={reactGradient}
              alt="reactGradient"
              className="w-5 h-5"
              width={20}
              height={20}
            />
          ),
          label: "react.js",
          important: true,
        },
        {
          icon: (
            <Image
              src={shadcn}
              alt="shadcn"
              className="w-5 h-5"
              width={20}
              height={20}
            />
          ),
          label: "shadcn-ui",
        },
        {
          icon: (
            <Image
              src={typescriptGradient}
              alt="typescriptGradient"
              className="w-5 h-5"
              width={20}
              height={20}
            />
          ),
          label: "typescript",
          important: true,
        },
        {
          icon: <SiNextdotjs />,
          label: "next.js",
        },
      ],
    },
    {
      title: "Back-end",
      skills: [
        {
          icon: (
            <Image
              src={expressGradient}
              alt="expressGradient"
              className="w-5 h-5"
              width={20}
              height={20}
            />
          ),
          label: "express",
          important: true,
        },
        {
          icon: <SiStrapi />,
          label: "strapi",
        },
        {
          icon: (
            <Image
              src={nodejsGradient}
              alt="nodejsGradient"
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
      title: others,
      skills: [
        {
          icon: <FaGithub />,
          label: "git & github",
        },
        {
          icon: (
            <Image
              src={dockerGradient}
              alt="docker-gradient"
              className="w-5 h-5"
              width={20}
              height={20}
            />
          ),
          label: "Docker",
          important: true,
        },
        {
          icon: <SiNginx />,
          label: "nginx",
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
    skills: section.skills.filter((skill) => skill.label !== "MongoDB"),
  }));

  // Framer motion

  const [ref, inView] = useInView({ triggerOnce: false });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(inView);
  }, [inView]);

  return (
    <div className="w-full" id="skills" ref={ref}>
      <h2 className="text-4xl text-center text-white font-bold mb-10">
        {mainTitle}
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
              <ul className="flex flex-col gap-2 text-white">
                {skill.skills.map((skill, index) => {
                  return (
                    <motion.li
                      className="flex justify-start text-lg items-center gap-2"
                      key={index}
                      variants={fadeInAnimationsVariants}
                      initial={isVisible ? "animate" : "initial"}
                      animate={isVisible ? "animate" : "initial"}
                      custom={index + 1}
                    >
                      <i>{skill.icon}</i>
                      <p
                        className={`${
                          skill.important && "gradient-primary font-bold"
                        }`}
                      >
                        {skill.label}
                      </p>
                    </motion.li>
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
              className="mb-10 flex flex-col justify-self-center items-start justify-start sm:hidden "
              key={index}
            >
              <h3 className="text-white text-2xl font-bold mb-4">
                {skill.title}
              </h3>
              <ul className="flex flex-col gap-2 text-white">
                {skill.skills.map((skill, index) => {
                  return (
                    <motion.li
                      className="flex justify-start text-lg items-center gap-2"
                      key={index}
                      variants={fadeInAnimationsVariants}
                      initial={isVisible ? "animate" : "initial"}
                      animate={isVisible ? "animate" : "initial"}
                      custom={index + 1}
                    >
                      <i>{skill.icon}</i>
                      <p
                        className={`${
                          skill.important && "gradient-primary font-bold"
                        }`}
                      >
                        {skill.label}
                      </p>
                    </motion.li>
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
