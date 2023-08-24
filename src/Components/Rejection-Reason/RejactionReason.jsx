import React from 'react'
import "../../Components/Rejection-Reason/rejactionReason.scss"
import Rejact from "../../Assest/images/rejact.svg"
export default function RejactionReason() {
  return (
    <div className="rejactionReson-container">
        <div className="rejectPopup-wrap">
            <div className="rejactText-wrap">
                <h3>Rejection Reason</h3>
                <img src={Rejact}alt="" />
            </div>
            <div className="text-wrap">
                <p>Please enter profile rejection reason</p>
            </div>
            <div className="input-wrap">
                {/* <input type="text" placeholder='Enter reason' /> */}
                <textarea name="Enter Reason" placeholder='Enter reason' className='textArea' cols="30" rows="10"></textarea>
            </div>
            <div className="okayBtn-wrap">
                <button className='okay'>Okay</button>
            </div>
        </div>
    </div>
  )
}
