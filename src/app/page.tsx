import React from 'react';
import { Github, Linkedin, Twitter } from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-900 text-white">
      <div className="container mx-auto flex flex-col items-center justify-center px-4 text-center">
        <div className="mb-8">
          <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl">
            Lavi
          </h1>
          <p className="mt-4 text-xl text-gray-300">
            Cybersecurity Professional & Spiritual Explorer
          </p>
        </div>
        <div className="flex space-x-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-gray-800 p-3 text-white hover:bg-gray-700"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-gray-800 p-3 text-white hover:bg-gray-700"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-gray-800 p-3 text-white hover:bg-gray-700"
          >
            <Twitter className="h-6 w-6" />
          </a>
        </div>
      </div>
    </main>
  );
} 