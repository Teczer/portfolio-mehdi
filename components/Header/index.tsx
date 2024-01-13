"use client";

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";

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

  const [burger, setBurger] = useState<boolean>(false);

  return (
    <header>
      <div className="items-center justify-between flex py-4">
        <Image
          src="/Mehdoche.jpg"
          alt="Mehdi HATTOU"
          className="rounded-full w-auto h-auto"
          width={40}
          height={40}
          priority
        />
        {/* DESKTOP SECTION */}
        <nav>
          <ul className="hidden sm:flex items-center gap-8">
            {navigation.map((value, index) => {
              return (
                <li key={index}>
                  <Link className="flex gap-2" href={value.href}>
                    <span className="text-primary font-mono">{index}.</span>
                    <span className="text-white">{value.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        {/* MOBILE SECTION */}
        <button
          className="text-white sm:hidden"
          onClick={() => setBurger(true)}
        >
          <RxHamburgerMenu className="w-10 h-10" />
        </button>
        {burger && (
          <div className="fixed inset-0 z-10 backdrop-blur-sm">
            <nav className="w-2/4 flex flex-col items-end h-full animate-swipeFromLeft justify-center gap-8 p-8 bg-paper1 ml-auto">
              <button
                onClick={() => setBurger(false)}
                className="absolute top-4 right-4"
              >
                <RxCross2 className="text-white w-8 h-8" />
              </button>
              <Image
                src="/Mehdoche.jpg"
                alt="Mehdi HATTOU"
                className="rounded-full w-auto h-auto"
                width={80}
                height={80}
              />
              <ul className="flex flex-col items-baseline gap-8">
                {navigation.map((value, index) => {
                  return (
                    <li key={index}>
                      <Link className="text-xl md:text-base" href={value.href}>
                        <span className="text-primary font-mono">
                          {index + 1}.
                        </span>
                        <span className="text-white">{value.title}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        )}
      </div>
      <div></div>
    </header>
  );
};

export default Header;
