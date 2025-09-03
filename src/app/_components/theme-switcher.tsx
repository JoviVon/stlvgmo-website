"use client";

import styles from "./switch.module.css";
import { useEffect, useState } from "react";

declare global {
  var updateDOM: () => void;
}

type ColorSchemePreference = "system" | "dark" | "light";

const STORAGE_KEY = "nextjs-blog-starter-theme";
const modes: ColorSchemePreference[] = ["system", "dark", "light"];

/**
 * Switch button to quickly toggle user preference.
 */
const Switch = () => {
  const [mode, setMode] = useState<ColorSchemePreference>("system");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const storedMode = (localStorage.getItem(STORAGE_KEY) ?? "system") as ColorSchemePreference;
    setMode(storedMode);
    
    /** Sync the tabs */
    const handleStorageChange = (e: StorageEvent): void => {
      if (e.key === STORAGE_KEY) {
        setMode(e.newValue as ColorSchemePreference);
      }
    };
    addEventListener("storage", handleStorageChange);
    
    return () => {
      removeEventListener("storage", handleStorageChange);
    };
  }, []);

  useEffect(() => {
    if (mounted && window.updateDOM) {
      localStorage.setItem(STORAGE_KEY, mode);
      window.updateDOM();
    }
  }, [mode, mounted]);

  /** toggle mode */
  const handleModeSwitch = () => {
    const index = modes.indexOf(mode);
    setMode(modes[(index + 1) % modes.length]);
  };

  if (!mounted) {
    return (
      <button
        className={styles.switch}
        disabled
        aria-label="Theme switcher loading"
      />
    );
  }

  return (
    <button
      className={styles.switch}
      onClick={handleModeSwitch}
      aria-label={`Switch to ${modes[(modes.indexOf(mode) + 1) % modes.length]} mode`}
    />
  );
};

/**
 * This component which applies classes and transitions.
 */
export const ThemeSwitcher = () => {
  return <Switch />;
};
