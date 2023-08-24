import React from 'react'
import "./addUser.scss";
import SubMenuRightArrow from "../../Assest/images/SubMenuRightArrow.svg"
import Header from '../../Components/Header/Header'
import Sidebar from '../../Components/SideBar/Sidebar'
import { useNavigate } from 'react-router-dom';
export default function AddUser() {
  const navigate = useNavigate()

 const previousPage =(e)=>{
  e.preventDefault()
navigate(-1)
  }
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
    <div className="addUser-container">
      <div className="usermodule-wrap">
        <h1>Users Module</h1>
    </div>
    <div className="userList-wrap">
        <ul>
            <li>Home</li>
            <img src={SubMenuRightArrow} alt="" />
            <li>User List</li>
            <img src={SubMenuRightArrow} alt="" />
            <li>Add User</li>
        </ul>
    </div>
    <div className="form-wrap">
      <form action="" className='form'>
        <div className="label-wrap">
          <label htmlFor="" className='label'>Full Name <span>*</span></label>
          <input type="text" placeholder='Enter full name' className='input' />
        </div>

        <div className="label-wrap">
          <label htmlFor="" className='label'>Email Address<span>*</span></label>
          <input type="text" placeholder='Enter email address' className='input' />
        </div>

        <div className="label-wrap">
          <label htmlFor="" className='label'>Phone Number</label>
          <input type="text" placeholder='Enter phone number' className='input' />
        </div>

        <div className="status-wrap">
        <label htmlFor="" className='label'>Status</label>
        <select className='active-status'>
                    <option value="Active" className='active'>Active</option>
                    <option value="Inactive" className='in-active'>In Active</option>
                </select>
        </div>
        <div className="btn-wrap">
          <div className="add-btn-wrap">
            <button className='add-btn'>Add User</button>
            
          </div>
          <div className="cancel-btn-wrap">
          <button className='cancel-btn' onClick={(e)=>previousPage(e)}>Cancel</button>
          </div>
        </div>
      </form>
    </div>
    </div>
    </div>
    </div>
    </React.Fragment>
  )
}
