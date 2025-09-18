import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Socialimpact from "./components/Socialimpact";
import Contact from "./components/contact";
import Footer from "./components/Footer";
import logo from "./components/images/logo.webp";

function App() {
  return (
    <HashRouter>
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
            <div class="logo">
              <img src={logo} class="img-fluid" alt="logo" />
            </div>
          </div>
          <div class="col-lg-8 col-md-8 col-sm-8 col-xs-12">
            <nav class="navbar navbar-expand-lg" role="navigation">
              <input id="main-menu-state" type="checkbox" />
              <label class="main-menu-btn" for="main-menu-state">
                <span class="main-menu-btn-icon"></span> Toggle main menu
                visibility
              </label>
              <ul id="main-menu" class="sm sm-blue">
                <li>
                  <a href="/about" class="basic-3">
                    About
                  </a>
                </li>
                <li>
                  <a href="/socialimpact" class="basic-3">
                    Social Impact
                  </a>
                </li>
                <li>
                  <a href="/contact" class="basic-3">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

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
