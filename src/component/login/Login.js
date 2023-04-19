import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const handleSignIn = () => {
    console.log("Successfully LoGIN");
    navigate("/");
  };
  return (
    <div>
      <div>
        <span>Email</span>
        <input type="text" placeholder="Enter Email Id"></input>
        <button
          onClick={() => handleSignIn()}
          className="ml-48 border rounded-full w-24 h-10 bg-blue-600"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Login;
