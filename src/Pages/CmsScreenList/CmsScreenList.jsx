import React from 'react'
import "../CmsScreenList/cmsScreenList.scss"
import SubMenuRightArrow from "../../Assest/images/SubMenuRightArrow.svg";
import SortIcon from "../../Assest/images/sortIcon.svg";
import SearachIcon from "../../Assest/images/searchicon.svg";
import Filter from "../../Assest/images/filter.svg";
import Download from "../../Assest/images/downloadIcoon.svg";
import Header from '../../Components/Header/Header'
import Sidebar from '../../Components/SideBar/Sidebar'
export default function CmsScreenList() {
     const userData = [
    {
      id: 1,
      pageTitle: "About Us",
      dateCreated: "02-06-2022",
    },
    {
      id: 2,
      pageTitle: "Terms of Use",
      dateCreated: "02-06-2022",
    },
    {
      id: 3,
      pageTitle: "Privacy Policy",
      dateCreated: "02-06-2022",
    },
    {
      id: 4,
      pageTitle: "Refund Policy",
      dateCreated: "02-06-2022",
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
    <div className="cmsScreenList-container">
        <div className="usermodule-wrap">
        <h1>CMS Screens</h1>
      </div>
      <div className="userList-wrap">
        <ul>
          <li>Home</li>
          <img src={SubMenuRightArrow} alt="" />
          <li>CMS Screens List</li>
        </ul>
      </div>
      <div className="addNewSection">
       
        <div className="right-choose">
         
          <div className="search-wrap">
            <input type="text" placeholder="Search"/>
            <button>
             <img src={SearachIcon} alt="" />
            </button>
          </div>

        </div>
      </div>

      {/* table */}
      <div className="table-section">
      <table>
          <tr>
            <th>
              <input
                type="checkbox"
                className="checkbox"
                name="check"
                value="check"
              />
              Id
            </th>
            <th>Page Title</th>
            <th>Date Created</th>
            <th>Action</th>
          </tr>

          {userData.map((value, index) => {
            console.log("value", value);
            return (
              <>
                <tr>
                  <td>
                    <input
                      type="checkbox"
                      className="checkbox"
                      name="check"
                      value="check"
                    />
                    {value.id}
                  </td>
                  <td>{value.pageTitle}</td>
                  
                 
                  <td>{value.dateCreated} </td>
                  <td className="img">
                  <img src={Download} alt="" />
                  </td>
                </tr>
              </>
            );
          })}
        </table>
      </div>

    </div>
    </div>
    </div>
    </React.Fragment>
  )
}
