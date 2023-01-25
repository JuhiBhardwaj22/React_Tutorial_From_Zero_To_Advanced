import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assest/img/foodvilla.jpeg";
import useOnline from "../../utils/useOnline";

export const Title = () => {
  return (
    <a href="/home">
      <img className="logo" alt="logo" src={Logo} />
    </a>
  );
};
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isOnline = useOnline();

  return (
    <div className="header">
      <Title />
      <h1>{isOnline ? "✅" : "🔴"}</h1>
      <div className="nav-items">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
          <Link>
            <li>Cart</li>
          </Link>
          <Link to="/Offers">
            <li>Offers</li>
          </Link>

          <button className="login">Login</button>
        </ul>
      </div>
      {/* {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )} */}
    </div>
  );
};

export default Header;
