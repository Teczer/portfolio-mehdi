"use client";

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import LocaleSwitcher from "../LocaleSwitcher";

interface HeaderNavigation {
  title: string;
  href: string;
}

const Header: React.FC<{ navigation: any }> = ({ navigation }) => {
  const navigationItems: HeaderNavigation[] = [
    {
      title: navigation.skills,
      href: "#skills",
    },
    {
      title: navigation.projects,
      href: "#projects",
    },
    {
      title: navigation.recommendations,
      href: "#recommendations",
    },
    {
      title: navigation.contact,
      href: "#contact",
    },
  ];

  const [burger, setBurger] = useState<boolean>(false);

  return (
    <header>
      <div className="flex items-center justify-between py-4">
        <LocaleSwitcher />
        {/* DESKTOP SECTION */}
        <nav>
          <ul className="hidden items-center gap-8 sm:flex">
            {navigationItems.map((value, index) => {
              return (
                <li key={index}>
                  <Link className="flex gap-2" href={value.href}>
                    <span className="font-mono text-primary">{index}.</span>
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
          <RxHamburgerMenu className="size-10" />
        </button>
        {burger && (
          <div className="fixed inset-0 z-10 backdrop-blur-sm">
            <nav className="animate-swipeFromLeft bg-paper1 ml-auto flex h-full w-2/4 flex-col items-end justify-center gap-8 p-8">
              <button
                onClick={() => setBurger(false)}
                className="absolute right-4 top-4"
              >
                <RxCross2 className="size-8 text-white" />
              </button>
              <Image
                src="/Mehdoche.jpg"
                alt="Mehdi HATTOU"
                className="size-auto rounded-full"
                width={80}
                height={80}
              />
              <ul className="flex flex-col items-baseline gap-8">
                {navigationItems.map((value, index) => {
                  return (
                    <li key={index}>
                      <Link
                        className="text-xl md:text-base"
                        href={value.href}
                        onClick={() => setBurger(false)}
                      >
                        <span className="font-mono text-primary">{index}.</span>
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
