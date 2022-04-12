import "./App.css";
import { Header } from "./components/Header/Header";
import About from "./components/About/About";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
