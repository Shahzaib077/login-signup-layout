import { faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faBars,
  faBoxTissue,
  faGear,
  faHome,
  faLink,
  faMoneyBill,
  faMoneyBills,
  faMoneyBillTransfer,
  faNoteSticky,
  faSearch,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { countries } from "./Country";
import "./Navbar.css";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggleMenu = () => {
    setToggle(!toggle);
  };

  return (
    <div className="navbar">
      {/* Logo */}
      <div className="left-items">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <ul className="nav-links">
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

      {/* Buttons */}
      <div className="btns">
        <p>
          <select>
            {countries.map((country) => (
              <option className="options" key={country}>
                {country}
              </option>
            ))}
          </select>
          <Link to={"/register"}>
            <button className="signup-btn">SIGN UP</button>
          </Link>
          <Link to={"/"}>
            <button className="signin-btn">SIGN IN</button>
          </Link>
        </p>
      </div>

      {/* Hamburger Menu Button */}
      <button className="hamBtn" onClick={handleToggleMenu}>
        {!toggle ? (
          <FontAwesomeIcon icon={faBars} className="hamBurger" />
        ) : (
          <FontAwesomeIcon icon={faTimes} className="hamBurger" />
        )}
      </button>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${toggle ? "active" : ""}`}>
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
        <div className="mobile-btns">
          <select>
            {countries.map((country) => (
              <option className="options" key={country}>
                {country}
              </option>
            ))}
          </select>
          <Link to={"/register"}>
            <button className="mobile-signup-btn">SIGN UP</button>
          </Link>
          <Link to={"/"}>
            <button className="mobile-signin-btn">SIGN IN</button>
          </Link>
        </div>
        <div className="mobile-leftLayout">
          <div className="mobile-part1">
            <button>
              {" "}
              <FontAwesomeIcon icon={faUser} />
              Profile Details
            </button>
            <button>
              {" "}
              <FontAwesomeIcon icon={faHome} /> My Dashboard
            </button>
            <button>
              {" "}
              <FontAwesomeIcon icon={faMoneyBillTransfer} /> Deposit
            </button>
            <button>
              {" "}
              <FontAwesomeIcon icon={faMoneyBill} /> Withdraw
            </button>
            <button>
              {" "}
              <FontAwesomeIcon icon={faMoneyBills} /> Bills
            </button>
            <button>
              {" "}
              <FontAwesomeIcon icon={faNoteSticky} /> Orders
            </button>
            <button>
              {" "}
              <FontAwesomeIcon icon={faLink} /> Referrals
            </button>
            <button>
              {" "}
              <FontAwesomeIcon icon={faBoxTissue} /> 2FA
            </button>
            <button>
              {" "}
              <FontAwesomeIcon icon={faGear} /> Settings
            </button>
          </div>
          <div className="mobile-part2">
            <div className="mobile-content">
              <p>Earn Rewards from Crypto Staking</p>
              <div className="mobile-searchField">
                <input
                  type="text"
                  className="mobile-search-input"
                  placeholder="Explore Content"
                />
                <button className="mobile-searchBtn">
                  <FontAwesomeIcon icon={faSearch} />
                </button>
              </div>
            </div>
            <button className="mobile-logoutBtn">LOG OUT</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
