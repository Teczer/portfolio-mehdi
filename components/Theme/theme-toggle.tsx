import * as React from "react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ThemeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button aria-label="switch-color-button" variant="outline" size="icon">
          <div className="size-5 rounded-full bg-destructive"></div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("red")}>
          <div className="flex w-full items-center justify-between px-3">
            <p>Tomato</p>
            <p>🍅</p>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("green")}>
          <div className="flex w-full items-center justify-between px-3">
            <p>Jade</p>
            <p>🍀</p>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("yellow")}>
          <div className="flex w-full items-center justify-between px-3">
            <p>Amber</p>
            <p>🍂</p>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("purple")}>
          <div className="flex w-full items-center justify-between px-3">
            <p>Iris</p>
            <p>🍇</p>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
