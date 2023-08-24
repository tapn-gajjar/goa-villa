import React from 'react'
import "./Reset.scss"
import wawing from "../../Assest/images/waving-hand-emoji.svg"
import ImageSide from '../../Components/imageSideBAr/ImageSide'
export default function Reset() {
  return (
   <div className="reset_password"  style={{ display: 'flex' }}>
    <div className="r-left">
    <div className="welcome-wrap">
            <h1>Welcome back !</h1>
            <img src={wawing} alt=""/>
         </div>
         <p>Please enter the below details to continue</p>
         <div className="password">
              <label htmlFor="password"><b>Password</b></label>
              <input type="password" placeholder='Enter Your Password ' name='password' required/>
         </div>
         <div className="c-password">
              <label htmlFor="password"><b>Confirm Password</b></label>
              <input type="password" placeholder='Enter Your Password ' name='password' required/>
         </div>
         <button type='login' className='reset-btn'>Reset Password</button>
    </div>
    <div className="r-right">
    <ImageSide />
    </div>
   </div>
  )
}
