import React from 'react'
import '../EditAboutUs/editAboutUs.scss'
import SubMenuRightArrow from "../../Assest/images/SubMenuRightArrow.svg";
import VillaOverView from '../../Assest/images/villaOverview-img.svg'
export default function EditAboutUs() {
  return (
    <div className="editaboutus-container">
         <div className="usermodule-wrap">
        <h1>CMS Screens</h1>
      </div>
      <div className="userList-wrap">
        <ul>
          <li>Home</li>
          <img src={SubMenuRightArrow} alt="" />
          <li>Edit About Us</li>
        </ul>
      </div>
      <div className="form-wrap">
        <form action="" className="form">
            <div className="screenTitle-wrap">
                <p>Screen Title <span>*</span> </p>
                <input type="text" placeholder='About Us' className='input' />
            </div>
            <div className="description-wrap">
                <div className="heading-wrap">
                    <p>Description <span>*</span></p>
                </div>
                <div className="image-wrap">
                <img src={VillaOverView} alt="" />
                </div>
            </div>
            <div className="update-cancel-btn-wrap">
          <div className="update-btn">
            <button>Update</button>
          </div>
          <div className="cancel-btn">
            <button>Cancel</button>
          </div>
        </div>
        </form>
      </div>
    </div>
  )
}
