import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assest/img/foodvilla.jpeg";
import useOnline from "../../utils/useOnline";

export const Title = () => {
  return (
    <a href="/">
      <img className="h-24 p-2 pl-2 mr-20" alt="logo" src={Logo} />
    </a>
  );
};
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isOnline = useOnline();

  return (
    <div className="h-24 flex flex-row bg-gray-300 shadow-lg">
      <Title />
      {/* <h1>{isOnline ? "✅" : "🔴"}</h1> */}
      <div>
        <ul className="flex pt-9 ml-80">
          <Link className="px-8" to="/">
            <li className="font-bold text-lg">Home</li>
          </Link>
          <Link className="px-8" to="/about">
            <li className="font-bold text-lg">About</li>
          </Link>
          <Link className="px-8" to="/contact">
            <li className="font-bold text-lg">Contact</li>
          </Link>
          <Link className="px-8">
            <li className="font-bold text-lg">Cart</li>
          </Link>
          <Link  className="px-8" to="/Offers">
            <li className="font-bold text-lg">Offers</li>
          </Link>

          <button className="ml-48 border rounded-full w-24 h-10 bg-blue-600" >Login</button>
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
