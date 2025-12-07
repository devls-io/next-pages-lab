"use client";

import { useState, useEffect } from "react";

export default function ThemeButton() {
  const [darkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    // True ou False
    const useDark = savedTheme === "dark" || (!savedTheme && systemPrefersDark);

    // Atualiza o DOM baseado no valor

    document.documentElement.classList.toggle("dark", useDark);

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setDarkTheme(useDark);
  }, []);

  const changeTheme = () => {
    if (darkTheme) {
      // Vai para Claro
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDarkTheme(false);
    } else {
      // Vai para Escuro
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDarkTheme(true);
    }
  };

  return (
    <button
      onClick={changeTheme}
      className="cursor-pointer fixed bottom-5 right-5 p-3 rounded-full shadow-lg font-bold transition-all hover:scale-110 z-50 bg-gray-200 text-black dark:bg-gray-800 dark:text-white border-2 border-gray-300 dark:border-gray-600"
    >
      {darkTheme ? "🌙 Escuro" : "🌞 Claro"}
    </button>
  );
}
