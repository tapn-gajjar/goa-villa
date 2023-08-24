import React from 'react'
import "./login.scss"
import wawing from "../../Assest/images/waving-hand-emoji.svg"
import Right from "../../Assest/images/correct.svg"
import ImageSide from '../../Components/imageSideBAr/ImageSide'
import Img from "../../Assest/images/maxresdefault.png";
export default function Login() {
  return (
    <div className="login" style={{ display: 'flex' }}>
      <div className="l-left">
        <div className="welcome-wrap">
          <h1>Welcome back !</h1>
          <img src={wawing} alt="" />
        </div>
        <p>Please enter the below details to continue</p>
        <div className="email">
          <label htmlFor="email"><b>Email</b></label>
          <input type="text" placeholder='Enter Your Email Address' name='email' required />
        </div>
        <div className="password">
          <label htmlFor="password"><b>Password</b></label>
          <input type="password" placeholder='Enter Your Password ' name='password' required />
        </div>
        <div className="forgot-wrap">
          <div className="remember-wrap">
            <img src={Right} alt="" />
            <h3>Remember Me</h3>
          </div>
          <div className="forgot-pass">
            <h3>Forgot Password ?</h3>
          </div>
        </div>
        <button type='login' className='login-btn'>Login</button>

      </div>
      <div className="l-right">

        <ImageSide />

      </div>
    </div>

  )
}
