import { useState } from "react";

type Theme = "light" | "dark";
const STORAGE_KEY = "theme";

const currentTheme = (): Theme =>
  document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";

function readStored(): Theme | null {
  try {
    const t = localStorage.getItem(STORAGE_KEY);
    return t === "light" || t === "dark" ? t : null;
  } catch {
    return null;
  }
}

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.setAttribute("data-theme", theme);
  root.style.colorScheme = theme;
}

// Inline SVG icons (no icon font needed, so the toggle also works on the artist page).
const SunIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
    <circle cx="12" cy="12" r="4.5" />
    <path d="M12 1.5v2.5M12 20v2.5M4.6 4.6l1.8 1.8M17.6 17.6l1.8 1.8M1.5 12H4M20 12h2.5M4.6 19.4l1.8-1.8M17.6 6.4l1.8-1.8" />
  </svg>
);

const MoonIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.5 14.6A8.5 8.5 0 0 1 9.4 3.5a.6.6 0 0 0-.8-.7A9.7 9.7 0 1 0 21.2 15.4a.6.6 0 0 0-.7-.8Z" />
  </svg>
);

/** Sun/moon button. Starts from the theme set by the inline script in the page <head>. */
const ThemeToggle: React.FC = () => {
  // Light by default; dark only after the visitor clicks (choice saved in localStorage).
  const [theme, setTheme] = useState<Theme>(() => readStored() ?? currentTheme());

  const next: Theme = theme === "dark" ? "light" : "dark";

  const toggle = () => {
    applyTheme(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* storage unavailable: the choice lasts for this page view only */
    }
    setTheme(next);
  };

  return (
    <button
      type="button"
      className="icon-btn theme-toggle"
      onClick={toggle}
      aria-label={`Switch to ${next} mode`}
      title={`Switch to ${next} mode`}
    >
      {theme === "dark" ? <SunIcon /> : <MoonIcon />}
    </button>
  );
};

export default ThemeToggle;
