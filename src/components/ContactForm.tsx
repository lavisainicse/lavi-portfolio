"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const ContactForm = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/YOUR_UNIQUE_ID", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("Thanks for your message!");
        form.reset();
      } else {
        setStatus("Oops! There was a problem submitting your form.");
      }
    } catch (error) {
      setStatus("Oops! There was a problem submitting your form.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-xl space-y-6">
      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-300">
          Your Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          required
          className="block w-full rounded-lg border border-gray-600 bg-gray-700 p-2.5 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500"
        />
      </div>
      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-300">
          Your Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          required
          className="block w-full rounded-lg border border-gray-600 bg-gray-700 p-2.5 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500"
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-300">
          Message
        </label>
        <textarea
          name="message"
          id="message"
          rows={4}
          required
          className="block w-full rounded-lg border border-gray-600 bg-gray-700 p-2.5 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500"
        ></textarea>
      </div>
      <motion.button
        type="submit"
        className="w-full rounded-lg bg-blue-600 px-5 py-3 text-center text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-800"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Send Message
      </motion.button>
      {status && <p className="mt-4 text-center text-gray-400">{status}</p>}
    </form>
  );
};

export default ContactForm; 