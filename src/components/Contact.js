import React, { useState } from "react";
import emailjs from "emailjs-com";
import Navbar from "./Header";
import Footer from "./Footer";
import { motion } from "framer-motion";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  const submit = () => {
    if (name && email && message) {
      const serviceId = (process.env.REACT_APP_CONTACT_SERVICE_ID);
      const templateId = (process.env.REACT_APP_CONTACT_TEMPLATE_ID);
      const userId = (process.env.REACT_APP_CONTACT_USER_ID);
      const templateParams = {
        name,
        email,
        message,
      };

      emailjs
        .send(serviceId, templateId, templateParams, userId)
        .then((response) => console.log(response))
        .then((error) => console.log(error));

      setName("");
      setEmail("");
      setMessage("");
      setEmailSent(true);
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1.3 } }}
        exit={{ opacity: 0, transition: { duration: 1.3 } }}
      >
        <div className="contactContainer">
          <div className="textBoxContainer">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <input
            type="email"
            placeholder="Your Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="textBoxContainer">
            <textarea
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <motion.div
            whileHover={{ scale: 1.4, transition: { duration: 1 } }}
            whileTap={{ scale: 0.9 }}
          >
            <button className="send" onClick={submit}>
              SEND 💌{" "}
            </button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default Contact;
