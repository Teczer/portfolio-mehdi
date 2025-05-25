"use client";

import { useEffect, useState } from "react";

import Link from "next/link";
import Image from "next/image";

import {
  FaAws,
  FaExternalLinkAlt,
  FaGithub,
  FaNpm,
  FaTencentWeibo,
} from "react-icons/fa";
import {
  SiPostgresql,
  SiExpress,
  SiTailwindcss,
  SiNextdotjs,
  SiNextra,
  SiStrapi,
  SiTypescript,
  SiReactquery,
  SiSocketdotio,
  SiNestjs,
  SiExpo,
  SiBun,
  SiNpm,
  SiJest,
  SiEslint,
  SiPrettier,
  SiJavascript,
} from "react-icons/si";
import { FaReact, FaDocker } from "react-icons/fa";
import { SiShadcnui } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

import { Badge } from "../ui/badge";

import { fadeInAnimationsVariants } from "@/lib/fadeInAnimation";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CarouselProject from "../CarouselProject";

import { EJSLogo } from "../Svg";
import { cn } from "@/lib/utils";

interface ProjectsProps {
  mainTitle: string;
  spotify: string;
  newDelhi: string;
  asteria: string;
  poketec: string;
  carrefourVoyages: string;
  loltimeflash: string;
  nestblog: string;
  reading: string;
  songchoicer: string;
  fastExpoApp: string;
}

interface ProjectSkills {
  icon: React.ReactNode;
  label: string;
}

interface ProjectsList {
  icon: string;
  url?: string;
  npm?: string;
  gitUrl: string;
  title: string;
  description: string;
  skills: ProjectSkills[];
  desktopGif?: string[];
  mobileGif?: string[];
}

