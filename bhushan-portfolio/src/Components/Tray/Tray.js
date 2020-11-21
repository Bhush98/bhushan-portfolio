import React from "react";
import { Link } from "react-router-dom";
import "./Tray.css";

const Tray = () => {
  return (
    <div className="tray-div">
      <Link to="/">
        <h2>🏠</h2>
      </Link>
      <Link to="/projects">
        <h2>🛠️</h2>
      </Link>
      <Link to="/about">
        <h2>🙋</h2>
      </Link>
      <Link to="/contact">
        <h2>☎️</h2>
      </Link>
    </div>
  );
};

export default Tray;
