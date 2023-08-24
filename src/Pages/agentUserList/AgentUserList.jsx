import React from 'react'
import "../agentUserList/agentUserList.scss"
import SubMenuRightArrow from "../../Assest/images/SubMenuRightArrow.svg"
import SortIcon from "../../Assest/images/sortIcon.svg"
import SearachIcon from "../../Assest/images/searchicon.svg"
import Filter from "../../Assest/images/filter.svg"
import SeeIcon from "../../Assest/images/see-icon.svg"
import DeleteIcone from "../../Assest/images/delete-icon.svg"
import Download from "../../Assest/images/downloadIcoon.svg"
import Header from '../../Components/Header/Header'
import Sidebar from '../../Components/SideBar/Sidebar'
import LeftArrow from '../../Assest/images/leftArrow.svg'
import RightArrow from '../../Assest/images/rightArrow.svg'
import{NavLink} from "react-router-dom"
export default function AgentUserList() {
    const userData = [
        {
          id: 1,
          userName: "Ahana Mathew",
          emailAddress: "ahana@hotmail.com",
          phoneNumber: "+91-000-000-0000",
          lastLogin: "02 Aug 22, 12:30",
          dateCreated:"02-06-2022",
        },
        {
            id: 2,
            userName: "John Mathew",
            emailAddress: "john@hotmail.com",
            phoneNumber: "+91-000-000-0000",
            lastLogin: "02 Aug 22, 12:30",
            dateCreated:"02-06-2022",
          },
          {
            id: 3,
            userName: "Nia Sharma",
            emailAddress: "nia@hotmail.com",
            phoneNumber: "+91-000-000-0000",
            lastLogin: "02 Aug 22, 12:30",
            dateCreated:"02-06-2022",
          },
          {
            id: 4,
            userName: "Raven Baxter",
            emailAddress: "raven@hotmail.com",
            phoneNumber:" +91-000-000-0000",
            lastLogin: "02 Aug 22, 12:30",
            dateCreated:"02-06-2022",
          },
        
      ];
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
    <div className="agentUserList-container">
        <div className="usermodule-wrap">
        <h1>Users Module</h1>
    </div>
    <div className="userList-wrap">
        <ul>
            <li>Home</li>
            <img src={SubMenuRightArrow} alt="" />
            <li>Agent User List</li>
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
            <div className="sort-wrap">
                <img src={Filter} alt="" />
                <span>Filter</span>
            </div>
            <div className="search-wrap">
                <input type="text" placeholder='Search' />
               <button> <img src={SearachIcon} alt="" /></button>
            </div>
            <button className="choose-btn">Choose</button>
        </div>
        </div>
        {/* table */}
        <div className="table-section">
        <table>
    <tr>
          <th ><input type="checkbox" className='checkbox' name='check' value='check'/>Id</th>
          <th >Username</th>
          <th>Email Address</th>
          <th>Phone Number</th>
          <th>Approval Status</th>
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
  
    <td ><input type="checkbox" className='checkbox' name='check' value='check'/>{value.id}</td>
    <td>{value.userName}</td>
    <td>{value.emailAddress}</td>
    <td>{value.phoneNumber}</td>
   
    <td>{value.lastLogin}</td>
    <td>
    <select className='approvedStatus'>
        <option value="approved" className='approved'>Approved</option>
        <option value="pending" className='pending'>Pending</option>
        <option value="reject" className='reject'>Rejected</option>
    </select>
    </td>
    <td>
    <select className='status'>
        <option value="active" className='active'>Active</option>
        <option value="inActive" className='inActive'>In-Active</option>
    </select>
    </td>
    <td>{value.dateCreated} </td>
    <td className="img">
      <img src={SeeIcon} alt="" />
      <img src={DeleteIcone} alt="" />
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
        </div>
    </div>
    </div>
    </div>
    </React.Fragment>
   
  )
}
