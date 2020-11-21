import React from "react";
import "./Contact.css";
import pro from "../../images/pro.svg";
import { motion } from "framer-motion";
import twitter from "../../images/twitter.svg";
import github from "../../images/github.svg";
import linkedin from "../../images/linkedin.svg";
const continerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { ease: "easeInOut", delay: 0.4 },
  },
  exit: {
    opacity: 0,
    transition: { ease: "easeInOut", delay: 0.2 },
  },
};

const Contact = () => {
  return (
    <motion.div
      className="contact-container"
      variants={continerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="contact-title">
        <h2>Let's talk 😇 </h2>
      </div>
      <div className="contact-content">
        <div>
          <img src={pro} alt="pro" />
        </div>
        <div className="para">
          Whether you want to hire me , bye me a ☕ or want to collaborate on
          some cool projects I am willing to participate
          <br />
          <br />
          My favourite mode of contact is{" "}
          <a href="https://twitter.com/Bhush98" style={{ color: "#f50057" }}>
            Twitter{" "}
          </a>{" "}
          and
          <a
            href="mailto:bhushanrajput2298@gmail.com"
            style={{ color: "#f50057" }}
          >
            {" "}
            email 📧{" "}
          </a>
          <br />
          <br />
          You can also reach out to me via my online presence, please do check
          out to know more about me
        </div>
      </div>
      <div className="icons">
        <a href="https://twitter.com/Bhush98">
          <img src={twitter} alt="twitter" />
        </a>
        <a href="https://github.com/Bhush98">
          <img src={github} alt="twitter" />
        </a>
        <a href="https://www.linkedin.com/in/bhushan-rajput-94a348140/">
          <img src={linkedin} alt="twitter" />
        </a>
      </div>
    </motion.div>
  );
};

export default Contact;
