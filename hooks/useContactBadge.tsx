import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

interface BadgeLinks {
  label: string;
  icon: React.ReactNode;
  href: string;
}

export const useContactBadge: BadgeLinks[] = [
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
    label: "Twitter",
    icon: <FaTwitter />,
    href: "https://twitter.com/Mehdi_Hattou",
  },
  {
    label: "(+33) 7 69 86 87 32",
    icon: <FaPhone />,
    href: "tel:+33769868732",
  },
  {
    label: "mehdi.hattou1@gmail.com",
    icon: <FaEnvelope />,
    href: "mailto:mehdi.hattou1@gmail.com",
  },
];
