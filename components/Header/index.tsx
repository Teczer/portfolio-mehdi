import Image from "next/image";
import Link from "next/link";

interface HeaderNavigation {
  title: string;
  href: string;
}

const Header: React.FC = () => {
  const navigation: HeaderNavigation[] = [
    {
      title: "Compétences",
      href: "#skills",
    },
    {
      title: "Projets",
      href: "#projects",
    },
    {
      title: "Contact",
      href: "#contact",
    },
  ];

  return (
    <header>
      <div className="items-center justify-between hidden sm:flex py-4">
        <Image
          src="/Mehdoche.jpg"
          alt="Mehdi HATTOU"
          className="rounded-full"
          width={40}
          height={40}
          priority
        />
        <nav>
          <ul className="items-center hidden gap-8 sm:flex ">
            {navigation.map((value, index) => {
              return (
                <li key={index}>
                  <Link className="flex gap-2" href={value.href}>
                    <span className="text-primary">{index + 1}.</span>
                    <span className="text-white">{value.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      <div></div>
    </header>
  );
};

export default Header;
