import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isHovered, setIsHovered] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success(`Thank you, ${formData.name}! Your message has been sent.`, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      theme: "dark",
    });

    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-[#0c1114] text-white px-4 py-10">
      <ToastContainer />

     
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          Contact Us
        </h1>
        <p className="text-gray-300 mt-3 max-w-xl mx-auto text-sm md:text-base">
          Have questions or feedback? We'd love to hear from you.
        </p>
      </section>

     
      <section className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 flex flex-col gap-6">
          <h3 className="text-2xl font-bold">Get in Touch</h3>

          <div className="flex items-start gap-3 text-gray-300">
            <FaMapMarkerAlt className="text-blue-400 text-xl" />
            <div>
              <p className="text-blue-400 text-sm font-semibold">Address</p>
              <p>Muzaffargarh, Pakistan</p>
            </div>
          </div>

          <div className="flex items-start gap-3 text-gray-300">
            <FaPhone className="text-blue-400 text-xl" />
            <div>
              <p className="text-blue-400 text-sm font-semibold">Phone</p>
              <p>+92 328 7303593</p>
            </div>
          </div>

          <div className="flex items-start gap-3 text-gray-300">
            <FaEnvelope className="text-blue-400 text-xl" />
            <div>
              <p className="text-blue-400 text-sm font-semibold">Email</p>
              <p>sirajabid641@gmail.com</p>
            </div>
          </div>
        </div>

   
        <form
          onSubmit={handleSubmit}
          className="lg:col-span-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 flex flex-col gap-4"
        >
          <h3 className="text-2xl font-bold">Send us a Message</h3>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-xl bg-[#1b1f23] border border-gray-700 text-white focus:border-blue-500 outline-none transition"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-xl bg-[#1b1f23] border border-gray-700 text-white focus:border-blue-500 outline-none transition"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="6"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-xl bg-[#1b1f23] border border-gray-700 text-white resize-none focus:border-blue-500 outline-none transition"
          ></textarea>

          <button
            type="submit"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`px-6 py-3 rounded-full text-lg font-semibold transition transform ${
              isHovered
                ? "bg-red-600 scale-[1.03] shadow-lg shadow-red-600/30"
                : "bg-red-500"
            }`}
          >
            Send Message
          </button>
        </form>
      </section>

      <div className="h-10"></div>
    </div>
  );
}
