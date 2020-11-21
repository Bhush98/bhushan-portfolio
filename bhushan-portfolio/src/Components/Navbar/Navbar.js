import React from "react";
import me from "../../images/me.jpg";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="header">
        <img src={me} alt="me" />
        <Link to="/">
          <h2>BR</h2>
        </Link>
      </div>
      <div className="links">
        <Link exact to="/projects">
          <h2>Projects</h2>
        </Link>
        <Link exact to="/about">
          <h2>About</h2>
        </Link>
        <Link exact to="/contact">
          <h2>Contact</h2>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
