// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import { HashRouter } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Socialimpact from "./components/Socialimpact";
import Footer from "./components/Footer";
import logo from "./components/images/logo.webp";

root.render(
  <HashRouter>
    <App />
  </HashRouter>
);

function App() {
  return (
    <Router>
      <div className="header">
        <img src={logo} alt="logo" />
        <nav>
          <Link to="/">Home</Link> {""}
          <Link to="/about">About</Link>{" "}
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
    </Router>
  );
}

export default App;
