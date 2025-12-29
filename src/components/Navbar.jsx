// src/components/Navbar.jsx
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="logo">Mini Project</h2>
      <ul className="nav-links">
        <li>Home</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;