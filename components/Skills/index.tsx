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
import shadcn from "@/public/shadcn.svg";
import {
  AwsGradient,
  DockerGradient,
  ExpressGradient,
  FigmaGradient,
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
    {
      title: "Design",
      order: 3,
      skills: [
        {
          icon: <FigmaGradient />,
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
          icon: <ReactGradient />,
          label: "react.js",
          important: true,
        },
        {
          icon: (
            <Image
              src={shadcn}
              alt="shadcn"
              className="size-5"
              width={20}
              height={20}
            />
          ),
          label: "shadcn-ui",
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
      ],
    },
    {
      title: "Back-end",
      skills: [
        {
          icon: <ExpressGradient />,
          label: "express",
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
    {
      title: others,
      skills: [
        {
          icon: <DockerGradient />,
          label: "Docker",
          important: true,
        },
        {
          icon: <FaGithub />,
          label: "git & github",
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
          return (
            <div
              className={cn(
                "mb-10 flex flex-col items-start justify-start justify-self-center sm:order-1",
                { "order-3": skill.title === "Design" }
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
