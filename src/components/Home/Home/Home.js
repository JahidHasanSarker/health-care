import React from 'react';
import Contact from '../../Shared/Contact/Contact';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Doctors from '../Doctors/Doctors';
import Testimonial from '../Testimonial/Testimonial';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Doctors></Doctors>
            <Testimonial></Testimonial>
           <Contact></Contact>
        </div>
    );
};

export default Home;