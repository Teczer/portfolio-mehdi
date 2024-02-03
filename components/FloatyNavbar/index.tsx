"use client";

import { FloatingNav } from "../ui/floating-navbar";

export function FloatingNavDemo() {
  return (
    <div className="absolute w-full sm:hidden">
      <FloatingNav />
    </div>
  );
}
