"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
  { href: "/ironman-journal", label: "Ironman Journal" },
  { href: "/spiritual-blog", label: "Spiritual Blog" },
  { href: "/tech-blog", label: "Tech Blog" },
  { href: "/defense-blog", label: "Defense Blog" },
  { href: "/contact", label: "Contact" },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-gray-900 bg-opacity-50 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/" className="text-2xl font-bold text-white">
          Lavi
        </Link>
        <ul className="hidden md:flex items-center space-x-6">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link href={href} className="relative text-white hover:text-gray-300">
                {label}
                {pathname === href && (
                  <motion.div
                    className="absolute bottom-[-4px] left-0 h-0.5 w-full bg-white"
                    layoutId="underline"
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar; 