import React from "react";
import { Link } from "react-router-dom";
import sideImg from "../assets/images/sideImg.png";
import Navbar from "./Navbar";
import "./Signup.css";

const Register = () => {
  return (
    <>
    <Navbar/>
      <div className="register">
        <div className="register-side-img">
          <img src={sideImg} />
        </div>

        <div className="register-form-content">
          <form>
            <h1>Welcome To KEYNODE</h1>
            <div className="register-fields">
              <input
                type="email"
                name="email"
                placeholder="Enter Email Address"
              />
              <input type="text" name="username" placeholder="Enter Username" />
              <input
                type="text"
                name="referral"
                placeholder="Enter Referral Code (Optional)"
              />
              <input
                type="password"
                name="password"
                placeholder="Enter Password"
              />
              <input
                type="password"
                name="re-password"
                placeholder="Enter Password"
              />
              <div className="checkBox">
                <input type="checkbox" />
                <p>I agree with Privacy Policy Term of Service</p>
              </div>
            </div>
            <div className="register-btn">
              <button type="submit">REGISTER</button>
            </div>

            <div className="already-account">
              <p>
                Already Have An Account ? <Link to={'/'}> <a>Login</a> </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
