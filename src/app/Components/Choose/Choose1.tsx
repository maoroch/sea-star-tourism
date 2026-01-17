"use client"
import React, { useEffect } from 'react';
import loadBackgroudImages from '../Common/loadBackgroudImages';
import Link from 'next/link';
import Image from 'next/image';

const Choose1 = () => {

            useEffect(() => {
                loadBackgroudImages();
            }, []);

    return (
        <section className="travel-feature-section section-padding fix" data-background="/assets/img/travel-bg.jpg" >
            <div className="shape-1 float-bob-y">
                <Image src="/assets/img/plane-shape1.png" alt="img" width={218} height={244}   />
            </div>
            <div className="shape-2 float-bob-x">
                <Image src="/assets/img/plane-shape2.png" alt="img" width={310} height={459}   />
            </div>
            <div className="container">
                <div className="feature-wrapper">
                    <div className="row g-4">

                        
                        <div className="col-lg-6">
                            <div className="feature-content">
                                <div className="section-title">
                                    <span className="sub-title wow fadeInUp">
                                        Choose Your Tour
                                    </span>
                                    <h2 className="wow fadeInUp wow" data-wow-delay=".2s">
                                        We Help You Choose the Perfect Tour
                                    </h2>
                                </div>
                                <p className="wow fadeInUp wow" data-wow-delay=".3s">
                                    Contact us today to start planning your dream vacation. Let us make your travel dreams a reality!
                                </p>
                               <div className="feature-area">

                                <div className="feature-items wow fadeInUp wow" data-wow-delay=".5s">
                                    <div className="feature-icon-item">
                                        <div className="icon">
                                            <Image src="/assets/img/icon/08.svg" alt="img" width={40} height={40}   />
                                        </div>
                                        <div className="content">
                                            <h5>
                                                The most<br />  exciting tours
                                            </h5>
                                        </div>
                                    </div>
                                    <div className="feature-icon-item">
                                        <div className="icon">
                                            <Image src="/assets/img/icon/09.svg" alt="img" width={29} height={40}   />
                                        </div>
                                        <div className="content">
                                            <h5>
                                                The best<br /> travel deals
                                            </h5>
                                        </div>
                                    </div>

                                </div>

                               </div>
                               <Link href="/contact" className="theme-btn wow fadeInUp wow" data-wow-delay=".9s">Contact Us<i className="bi bi-arrow-right"></i></Link>
                            </div>
                        </div>



                        <div className="col-lg-6">
                            <div className="feature-image wow img-custom-anim-left">
                                <Image src="/assets/img/2341234.webp" alt="img" width={636} height={577}   />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Choose1;