import { Link } from "react-router-dom";
import "../styles/nav.css";
const Nav = () => {
  return (
    <nav className="Nav">
      <Link to="/">
        <p className="NavLink">Home</p>
      </Link>
      <Link to="/articles">
        <p className="NavLink">All articles</p>
      </Link>
      <Link to="/topics">
        <p className="NavLink">All Topics</p>
      </Link>
    </nav>
  );
};

export default Nav;
