import { Link } from "react-router-dom";
// import "../styles/App.css";
const Nav = () => {
  return (
    <div className="Nav">
      <Link to="/">
        <p className="NavLink">Home</p>
      </Link>
      <Link to="/categories">
        <p className="NavLink">All Categories</p>
      </Link>
      <Link to="/reviews">
        <p className="NavLink">All Reviews</p>
      </Link>
    </div>
  );
};

export default Nav;
