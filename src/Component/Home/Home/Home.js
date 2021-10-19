import React from 'react';
import About from "../About/About";
import Banner from "../../Shared/Banner/Banner";
import Doctors from '../Doctors/Doctors';
import Testimonial from '../../Testimonial/Testimonial';
import Contact from '../../Shared/Contact/Contact';


const Home = () => {
    return (
        <div>
           <Banner/>
           <About/>
           <Doctors/>
           <Testimonial/>
           <Contact/>
        </div>
    );
};

export default Home;