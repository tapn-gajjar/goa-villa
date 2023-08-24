import React from 'react'
import '../../Components/DashBoardHomePage/dashBoardHomePage.scss'
import Dashbord from '../../Pages/Dashbord/Dashbord'
import Header from '../Header/Header'
import Sidebar from '../SideBar/Sidebar'

export default function DashBoardHomePage() {
  return (
    
    <>
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
        <Dashbord/>
        </div>
    </div>
    </>
  )
}
