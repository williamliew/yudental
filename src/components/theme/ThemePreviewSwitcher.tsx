"use client";

import {
  DEFAULT_THEME_ID,
  THEME_OPTIONS,
  THEME_STORAGE_KEY,
  type ThemeId,
  isThemeId,
} from "@/lib/themes";
import { type ChangeEvent, useEffect, useState } from "react";

function applyTheme(themeId: ThemeId) {
  document.documentElement.dataset.theme = themeId;
  localStorage.setItem(THEME_STORAGE_KEY, themeId);
}

export function ThemePreviewSwitcher() {
  const [activeTheme, setActiveTheme] = useState<ThemeId>(DEFAULT_THEME_ID);

  useEffect(() => {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    if (stored && isThemeId(stored)) {
      setActiveTheme(stored);
    }
  }, []);

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const nextTheme = event.target.value;
    if (!isThemeId(nextTheme)) {
      return;
    }

    applyTheme(nextTheme);
    setActiveTheme(nextTheme);
  };

  return (
    <section
      className="fixed bottom-4 right-4 z-[90] flex max-w-[min(100vw-2rem,18rem)] flex-col gap-2 rounded-lg border border-grey-mid/30 bg-white p-3 shadow-lg"
      aria-label="Theme preview controls"
    >
      <span className="text-xs font-semibold uppercase tracking-wide text-grey-mid">
        Theme preview
      </span>
      <label htmlFor="theme-preview-select" className="sr-only">
        Preview colour theme
      </label>
      <select
        id="theme-preview-select"
        value={activeTheme}
        onChange={handleChange}
        aria-label="Preview colour theme"
        className="w-full rounded border border-grey-mid/40 bg-white px-3 py-2 text-sm text-grey-dark outline-none focus:border-teal focus:ring-2 focus:ring-teal/20"
      >
        {THEME_OPTIONS.map((theme) => (
          <option key={theme.id} value={theme.id}>
            {theme.label}
          </option>
        ))}
      </select>
      <p className="text-xs text-grey-mid leading-snug">
        {THEME_OPTIONS.find((theme) => theme.id === activeTheme)?.description}
      </p>
    </section>
  );
}
