import React from 'react'
import "../../Components/Delete-popup/delete.scss"
export default function Delete(props) {
  return (
    <div className="delete-container">
        <div className="popup-wrap">
           <div className="content-wrap">
            <p>Are you sure you want to permanently delete this record ?</p>
           </div>
           <div className="btn-wrap">
            <div className="yes-btnWrap">
                <button className='yes-btn' onClick={()=>{props.setDeletePopup(false)}}>Yes</button>
            </div>
            <div className="no-btnWrap">
                <button className='no-btn' onClick={()=>{props.setDeletePopup(false)}}>No</button>
            </div>
           </div>
            
        </div>
    </div>
  )
}
