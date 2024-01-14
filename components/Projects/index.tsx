"use client";

import { useEffect, useState } from "react";

import Link from "next/link";

import { FaExternalLinkAlt } from "react-icons/fa";
import {
  SiPostgresql,
  SiExpress,
  SiTailwindcss,
  SiNextdotjs,
  SiNextra,
  SiStrapi,
  SiTypescript,
} from "react-icons/si";
import { FaReact, FaDocker, FaJava, FaLess } from "react-icons/fa";

import { Badge } from "../ui/badge";

import { fadeInAnimationsVariants } from "@/lib/fadeInAnimation";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CarouselProject from "../CarouselProject";
import Image from "next/image";

interface ProjectSkills {
  icon: React.ReactNode;
  label: string;
}

interface ProjectsList {
  icon: string;
  url?: string;
  title: string;
  description: string;
  skills: ProjectSkills[];
  desktopGif?: string[];
  mobileGif?: string[];
}

const Projects: React.FC = () => {
  // MAIN SECTION
  const projectList: ProjectsList[] = [
    {
      icon: "🎶",
      title: "Spotify Max +",
      description:
        "Projet avancé de Spotify réalisé en collaboration avec mon grand-frère, initiateur et lead du projet. Explorez de nouvelles fonctionnalités et une expérience utilisateur améliorée.",
      skills: [
        {
          icon: <SiNextdotjs />,
          label: "NextJS",
        },
        {
          icon: <Image src="/shadcn.svg" alt="shadcn" width={12} height={12} />,
          label: "shadcn-ui",
        },
        {
          icon: <SiTailwindcss />,
          label: "Tailwind",
        },
        {
          icon: <FaDocker />,
          label: "Docker",
        },
      ],
      desktopGif: [
        "/spotify/desktop/homepage.gif",
        "/spotify/desktop/search.gif",
      ],
      mobileGif: [
        "/spotify/mobile/homepage.gif",
        "/spotify/mobile/search.gif",
        "/spotify/mobile/studio.gif",
      ],
    },
    {
      icon: "🏗️",
      title: "New-Delhi",
      description:
        "CMS Builder interne SAAS pour Carrefour Voyages, spécialisé dans la création rapide de newsletters.",
      skills: [
        {
          icon: <FaReact />,
          label: "react.js",
        },
        {
          icon: <SiStrapi />,
          label: "strapi",
        },
        {
          icon: <SiPostgresql />,
          label: "postgresql",
        },
        {
          icon: <FaDocker />,
          label: "Docker",
        },
      ],
      desktopGif: ["/new-delhi/builder.gif"],
    },
  ];
  // SUB SECTION
  const subProjectList: ProjectsList[] = [
    {
      icon: "🌌",
      url: "https://asteriaspace.fr/",
      title: "Asteria",
      description:
        "Apprendre les notions les plus complexes de d'astonomie de manière ludique et accompagné, avec à la clé des récompenses et une collection de cartes !",
      skills: [
        {
          icon: <FaReact />,
          label: "react.js",
        },
        {
          icon: <SiExpress />,
          label: "express",
        },
        {
          icon: <SiPostgresql />,
          label: "postgresql",
        },
        {
          icon: <FaDocker />,
          label: "Docker",
        },
      ],
    },
    {
      icon: "✈️",
      url: "https://voyages.carrefour.fr/",
      title: "Carrefour Voyages",
      description:
        "Pendant mon alternance, j'ai résolu des tickets, intégré des thèmes comme celui de Noël ou Halloween, et contribué à la maintenance du site web principal.",
      skills: [
        {
          icon: <SiTypescript />,
          label: "Typescript",
        },
        {
          icon: <FaJava />,
          label: "Freemarker",
        },
        {
          icon: <FaLess />,
          label: "Less",
        },
      ],
    },
    {
      icon: "📖",
      url: "https://reading.cv-tools.fr/",
      title: "Reading",
      description:
        "Documentation des projets internes de Carrefour Voyages, des SAAS que j'ai conçus et documentés.",
      skills: [
        {
          icon: <SiNextdotjs />,
          label: "NextJS",
        },
        {
          icon: <SiNextra />,
          label: "Nextra",
        },
        {
          icon: <SiTailwindcss />,
          label: "Tailwind",
        },
        {
          icon: <FaDocker />,
          label: "Docker",
        },
      ],
    },
  ];

  // FRAMER MOTION

  const [ref, inView] = useInView({ triggerOnce: false });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(inView);
  }, [inView]);

  return (
    <div className="w-full" id="projects" ref={ref}>
      <h2 className="text-4xl text-center text-white font-bold mb-10">
        Projets
      </h2>
      {/* MAIN SECTION */}
      <div className="gap-8 flex flex-wrap items-start justify-start">
        {/* CARD */}
        {projectList.map((project, index) => {
          return (
            <motion.div
              className="flex flex-1 flex-col gap-3 border h-auto bg-card rounded-lg p-6 shadow-2xl"
              key={index}
              variants={fadeInAnimationsVariants}
              initial={isVisible ? "animate" : "initial"}
              animate={isVisible ? "animate" : "initial"}
              custom={index}
            >
              <div className="flex items-center justify-between">
                <p className="text-2xl ">{project.icon}</p>
                <div className="flex items-center justify-between gap-3">
                  {project.desktopGif && (
                    <CarouselProject
                      desktopGif={project.desktopGif}
                      mobileGif={project.mobileGif}
                    />
                  )}
                  {project.url && (
                    <Link
                      href={project.url}
                      target="_blank"
                      className="text-white transition-all hover:scale-125"
                      aria-label={project.title}
                    >
                      <FaExternalLinkAlt />
                    </Link>
                  )}
                </div>
              </div>
              <h3 className="text-2xl font-semibold leading-none tracking-tight text-white">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {project.description}
              </p>
              <ul className="flex flex-wrap items-center justify-start gap-2">
                {/* SKILLS */}
                {project.skills.map((skill, index) => {
                  return (
                    <li key={index}>
                      <Badge
                        className="rounded-full text-xs font-medium"
                        variant="project"
                      >
                        <i className="w-3 h-3 mr-2">{skill.icon}</i>
                        {skill.label}
                      </Badge>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          );
        })}
      </div>
      {/* SUB SECTION */}
      <div className="flex items-center justify-center w-full text-white mt-6">
        <div
          className="gap-8 flex flex-wrap items-start justify-start"
          ref={ref}
        >
          {/* CARD */}
          {subProjectList.map((project, index) => {
            return (
              <motion.div
                className="flex flex-1 flex-col gap-3 border h-auto bg-card rounded-lg p-6 shadow-2xl"
                key={index}
                variants={fadeInAnimationsVariants}
                initial={isVisible ? "animate" : "initial"}
                animate={isVisible ? "animate" : "initial"}
                custom={index + 2}
              >
                <div className="flex items-center justify-between">
                  <p className="text-2xl ">{project.icon}</p>
                  <div className="flex items-center justify-between gap-3">
                    {(project.desktopGif || project.mobileGif) && (
                      <CarouselProject
                        desktopGif={project.desktopGif}
                        mobileGif={project.mobileGif}
                      />
                    )}
                    {project.url && (
                      <Link
                        href={project.url}
                        target="_blank"
                        className="text-white transition-all hover:scale-125"
                        aria-label={project.title}
                      >
                        <FaExternalLinkAlt />
                      </Link>
                    )}
                  </div>
                </div>
                <h3 className="text-2xl font-semibold leading-none tracking-tight text-white">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {project.description}
                </p>
                <ul className="flex flex-wrap items-center justify-start gap-2">
                  {/* SKILLS */}
                  {project.skills.map((skill, index) => {
                    return (
                      <li key={index}>
                        <Badge
                          className="rounded-full text-xs font-medium"
                          variant="project"
                        >
                          <i className="mr-2">{skill.icon}</i>
                          {skill.label}
                        </Badge>
                      </li>
                    );
                  })}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
