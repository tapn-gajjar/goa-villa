import React from 'react'
import "./Forgot_password.scss"
import wawing from "../../Assest/images/waving-hand-emoji.svg"
import ImageSide from '../../Components/imageSideBAr/ImageSide'

export default function Forgot_password() {
  return (
    <div className="forgotPassword" style={{ display: 'flex' }}>
      <div className="f-left">
      <div className="welcome-wrap">
            <h1>Welcome back !</h1>
            <img src={wawing} alt=""/>
         </div>
         <p>Please enter the below details to continue</p>
         <div className="email">
             <label htmlFor="email"><b>Email Address</b></label>
             <input type="text" placeholder='Enter Your Email Address' name='email' required/>
         </div>
         <button type='login' className='forgot'>Forgot Password</button>
      </div>

      <div className="f-right">
      <ImageSide />
      </div>
    </div>
  )
}
