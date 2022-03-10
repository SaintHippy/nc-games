import { Link } from "react-router-dom";
import "../styles/nav.css";
const Nav = () => {
  return (
    <nav className="Nav">
      <Link to="/">
        <p className="NavLink">Home</p>
      </Link>
      <Link to="/categories">
        <p className="NavLink">All Categories</p>
      </Link>
      <Link to="/reviews">
        <p className="NavLink">All Reviews</p>
      </Link>
    </nav>
  );
};

export default Nav;
