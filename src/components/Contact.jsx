"use client";

import axios from "axios";
import React, { useState } from "react";

const BACKEND_SERVER = process.env.NEXT_PUBLIC_BACKEND_SERVER;

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(BACKEND_SERVER, {
        ...formData,
      });

      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        alert("Thanks for our message 🙂");
      }, 1000);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div
        className="h-fit py-20 md:py-1 md:h-screen w-screen flex justify-center items-center"
        id="contact"
      >
        <form
          className="text-center flex justify-center items-center flex-col w-full md:w-1/2 p-3"
          onSubmit={handleSubmit}
        >
          <h4 className="text-3xl font-semibold mb-10 gradient-text-bg2">
            Contact
            <span className=""> Me!</span>
          </h4>

          <div className="mb-4 w-full">
            <input
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              type="text"
              placeholder="Your Name"
              className="py-2 px-3 w-full rounded-md outline-none border shadow-sm shadow-slate-400 focus:bg-gray-100"
              required
            />
          </div>

          <div className="mb-4 w-full">
            <input
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              type="email"
              placeholder="Your Email"
              className="py-2 px-3 w-full rounded-md outline-none border shadow-sm shadow-slate-400 focus:bg-gray-100"
              required
            />
          </div>

          <div className="mb-4 w-full">
            <input
              value={formData.subject}
              onChange={(e) =>
                setFormData({ ...formData, subject: e.target.value })
              }
              type="text"
              placeholder="Your Subject"
              className="py-2 px-3 w-full rounded-md outline-none border shadow-sm shadow-slate-400 focus:bg-gray-100"
              required
            />
          </div>

          <div className="mb-4 w-full">
            <textarea
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              rows="7"
              placeholder="Your Message"
              className="py-2 px-3 w-full rounded-md outline-none border shadow-sm shadow-slate-400 focus:bg-gray-100"
              required
            ></textarea>
          </div>
          <div className="mt-4 w-full">
            <button className="btn-gradient2 py-2 px-6 text-base font-bold tracking-widest text-white rounded">
              Submit Message
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
