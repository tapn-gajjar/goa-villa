import React from 'react'
import '../../Components/viewCustomerDetail-popup/viewCustomerDetail.scss'
import Rejact from "../../Assest/images/rejact.svg"
import UserImg from "../../Assest/images/userimage.svg"
import RestaurantService from '../../Assest/images/Restaurant Service.svg'
import RoomService from '../../Assest/images/roomService.svg'
import PickupService from '../../Assest/images/pickup.svg'

export default function ViewCustomerDetail() {
  return (
    <div className="viewCustomerDetail-container">
        <div className="popup-wrap">
            <div className="viewCustomer-heading">
            <div className="heading-wrap">
                <h3>Rejection Reason</h3>
                <img src={Rejact}alt="" />
            </div>
            </div>
            <div className="userProfile">
        <img src={UserImg} alt="" />
        <div className="name-wrap">
            <h3>Rehaan Markus</h3>
            <p>Member since 2 days ago</p>
        </div>
    </div>
    <div className="gmail-wrap">
        <p>Email Address: rehaanmarckus@hotmail.com</p>
    </div>
    <div className="phone-number">
        <p>Phone Number: +91 000-000-0000</p>
    </div>

    <div className="AmenitiesIncluded-wrap">
                <div className="heading-wrap">
                    <h2>Amenities Included</h2>
                </div>
                <div className="service-wrap">
                    <div className="RestaurantService-wrap">
                        <div className="image-wrap">
                            <img src={RestaurantService} alt="" />
                        </div>  
                        <div className="description-wrap">
                            <p>Restaurant Service / Breakfast</p>
                            <span>at just rs 100 /-</span>
                        </div>
                    </div>
                    <div className="RestaurantService-wrap">
                        <div className="image-wrap">
                            <img src={RoomService} alt="" />
                        </div>  
                        <div className="description-wrap">
                            <p>Room Service</p>
                            <span>at just rs 100 /-</span>
                        </div>
                    </div>
                     
                    
                </div>
            </div>

        </div>
    </div>
  )
}
