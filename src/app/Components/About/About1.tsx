"use client"
import React, { useEffect, useState } from 'react';
import loadBackgroudImages from '../Common/loadBackgroudImages';
import VideoModal from '../VideoModal/VideoModal';
import Image from 'next/image';

const About1 = () => {

        useEffect(() => {
            loadBackgroudImages();
        }, []);

        const [iframeSrc, setIframeSrc] = useState('about:blank');
        const [toggle, setToggle] = useState(false);
      
        const handelClick = () => {
          setIframeSrc("https://www.youtube.com/embed/HC-tgFdIcB0");
          setToggle(!toggle);
        };
        const handelClose = () => {
          setIframeSrc('about:blank');
          setToggle(!toggle);
        };   

    return (
            <section className="about-section section-padding  fix bg-cover" data-background="/assets/img/about/about-bg.jpg">

            <div className="container">
                <div className="about-wrapper">
                    <div className="row g-4">
                        <div className="col-lg-6">
                            <div className="about-image">
                                <Image src="/assets/img/about/23423432.jpg" className="wow img-custom-anim-left" alt="img" width={350} height={425}   />
                                <div className="border-image">
                                    <Image src="/assets/img/about/border.png" alt="img" width={404} height={486}   />
                                </div>

                                <div className="about-image-2">
                                    <Image src="/assets/img/about/2342423.jpg" className="wow img-custom-anim-top w-100" alt="img" width={194} height={114}   />
                                    <div className="plane-shape float-bob-y">
                                        <Image src="/assets/img/about/plane-shape.png" alt="img" width={299} height={187}   />
                                    </div>
                                    <div className="about-tour">
                                        <div className="content">
                                            <h2 className='text-white'><b>15</b></h2>
                                            <span>years of experience
                                            </span>
                                        </div>
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
                                    <h2 className="wow fadeInUp wow" data-wow-delay=".2s">
                                        Why Choose Us for Your Travels
                                    </h2>
                                </div>
                                <div className="about-area mt-4 mt-md-0">
                                    <div className="line-image">
                                        <Image src="/assets/img/about/Line-image.png" alt="img" width={1} height={187}   />
                                    </div>
                                    <div className="about-items wow fadeInUp wow" data-wow-delay=".3s">
                                        <div className="icon">
                                            <Image src="/assets/img/icon/05.svg" alt="img" width={46} height={40}   />
                                        </div>
                                        <div className="content">
                                            <h5>
                                                Individual Tours
                                            </h5>
                                            <p>
                                                We offer individual tours tailored to your preferences and interests.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="about-items wow fadeInUp wow" data-wow-delay=".5s">
                                        <div className="icon">
                                            <Image src="/assets/img/icon/06.svg" alt="img" width={40} height={40}   />
                                        </div>
                                        <div className="content">
                                            <h5>
                                                Safety First
                                            </h5>
                                            <p>
                                                We offer individual tours tailored to your interests.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="about-items wow fadeInUp wow" data-wow-delay=".7s">
                                        <div className="icon">
                                            <Image src="/assets/img/icon/07.svg" alt="img" width={35} height={40}   />
                                        </div>
                                        <div className="content">
                                            <h5>
                                                Professional Support
                                            </h5>
                                            <p>
                                                Our team of professionals is always ready to assist you at every stage of your journey.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        <VideoModal
            isTrue={toggle}
            iframeSrc={iframeSrc}
            handelClose={handelClose}        
        ></VideoModal>

        </section>
    );
};

export default About1;