"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#interests", label: "Interests" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-white/5 shadow-[0_8px_32px_rgba(192,193,255,0.08)]">
      <nav className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">
        <div className="text-xl font-bold tracking-tighter text-primary font-headline">
          Bikram Sutar
        </div>
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-muted-foreground hover:text-foreground transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-6">
            <a href="https://github.com/thebstar" target="_blank" className="text-muted-foreground hover:text-primary transition-all">
              <Github size={18} />
            </a>
            <a href="https://www.linkedin.com/in/thebstar/" target="_blank" className="text-muted-foreground hover:text-primary transition-all">
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:6bikramsutar@gmail.com"
              className="text-primary hover:text-primary/80 transition-all"
            >
              <Mail className="w-[18px] h-[18px] md:w-[20px] md:h-[20px]" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-muted-foreground p-2 hover:text-primary transition-all"
            onClick={toggleMenu}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`md:hidden fixed inset-0 top-[65px] bg-background/95 backdrop-blur-2xl transition-all duration-500 z-40 border-t border-white/5 ${
          isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-12 p-8 overflow-y-auto">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-3xl font-headline font-bold text-foreground hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex gap-8 pt-8 border-t border-white/10 w-full justify-center">
            <a href="https://github.com/thebstar" target="_blank">
              <Github className="text-muted-foreground hover:text-primary" />
            </a>
            <a href="https://www.linkedin.com/in/thebstar/" target="_blank">
              <Linkedin className="text-muted-foreground hover:text-primary" />
            </a>
            <a href="mailto:6bikramsutar@gmail.com">
              <Mail className="text-primary" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
