import React from 'react'
import '../../Components/view-photo-popup/viewPhotopopup.scss'
import Rejact from "../../Assest/images/rejact.svg"
import RoomPhoto from '../../Assest/images/viewRoomPhoto.svg'
export default function ViewPhotopopup() {
  return (
    <div className="photoPopup-container">
      <div className="popup-wrap">
        <div className="heading-wrap">
          <h3>View Photos</h3>
          <img src={Rejact} alt="" />
        </div>
        <div className="button-section">
          <button className='rooms-btn'>Rooms (06)</button>
          <button className='interiors-btn'>Interiors (09)</button>
          <button className='others-btn'>Others (08)</button>
        </div>
        <div className="photoScroller-wrap">
          {/* box1 */}
          <div className="photo-box">
            <div className="image-wrap">
            <img src={RoomPhoto} alt="" />
            </div>
            <div className="title-wrap">
              <p>Title of Image</p>
            </div>
          </div>
          {/* box2 */}
          <div className="photo-box">
            <div className="image-wrap">
            <img src={RoomPhoto} alt="" />
            </div>
            <div className="title-wrap">
              <p>Title of Image</p>
            </div>
          </div>
           {/* box3 */}
           <div className="photo-box">
            <div className="image-wrap">
            <img src={RoomPhoto} alt="" />
            </div>
            <div className="title-wrap">
              <p>Title of Image</p>
            </div>
          </div>
           {/* box4 */}
           <div className="photo-box">
            <div className="image-wrap">
            <img src={RoomPhoto} alt="" />
            </div>
            <div className="title-wrap">
              <p>Title of Image</p>
            </div>
          </div>
           {/* box5 */}
           <div className="photo-box">
            <div className="image-wrap">
            <img src={RoomPhoto} alt="" />
            </div>
            <div className="title-wrap">
              <p>Title of Image</p>
            </div>
          </div>
           {/* box6 */}
           <div className="photo-box">
            <div className="image-wrap">
            <img src={RoomPhoto} alt="" />
            </div>
            <div className="title-wrap">
              <p>Title of Image</p>
            </div>
          </div>
           {/* box7 */}
           <div className="photo-box">
            <div className="image-wrap">
            <img src={RoomPhoto} alt="" />
            </div>
            <div className="title-wrap">
              <p>Title of Image</p>
            </div>
          </div>
           {/* box8 */}
           <div className="photo-box">
            <div className="image-wrap">
            <img src={RoomPhoto} alt="" />
            </div>
            <div className="title-wrap">
              <p>Title of Image</p>
            </div>
          </div>
           {/* box9 */}
           <div className="photo-box">
            <div className="image-wrap">
            <img src={RoomPhoto} alt="" />
            </div>
            <div className="title-wrap">
              <p>Title of Image</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
