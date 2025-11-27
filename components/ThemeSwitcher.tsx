"use client";

import { useTheme } from "@/hooks/useTheme";
import { FiMoon, FiSun } from "react-icons/fi";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  const handleToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      type="button"
      onClick={handleToggle}
      className="p-2 rounded-full bg-background text-foreground cursor-pointer"
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <FiMoon className="w-5 h-5" />
      ) : (
        <FiSun className="w-5 h-5" />
      )}
    </button>
  );
}
