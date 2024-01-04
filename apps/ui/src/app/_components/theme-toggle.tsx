"use client";
import { ModeToggle } from "@zeevo/ui/mode-toggle";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { setTheme } = useTheme();
  return <ModeToggle setTheme={setTheme} dropdownClassName="border-border" />;
}
