"use client";

import React, { useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/contact", label: "Contact" },
  { href: "/media", label: "Media" },
  { href: "/projects", label: "Projects" },
  { href: "/resume", label: "Resume" },
  { href: "/resources", label: "Resources" },
  { href: "/internships", label: "Internships" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-white bg-opacity-80 backdrop-blur-md shadow">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/" className="text-2xl font-bold text-gray-900">
          Lavi Saini
        </Link>
        <ul className="hidden md:flex items-center space-x-8">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link href={href} className="text-gray-900 hover:text-gray-600 font-medium">
                {label}
              </Link>
            </li>
          ))}
        </ul>
        {/* Hamburger for mobile */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="block w-6 h-0.5 bg-gray-900 mb-1"></span>
          <span className="block w-6 h-0.5 bg-gray-900 mb-1"></span>
          <span className="block w-6 h-0.5 bg-gray-900"></span>
        </button>
        {/* Mobile menu */}
        {menuOpen && (
          <ul className="absolute top-16 right-4 bg-white shadow-lg rounded-lg p-4 flex flex-col space-y-4 md:hidden">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className="text-gray-900 hover:text-gray-600 font-medium" onClick={() => setMenuOpen(false)}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 