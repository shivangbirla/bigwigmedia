import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import { Button } from "@nextui-org/react";
import React, { useState } from "react";

const ContactUs: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you can handle form submission logic, like sending the email.
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
    // You can also integrate with your backend or any email service to send the message.
    // Reset form fields after submission
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="bg-white dark:bg-[#121212] text-gray-900 dark:text-gray-100">
      <Nav />
      <div className="p-10 flex flex-col justify-center items-center text-center min-h-screen">
        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
        <div className="mb-8 max-w-4xl text-lg">
          <p className="mb-4">
            Thank you for considering BigWigMedia.ai for your AI needs. Our team
            is dedicated to providing innovative solutions under one roof.
            Whether you have questions, need assistance, or want to explore our
            AI tools, we're here to help.
          </p>
          <div className="space-y-2">
            <p>Email: enquiry@bigwigmedia.ai</p>
            <p>Phone: 123-456-7890</p>
            <p>
              S-1, 3rd Floor, Janta Market, Rajouri Garden, New Delhi, 110027
            </p>
          </div>
        </div>
        <form
          onSubmit={handleFormSubmit}
          className="w-full max-w-lg bg-white dark:bg-[#222222] shadow-lg rounded-lg p-8"
        >
          <div className="mb-6">
            <label htmlFor="name" className="block mb-2 font-semibold">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="form-input px-4 py-2 w-full rounded-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 font-semibold">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="form-input px-4 py-2 w-full rounded-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block mb-2 font-semibold">
              Message
            </label>
            <textarea
              id="message"
              className="form-textarea px-4 py-2 w-full rounded-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md transition duration-150 ease-in-out"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
