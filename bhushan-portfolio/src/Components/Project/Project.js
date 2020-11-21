import React from "react";
import "./Project.css";
import netflix from "../../images/netflix.png";
import iss from "../../images/iss.PNG";
import covid from "../../images/covid.png";
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

const Project = () => {
  return (
    <motion.div
      className="project-div"
      variants={continerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h2>Projects 🐱‍💻</h2>
      <div className="project-content">
        <div className="web-development">
          <div className="web-header">Web-development</div>
          <div className="web-content">
            <div className="web-card">
              <div className="card-img">
                <center>
                  <img src={netflix} alt="netflix-card" />
                </center>
              </div>
              <div className="card-title">
                <a href="https://netflix-clone-1c84b.web.app/">
                  Netflix Clone 🔗
                </a>
              </div>
            </div>
            <div className="web-card">
              <div className="card-img">
                <center>
                  <img src={iss} alt="iss-card" />
                </center>
              </div>
              <div className="card-title">
                <a href="https://bhush98.github.io/iss/">
                  ISS (International Space Station) tracking 🔗
                </a>
              </div>
            </div>
            <div className="web-card">
              <div className="card-img">
                <center>
                  <img src={covid} alt="covid-card" />
                </center>
              </div>
              <div className="card-title">
                <a href="https://bhush98.github.io/covid-tracker/">
                  Covid Tracker 🔗
                </a>
              </div>
            </div>
            <center>
              <h1
                style={{
                  marginTop: "5%",
                }}
              >
                More to come ....
              </h1>
            </center>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Project;
