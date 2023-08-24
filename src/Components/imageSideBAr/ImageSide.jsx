import React from 'react'
import "./ImageSide.scss"
import Star from '../../Assest/images/stars.svg';
import Carousel from 'react-material-ui-carousel'


export default function ImageSide() {
  return (
    <div className="sidebar">
      <div className="image">

        <div className='carousel-main'>
          <Carousel
            autoPlay={false}
            animation="slide"
            indicators={true } 
            navButtonsAlwaysVisible={false}
            cycleNavigation={true}
            indicatorContainerProps={{
              style: {
                zIndex: 1,
                // marginTop: "-22px",
                position: "relative",
                
                // marginBottom: "10px"
                
              }
            }}
          >

            <div className="content-wrap">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas.</p>
              <h1>Rehaan Mathew</h1>
              <div className="star-wrap">
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
              </div>
            </div>

            <div className="content-wrap">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas.</p>
              <h1>Rehaan Mathew</h1>
              <div className="star-wrap">
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
              </div>
            </div>

            <div className="content-wrap">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas.</p>
              <h1>Rehaan Mathew</h1>
              <div className="star-wrap">
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
              </div>
            </div>



          </Carousel>
        </div>
      </div>


    </div>
  )
}
