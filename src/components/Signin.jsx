import React from "react";
import { Link } from "react-router-dom";
import sideImg from "../assets/images/sideImg.png";
import Navbar from "./Navbar";
import "./Signin.css";

const Signin = () => {
  return (
    <>
      <Navbar />
      <div className="sign-in">
        <div className="side-img">
          <img src={sideImg} />
        </div>

        <div className="form-content">
          <form>
            <h1>Login To KEYNODE</h1>
            <div className="fields">
              <input
                type="email"
                name="email"
                placeholder="Enter Email Address"
              />
              <input
                type="password"
                name="password"
                placeholder="Enter Password"
              />
            </div>
            <div className="forget-pass">
              <p>
                <Link to={"/forget-pass"}>
                  <a href="#">Forgot Password?</a>
                </Link>
              </p>
            </div>
            <div className="login-btn">
              <Link to={"/profile-details"}>
                <button type="submit">LOG IN</button>{" "}
              </Link>
            </div>
            <div className="no-account">
              <p>
                Do not Have An Account ?{" "}
                <Link to={"/register"}> Register </Link>{" "}
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signin;
