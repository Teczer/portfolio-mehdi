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
  SiVite,
  SiReactquery,
} from "react-icons/si";
import { FaTencentWeibo } from "react-icons/fa";

import { FaGithub } from "react-icons/fa";
import { fadeInAnimationsVariants } from "@/lib/fadeInAnimation";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import shadcn from "@/public/shadcn.svg";
import {
  AwsGradient,
  DockerGradient,
  ExpoGradient,
  FigmaGradient,
  NestjsGradient,
  NodejsGradient,
  ReactGradient,
  TypescriptGradient,
} from "../Svg";
import { cn } from "@/lib/utils";

interface Skill {
  icon: React.ReactNode;
  label: string;
  important?: boolean;
}

interface SkillsSection {
  title: string;
  skills: Skill[];
  order?: number;
}

const Skills: React.FC = () => {
  const pathname = usePathname();

  const others = pathname === "/fr" ? "Autres" : "Others";
  const mainTitle = pathname === "/fr" ? "Compétences" : "Skills";

  const SkillsSection: SkillsSection[] = [
    // FRONT
    {
      title: "Front-end",
      skills: [
        {
          icon: <ReactGradient />,
          label: "react.js",
          important: true,
        },
        {
          icon: <TypescriptGradient />,
          label: "typescript",
          important: true,
        },
        {
          icon: <SiNextdotjs />,
          label: "next.js",
        },
        {
          icon: <SiReactquery />,
          label: "react query",
        },
      ],
    },
    // BACK
    {
      title: "Back-end",
      skills: [
        {
          icon: <NestjsGradient />,
          label: "nest.js",
          important: true,
        },
        {
          icon: <SiStrapi />,
          label: "strapi",
        },
        {
          icon: <NodejsGradient />,
          label: "node.js",
          important: true,
        },
        {
          icon: <SiPostgresql />,
          label: "postgresql",
        },
      ],
    },
    // Mobile
    {
      title: "Mobile",
      skills: [
        {
          icon: <ReactGradient />,
          label: "react native",
          important: true,
        },
        {
          icon: <ExpoGradient />,
          label: "expo",
          important: true,
        },
        {
          icon: <FaTencentWeibo />,
          label: "MMKV",
        },
        {
          icon: <SiTailwindcss />,
          label: "nativewind",
        },
      ],
    },
    // OTHER
    {
      title: others,
      skills: [
        {
          icon: <FaGithub />,
          label: "git & CI/CD",
        },
        {
          icon: <DockerGradient />,
          label: "Docker",
          important: true,
        },
        {
          icon: <AwsGradient />,
          label: "AWS",
          important: true,
        },
        {
          icon: <SiNginx />,
          label: "nginx",
        },
      ],
    },
    // DESIGN
    {
      title: "Design",
      order: 3,
      skills: [
        {
          icon: <SiTailwindcss />,
          label: "tailwind",
        },
        {
          icon: <FigmaGradient />,
          label: "figma",
          important: true,
        },
      ],
    },
  ];

  // Framer motion

  const [ref, inView] = useInView({ triggerOnce: false });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(inView);
  }, [inView]);

  return (
    <div className="w-full" id="skills" ref={ref}>
      <h2 className="mb-10 text-center text-4xl font-bold text-accent">
        {mainTitle}
      </h2>
      <div className="grid grid-cols-2 gap-4 sm:flex sm:justify-between">
        {SkillsSection.map((skill, index) => {
          const isLastItemAndOdd =
            index === SkillsSection.length - 1 &&
            SkillsSection.length % 2 !== 0;
          return (
            <div
              className={cn(
                "mb-10 flex flex-col items-start justify-start justify-self-center sm:order-1",
                {
                  "col-span-2 sm:col-span-auto justify-self-center":
                    isLastItemAndOdd,
                }
              )}
              key={index}
            >
              <h3 className="mb-4 text-2xl font-bold text-accent">
                {skill.title}
              </h3>
              <ul className="flex flex-col gap-2 text-accent">
                {skill.skills.map((skill, index) => {
                  return (
                    <motion.li
                      className="flex items-center justify-start gap-2 text-lg"
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
