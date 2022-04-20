import "./navbar.css";
import Resume from "../../assets/Resume.pdf";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-menu">
        <p className="logo">Will Bowles</p>
        <div className="navbar-links">
          <p>
            <a href="#home">Home</a>
          </p>
          <p>
            <a href="#about">About</a>
          </p>
          <p>
            <a href="#project">Projects</a>
          </p>
          <p>
            <a href="#contact">Contact</a>
          </p>
          <p>
            <a href={Resume}>Resume</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
