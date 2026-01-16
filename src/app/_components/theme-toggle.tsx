"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";

type Theme = "light" | "dark";

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "light";
  const saved = window.localStorage.getItem("theme");
  if (saved === "light" || saved === "dark") return saved;
  return window.matchMedia?.("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function ThemeToggle() {
  const [theme, setTheme] = React.useState<Theme>(() => getInitialTheme());

  React.useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      window.localStorage.setItem("theme", theme);
    } catch {
      // ignore
    }
  }, [theme]);

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      aria-label={isDark ? "Ativar tema claro" : "Ativar tema escuro"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border transition hover:-translate-y-[1px] active:translate-y-0"
      style={{
        background: "var(--surface)",
        borderColor: "var(--stroke)",
        boxShadow: "var(--shadow-soft)",
      }}
    >
      {isDark ? (
        <Sun size={18} style={{ color: "var(--gold)" }} />
      ) : (
        <Moon size={18} style={{ color: "var(--wine)" }} />
      )}
    </button>
  );
}
