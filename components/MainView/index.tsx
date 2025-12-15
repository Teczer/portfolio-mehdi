"use client";

import { useEffect, useState } from "react";

import Link from "next/link";
import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { fadeInAnimationsVariants } from "@/lib/fadeInAnimation";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { useContactBadge } from "@/hooks/useContactBadge";

import { PointBg } from "../Svg";

const MainView: React.FC<{ mainView: any }> = ({ mainView }) => {
  const badgeLinks = useContactBadge;

  const [ref, inView] = useInView({ triggerOnce: false });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(inView);
  }, [inView]);

  const controls = useAnimation();

  const handleHoverStart = () => {
    controls.start({
      rotate: 360,
      transition: { duration: 0.4 },
    });
  };

  const handleHoverEnd = () => {
    controls.start({
      rotate: 0,
      transition: { duration: 0.4 },
    });
  };

  return (
    <section
      ref={ref}
      className="flex h-[calc(100svh-40px-32px)] flex-col items-center justify-center gap-10 px-4 py-56 text-accent sm:flex-row-reverse"
    >
      <div className="size-44 sm:size-fit">
        <motion.div
          variants={fadeInAnimationsVariants}
          initial={isVisible ? "animate" : "initial"}
          animate={isVisible ? "animate" : "initial"}
          custom={0}
        >
          <motion.div
            onHoverStart={handleHoverStart}
            onHoverEnd={handleHoverEnd}
            animate={controls}
            className="rounded-full"
          >
            <Image
              src="/Mehdoche.jpg"
              alt="Mehdi HATTOU"
              className="size-auto rounded-full"
              width={400}
              height={400}
              priority
              fetchPriority="high"
            />
          </motion.div>
        </motion.div>
      </div>
      <div className="flex w-full flex-col gap-6 sm:gap-10">
        <div className="relative flex w-fit flex-col gap-2">
          <motion.div
            variants={fadeInAnimationsVariants}
            initial={isVisible ? "animate" : "initial"}
            animate={isVisible ? "animate" : "initial"}
            custom={0}
          >
            <div className="absolute left-[-16px] top-[-16px] z-[-1]">
              <PointBg />
            </div>
          </motion.div>
          <motion.p
            variants={fadeInAnimationsVariants}
            initial={isVisible ? "animate" : "initial"}
            animate={isVisible ? "animate" : "initial"}
            custom={0}
            className="gradient-primary relative right-2 text-2xl font-bold text-primary"
          >
            {mainView.salutation}
          </motion.p>
          <motion.h1
            variants={fadeInAnimationsVariants}
            initial={isVisible ? "animate" : "initial"}
            animate={isVisible ? "animate" : "initial"}
            custom={1}
            className="gradient-primary w-[70%] text-[clamp(3rem,5vw+1rem,6.2rem)] font-bold leading-[1.1]"
          >
            Mehdi Hattou
          </motion.h1>
          <motion.p
            variants={fadeInAnimationsVariants}
            initial={isVisible ? "animate" : "initial"}
            animate={isVisible ? "animate" : "initial"}
            custom={2}
            className="text-[clamp(1.5rem,1.3vw+1rem,2.6rem)] text-accent sm:mt-4"
          >
            <b>{mainView.jobTitle}</b>
            {mainView.jobDescription}
          </motion.p>
        </div>
        <ul className="flex flex-wrap gap-3">
          {badgeLinks.map((badge, index) => (
            <motion.li
              key={index}
              variants={fadeInAnimationsVariants}
              initial={isVisible ? "animate" : "initial"}
              animate={isVisible ? "animate" : "initial"}
              custom={index + 3}
            >
              <Link href={badge.href} target="_blank">
                <Badge
                  className="rounded-full p-2 px-3 text-sm font-medium"
                  variant="destructive"
                >
                  <i className="mr-2">{badge.icon}</i>
                  {badge.label}
                </Badge>
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default MainView;
