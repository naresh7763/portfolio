import React from "react";
import "../assets/css/Contact.css";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">

        {/* Animate the contact block */}
        <motion.div
          className="contact-details"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2>Let's Connect</h2>
          <ul>
            <li>
              <strong>Phone:</strong>{" "}
              <a href="tel:+919033641295">+91 90336 41295</a>
            </li>
            <li>
              <strong>Email:</strong>{" "}
              <a href="mailto:prajapatinaresh7763@gamil.com">
                prajapatinaresh7763@gamil.com
              </a>
            </li>
            <li>
              <strong>LinkedIn:</strong>{" "}
              <a
                href="https://www.linkedin.com/in/naresh-prajapati-7a6b5b120"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/naresh-prajapati-7a6b5b120
              </a>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
