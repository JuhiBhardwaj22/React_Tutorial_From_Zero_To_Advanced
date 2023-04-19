import { useState, useContext } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Logo from "../../assest/img/foodvilla.png";
import useOnline from "../../utils/useOnline";
import userContext from "../../utils/userContext";

export const Title = () => {
  return (
    <a href="/">
      <img
        data-testid="logo"
        className="h-24 p-2 pl-2 mr-20"
        alt="logo"
        src={Logo}
      />
    </a>
  );
};
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isOnline = useOnline();

  const { user } = useContext(userContext);

  const cartItems = useSelector((store) => store.cart.items);
  console.log("cartItems", cartItems);

  return (
    <div className="h-24 flex flex-row shadow-lg">
      <Title />
      <h1 data-testid="online-status">{isOnline ? "✅" : "🔴"}</h1>
      <p>{user.name}</p>
      <div>
        <ul className="flex pt-9 ml-80">
          <Link className="px-8" to="/">
            <li className="font-bold text-lg">Home</li>
          </Link>
          <Link className="px-8" to="/about">
            <li className="font-bold text-lg">About</li>
          </Link>
          <Link className="px-8" to="/Offers">
            <li className="font-bold text-lg">Offers</li>
          </Link>
          <Link className="px-8" to="/cart">
            <li className="font-bold text-lg" data-testid="cart">
              Cart:{cartItems.length}
            </li>
          </Link>
          <button className="ml-48 border rounded-full w-24 h-10 bg-blue-600">
            Login
          </button>
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
