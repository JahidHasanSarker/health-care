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
                        <h2 className="px-5 fw-bold mb-4">The World Best Doctor <br/> Specialist Treatment</h2>
                        <p className="px-5 fw-bold text-muted">Our medical clinic provides quality care for the entire family <br/> while maintaining a personable atmosphere best services.</p>
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
                            <h2 className="px-5 fw-bold mb-4">We Only Give Best Care <br/> To You & Your Family</h2>
                            <p className="px-5 fw-bold text-muted">Our medical clinic provides quality care for the entire family <br/> while maintaining a personable atmosphere best services.</p>
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
                            <h2 className="px-5 fw-bold mb-4">High Innovation Professional <br/> Care & Services</h2>
                            <p className="px-5 fw-bold text-muted">Our medical clinic provides quality care for the entire family while <br/> maintaining a personable atmosphere best services.</p>
                        </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </div>
        
    );
};

export default Banner;