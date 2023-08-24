import React, { useState } from 'react'
import  "../../Components/SideBar/Sidebar.scss"
import DashBoard from "../../Assest/images/dashboard.png"
import User from "../../Assest/images/users.svg"
import Villas from "../../Assest/images/villas.svg"
import Cms from "../../Assest/images/cms.svg"
import Faq from "../../Assest/images/faq.svg"
import Contect from "../../Assest/images/contectus.svg"
import Payment from "../../Assest/images/payment.svg"
import Setting from "../../Assest/images/setting.svg"
import DropDown from "../../Assest/images/dropdown.svg"
import{NavLink} from "react-router-dom"
export default function Sidebar() {
  const[UserModule,setUserModule]=useState(false)
  const[villaModule,setVillaModule]=useState(false)
  const[appSetting,setAppSetting]=useState(false)
  return (
    <div className="SidebarContainer">
        <div className="logo">Bigdaddyvilla.com</div>
        <div className="SidebarContaint">

            <div className="list-wrap" >
              <div className="s-left">
              <img src={DashBoard} alt="" className='img'/>
              </div>
              <div className="s-right">
              <NavLink to="/dashboard" className="linkText">Dashboard</NavLink>
              </div>
            </div>

            <div className="list-wrap " onClick={()=>setUserModule(!UserModule)}>
              <div className="s-left">
              <img src={User} alt="" className='img'/>
              </div>
              <div className="s-right">
              <NavLink to="" className="linkText">Users Module</NavLink>
              <img src={DropDown} alt="" />
              </div>
            </div>
           
            <div className={UserModule ? "list-wrap": "displayNone"}>
              <div className="s-left">
              </div>
              <div className="s-right">
              
              <NavLink to="/userlist" className="linkText">General Users</NavLink>
              </div>
            </div>

            <div className={UserModule ? "list-wrap": "displayNone"}>
              <div className="s-left">
              </div>
              <div className="s-right">
              
              <NavLink to="/agentuserlist" className="linkText">Agents</NavLink>
              </div>
            </div>

            <div className= "list-wrap " onClick={()=>setVillaModule(!villaModule)}>
              <div className="s-left">
              <img src={Villas} alt="" className='img'/>
              </div>
              <div className="s-right">
              
              <NavLink to="" className="linkText">Villas Module</NavLink>
              <img src={DropDown} alt="" />
              </div>
            </div>

            <div className={villaModule ? "list-wrap": "displayNone"} >
              <div className="s-left">
              </div>
              <div className="s-right">
              
              <NavLink to="/villalist" className="linkText">Manage Villas</NavLink>
              </div>
            </div>

            <div className={villaModule ? "list-wrap": "displayNone"}>
              <div className="s-left">
              </div>
              <div className="s-right">
              <NavLink to="/villabookinglist" className="linkText">Villa Booking List</NavLink>
              </div>
            </div>

            <div className="list-wrap">
              <div className="s-left">
              <img src={Cms} alt="" className='img'/>
              </div>
              <div className="s-right">
             
              <NavLink to="/cmsscreenlist" className="linkText">CMS Screens</NavLink>
              </div>
            </div>

            <div className="list-wrap">
              <div className="s-left">
              <img src={Faq} alt="" className='img'/>
              </div>
              <div className="s-right">
              
              <NavLink to="" className="linkText">FAQ</NavLink>
              </div>
            </div>

            <div className="list-wrap">
              <div className="s-left">
              <img src={Contect} alt="" className='img'/>
              </div>
              <div className="s-right">
              
              <NavLink to="/" className="linkText">Contact Us</NavLink>
              </div>
            </div>

            <div className="list-wrap">
              <div className="s-left">
              <img src={Payment} alt="" className='img'/>
              </div>
              <div className="s-right">
             
              <NavLink to="" className="linkText">Payment List</NavLink>
              </div>
            </div>

            <div className="list-wrap line"  onClick={()=>setAppSetting(!appSetting)}>
              <div className="s-left">
              <img src={Setting} alt="" className='img'/>
              </div>
              <div className="s-right">
              
              <NavLink to="" className="linkText">App Settings</NavLink>
              <img src={DropDown} alt=""/>
              </div>
            </div>

            <div className={appSetting ? "list-wrap": "displayNone"}>
              <div className="s-left">
              </div>
              <div className="s-right">
              
              <NavLink to="" className="linkText">Global Settings</NavLink>
              </div>
            </div>

            <div className={appSetting ? "list-wrap": "displayNone"}>
              <div className="s-left">
              </div>
              <div className="s-right">
             
              <NavLink to="" className="linkText">Email Templates</NavLink>
              </div>
            </div>

           

        </div>
    </div>
    
  )
}
