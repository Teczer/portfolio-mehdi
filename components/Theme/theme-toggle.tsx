import * as React from "react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface ThemeSchemes {
  label: string;
  icon: string;
  theme: string;
}

export function ThemeToggle() {
  const { setTheme } = useTheme();

  const themeSchemes: ThemeSchemes[] = [
    {
      label: "Tomato",
      icon: "🍅",
      theme: "red",
    },
    {
      label: "Jade",
      icon: "🍀",
      theme: "green",
    },
    {
      label: "Amber",
      icon: "🌕",
      theme: "yellow",
    },
    {
      label: "Iris",
      icon: "🍇",
      theme: "purple",
    },
    {
      label: "Indigo",
      icon: "🌌",
      theme: "blue",
    },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button aria-label="switch-color-button" variant="outline" size="icon">
          <div className="size-5 rounded-full bg-destructive"></div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {themeSchemes.map((theme, index) => {
          return (
            <DropdownMenuItem onClick={() => setTheme(theme.theme)} key={index}>
              <div className="flex w-full items-center justify-between px-3">
                <p>{theme.label}</p>
                <p>{theme.icon}</p>
              </div>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