const Projects: React.FC<{ projects: ProjectsProps }> = ({ projects }) => {
  // MAIN SECTION
  const projectList: ProjectsList[] = [
    {
      icon: "/song-choicer.png",
      title: "Song Choicer",
      url: "https://songchoicer.com/",
      gitUrl: "https://github.com/Teczer/SongChoicer",
      description: projects.songchoicer,
      skills: [
        {
          icon: <SiNextdotjs />,
          label: "Next.js",
        },
        {
          icon: <TbBrandReactNative />,
          label: "React Native",
        },
        {
          icon: <SiReactquery />,
          label: "TanStack Query",
        },
        {
          icon: <SiTypescript />,
          label: "TypeScript",
        },
        {
          icon: <FaTencentWeibo />,
          label: "MMKV",
        },
        {
          icon: <SiTailwindcss />,
          label: "Tailwind & NativeWind",
        },
        {
          icon: <FaDocker />,
          label: "Docker",
        },
      ],
    },
    {
      icon: "/project-icons/expo.svg",
      url: "https://fast-expo-app-web.vercel.app/",
      title: "Fast Expo App",
      npm: "https://www.npmjs.com/package/fast-expo-app",
      gitUrl: "https://github.com/Teczer/fast-expo-app",
      description: projects.fastExpoApp,
      skills: [
        {
          icon: <SiNpm />,
          label: "NPM",
        },
        {
          icon: <SiExpo />,
          label: "Expo",
        },
        {
          icon: <SiBun />,
          label: "Bun",
        },
        {
          icon: <FaTencentWeibo />,
          label: "MMKV",
        },
        {
          icon: <SiJest />,
          label: "Jest",
        },
        {
          icon: <SiTypescript />,
          label: "Typescript",
        },
        {
          icon: <SiTailwindcss />,
          label: "Nativewind",
        },
        {
          icon: <SiEslint />,
          label: "ESLint",
        },
        {
          icon: <SiPrettier />,
          label: "Prettier",
        },
      ],
    },
  ];
  // SUB SECTION
  const subProjectList: ProjectsList[] = [
    {
      icon: "/project-icons/spotify-transparent.svg",
      title: "Spotify Max +",
      gitUrl: "https://github.com/Bakhaw/spotify",
      description: projects.spotify,
      skills: [
        {
          icon: <SiNextdotjs />,
          label: "NextJS",
        },
        {
          icon: <SiReactquery />,
          label: "TanStack Query",
        },
        {
          icon: <SiShadcnui />,
          label: "shadcn/ui",
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
      icon: "/project-icons/loltimeflash.png",
      gitUrl: "https://github.com/Teczer/LolTimeFlash",
      url: "https://loltimeflash.com/",
      title: "LolTimeFlash",
      description: projects.loltimeflash,
      skills: [
        {
          icon: <SiNextdotjs />,
          label: "NextJS",
        },
        {
          icon: <SiSocketdotio />,
          label: "Socket.io",
        },
        {
          icon: <SiReactquery />,
          label: "TanStack Query",
        },
        {
          icon: <SiExpress />,
          label: "Express.js",
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
    {
      icon: "/carrefour.png",
      gitUrl: "https://github.com/Teczer/New-Delhi",
      title: "New-Delhi",
      description: projects.newDelhi,
      skills: [
        {
          icon: <FaReact />,
          label: "React.js",
        },
        {
          icon: <SiStrapi />,
          label: "Strapi.io",
        },
        {
          icon: <SiPostgresql />,
          label: "PostgreSQL",
        },
        {
          icon: <FaDocker />,
          label: "Docker",
        },
        {
          icon: <FaAws />,
          label: "AWS",
        },
      ],
      desktopGif: ["/new-delhi/builder.gif"],
    },
    {
      icon: "/project-icons/nextra-transparent.svg",
      gitUrl: "https://github.com/Teczer/reading",
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
    {
      icon: "/project-icons/pokeball-transparent.png",
      gitUrl: "https://github.com/Teczer/spallian-test",
      url: "https://poketec.mehdihattou.com/",
      title: "PokéTec",
      description: projects.poketec,
      skills: [
        {
          icon: <FaReact />,
          label: "React.js",
        },
        {
          icon: <SiReactquery />,
          label: "TanStack Query",
        },
        {
          icon: <SiTypescript />,
          label: "TypeScript",
        },
        {
          icon: <FaDocker />,
          label: "Docker",
        },
      ],
    },
    {
      icon: "/project-icons/asteria-transparent.svg",
      gitUrl: "https://github.com/Teczer/Asteriaa",
      url: "https://asteriaspace.fr/",
      title: "Asteria",
      description: projects.asteria,
      skills: [
        {
          icon: <FaReact />,
          label: "React.js",
        },
        {
          icon: <SiJavascript />,
          label: "Javascript",
        },
        {
          icon: <SiExpress />,
          label: "Express.js",
        },
        {
          icon: <SiPostgresql />,
          label: "PostgreSQL",
        },
        {
          icon: <FaDocker />,
          label: "Docker",
        },
      ],
    },
    {
      icon: "/project-icons/nest-transparent.png",
      gitUrl: "https://github.com/Teczer/nestjs-blog",
      url: "https://nestblog.mehdihattou.com/",
      title: "Nestblog",
      description: projects.nestblog,
      skills: [
        {
          icon: <SiNestjs />,
          label: "Nest.js",
        },
        {
          icon: <EJSLogo />,
          label: "EJS",
        },
        {
          icon: <SiTypescript />,
          label: "TypeScript",
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
                <Image
                  width={400}
                  height={400}
                  alt={`${project.title} icon`}
                  className="w-10"
                  src={project.icon}
                />

                <div className="flex items-center justify-between gap-3">
                  {project.npm && (
                    <Link
                      href={project.npm}
                      target="_blank"
                      className="text-xl text-accent transition-all hover:scale-125"
                      aria-label={project.title}
                    >
                      <FaNpm size={50} />
                    </Link>
                  )}
                  <Link
                    href={project.gitUrl}
                    target="_blank"
                    className="text-2xl transition-all hover:scale-125"
                    aria-label={project.title}
                  >
                    <FaGithub className="text-accent" />
                  </Link>
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
                      className="text-xl text-accent transition-all hover:scale-125"
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
              <p
                dangerouslySetInnerHTML={{ __html: project.description }}
                className="text-sm text-muted-foreground"
              />
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
                  <Image
                    width={400}
                    height={400}
                    alt={`${project.title} icon`}
                    className={cn(
                      project.title === "Asteria" ? "w-14" : "w-10"
                    )}
                    src={project.icon}
                  />
                  <div className="flex items-center justify-between gap-3">
                    <Link
                      href={project.gitUrl}
                      target="_blank"
                      className="text-xl transition-all hover:scale-125"
                      aria-label={project.title}
                    >
                      <FaGithub />
                    </Link>
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
