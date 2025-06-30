import React from "react";
import ContactForm from "@/components/ContactForm";

const ContactPage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">Contact Me</h1>
        <p className="mb-12 text-lg text-gray-300">
          Have a question, a project proposal, or just want to connect? Send me a message!
        </p>
      </div>
      <ContactForm />
      <div className="mt-12 text-center text-sm text-gray-500">
        <p>To make this form work, sign up for a free account at <a href="https://formspree.io/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Formspree.io</a>, create a new form, and replace &apos;YOUR_UNIQUE_ID&apos; in the `ContactForm.tsx` component with your form&apos;s ID.</p>
      </div>
    </div>
  );
};

export default ContactPage; 