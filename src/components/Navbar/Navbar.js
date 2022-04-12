import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-menu">
        <p className="logo">Will Bowles</p>
        <p>
          <a href="">Home</a>
        </p>
        <p>
          <a href="">About</a>
        </p>
        <p>
          <a href="">Projects</a>
        </p>
        <p>
          <a href="">Contact</a>
        </p>
        <p>
          <a href="">Resume</a>
        </p>
      </div>
    </div>
  );
};

export default Navbar;