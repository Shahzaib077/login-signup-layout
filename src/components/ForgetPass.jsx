import React from 'react';
import sideImg2 from '../assets/images/sideImg2.png';
import './ForgetPass.css';
import Navbar from './Navbar';

const ForgetPass = () => {
  return (
    <>
        <Navbar/>
        <div className="reset-pass">

<div className="side-img2">
  <img src={sideImg2}/>
</div>

<div className="form-content-forgetPass">
  <form className='forget-form'>
    <h1>Forgot Password</h1>
    <p>No worries we'll send you instructions for reset</p>
    <div className="fields">
      <input
        type="email"
        name="email"
        placeholder="Enter Email Address"
      />
    </div>
    <div className="login-btn">
      <button type="submit">RESET PASSWORD</button>
    </div>
    <div className="back-login">
      <button type="submit">BACK TO LOGIN</button>
    </div>
  </form>
</div>
</div>

    </>
  )
}

export default ForgetPass