import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div>
        <span>Email</span>
        <input
          type="text"
          placeholder="Enter Email Id"
        ></input>
        <button>
          <Link to="/home">Submit</Link>
        </button>
      </div>
    </div>
  );
};

export default Login;
