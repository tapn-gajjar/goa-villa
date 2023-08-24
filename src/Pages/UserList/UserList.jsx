import React, { useState } from 'react'
import "../UserList/UserList.scss"
import SubMenuRightArrow from "../../Assest/images/SubMenuRightArrow.svg"
import SortIcon from "../../Assest/images/sortIcon.svg"
import SearachIcon from "../../Assest/images/searchicon.svg"
import Rectangle from "../../Assest/images/Rectangle.svg"
import SeeIcon from "../../Assest/images/see-icon.svg"
import DeleteIcone from "../../Assest/images/delete-icon.svg"
import { useNavigate } from 'react-router-dom'
import ViewUserProfile from '../../Components/ViewUserProfile/ViewUserProfile'
import{NavLink} from "react-router-dom"
import Delete from '../../Components/Delete-popup/Delete'
import DashBoardHomePage from '../../Components/DashBoardHomePage/DashBoardHomePage'
import Header from '../../Components/Header/Header'
import Sidebar from '../../Components/SideBar/Sidebar'
import LeftArrow from '../../Assest/images/leftArrow.svg'
import RightArrow from '../../Assest/images/rightArrow.svg'
export default function UserList() {
  const [visiblePopup,setVisiblePopup]=useState(false)
  const [deletePopup,setDeletePopup]=useState(false)

    const userData = [
        {
          id: 1,
          userName: "Rehaan Markus",
          emailAddress: "rehaan@hotmail.com",
          phoneNumber: "+91-000-000-0000",
          lastLogin: "02 Aug 22, 12:30",
          dateCreated:"02-06-2022",
        },
        {
            id: 2,
            userName: "Rehaan Markus",
            emailAddress: "rehaan@hotmail.com",
            phoneNumber: "+91-000-000-0000",
            lastLogin: "02 Aug 22, 12:30",
            dateCreated:"02-06-2022",
          },
          {
            id: 3,
            userName: "Rehaan Markus",
            emailAddress: "rehaan@hotmail.com",
            phoneNumber: "+91-000-000-0000",
            lastLogin: "02 Aug 22, 12:30",
            dateCreated:"02-06-2022",
          },
          {
            id: 4,
            userName: "Rehaan Markus",
            emailAddress: "rehaan@hotmail.com",
            phoneNumber:" +91-000-000-0000",
            lastLogin: "02 Aug 22, 12:30",
            dateCreated:"02-06-2022",
          },
        
      ];
    const navigate=useNavigate();
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
        {/* <Dashbord/> */}
       
        
        <div className="main-compo">
     
        <div className="userList-container compo">
   
   <div className="usermodule-wrap">
       <h1>Users Module</h1>
   </div>
   <div className="userList-wrap">
       <ul>
           <li>Home</li>
           <img src={SubMenuRightArrow} alt="" />
           <li>User List</li>
       </ul>
   </div>
   <div className="addNewSection">
       <div className="left-addNew">
           {/* <button className="addNew-btn">Add New</button> */}
           <NavLink to="/adduser"  className="addNew-btn linkText">Add New</NavLink>
       </div>
       <div className="right-choose">
       
           <div className="sort-wrap">
               <img src={SortIcon} alt="" />
               <span>Sort</span>
           </div>
           <div className="search-wrap">
               <input type="text" placeholder='Search' />
              <button> <img src={SearachIcon} alt="" /></button>
           </div>
           <button className="choose-btn">Choose</button>
       </div>
   </div>
  <div className="table-section">
   <table>
   <tr>
         <th >Id</th>
         <th >Username</th>
         <th>Email Address</th>
         <th>Phone Number</th>
         <th>Last Login</th>
         <th>Status</th>
         <th>Date Created</th>
         <th>Action</th>
       </tr>

       {userData.map((value, index) => {

console.log("value",value)
return (
<>
 <tr>
 
   <td  ><input type="checkbox" className='checkbox' name='check' value='check'/>{value.id}</td>
   <td>{value.userName}</td>
   <td>{value.emailAddress}</td>
   <td>{value.phoneNumber}</td>
   <td>{value.lastLogin}</td>
   <td>
   <select className='status'>
       <option value="active" className='active'>Active</option>
       <option value="inActive" className='inActive'>In-Active</option>
   </select>
   </td>
   <td>{value.dateCreated} </td>
   <td className="img">
     <img src={SeeIcon} alt="" onClick={()=>setVisiblePopup(true)}/>
     <img src={DeleteIcone} alt="" onClick={()=>setDeletePopup(true)} />
   </td>
 </tr>
</>
);
})}
   </table>
   <div className="showingPage-wrap">
    <div className="page-left">
      <span>Showing 4 of 50 entries </span>
    </div>
    <div className="page-right">
      <span>1-4 of 1240</span>
      <img src={LeftArrow} alt="" />
      <img src={RightArrow} alt="" />

    </div>
   </div>
   {
     visiblePopup && <ViewUserProfile setVisiblePopup={setVisiblePopup}/>
     
   }
   {
   deletePopup && <Delete setDeletePopup={setDeletePopup}/>
}
  </div>
  </div>
        </div>
        </div>
        </div>
   </React.Fragment>)
}
