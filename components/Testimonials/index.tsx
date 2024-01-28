"use client";

import { useEffect, useState } from "react";

import Link from "next/link";
import Image, { StaticImageData } from "next/image";

import { FaLinkedin } from "react-icons/fa";

import { fadeInAnimationsVariants } from "@/lib/fadeInAnimation";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import vanHoiNguyen from "@/public/van-hoi-nguyen.jpg";
import abderrahmaneMouzoune from "@/public/abderrahmane-mouzoune.jpg";
import carrefour from "@/public/carrefour.png";
import linkedin from "@/public/linkedin.png";

interface ProjectsList {
  name: string;
  title: string;
  image: StaticImageData;
  businessLogo: StaticImageData;
  businessWebsiteURL: string;
  linkedinURL: string;
  hierarchie: string;
  description: string;
}

interface TestimonialProps {
  sectionTitle: string;
  van: {
    title: string;
    hierarchy: string;
    description: string;
  };
  abderrahmane: {
    title: string;
    hierarchy: string;
    description: string;
  };
}

const Testimonials: React.FC<{ testimonial: TestimonialProps }> = ({
  testimonial,
}) => {
  // MAIN SECTION
  const projectList: ProjectsList[] = [
    {
      name: "Van Hoi NGUYEN",
      title: testimonial.van.title,
      image: vanHoiNguyen,
      businessLogo: carrefour,
      businessWebsiteURL: "https://www.carrefour.com/",
      linkedinURL: "https://www.linkedin.com/in/van-hoi-nguyen-b2493a51/",
      hierarchie: testimonial.van.hierarchy,
      description: testimonial.van.description,
    },
    {
      name: "Abderrahmane Mouzoune",
      title: testimonial.abderrahmane.title,
      image: abderrahmaneMouzoune,
      businessLogo: carrefour,
      businessWebsiteURL: "https://www.carrefour.com/",
      linkedinURL: "https://www.linkedin.com/in/abderrahmane-mouzoune/",
      hierarchie: testimonial.abderrahmane.hierarchy,
      description: testimonial.abderrahmane.description,
    },
  ];

  // FRAMER MOTION

  const [ref, inView] = useInView({ triggerOnce: false });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(inView);
  }, [inView]);

  return (
    <div className="w-full" id="recommendations" ref={ref}>
      <h2 className="mb-10 text-center text-4xl font-bold text-accent">
        {testimonial.sectionTitle}
      </h2>
      {/* MAIN SECTION */}
      <div className="flex flex-wrap items-start justify-start gap-8">
        {/* CARD */}
        {projectList.map((project, index) => {
          return (
            <motion.div
              className="flex h-auto min-w-80 flex-1 gap-3 rounded-lg border bg-card px-3 py-6 shadow-2xl sm:p-6"
              key={index}
              variants={fadeInAnimationsVariants}
              initial={isVisible ? "animate" : "initial"}
              animate={isVisible ? "animate" : "initial"}
              custom={index}
            >
              <Image
                src={project.image}
                alt="Mehdi HATTOU"
                className="size-12 rounded-full"
                width={40}
                height={40}
              />
              <div className="flex flex-col items-start justify-start gap-2">
                <div className="flex w-full items-center justify-between">
                  <div className="flex flex-col items-start justify-start gap-1">
                    <h3 className="text-lg font-bold leading-none tracking-tight text-accent sm:text-xl">
                      {project.name}
                    </h3>
                    <h4 className="text-sm font-normal leading-none tracking-tight text-accent">
                      {project.title}
                    </h4>
                  </div>
                  <div className="flex items-center justify-between gap-2 sm:gap-4">
                    <Link href={project.businessWebsiteURL} target="_blank">
                      <Image
                        src={project.businessLogo}
                        className="cursor-pointer transition-all hover:scale-110"
                        alt="logo-entreprise"
                        width={40}
                        height={40}
                      />
                    </Link>
                    <Link href={project.linkedinURL} target="_blank">
                      <Image
                        src={linkedin}
                        className="cursor-pointer transition-all hover:scale-110"
                        alt="linkedin"
                        width={50}
                        height={50}
                      />
                    </Link>
                  </div>
                </div>
                <p className="text-sm font-medium text-muted-foreground">
                  {project.hierarchie}
                </p>
                <p className="text-sm text-accent">{project.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Testimonials;
