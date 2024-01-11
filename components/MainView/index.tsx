import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

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
        <Image
          src="/Mehdoche.jpg"
          alt="Mehdi HATTOU"
          className="rounded-full sm:"
          width={400}
          height={400}
        />
      </div>
      <div className="flex flex-col gap-6 sm:gap-10 w-full">
        <div className="w-fit flex flex-col gap-2 relative">
          <Image
            src="/point-bg.svg"
            alt="Mehdi HATTOU"
            className="absolute top-[-16px] left-[-16px] z-[-1]"
            width={120}
            height={120}
          />
          <p className="text-primary text-2xl font-bold relative right-2 gradient-primary">
            Hey! Je suis -
          </p>
          <h1 className="text-[clamp(3rem,5vw+1rem,6.2rem)] font-bold leading-[1.1] w-[70%] gradient-primary">
            Mehdi Hattou
          </h1>
          <p className="text-[clamp(1.5rem,1.3vw+1rem,2.6rem)] text-white sm:mt-4">
            <b>Développeur Web.</b> Entrenant une forte affinité avec React,
            basé à Paris.
          </p>
        </div>
        <ul className="flex gap-3">
          {badgeLinks.map((badge, index) => {
            return (
              <li key={index}>
                <Link href={badge.href} target="_blank">
                  <Badge
                    className="p-2 px-3 rounded-full text-sm font-medium"
                    variant="destructive"
                  >
                    <i className="mr-2">{badge.icon}</i>
                    {badge.label}
                  </Badge>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default MainView;
