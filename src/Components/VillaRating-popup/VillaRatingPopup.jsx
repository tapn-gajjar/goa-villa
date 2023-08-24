import React from 'react'
import '../../Components/VillaRating-popup/villaRatingPopup.scss'
import Rejact from "../../Assest/images/rejact.svg"
import Rating from '../../Assest/images/ratings.svg'
import Profile from '../../Assest/images/ratingProfile.svg'
export default function VillaRatingPopup() {
  return (
    <div className="ratinPopup-container">
        
        <div className="popup-wrap">
        <div className="heading-wrap">
          <h3>View Photos</h3>
          <img src={Rejact} alt="" />
        </div>
        <div className="rating-section">
            {/* box1 */}
            <div className="ratingBox-wrap">
                <div className="upper-wrap">
                    <div className="image-wrap">
                        <img src={Profile} alt="" />
                    </div>
                    <div className="name-wrap">
                        <div className="name">
                            <p>John Mathew</p>
                            <span>02-Aug-2022</span>
                        </div>
                        <div className="rating-img">
                            <img src={Rating} alt="" />
                        </div>
                    </div>
                </div>
                <div className="lower-wrap">
                        <div className="containt-wrap">
                            <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used. In publishing and graphic design, Lorem ipsum is a placeholder text commonly used... <span>Read More</span> </p>
                        </div>
                </div>
            </div>
              {/* box2 */}
              <div className="ratingBox-wrap">
                <div className="upper-wrap">
                    <div className="image-wrap">
                        <img src={Profile} alt="" />
                    </div>
                    <div className="name-wrap">
                        <div className="name">
                            <p>John Mathew</p>
                            <span>02-Aug-2022</span>
                        </div>
                        <div className="rating-img">
                            <img src={Rating} alt="" />
                        </div>
                    </div>
                </div>
                <div className="lower-wrap">
                        <div className="containt-wrap">
                            <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used. In publishing and graphic design, Lorem ipsum is a placeholder text commonly used... <span>Read More</span> </p>
                        </div>
                </div>
            </div>
              {/* box3 */}
              <div className="ratingBox-wrap">
                <div className="upper-wrap">
                    <div className="image-wrap">
                        <img src={Profile} alt="" />
                    </div>
                    <div className="name-wrap">
                        <div className="name">
                            <p>John Mathew</p>
                            <span>02-Aug-2022</span>
                        </div>
                        <div className="rating-img">
                            <img src={Rating} alt="" />
                        </div>
                    </div>
                </div>
                <div className="lower-wrap">
                        <div className="containt-wrap">
                            <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used. In publishing and graphic design, Lorem ipsum is a placeholder text commonly used... <span>Read More</span> </p>
                        </div>
                </div>
            </div>
              {/* box4 */}
              <div className="ratingBox-wrap">
                <div className="upper-wrap">
                    <div className="image-wrap">
                        <img src={Profile} alt="" />
                    </div>
                    <div className="name-wrap">
                        <div className="name">
                            <p>John Mathew</p>
                            <span>02-Aug-2022</span>
                        </div>
                        <div className="rating-img">
                            <img src={Rating} alt="" />
                        </div>
                    </div>
                </div>
                <div className="lower-wrap">
                        <div className="containt-wrap">
                            <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used. In publishing and graphic design, Lorem ipsum is a placeholder text commonly used... <span>Read More</span> </p>
                        </div>
                </div>
            </div>

        </div>
        </div>
    </div>
  )
}
