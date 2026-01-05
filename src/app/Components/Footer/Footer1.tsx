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
                                        <img src="/assets/img/logo/white-log.svg" height={200} alt="img" />
                                    </a>
                                </div>
                                <div className="footer-content">
                                    <h3>Подпишитесь на новостную рассылку</h3>
                                    <p>
                                        Получайте обновления о наших последних турах, специальных предложениях и эксклюзивных скидках прямо на ваш почтовый ящик.
                                    </p>
                                    <div className="footer-input">
                                        <input type="email" id="email2" placeholder="email" />
                                        <button className="newsletter-btn theme-btn" type="submit">
                                            Подписаться
                                             <i className="bi bi-arrow-right"></i>
                                        </button>
                                    </div>
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
                                   <h4>Страницы</h4>
                                </div>
                                <ul className="list-items">
                                    <li>
                                        <Link href="/">
                                            Главная 
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/about">
                                            О нас  
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/blog">
                                            Блог
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/service">
                                            Направления 
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/tour">
                                            Туры 
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 ps-lg-5 wow fadeInUp wow" data-wow-delay=".6s">
                            <div className="single-widget-items">
                                <div className="widget-head">
                                   <h4>Направления</h4>
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
                                   <h4>Связаться</h4>
                                </div>
                                <div className="contact-info">
                                    <div className="contact-items">
                                        <div className="icon">
                                        <i className="bi bi-geo-alt-fill"></i>
                                        </div>
                                        <div className="content">
                                            <h6>Проспект Достык, 162 к4 <br/>
                                                Алматы, Казахстан
                                            </h6>
                                        </div>
                                    </div>
                                    <div className="contact-items">
                                        <div className="icon">
                                        <i className="bi bi-envelope-fill"></i>
                                        </div>
                                        <div className="content">
                                         <h6>
                                             <a href="mailto:info@touron.com">info@touron.com</a> 
                                         </h6>
                                      </div>
                                    </div>
                                    <div className="contact-items">
                                       <div className="icon">
                                       <i className="bi bi-telephone-fill"></i>
                                       </div>
                                       <div className="content">
                                           <h6>
                                               <a href="tel:+256214203215">+256 214 203 215</a> <br/>
                                               <a href="tel:+10987654321">+1 098 765 4321</a>
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
                            Copyright © <span>Sea Star Tourism,</span> Все права защищены.
                        </p>
                        <ul className="bottom-list wow fadeInUp" data-wow-delay=".5s">
                            <li>Условия использования
                            </li>
                            <li>
                                Политика конфиденциальности
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer1;