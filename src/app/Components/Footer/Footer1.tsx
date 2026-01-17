"use client"
import React, { useEffect } from 'react';
import loadBackgroudImages from '../Common/loadBackgroudImages';
import Link from 'next/link';

const Footer1 = () => {

    useEffect(() => {
        loadBackgroudImages();
    }, []);

    return (
        <footer className="footer-section fix bg-cover" data-background="/assets/img/footer/footer-bg.webp" style={{backgroundColor: 'rgba(0, 0, 0, 1)', position: 'relative'}}>
            {/* Темный оверлей */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
            }}></div>
                <div className="container">
                <div className="footer-widget-wrapper-new">
                    <div className="row">
                        <div className="col-xl-4 col-lg-5 col-md-8 col-sm-6 wow fadeInUp wow" data-wow-delay=".2s">
                            <div className="single-widget-items text-center px-lg-2 ">
                                <div className="widget-head">
                                    <a href="#">
                                        <img src="/assets/img/logo/icon-star.svg" height={100} alt="img" />
                                    </a>
                                </div>
                                <div className="footer-content">
                                    <h3>Follow Us on Social Media</h3>
                                    <p>
                                        Stay updated on our latest tours, special offers, and exclusive discounts.
                                    </p>
                                    <div className="social-icon d-flex align-items-center justify-content-center">
                                        <a href="#"><i className="bi bi-facebook"></i></a>
                                        <a href="#"><i className="bi bi-twitter-x"></i></a>
                                        <a href="#"><i className="bi bi-linkedin"></i></a>
                                        <a href="#"><i className="bi bi-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 ps-lg-5 wow fadeInUp wow" data-wow-delay=".4s">
                            <div className="single-widget-items">
                                <div className="widget-head">
                                   <h4>
                                        Quick Links
                                   </h4>
                                </div>
                                <ul className="list-items">
                                    <li>
                                        <Link href="/">
                                            Home 
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/about">
                                            About Us
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/blog">
                                            Blog
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/service">
                                            Destinations
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/tour">
                                            Tours
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 ps-lg-5 wow fadeInUp wow" data-wow-delay=".6s">
                            <div className="single-widget-items">
                                <div className="widget-head">
                                   <h4>Destinations</h4>
                                </div>
                                <ul className="list-items">
                                    <li>
                                    <Link href="/tour/tour-details">
                                            Wanderlust Adventures  
                                    </Link>
                                    </li>
                                    <li>
                                    <Link href="/tour/tour-details">
                                            Globe Trotters Travel
                                    </Link>
                                    </li>
                                    <li>
                                    <Link href="/tour/tour-details">
                                            Odyssey Travel Services
                                    </Link>
                                    </li>
                                    <li>
                                    <Link href="/tour/tour-details">
                                            Jet Set Journeys
                                    </Link>
                                    </li>
                                    <li>
                                    <Link href="/tour/tour-details">
                                            Dream Destinations Travel
                                    </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 ps-xl-5 wow fadeInUp wow" data-wow-delay=".6s">
                            <div className="single-widget-items">
                                <div className="widget-head">
                                   <h4>Contact Us</h4>
                                </div>
                                <div className="contact-info">
                                    <div className="contact-items d-flex align-items-center">
                                        <div className="icon">
                                        <i className="bi bi-geo-alt-fill"></i>
                                        </div>
                                        <div className="content">
                                            <h6>Abay Avenue, 45B <br/>
                                                Almaty, Kazakhstan
                                            </h6>
                                        </div>
                                    </div>
                                    <div className="contact-items d-flex align-items-center">
                                        <div className="icon">
                                        <i className="bi bi-envelope-fill"></i>
                                        </div>
                                        <div className="content">
                                         <h6>
                                             <a href="mailto:contact@bluestartours.kz">contact@bluestartours.kz</a> 
                                         </h6>
                                      </div>
                                    </div>
                                    <div className="contact-items d-flex align-items-center">
                                       <div className="icon">
                                       <i className="bi bi-telephone-fill"></i>
                                       </div>
                                       <div className="content">
                                           <h6>
                                               <a href="tel:+77012345678">+7 701 234 56 78</a>
                                           </h6>
                                       </div>
                                   </div>
                                </div>
                            </div>
                        </div>
                     </div>
                </div>
                <div className="footer-bottom">
                    <div className="footer-wrapper">
                        <p className="wow fadeInUp" data-wow-delay=".3s">
                            Copyright © <span>Blue Star Tours,</span> Все права защищены.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer1;