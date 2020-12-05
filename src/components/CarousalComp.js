import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import React from 'react';
 function CarouselComponent() {
    return (
        <div className="slider-container center">
            <Carousel  infiniteLoop useKeyboardArrows autoPlay className="container" >
                <div>
                    <img id="s1"src={process.env.PUBLIC_URL+'/images/crop.jpg'} alt="img1"/>
                </div>
                <div>
                    <img id="s2"src={process.env.PUBLIC_URL+'/images/crop3.jpg'}alt="img2"/>
                </div>
               
                <div>
                    <img id="s3"src={process.env.PUBLIC_URL+'/images/crop5.jpg'} alt="img3"/>
                </div>
                
                <div>
                    <img id="s4"src={process.env.PUBLIC_URL+'/images/crop7.jpeg'}alt="img4" />
                </div>
                <div>
                    <img id="s5"src={process.env.PUBLIC_URL+'/images/crop6.jpg'} alt="img5"/>
                </div>
                 <div>
                    <img id="s6"src={process.env.PUBLIC_URL+'/images/crop4.jpg'} alt="img6"/>
                </div>
            </Carousel>
            
        </div>
    );
}
export default CarouselComponent;