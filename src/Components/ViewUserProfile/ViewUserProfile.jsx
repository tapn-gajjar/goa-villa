import React from 'react'
import "../ViewUserProfile/viewUserProfile.scss"
import UserImg from "../../Assest/images/userimage.svg"
import { useNavigate } from 'react-router-dom';

export default function ViewUserProfile(props) {
    const navigate=useNavigate();
  return (
    <div className="profile-container">
   <div className="Profile-popup">
    <div className="heading-wrap">
        <h3>View User Profile</h3>
    </div>
    <div className="userProfile">
        <img src={UserImg} alt="" />
        <div className="name-wrap">
            <h3>Rehaan Markus</h3>
            <p>Member since 2 days ago</p>
        </div>
    </div>
    <div className="gmail-wrap">
        <p>Email Address: rehaanmarckus@hotmail.com</p>
    </div>
    <div className="phone-number">
        <p>Phone Number: +91 000-000-0000</p>
    </div>
    <div className="btn-wrap">
        <button className='okay-btn' onClick={()=>props.setVisiblePopup(false)}>Okay</button>
    </div>
   </div>
   </div>
  )
}
