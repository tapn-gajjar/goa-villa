import React from 'react'
import '../PayTooUser-box/payTooUser.scss'
export default function PayTooUser() {
  return (
    <div className="payTooUser-container">
        <div className="box-wrap">
        <div className="heading-wrap">
          <h3>Pay to User</h3>
         </div>
         <div className="bankDetail-wrap">
            <div className="bankAccountHolderName-wrap">
                <span className='title'>Bank Account Holder Name</span>
                <input type="text" placeholder='Enter Your Name' name='text' required />
            </div>
            <div className="bankAccountHolderName-wrap">
            <span className='title'>Account Number</span>
                <input type="number" placeholder='Enter Your Account Number' name='number' required />
            </div>
            <div className="bankAccountHolderName-wrap">
            <span className='title'>IFSC Code</span>
                <input type="text" placeholder='Enter Your IFSC Code' name='text' required />
            </div>
            <div className="bankAccountHolderName-wrap">
            <span className='title'>Bank Name</span>
                <input type="text" placeholder='Enter Your Bank Name' name='text' required />
            </div>
            <div className="bankAccountHolderName-wrap">
            <span className='title'>Amount</span>
                <input type="number" placeholder='Enter Amount' name='number' required />
            </div>
            <div className="button-wrap">
                <button className='okay-btn'>Okay</button>
            </div>
         </div>
        </div>
    </div>
  )
}
