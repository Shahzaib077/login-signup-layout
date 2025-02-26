import {
  faBoxTissue,
  faEdit,
  faGear,
  faHome,
  faLink,
  faMoneyBill,
  faMoneyBills,
  faMoneyBillTransfer,
  faNoteSticky,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import avatar from "../assets/images/avatar.png";
import Navbar from "./Navbar";
import "./ProfileDetails.css";

const ProfileDetails = () => {
  return (
    <>
      <div className="profileContainer">
        <Navbar />
        <div className="layouts">
          <div className="leftLayout">
            <div className="part1">
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
            <div className="part2">
              <div className="content">
                <p>Earn Rewards from Crypto Staking</p>
                <div className="searchField">
                  <input
                    type="text"
                    className="search-input"
                    placeholder="Explore Content"
                  />
                  <button className="searchBtn">
                    <FontAwesomeIcon icon={faSearch} />
                  </button>
                </div>
              </div>
              <button className="logoutBtn">LOG OUT</button>
            </div>
          </div>
          <div className="rightLayout">
            <div className="rightContainer">
              <img src={avatar} />
              <div className="edit-icon">
                <FontAwesomeIcon icon={faEdit} />
              </div>
              <div className="editInfoForm">
                <form>
                  <div className="editFields">
                    <input type="text" placeholder="username" />
                    <input type="email" placeholder="email" />
                  </div>
                  <div className="saveBtn">
                    <button>SAVE CHANGES</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileDetails;
