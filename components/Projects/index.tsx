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
  SiReactquery,
} from "react-icons/si";
import { FaReact, FaDocker, FaJava, FaLess } from "react-icons/fa";

import { Badge } from "../ui/badge";

import { fadeInAnimationsVariants } from "@/lib/fadeInAnimation";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CarouselProject from "../CarouselProject";

import { ShadcnLogo } from "../Svg";

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

const Projects: React.FC<{ projects: any }> = ({ projects }) => {
  // MAIN SECTION
  const projectList: ProjectsList[] = [
    {
      icon: "🎶",
      title: "Spotify Max +",
      description: projects.spotify,
      skills: [
        {
          icon: <SiNextdotjs />,
          label: "NextJS",
        },
        {
          icon: <ShadcnLogo />,
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
      description: projects.newDelhi,
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
      description: projects.asteria,
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
      icon: "🔴",
      url: "https://spallian.mehdihattou.com/",
      title: "PokéTec",
      description: projects.poketec,
      skills: [
        {
          icon: <FaReact />,
          label: "react.js",
        },
        {
          icon: <SiReactquery />,
          label: "TanStack Query",
        },
        {
          icon: <SiTypescript />,
          label: "Typescript",
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
      description: projects.carrefourVoyages,
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
      url: "https://reading-demo.vercel.app/",
      title: "Reading",
      description: projects.reading,
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
      <h2 className="mb-10 text-center text-4xl font-bold text-accent">
        {projects.mainTitle}
      </h2>
      {/* MAIN SECTION */}
      <div className="flex flex-wrap items-start justify-start gap-8">
        {/* CARD */}
        {projectList.map((project, index) => {
          return (
            <motion.div
              className="flex h-auto min-w-80 flex-1 flex-col gap-3 rounded-lg border bg-card p-6 shadow-2xl"
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
                      className="text-accent transition-all hover:scale-125"
                      aria-label={project.title}
                    >
                      <FaExternalLinkAlt />
                    </Link>
                  )}
                </div>
              </div>
              <h3 className="text-2xl font-semibold leading-none tracking-tight text-accent">
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
                        className="rounded-full text-xs font-bold"
                        variant="project"
                      >
                        <i className="mr-2 size-3">{skill.icon}</i>
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
      <div className="mt-6 flex w-full items-center justify-center text-accent">
        <div
          className="flex flex-wrap items-start justify-start gap-8"
          ref={ref}
        >
          {/* CARD */}
          {subProjectList.map((project, index) => {
            return (
              <motion.div
                className="flex h-auto min-w-80 flex-1 flex-col gap-3 rounded-lg border bg-card p-6 shadow-2xl"
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
                        className="text-accent transition-all hover:scale-125"
                        aria-label={project.title}
                      >
                        <FaExternalLinkAlt />
                      </Link>
                    )}
                  </div>
                </div>
                <h3 className="text-2xl font-semibold leading-none tracking-tight text-accent">
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
                          className="rounded-full text-xs font-bold"
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
