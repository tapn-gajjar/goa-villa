import React from 'react'
import '../ContectusPopup/contectUs.scss'
import UserImg from "../../Assest/images/userimage.svg"
export default function ContectUs() {
  return (
    <div className="contect-container">
    <div className="contect-popup">
     <div className="heading-wrap">
         <p>Contact Us</p>
     </div>
     <div className="userProfile">
         <img src={UserImg} alt="" />
         <div className="name-wrap">
             <h3>Raven Baxter</h3>
             <span>User Type: General User</span>
             <span>Email address: raven@hotmail.com</span>
             <span>Phone number: +91 000-000-0000</span>
         </div>
     </div>
     <div className="message-wrap">
         <p>Message</p>
     </div>
     <div className="description-wrap">
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
     </div>
     <div className="btn-wrap">
         <button className='okay-btn' >Okay</button>
     </div>
    </div>
    </div>
  )
}




