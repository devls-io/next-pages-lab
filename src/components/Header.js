"use client";
import NavItem from "./NavItem";
import MobileMenuButton from "./MobileMenuButton";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = ()=> {
    // Inverte o valor
    setIsMenuOpen(!isMenuOpen)
  }

  // Reset no Resize

  useEffect(()=> {
    const handleResize = ()=> {
      if(window.innerWidth >= 768){
        setIsMenuOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)

    return ()=> {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md transition-colors duration-300">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* LOGO */}
        <div className="text-xl font-bold text-gray-800 dark:text-gray-100">
          <Link href="/">⚡ Next.Lab</Link>
        </div>

        {/* --- MENU DESKTOP --- 
            hidden md:flex -> Escondido no celular, Flexível no Desktop (md pra cima)
        */}
        <nav className="hidden md:flex">
          <ul className="flex gap-6">

            <NavItem href="/">
              Home
            </NavItem>

            <NavItem href="/sobre">
              Sobre
            </NavItem>

            <NavItem href="/contato">
              Contato
            </NavItem>


          </ul>
        </nav>

        {/* --- BOTÃO HAMBÚRGUER (MOBILE) ---*/}

          <MobileMenuButton isOpen={isMenuOpen} onClick={toggleMenu} />
      </div>

      {/* --- MENU MOBILE (DROPDOWN) --- 
          Só renderiza se isMenuOpen for TRUE
      */}
      <div 
        className={`
          md:hidden 
          overflow-hidden 
          transition-all duration-300 ease-in-out 
          ${isMenuOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
          <nav>
            <ul className="flex flex-col p-4 space-y-4">
              <NavItem href="/" onClick={() => setIsMenuOpen(false)}>
                Home
              </NavItem>
              <NavItem href="/sobre" onClick={() => setIsMenuOpen(false)}>
                Sobre
              </NavItem>
              <NavItem href="/contato" onClick={() => setIsMenuOpen(false)}>
                Contato
              </NavItem>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
