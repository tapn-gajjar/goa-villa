
import React from 'react'
import "../Dashbord/Dashbord.scss"
import ArrowRight from '../../Assest/images/arrow-right.svg'
import Header from '../../Components/Header/Header'
import Sidebar from '../../Components/SideBar/Sidebar'
export default function Dashbord() {
  return (
    <React.Fragment>
        <div className="head-side" style={{
        display: 'flex'
    }}>
     

       <div style={{
            width: '20%'
        }}>
        {/* <Sidebar /> */}
        </div>
      <div style={{
            width: '1000%'
        }}>
        {/* <Header/> */}
        {/* <Dashbord/> */}
    <div className="container">
        <h1>Welcome, Super Admin</h1>
        <div className="box-wrap">

            <div className="box">
                <p className='totle'>Total General Users</p>
                <p className='number'>20</p>
                <div className="view-wrap">
                    <p>View Details</p>
                    <img src={ArrowRight} alt="" />
                </div>
            </div>

            <div className="box box2">
                <p className='totle'>Total General Users</p>
                <p className='number'>20</p>
                <div className="view-wrap">
                    <p>View Details</p>
                    <img src={ArrowRight} alt="" />
                </div>
            </div>

            <div className="box box3">
                <p className='totle'>Total General Users</p>
                <p className='number'>20</p>
                <div className="view-wrap">
                    <p>View Details</p>
                    <img src={ArrowRight} alt="" />
                </div>
            </div>

            <div className="box box4">
                <p className='totle'>Total General Users</p>
                <p className='number'>20</p>
                <div className="view-wrap">
                    <p>View Details</p>
                    <img src={ArrowRight} alt="" />
                </div>
            </div>
        </div>
        </div>
        </div>
       
    </div>
    </React.Fragment>
  )
}
