import "./App.css";
import Header from "./component/header/Header";
import Home from "./component/home/Home";
import React, { useState, useEffect } from "react";
import "./theme.css";
import Skills from "./component/skills/Skills";
import Project from "./component/projects/Projects";
import Footer from "./component/footer/Footer";
// import Skills from "./component/skills/Skills";

function App() {
  const [theme] = useState("dar");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="App">
      <Header />
      <Home />
      <Skills/>
      <Project />
      <Footer />
    </div>
  );
}

export default App;
