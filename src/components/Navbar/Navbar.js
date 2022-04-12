import "./navbar.css";

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <p className="logo">Will Bowles</p>
        <p>Home</p>
        <p>About</p>
        <p>Projects</p>
        <p>Contact</p>
        <button>Resume</button>
      </div>
    </div>
  );
};

export default Navbar;
