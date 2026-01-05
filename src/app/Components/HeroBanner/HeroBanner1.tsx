"use client"
import React, { useEffect } from 'react';
import loadBackgroudImages from '../Common/loadBackgroudImages';
import parse from 'html-react-parser';
import Slider from 'react-slick';
import Image from 'next/image';

const HeroBanner1 = () => {


    const heroContent = [
        {img:'/assets/img/hero/03.webp', subtitle:'Ощути незабываемые эмоции', title:'Путешествуй <br> с удовольствием<br> и без забот'},
        {img:'/assets/img/hero/02.webp', subtitle:'Каждое путешествие — как мечта', title:'Открой мир с нами — путешествуй легко и с комфортом'},
        {img:'/assets/img/hero/01.webp', subtitle:'Впечатления, которые остаются навсегда', title:'Твое идеальное путешествие начинается здесь'},
      ];

      useEffect(() => {
        loadBackgroudImages();
    }, []);

    const settings = {
        dots: false,
        infinite: true,
        fade: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,        
        responsive: [
          {
            breakpoint: 1399,
            settings: {
              slidesToShow: 1,
            }
          },
          {
            breakpoint: 1199,
            settings: {
              slidesToShow: 1,
            }
          },{
            breakpoint: 575,
            settings: {
              slidesToShow: 1,
            }
          }
        ]
      };  


    return (
        <section className="hero-section">
        <div className="swiper hero-slider">
            <div className="swiper-wrapper">
            <Slider {...settings}>
            {heroContent.map((item, i) => (
                <div key={i} className="swiper-slide">
                    <div className="hero-1">
                        <div className="hero-bg bg-cover" data-background={item.img}></div>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-9">
                                    <div className="hero-content">
                                        <div className="sub-title">
                                        {item.subtitle}
                                        </div>
                                        <h1>
                                        {parse(item.title)}
                                        </h1>
                                        <div className="booking-list-area">
                                            <div className="booking-list">
                                                <div className="icon">
                                                    <Image src="/assets/img/hero/icon-1.png" alt="img" width={24} height={24}   />
                                                </div>
                                                <div className="content">
                                                    <h6>Страны</h6>
                                                    <div className="form">
                                                        <select className="single-select w-100">
                                                            <option>Китай</option>
                                                            <option>ОАЭ</option>
                                                            <option>Грузия</option>
                                                            <option>Узбекистан</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
{/*
                                            <div className="booking-list">

                                                <div className="icon">
                                                    <Image src="/assets/img/hero/icon-2.png" alt="img" width={24} height={24}   />
                                                </div>
                                                <div className="content">
                                                    <h6>Типы отдыха</h6>
                                                    <div className="form">
                                                        <select className="single-select w-100">
                                                            <option> Activities Type</option>
                                                            <option> Adventure 02</option>
                                                            <option>Adventure 03</option>
                                                            <option> Adventure 04</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                                 */}

                                            <div className="booking-list">
                                                <div className="icon">
                                                    <Image src="/assets/img/hero/icon-3.png" alt="img" width={24} height={24}   />
                                                </div>
                                                <div className="content">
                                                    <h6>Даты</h6>
                                                    <div className="form-clt">
                                                        <input type="date" id="date1" name="date1" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="booking-list">
                                                <div className="icon">
                                                    <Image src="/assets/img/hero/icon-3.png" alt="img" width={24} height={24}   />
                                                </div>
                                                <div className="content">
                                                    <h6>Пассажиры</h6>
                                                    <div className="form">
                                                        <select className="single-select w-100">
                                                            <option>01</option>
                                                            <option>02</option>
                                                            <option>03</option>
                                                            <option>04</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <button className="theme-btn" type="submit">Искать</button>
                                        </div>
                                    </div>
                                    <div className="counter-area">
                                        <div className="counter-items">
                                            <div className="counter-text">
                                                <h2><span className="count">500 </span>тыс</h2>
                                                <p>туров</p>
                                            </div>
                                            <div className="counter-text">
                                                <h2><span className="count">100.5</span>тыс</h2>
                                                <p>Отелей</p>
                                            </div>
                                            <div className="counter-text">
                                                <h2><span className="count">15 </span>тыс</h2>
                                                <p>Довольных клиентов</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                ))}
                 </Slider>

            </div>
        </div>
    </section>
    );
};

export default HeroBanner1;