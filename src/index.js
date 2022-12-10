import React from "react";
import ReactDOM from "react-dom/client";
import "../src/assets/styles/index.css";
import Header from "./components/Header";
import StartPage from "../src/pages/StartPage";
import About from "./pages/About";
import ProjectsFull from "../src/pages/ProjectsFull";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header></Header>

    <Router>
      <Routes>
        <Route>
          {" "}
          <Route path="/" element={<StartPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<ProjectsFull />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
