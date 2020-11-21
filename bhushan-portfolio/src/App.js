import React from "react";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About";
import Project from "./Components/Project/Project";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import { AnimatePresence } from "framer-motion";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Tray from "./Components/Tray/Tray";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <AnimatePresence exitBeforeEnter>
          <Switch>
            <Route path="/" exact component={Header} />
            <Route path="/projects" exact component={Project} />
            <Route path="/about" exact component={About} />
            <Route path="/contact" exact component={Contact} />
          </Switch>
        </AnimatePresence>
        <Footer />
        <Tray />
      </Router>
    </div>
  );
};

export default App;
