"use client";

import { motion } from "framer-motion";

import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

import { fadeInAnimationsVariants } from "@/lib/fadeInAnimation";

interface BadgeLinks {
  label: string;
  icon: React.ReactNode;
  href: string;
}

const MainView: React.FC = () => {
  const badgeLinks: BadgeLinks[] = [
    {
      label: "Github",
      icon: <FaGithub />,
      href: "https://github.com/Teczer",
    },
    {
      label: "LinkedIn",
      icon: <FaLinkedin />,
      href: "https://www.linkedin.com/in/mehdi-hattou/",
    },
    {
      label: "mehdi.hattou1@gmail.com",
      icon: <FaEnvelope />,
      href: "mailto:mehdi.hattou1@gmail.com",
    },
  ];

  return (
    <section className="flex flex-col justify-center items-center gap-10 px-4 h-[calc(100svh-40px-32px)] text-white py-56 sm:flex-row-reverse">
      <div className="w-44 h-44 sm:w-fit sm:h-fit">
        <motion.div
          variants={fadeInAnimationsVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          custom={0}
        >
          <Image
            src="/Mehdoche.jpg"
            alt="Mehdi HATTOU"
            className="rounded-full sm:"
            width={400}
            height={400}
          />
        </motion.div>
      </div>
      <div className="flex flex-col gap-6 sm:gap-10 w-full">
        <div className="w-fit flex flex-col gap-2 relative">
          <motion.div
            variants={fadeInAnimationsVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={0}
          >
            <Image
              src="/point-bg.svg"
              alt="Mehdi HATTOU"
              className="absolute top-[-16px] left-[-16px] z-[-1]"
              width={120}
              height={120}
            />
          </motion.div>
          <motion.p
            variants={fadeInAnimationsVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={0}
            className="text-primary text-2xl font-bold relative right-2 gradient-primary"
          >
            Hey! Je suis -
          </motion.p>
          <motion.h1
            variants={fadeInAnimationsVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={1}
            className="text-[clamp(3rem,5vw+1rem,6.2rem)] font-bold leading-[1.1] w-[70%] gradient-primary"
          >
            Mehdi Hattou
          </motion.h1>
          <motion.p
            variants={fadeInAnimationsVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={2}
            className="text-[clamp(1.5rem,1.3vw+1rem,2.6rem)] text-white sm:mt-4"
          >
            <b>Développeur Web.</b> Partageant une forte affinité avec React,
            basé à Paris.
          </motion.p>
        </div>
        <ul className="flex gap-3 flex-wrap">
          {badgeLinks.map((badge, index) => {
            return (
              <motion.li
                key={index}
                variants={fadeInAnimationsVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                custom={index + 3}
              >
                <Link href={badge.href} target="_blank">
                  <Badge
                    className="p-2 px-3 rounded-full text-sm font-medium"
                    variant="destructive"
                  >
                    <i className="mr-2">{badge.icon}</i>
                    {badge.label}
                  </Badge>
                </Link>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default MainView;
