import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Socialimpact from "./components/Socialimpact";
import Contact from "./components/contact";
import Footer from "./components/Footer";

function App() {
  return (
    <HashRouter>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/socialimpact" element={<Socialimpact />} />
        </Routes>
      </div>

      <Footer />
    </HashRouter>
  );
}

export default App;
