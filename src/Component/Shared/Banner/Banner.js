import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';
const Banner = () => {
    return (
        <div>

            <Carousel variant="dark">
                <Carousel.Item>
                        <img
                            className="d-block w-100 opacity-75"
                            height="800px"
                            src="https://templates.hibootstrap.com/opnix/default/assets/images/banner/main2.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                        <h2>The World Best Doctor Specialist Treatment</h2>
                        <p>Our medical clinic provides quality care for the entire family while maintaining a personable atmosphere best services.</p>
                        </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                        <img
                            className="d-block w-100 opacity-75"
                            height="800px"
                            src="https://templates.envytheme.com/medip/default/assets/images/main-slides/slides-bg2.jpg"
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h2>We Only Give Best Care To You & Your Family</h2>
                            <p>Our medical clinic provides quality care for the entire family while maintaining a personable atmosphere best services.</p>
                        </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                        <img
                            className="d-block w-100 opacity-75"
                            height="800px"
                            src="https://templates.envytheme.com/medip/default/assets/images/main-slides/slides-bg1.jpg"
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h2>High Innovation Professional Care & Services</h2>
                            <p>Our medical clinic provides quality care for the entire family while maintaining a personable atmosphere best services.</p>
                        </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </div>
        
    );
};

export default Banner;