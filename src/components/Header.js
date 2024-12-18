import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  // let btnName = "Login"
  const [btnName, setBtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between shadow-sm">
      <div className="logo-container">
        <img className="w-56" src={LOGO_URL} />
      </div>

      <div className="flex items-center">
        <ul className="flex p-4 m-4 gap-10 font-semibold">
          {/* Create online status */}
          <li>Online Status: {onlineStatus ? "Active" :"Inactive"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          {/* we can navigate between pages without page reloading ==> Link tag is used it */}
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>Cart</li>

          <div className="">
          <button
            className="px-4 py-2 bg-green-50 rounded-lg"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
          </div>
         
        </ul>
      </div>
    </div>
  );
};

export default Header;
