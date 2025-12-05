import React from 'react';
import heroImage from "./../../Assets/img/Hero image.png"
const HeroSection = () => {
    return (
        <section className='home d-flex'>
            <div class="row flex-md-row container mx-auto py-5">
                <div class="col-lg-6 col-md-6 col-12 d-flex justify-content-center align-items-center">
                    <div className=''>
                        <h1 >Nova Stack</h1>
                        <h2>Transforming ideas into powerful software</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing
                            and typesetting industry.</p>
                        <button type="button" class="btn btn-grad"> <i class="fas fa-calendar-check me-2"></i>  Book Now</button>

                    </div>
                </div>
                <div class="col-lg-6 col-md-6 col-12 d-flex justify-content-center align-items-center ">
                    <img className='img-fluid  ' src={heroImage} alt="" />

                </div>


            </div>
        </section >
    );
};

export default HeroSection;