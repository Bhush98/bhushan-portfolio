import React from "react";
import headerpic from "../../images/header.svg";
import "./Header.css";
import { motion } from "framer-motion";
const continerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { ease: "easeInOut", delay: 0.3 },
  },
  exit: {
    opacity: 0,
    transition: { ease: "easeInOut", delay: 0.2 },
  },
};

const Header = () => {
  return (
    <motion.div
      className="home"
      variants={continerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="header-content">
        <div className="para-content">
          <p>
            <b>Hello, World!! 🌏 </b>
          </p>
          <p>I'm Bhushan 👋</p>
          <p>I ❤️ &lt;/&gt; and watching Anime </p>
        </div>
      </div>
      <img className="goku-gif" src={headerpic} alt="goku gif" />
      <div>
        <div className="content">
          <p>
            I am a Web Developer &lt;/&gt; and a Machine Learning Enthusiast 🤖
            also interested in Quantum Computing (0 or 1) <br />
            and stuff living in India 🇮🇳.
            <br /> I like to work <br />
            on cool and interesting projects that help me to grow as a better
            dev 🧑🏻‍💻.
            <br />I write code to make websties look ✨ and to make machines 🦾.
            <br />
            <br />
            If you wanna colaborate on a project or Hire me or want to know
            about me or buy me a coffee ☕ the steps are below <br />
            Know Me &gt;&gt;&gt;&gt;&gt; Contact
          </p>
        </div>
        <div className="separator"></div>
      </div>
    </motion.div>
  );
};

export default Header;
