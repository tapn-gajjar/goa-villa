import "../Header/Header.scss"
import React from 'react'
import Admin from "../../Assest/images/adminHeder.svg"

export default function Header() {
  return (
    <div className="header">
        {/* <div className="h-left">
            <div className="logo-wrap">
                <h2>Bigdaddyvilla.com</h2>
            </div>
        </div> */}
        <div className="h-right">
            <div className="admin-wrap">
                <img src={Admin} alt="" />
                <h3>Super Admin</h3>
            </div>
        </div>
    </div>
  )
}
