import { Link } from "react-router-dom";
import "./navbar.css"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <h2>elewa group</h2>
      </div>
      <ul className="nav-links">
        <li><Link to="/homey">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/social-impact">Social Impact</Link></li>
        <li><Link to="/invest">Invest</Link></li>
        <li><Link to="/venture-labs">Venture Labs</Link></li>
        <li><Link to="/brands">Brands</Link></li>
        <li><Link to="/careers">Careers</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </div>
  );
}

export default Navbar;
