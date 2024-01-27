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
        className="text-4xl text-center text-white font-bold mb-10"
        variants={fadeInAnimationsVariants}
        initial={isVisible ? "animate" : "initial"}
        animate={isVisible ? "animate" : "initial"}
        custom={0}
      >
        Contact
      </motion.h2>
      <div className="flex flex-col justify-center items-center gap-3">
        <motion.p
          className="text-white"
          variants={fadeInAnimationsVariants}
          initial={isVisible ? "animate" : "initial"}
          animate={isVisible ? "animate" : "initial"}
          custom={1}
        >
          {staticTitle}
        </motion.p>
        <ul className="flex gap-3 justify-center items-center flex-wrap">
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
                  className="p-2 px-3 rounded-full text-sm font-medium"
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
