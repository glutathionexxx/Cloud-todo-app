import { Link } from "react-router-dom";
import "./Navbar.css"; // optional styling

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">‧˚ ☁️⋅♡🪐༘⋆ </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/dashboard">Tasks </Link></li>
        <li><Link to="/signup">Signup</Link></li>
        <li><Link to="/login"> Login  </Link></li>
        ִֶָ𓂃 ࣪˖ ִֶָ🐇་༘࿐
      </ul>
    </nav>
  );
}

export default Navbar;
