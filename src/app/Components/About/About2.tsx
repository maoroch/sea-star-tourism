import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const About2 = () => {
    return (
<section className="about-section section-padding fix">
            <div className="container">
                <div className="about-wrapper-2">
                    <div className="row g-4">
                        <div className="col-lg-6">
                            <div className="about-image">
                                <Image src="/assets/img/about/003.jpg" className="wow img-custom-anim-left" alt="img" width={330} height={512}   />
                                <div className="shape-image float-bob-y">
                                    <Image src="/assets/img/about/0033.jpg" className='w-50' alt="img" width={196} height={109}   />
                                </div>
                                <div className="about-image-2">
                                    <Image src="/assets/img/about/004.jpg" className="wow img-custom-anim-top" alt="img" width={284} height={411}   />
                                    <div className="plane-shape">
                                        <Image src="/assets/img/about/plane-shape2.png" alt="img" width={370} height={205}   />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-content">
                                <div className="section-title">
                                    <span className="sub-title wow fadeInUp">
                                        About Us
                                    </span>
                                    <h2 className="wow fadeInUp wow" data-wow-delay=".3s">
Travel with Confidence and Explore the World Like Never Before                                    </h2>
                                </div>
                                <p className="wow fadeInUp wow gap-2 d-grid" data-wow-delay=".5s">
                                    <span>✈️ For over 15 years, we have been helping travelers explore new destinations and create unforgettable memories.</span>
                                    <span>🏖️ More than 25,000 satisfied travelers have trusted us.</span>
                                    <span>🌟 From exotic beaches to cultural adventures, we help you find the perfect tour.</span>
                                </p>
{/*
                                <div className="about-items wow fadeInUp wow" data-wow-delay=".3s">
                                    <div className="about-icon-items">
                                        <div className="icon">
                                            <Image src="/assets/img/check.png" alt="img" width={34} height={30}   />
                                        </div>
                                        <div className="content">
                                            <h5>
                                                Easy Booking <br/> System
                                            </h5>
                                        </div>
                                    </div>
                                    <div className="text">
                                        <p>
                                            Our hotel also prides itself on <br/> offering exceptional services.
                                        </p>
                                    </div>
                                </div>
                                <div className="about-items wow fadeInUp wow" data-wow-delay=".5s">
                                    <div className="about-icon-items">
                                        <div className="icon">
                                            <Image src="/assets/img/check.png" alt="img" width={34} height={30}   />
                                        </div>
                                        <div className="content">
                                            <h5>
                                                Easy Booking <br/> System
                                            </h5>
                                        </div>
                                    </div>
                                    <div className="text">
                                        <p>
                                            Our hotel also prides itself on <br/> offering exceptional services.
                                        </p>
                                    </div>
                                </div>
                                */}
                                <Link href="/tour" className="theme-btn mt-4 wow fadeInUp wow" data-wow-delay=".7s">Start Your Adventure
<i className="bi bi-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About2;