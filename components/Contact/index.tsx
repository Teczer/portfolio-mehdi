"use client";

import { useEffect, useState } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Badge } from "@/components/ui/badge";
import { fadeInAnimationsVariants } from "@/lib/fadeInAnimation";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { useContactBadge } from "@/hooks/useContactBadge";

const Contact: React.FC = () => {
  const pathname = usePathname();

  const staticTitle: string =
    pathname === "/fr"
      ? "N'hésitez pas à me contacter par e-mail, par téléphone ou via mes réseaux sociaux."
      : "Feel free to contact me via email, phone, or through my social media channels.";
  const badgeLinks = useContactBadge;

  const [ref, inView] = useInView({ triggerOnce: false });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(inView);
  }, [inView]);

  return (
    <div className="w-full" id="contact" ref={ref}>
      <motion.h2
        className="mb-10 text-center text-4xl font-bold text-accent"
        variants={fadeInAnimationsVariants}
        initial={isVisible ? "animate" : "initial"}
        animate={isVisible ? "animate" : "initial"}
        custom={0}
      >
        Contact
      </motion.h2>
      <div className="flex flex-col items-center justify-center gap-3">
        <motion.p
          className="text-center text-accent"
          variants={fadeInAnimationsVariants}
          initial={isVisible ? "animate" : "initial"}
          animate={isVisible ? "animate" : "initial"}
          custom={1}
        >
          {staticTitle}
        </motion.p>
        <ul className="flex flex-wrap items-center justify-center gap-3">
          {badgeLinks.map((badge, index) => (
            <motion.li
              key={index}
              variants={fadeInAnimationsVariants}
              initial={isVisible ? "animate" : "initial"}
              animate={isVisible ? "animate" : "initial"}
              custom={index + 2}
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
    </div>
  );
};

export default Contact;
