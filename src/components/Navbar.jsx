import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { countries } from "./Country";
import "./Navbar.css";

const Navbar = () => {
  const [activeBtn, setActiveBtn] = useState("signin");

  const switchBtn = (value) => setActiveBtn(value);
  return (
      <div className="navbar">
      
        <div className="left-items">
          <div className="logo">
            <img src={logo}></img>
          </div>
          <ul>
            <Link to={"/home"}>
              <li>HOME</li>
            </Link>
            <Link to={"/staking"}>
              <li>STAKING</li>
            </Link>
            <Link to={"/about"}>
              <li>ABOUT US</li>
            </Link>
            <Link to={"/affiliate"}>
              <li>AFFILIATE</li>
            </Link>
          </ul>
        </div>

        <div className="btns">
          <select>
            {countries.map((country) => {
              return (
                <option className="options" key={country}>
                  {" "}
                  {country}{" "}
                </option>
              );
            })}
          </select>
          <Link to={"/register"}>
            {" "}
            <button
              className={`${activeBtn === "signup" ? "active" : "signup-btn"}`}
              onClick={() => switchBtn("signup")}
            >
              SIGN UP
            </button>{" "}
          </Link>
          <Link to={"/"}>
            {" "}
            <button
              className={`${activeBtn === "signin" ? "active" : "signup-btn"}`}
              onClick={() => switchBtn("signin")}
            >
              SIGN IN
            </button>{" "}
          </Link>
        </div>
      </div>
  );
};

export default Navbar;
