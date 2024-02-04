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
    <div className="bg-white dark:bg-[#1E1E1E]">
      <Nav />
      <div className="p-10 flex flex-col justify-start items-center text-center min-h-screen">
        <h1 className="bg-gradient text-transparent bg-clip-text  text-3xl font-bold mb-4">
          Contact Us
        </h1>
        <div className="mb-4">
          <p className="text-xl text-center my-4 lg:mx-[20vh]">
            Thank you for considering BigWigMedia.ai for your AI needs. Our team
            is dedicated to providing innovative solutions under one roof.
            Whether you have questions, need assistance, or want to explore our
            AI tools, we're here to help.
          </p>
          <p className="text-xl mb-2">Email: enquiry@bigwigmedia.ai</p>
          <p className="text-xl mb-2">Phone: 123-456-7890</p>
          <p className="text-xl mb-2">
            S-1, 3rd Floor, Janta Market, Rajouri Garden, New Delhi, 110027
          </p>
        </div>
        <form
          onSubmit={handleFormSubmit}
          className="w-full mt-5 max-w-[500px] "
        >
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 dark:text-gray-200 font-semibold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="form-input p-2 w-full rounded-md"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 dark:text-gray-200 font-semibold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="form-input p-2 w-full rounded-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-gray-700 dark:text-gray-200 font-semibold mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              className="form-textarea p-2 w-full rounded-md"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <div>
            <Button
              type="submit"
              className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600"
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;