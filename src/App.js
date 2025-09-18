import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Socialimpact from "./components/Socialimpact";
import Footer from "./components/Footer";
import logo from "./components/images/logo.webp";

function App() {
  return (
    <>
      <div className="header">
        <img src={logo} alt="logo" />
        <nav>
          <Link to="/">Home</Link> <Link to="/about">About</Link>{" "}
          <Link to="/socialimpact">Socialimpact</Link>{" "}
          <Link to="/contact">Contact</Link>
        </nav>
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
    </>
  );
}

export default App;
