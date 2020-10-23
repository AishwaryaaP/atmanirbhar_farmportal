import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import React from 'react';
 function CarouselComponent() {
    return (
        <div className="slider-container">
            <Carousel  infiniteLoop useKeyboardArrows autoPlay className="container" >
                <div>
                    <img src={process.env.PUBLIC_URL+'/images/crop.jpg'} />
                </div>
                <div>
                    <img src={process.env.PUBLIC_URL+'/images/crop3.jpg'}/>
                </div>
               
                <div>
                    <img src={process.env.PUBLIC_URL+'/images/crop5.jpg'} />
                </div>
                
                <div>
                    <img src={process.env.PUBLIC_URL+'/images/crop7.jpeg'} />
                </div>
                <div>
                    <img src={process.env.PUBLIC_URL+'/images/crop6.jpg'} />
                </div>
                 <div>
                    <img src={process.env.PUBLIC_URL+'/images/crop4.jpg'} />
                </div>
            </Carousel>
            <div className="container border" >
            <div>
            <h3 className="center">Select Your Region </h3>
            </div>
            <div>
            <a href="#"><img className="center" src={process.env.PUBLIC_URL+'/images/india.jpg'} width="50%" height="500px" /></a>
            </div>
            </div>
        </div>
    );
}
export default CarouselComponent;