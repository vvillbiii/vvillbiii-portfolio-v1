import "./App.css";
import { Header } from "./components/Header/Header";
import About from "./components/About/About";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <div className="hero-section">
        <Navbar />
        <Header />
      </div>
      <div className="about-section">
        <About />
      </div>
      <Projects />
      <div className="footer-section">
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
