import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import React from 'react';
 function CarouselComponent() {
    return (
        <div className="slider-container">
            <Carousel  infiniteLoop useKeyboardArrows autoPlay className="container" >
                <div>
                    <img src={process.env.PUBLIC_URL+'/images/crop.jpg'} alt="img1"/>
                </div>
                <div>
                    <img src={process.env.PUBLIC_URL+'/images/crop3.jpg'}alt="img2"/>
                </div>
               
                <div>
                    <img src={process.env.PUBLIC_URL+'/images/crop5.jpg'} alt="img3"/>
                </div>
                
                <div>
                    <img src={process.env.PUBLIC_URL+'/images/crop7.jpeg'}alt="img4" />
                </div>
                <div>
                    <img src={process.env.PUBLIC_URL+'/images/crop6.jpg'} alt="img5"/>
                </div>
                 <div>
                    <img src={process.env.PUBLIC_URL+'/images/crop4.jpg'} alt="img6"/>
                </div>
            </Carousel>
            
        </div>
    );
}
export default CarouselComponent;