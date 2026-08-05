import Header from "./components/Header";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Body from "./components/Body";
import Projects from "./components/Projects";
import { motion } from "framer-motion";
import ConnectForm from "./components/Connnect";
import Error from "./components/Error";
import { Outlet } from "react-router-dom";
import { Element } from "react-scroll";

import Experience from "./components/Experience";
import React from "react";
const App = () => {
  return (
    <div>
      {/* <div className="pt-28"></div> */}
      <Header />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="pt-24">
          <Element name="body">
            <Body />
          </Element>
          <Element name="about">
            <About />
          </Element>
          <Element name="project">
            <Projects />
          </Element>
          <Element name="exp">
            <Experience />
          </Element>
          <Element name="connect">
            <ConnectForm />
          </Element>
        </div>
      </motion.div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
