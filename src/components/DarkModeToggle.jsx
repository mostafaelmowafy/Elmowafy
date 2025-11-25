// DarkModeToggle.jsx
import { useEffect, useState } from "react";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";

export default function DarkModeToggle({ children }) {
  const [darkMode, setDarkMode] = useState(() => {
    // اقرأ من localStorage لو موجود
    const saved = localStorage.getItem("theme");
    if (saved) return saved === "dark";
    // افتراضيًا اتّبع نظام المستخدم
    return (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    );
  });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className=" text-lg cursor-pointer hover:text-primary duration-300 flex gap-2 items-center"
      aria-label="Toggle dark mode"
    >
      {darkMode ? <MdOutlineLightMode /> : <MdDarkMode />}
      {children}
    </button>
  );
}
