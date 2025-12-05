import React from 'react';
import web from "../../Assets/img/web.png"
import seo from "../../Assets/img/SEO.png"
import app from "../../Assets/img/app.jpg"
import icon1 from "../../Assets/img/image-12.png"
import icon2 from "../../Assets/img/image-13.png"
import icon3 from "../../Assets/img/image-14.png"
import Service from "../../Assets/img/306service.png"
const OurServices = () => {
    return (
        <>

            <section class="container my-5 py-5">
                <h1 class=" text-uppercase mb-5">Our Services</h1>
                {/* <!-- Card  --> */}
                <div class="row row-cols-1 row-cols-md-2  row-cols-lg-3  g-5 justify-content-center">

                    <div class="col card-test">
                        <div class="card h-100 shadow p-2 rounded border-0">
                            <img src={web} class="card-img-top image-cart-main" alt="..." />


                            <div class="card-body">
                                <h5 class="card-title">Web Design</h5>
                                <p class="card-text">Create stunning and responsive websites tailored to your brand. Our web design service ensures a seamless user experience across all devices with modern aesthetics and functionality.</p>
                            </div>
                            <div class="d-flex justify-content-between p-3 align-items-center">
                                <div>
                                    <h2 class="product-price m-0">$234</h2>
                                    <span>Starts From</span>
                                    <p></p>


                                </div>
                                <div>
                                    <button type="button" class="btn nike-button"> <i class="fas fa-calendar-check me-2"></i>
                                        Book Now</button>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div class="col">
                        <div class="card h-100 shadow p-2 rounded border-0">

                            <img src={seo} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Digital Marketing</h5>
                                <p class="card-text">Boost your online presence with our comprehensive digital marketing strategies. From SEO to social media campaigns, we help your business reach the right audience and increase conversions.</p>

                            </div>
                            <div class="d-flex justify-content-between p-3 align-items-center">
                                <div>
                                    <h2 class="product-price m-0">$234</h2>
                                </div>
                                <div>
                                    <button type="button" class="btn nike-button"> <i class="fas fa-calendar-check me-2"></i>
                                        Book Now</button>
                                </div>
                            </div>

                        </div>
                    </div>



                    <div class="col">
                        <div class="card h-100 shadow p-2 rounded border-0">
                            <img src={app} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">App Development</h5>
                                <p class="card-text">Develop high-performance mobile and web applications with cutting-edge technology. Our team specializes in intuitive designs and scalable solutions that grow with your business.</p>
                            </div>
                            <div class="d-flex justify-content-between p-3 align-items-center">
                                <div>
                                    <h2 class="product-price m-0">$234</h2>
                                </div>
                                <div>
                                    <button type="button" class="btn nike-button"> <i class="fas fa-calendar-check me-2"></i>
                                        Book Now</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


            </section>

            <section class="container my-5 py-5">
                <div class="row flex-column-reverse flex-md-row">
                    <div class="col-lg-6 col-md-6 col-12">
                        <div class="card m-3 border-0 shadow rounded" >
                            <div class="row  p-2">
                                <div class="col-md-2 m-auto ">
                                    <div class="d-flex justify-content-center ">
                                        <img src={icon1} class="img-fluid rounded-start" alt="..." />
                                    </div>
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">Find the Perfect Fit</h5>
                                        <p class="card-text">Everybody is different, which is why we
                                            offer styles for every body.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card m-3 border-0 shadow rounded">
                            <div class="row  p-2">
                                <div class="col-md-2 m-auto ">
                                    <div class="d-flex justify-content-center">
                                        <img src={icon2} class="img-fluid rounded-start" alt="..." />
                                    </div>
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">Free Exchanges</h5>
                                        <p class="card-text">One of the many reasons you can shop
                                            with peace of mind.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card m-3 border-0 shadow rounded">
                            <div class="row  p-2">
                                <div class="col-md-2 m-auto ">
                                    <div class="d-flex justify-content-center">
                                        <img src={icon3} class="img-fluid rounded-start" alt="..." />
                                    </div>
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">Contact Our Seller</h5>
                                        <p class="card-text">They are here to help you. That's quite
                                            literally what we pay them for.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-12 d-flex align-items-center justify-content-center">


                        <img src={Service} class="img-fluid" alt="..." />
                    </div>
                </div>
            </section></>

    );
};

export default OurServices;