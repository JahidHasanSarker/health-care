import React from 'react';
import './Testimonial.css';

const Testimonial = () => {
    return (
        <div>
            <div className="pn_reviews my-5">
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <h1 className="text-center pb-5">Reviews of our valuable clients</h1>
            </div>

            <div className="col-md-12 col-lg-4">
                <div className="pn_testimonial_box mt-4">
                    <p className="text-justify">Never doubt that a small group of committed citizens can change the world: Indeed it’s the only thing that ever has.
</p>

                    <div className="row pt-3">
                        <div className="col-md-6 pn_review_profile"><img src="https://desklib.com/static/src/assets/images/v2/profile_1.svg" className="border-radius-12 float-right" alt="" /> <span> Charles Boyle </span> </div>
                        <div className="col-md-6 pn_review_rating d-flex justify-content-end"> 5 &nbsp; <img className="image-radius aligncenter" src="https://desklib.com/static/src/assets/images/v2/star_rating.svg" alt="" /> </div>
                    </div>
                </div>
            </div>
            <div className="col-md-12 col-lg-4">
                <div className="pn_testimonial_box mt-4">
                    <p className="text-justify">To do what nobody else will do, in a way that nobody else can do, in spite of all we go through…that is what it is to be a nurse.
</p>
                    <div className="row pt-3">
                        <div className="col-md-6 pn_review_profile"><img src="https://desklib.com/static/src/assets/images/v2/profile_2.svg" className="border-radius-12 float-right" alt="" /> <span> Gina Lannety </span> </div>
                        <div className="col-md-6 pn_review_rating d-flex justify-content-end"> 5 &nbsp; <img className="image-radius aligncenter" src="https://desklib.com/static/src/assets/images/v2/star_rating.svg" alt="" /> </div>
                    </div>
                </div>
            </div>
            <div className="col-md-12 col-lg-4">
                <div className="pn_testimonial_box mt-4">
                    <p className="text-justify">You know what they call the fellow who finishes last in his medical school graduating class? They call him 'Doctor.
 </p>
                    <div className="row pt-3">
                        <div className="col-md-6 pn_review_profile"><img src="https://desklib.com/static/src/assets/images/v2/profile_3.svg" className="border-radius-12 float-right" alt="" /> <span> Dug Judey </span> </div>
                        <div className="col-md-6 pn_review_rating d-flex justify-content-end"> 5 &nbsp; <img className="image-radius aligncenter" src="https://desklib.com/static/src/assets/images/v2/star_rating.svg" alt="" /> </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
        </div>
    );
};

export default Testimonial;