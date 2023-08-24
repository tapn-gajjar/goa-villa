import React from 'react'
import '../ViewVilla/viewVilla.scss'
import SubMenuRightArrow from "../../Assest/images/SubMenuRightArrow.svg"
import House from '../../Assest/images/j-house.svg'
import Location from '../../Assest/images/location.svg'
import RestaurantService from '../../Assest/images/Restaurant Service.svg'
import RoomService from '../../Assest/images/roomService.svg'
import PickupService from '../../Assest/images/pickup.svg'
import CustomerProfile from '../../Assest/images/customerProfile.svg'
import Calemder from '../../Assest/images/calender.svg'
export default function ViewVilla() {
  return (
    <div className="viewVilla-container">
         <div className="usermodule-wrap">
        <h1>Villa Module</h1>
    </div>
    <div className="userList-wrap">
        <ul>
            <li>Home</li>
            <img src={SubMenuRightArrow} alt="" />
            <li>Villa Villa</li>
        </ul>
    </div>

    <div className="villa-section">
        <div className="villa-left">
            <div className="housePriceDetail-wrap">
                <div className="imageDetail">
                    <div className="img-wrap">
                        <img src={House} alt="" />
                    </div>
                    <div className="containt-wrap">
                        <p>J-House, spacious apartments with balconies, Thalassa</p>
                        <div className="location-wrap">
                            <img src={Location} alt="" />
                            <span>Vagator, Goa</span>
                        </div>
                    </div>
                </div>
                <div className="priceDetail">
                    <div className="price-wrap">
                        <p>Price</p>
                        <span>37,599 /-</span>
                    </div>
                    <div className="rating-wrag">
                         <p>Ratings</p>
                        <a href="">View</a>
                    </div>
                    <div className="date-wrap">
                        <p>Date Created</p>
                        <span>02-06-2022</span>
                    </div>
                    <div className="photo-wrap">
                        <p>Photo</p>
                        <a href="">View</a>
                    </div>
                    <div className="dwldPDF-wrap">
                        <p>Download PDF</p>
                        <a href="">Click here</a>
                    </div>
                </div>
            </div>
            <div className="overView-wrap">
                <div className="heading-wrap">
                    <h2>Villa Overview</h2>
                </div>
                <div className="discription-wrap">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan... <span>Read More</span> </p>
                </div>
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
                    <div className="RestaurantService-wrap">
                        <div className="image-wrap">
                            <img src={PickupService} alt="" />
                        </div>  
                        <div className="description-wrap">
                            <p>Pick-up / Drop-off</p>
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
        <div className="villa-right">
            <div className="heading-wrap">
                <h2>Customer Booking List (46)</h2>
            </div>
            <div className="booking-section">
                {/* box1 */}
                <div className="booking-box">
                    <div className="left-part">
                        <div className="image-wrap">
                            <img src={CustomerProfile} alt="" />
                            </div>
                            <div className="name-wrap">
                                <p>Reehan Markus</p>
                               <div className="date-wrap">
                                <img src={Calemder} alt="" />
                                <span>25 Dec - 30 Dec, 2 Adults</span>
                               </div>
                                </div>                  
                             </div>
                    <div className="right-part">
                        <div className="popup-wrap">
                            <div className="cancel">
                                Cancelled
                            </div>
                            <div className="amount-wrap">
                                <span>Amount Paid: 38,699 /-</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* box2 */}
                <div className="booking-box">
                    <div className="left-part">
                        <div className="image-wrap">
                            <img src={CustomerProfile} alt="" />
                            </div>
                            <div className="name-wrap">
                                <p>Reehan Markus</p>
                               <div className="date-wrap">
                                <img src={Calemder} alt="" />
                                <span>25 Dec - 30 Dec, 2 Adults</span>
                               </div>
                                </div>                  
                             </div>
                    <div className="right-part">
                        <div className="popup-wrap">
                            <div className="cancel complete">
                                Cancelled
                            </div>
                            <div className="amount-wrap">
                                <span>Amount Paid: 38,699 /-</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* box3 */}
                <div className="booking-box">
                    <div className="left-part">
                        <div className="image-wrap">
                            <img src={CustomerProfile} alt="" />
                            </div>
                            <div className="name-wrap">
                                <p>Reehan Markus</p>
                               <div className="date-wrap">
                                <img src={Calemder} alt="" />
                                <span>25 Dec - 30 Dec, 2 Adults</span>
                               </div>
                                </div>                  
                             </div>
                    <div className="right-part">
                        <div className="popup-wrap">
                            <div className="cancel">
                                Cancelled
                            </div>
                            <div className="amount-wrap">
                                <span>Amount Paid: 38,699 /-</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* box4 */}
                <div className="booking-box">
                    <div className="left-part">
                        <div className="image-wrap">
                            <img src={CustomerProfile} alt="" />
                            </div>
                            <div className="name-wrap">
                                <p>Reehan Markus</p>
                               <div className="date-wrap">
                                <img src={Calemder} alt="" />
                                <span>25 Dec - 30 Dec, 2 Adults</span>
                               </div>
                                </div>                  
                             </div>
                    <div className="right-part">
                        <div className="popup-wrap">
                            <div className="cancel complete">
                                Cancelled
                            </div>
                            <div className="amount-wrap">
                                <span>Amount Paid: 38,699 /-</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* box5 */}
                <div className="booking-box">
                    <div className="left-part">
                        <div className="image-wrap">
                            <img src={CustomerProfile} alt="" />
                            </div>
                            <div className="name-wrap">
                                <p>Reehan Markus</p>
                               <div className="date-wrap">
                                <img src={Calemder} alt="" />
                                <span>25 Dec - 30 Dec, 2 Adults</span>
                               </div>
                                </div>                  
                             </div>
                    <div className="right-part">
                        <div className="popup-wrap">
                            <div className="cancel">
                                Cancelled
                            </div>
                            <div className="amount-wrap">
                                <span>Amount Paid: 38,699 /-</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* box6 */}
                <div className="booking-box">
                    <div className="left-part">
                        <div className="image-wrap">
                            <img src={CustomerProfile} alt="" />
                            </div>
                            <div className="name-wrap">
                                <p>Reehan Markus</p>
                               <div className="date-wrap">
                                <img src={Calemder} alt="" />
                                <span>25 Dec - 30 Dec, 2 Adults</span>
                               </div>
                                </div>                  
                             </div>
                    <div className="right-part">
                        <div className="popup-wrap">
                            <div className="cancel complete">
                                Cancelled
                            </div>
                            <div className="amount-wrap">
                                <span>Amount Paid: 38,699 /-</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* box7 */}
                <div className="booking-box">
                    <div className="left-part">
                        <div className="image-wrap">
                            <img src={CustomerProfile} alt="" />
                            </div>
                            <div className="name-wrap">
                                <p>Reehan Markus</p>
                               <div className="date-wrap">
                                <img src={Calemder} alt="" />
                                <span>25 Dec - 30 Dec, 2 Adults</span>
                               </div>
                                </div>                  
                             </div>
                    <div className="right-part">
                        <div className="popup-wrap">
                            <div className="cancel">
                                Cancelled
                            </div>
                            <div className="amount-wrap">
                                <span>Amount Paid: 38,699 /-</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}
