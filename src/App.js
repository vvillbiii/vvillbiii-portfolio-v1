import "./App.css";
import { Suspense } from "react";
import { Header } from "./components/Header/Header";
import About from "./components/About/About";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <div className="hero-section">
          <Navbar />
          <Header />
        </div>
        <About />
        <Projects />
        <div className="footer-section">
          <Contact />
          <Footer />
        </div>
      </Suspense>
    </div>
  );
}

export default App;
