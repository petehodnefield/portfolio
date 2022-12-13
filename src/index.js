import React from "react";
import ReactDOM from "react-dom/client";
import "../src/assets/styles/index.css";
import StartPage from "../src/pages/StartPage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ProjectsFull from "../src/pages/ProjectsFull";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ThankYou from "./pages/ThankYou.js";
import ProjectPage from "./pages/ProjectPage";
import NotFound from "./pages/NotFound";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route>
          {" "}
          <Route path="/" element={<StartPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/projects/:project" element={<ProjectsFull />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
