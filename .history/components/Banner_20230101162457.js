import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Banner() {
  return (
    <div>
     <Carousel autoPlay infiniteLoop showStatus={false} showIndicators={false} showThumbs={false } interval={5000}
     >
                <div>
                    <img src="https://links.papareact.com/gi1" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="https://links.papareact.com/6ff" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="https://links.papareact.com/7ma" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
    </div>
  )
}

export default Banner
