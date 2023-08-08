import React, { useEffect, useState } from "react";
import Header from "../components/Header";

const Contact = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    message: "",
  });

  function onChange(e) {
    const { name, value } = e.target;
    setForm((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  }

  useEffect(() => {
    setForm({
      username: "",
      email: "",
      message: "",
    });
  }, []);

  return (
    <>
      <Header />
      <section>
        <div>
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27567.266770388018!2d78.00805104999999!3d30.268192550000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39092befa7608ead%3A0xe723fed2168f7a8d!2sClement%20Town%2C%20Dehradun%2C%20Uttarakhand%20248002!5e0!3m2!1sen!2sin!4v1690712291436!5m2!1sen!2sin"
            style={{ border: 0, width: "100%", height: "450px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="flex mt-5  m-14">
          <form
            action="https://formspree.io/f/mzblddkq"
            method="POST"
            className="flex flex-col items-center w-full gap-2"
          >
            <input
              className="w-full py-3 border text-center"
              type="text"
              name="username"
              placeholder="USERNAME"
              value={form.username}
              onChange={onChange}
            />
            <input
              className="w-full py-3 border text-center"
              type="email"
              name="email"
              placeholder="EMAIL"
              value={form.email}
              onChange={onChange}
            />

            <textarea
              className="border w-full"
              name="message"
              rows={5}
              cols={35}
              value={form.message}
              onChange={onChange}
            ></textarea>
            <button
              className="px-6 py-3 bg-purple-500 rounded-sm"
              type="submit"
            >
              SEND
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
