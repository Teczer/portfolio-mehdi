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
      href: "",
    },
  ];
  return (
    <section className="flex flex-col justify-center items-center gap-10 h-[calc(100svh-40px-32px)] text-white py-56 sm:flex-row-reverse">
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
          <p className="text-primary text-2xl font-bold relative right-2">
            Hey! Je suis -
          </p>
          <h1 className="text-[clamp(3rem,5vw+1rem,6.2rem)] font-bold text-primary leading-[1.1]">
            Mehdi Hattou
          </h1>
          <p className="text-[clamp(1.5rem,1.3vw+1rem,2.6rem)] text-white sm:mt-4">
            <b>Développeur Web.</b> Qui a été touché par React depuis son
            départ.
          </p>
        </div>
        <ul className="flex gap-3">
          {badgeLinks.map((badge, index) => {
            return (
              <li key={index}>
                <Link href={badge.href} target="_blank">
                  <Badge variant="destructive">
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
