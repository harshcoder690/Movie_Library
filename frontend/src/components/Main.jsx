import React from "react";
import { Link } from "react-router-dom";
import "./Main.css";
import img from "../assets/logo.png";
export const Main = () => {
  return (
    <div className="main">
      <div className="containerHM">
        <div className="logoimg">
          <img src={img} />
        </div>
        <h1 className="maintext">Welcome To My Movie Library App</h1>
        <Link to="/login">
          <button className="login">LogIn</button>
        </Link>
        <Link to="/signup">
          <button className="signup">SignUp</button>
        </Link>
      </div>
    </div>
  );
};
