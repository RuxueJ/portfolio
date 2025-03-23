"use client";

import { FiSun, FiMoon } from "react-icons/fi";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme ?? "light" : theme;

  return (
    <button
      className="p-2 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-slate-200"
      onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
    >
      {currentTheme === "dark" ? <FiSun size={20} /> : <FiMoon size={20} />}
    </button>
  );
}
