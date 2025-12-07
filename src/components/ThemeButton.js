"use client";

import { useState, useEffect } from "react";

export default function ThemeButton() {
  const [darkTheme, setDarkTheme] = useState(false);

  // Efeito de inicialização

  useEffect(()=> {
    const savedTheme = localStorage.getItem("theme")

    // Se tiver salvo 'dark', ou se não tiver nada salvo mas o sistema for escuro
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

    if(savedTheme === "dark" || (!savedTheme && systemPrefersDark)){
      setDarkTheme(true);
      document.documentElement.classList.add("dark")
    } else{
      setDarkTheme(false);
      document.documentElement.classList.remove("dark")
    }
  }, [])


  const changeTheme = () => {
    if (darkTheme) {
      // Claro
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light")
      setDarkTheme(false);
    } else {
      // Escuro
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark")
      setDarkTheme(true);
    }
  };



  return (
    <button
      onClick={changeTheme}
      className=" cursor-pointer fixed bottom-5 right-5 p-3 rounded-full shadow-lg font-bold transition-all hover:scale-110 
                 bg-gray-200 text-black dark:bg-gray-800 dark:text-white border-2 border-gray-300 dark:border-gray-600"
    >
      {darkTheme ? "🌙 Escuro" : "🌞 Claro"}
    </button>
  );
}
