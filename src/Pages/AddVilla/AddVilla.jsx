import React from 'react'
import '../AddVilla/addVilla.scss'
import SubMenuRightArrow from "../../Assest/images/SubMenuRightArrow.svg"
import VillaOverView from '../../Assest/images/villaOverview-img.svg'
import Location from '../../Assest/images/loactionMap.svg'
import Header from '../../Components/Header/Header'
import Sidebar from '../../Components/SideBar/Sidebar'
export default function AddVilla() {
  return (
    <React.Fragment>
        
    <div className="head-side" style={{
    display: 'flex'
}}>
 

   <div style={{
        width: '20%'
    }}>
    <Sidebar />
    </div>
  <div style={{
        width: '80%'
    }}>
    <Header/>
    <div className="addVilla-container">
        <div className="usermodule-wrap">
        <h1>Villas Module</h1>
    </div>
    <div className="userList-wrap">
        <ul>
            <li>Home</li>
            <img src={SubMenuRightArrow} alt="" />
            <li>Villa List</li>
            <img src={SubMenuRightArrow} alt="" />
            <li>Add Villa</li>
        </ul>
    </div>
    <div className="form-wrap">
      <div className="form">
      <div className="label-wrap">
          <label htmlFor="" className='label'>Villa Name <span>*</span> </label>
          <input type="text" placeholder='Enter villa name' className='input' />
        </div>

        <div className="label-wrap">
          <label htmlFor="" className='label'>Email Address <span>*</span></label>
          <input type="email" placeholder='Enter email address' className='input' />
        </div>

        <div className="label-wrap">
          <label htmlFor="" className='label'>Phone Number</label>
          <input type="number" placeholder='Enter phone number' className='input' />
        </div>
        <div className="villaOverView-wrap">
          <div className="heading">
            <p>Villa Location <span>*</span> </p>
          </div>
          <div className="image-wrap">
            <img src={VillaOverView} alt="" />
          </div>
        </div>
        <div className="label-wrap">
          <label htmlFor="" className='label'>Villa Location</label>
          <input type="text" placeholder='Enter villa location' className='input' />
          <div className="location-wrap">
            <img src={Location} alt="" />
          </div>
        </div>
        <div className="label-wrap">
          <label htmlFor="" className='label'>Villa Charges</label>
          <input type="number" placeholder='Enter villa charges' className='input' />
        </div>
        <div className="addAmenties-wrap">
          <div className="heading">
            <p>Add Amenties <span>*</span></p>
            <button>Add</button>
          </div>
          
          <input type='file' accept='image/*' className='chooseFile'/>
          
        </div>
        <div className="enterTitle-wrap">
        <input type="text" placeholder='Enter title (eg: Breakfast and Dinner Service)' className='input' />
        </div>
        <div className="enterPrice-wrap">
        <input type="number" placeholder='Enter title (Enter price (eg: 100))' className='input' />
        </div>
        <div className="uploadVillaImagea-wrap">
          <div className="part-left">
            <div className="heading">
              <p>Upload Villa Images <span>*</span></p>
              <span>Tip: You can upload multiple images in multiple categories and select one as a main image.</span>
            </div>
          </div>
          <div className="part-right">
            <button className='add-btn'>Add</button>
          </div>
          
        </div>
        <div className="whichCategory-wrap">
        <input type="text" placeholder='Define under which category the below photos will be (eg:- rooms, interior.. etc)' className='input' />
        </div>
        <div className="choosefile-input-wrap">
       <div className="choose-box">
       <input type='file' accept='image/*' className='chooseFile'/>
       </div>
        </div>
        <div className="add-cancel-btn-wrap">
          <div className="add-btn">
            <button>Add Villa</button>
          </div>
          <div className="cancel-btn">
            <button>Cancel</button>
          </div>
        </div>
      </div>
    </div>
    </div>
     </div>
     </div>
     </React.Fragment>
  )
}
