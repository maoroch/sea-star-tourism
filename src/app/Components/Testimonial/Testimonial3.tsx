"use client"
import React, { useEffect, useRef } from 'react';
import loadBackgroudImages from '../Common/loadBackgroudImages';
import Slider from 'react-slick';
import Image from 'next/image';

const Testimonial3 = () => {

        useEffect(() => {
            loadBackgroudImages();
        }, []);    

    const settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        swipeToSlide: true,
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

      const sliderRef = useRef(null);

      const next = () => {
        sliderRef.current.slickNext();
      };
    
      const previous = () => {
        sliderRef.current.slickPrev();
      }; 

    const testimonialContent = [
  {
    img: '/assets/img/testimonial/client-3.png',
    title: 'Sophia Martinez',
    content: 'Huge thanks to Seastar Travel Agency and especially Ayman! Every trip with her is smooth and memorable. She listens carefully and always suggests the best options. Truly reliable and professional.'
  },
  {
    img: '/assets/img/testimonial/client-1.png',
    title: 'Liam Johnson',
    content: 'Everything was perfect! Quick booking, helpful staff, and a great location. Highly recommend!'
  },
  {
    img: '/assets/img/testimonial/client-2.png',
    title: 'Olivia Kim',
    content: 'Amazing holiday! Documents were prepared fast, hotel was right by the sea, and our manager Laura was always available. Very satisfied.'
  },
  {
    img: '/assets/img/testimonial/client-3.png',
    title: 'Ethan Brown',
    content: 'Fantastic travel agency with responsible staff. Special thanks to Ayman for organizing everything perfectly.'
  },
  {
    img: '/assets/img/testimonial/client-3.png',
    title: 'Isabella Thompson',
    content: 'Thank you, Blue Star Tours! Our family had an unforgettable trip. The manager Viner was efficient and attentive, making sure everyone was happy.'
  },
  {
    img: '/assets/img/testimonial/client-3.png',
    title: 'Noah Williams',
    content: 'Booking with this agency since 2022 has been amazing. Manager Bota is great, helping with documents, visas, and offering excellent deals. Visited Italy, Switzerland, Liechtenstein, and Bali with them.'
  },
];

    return (
        <section className="testimonial-section section-padding fix bg-cover" data-background="/assets/img/testimonial/testimonial-bg.jpg" >
        <div className="container">
            <div className="testimonial-wrapper-3">
                <div className="row g-4 align-items-center">
                    <div className="col-lg-6 wow fadeInUp wow" data-wow-delay=".3s">
                        <div className="testimonial-image">
                            <Image src="/assets/img/testimonial/02.jpg" alt="img" width={636} height={657}   />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="testimonial-content">
                            <div className="section-title">
                                <span className="sub-title wow fadeInUp">
                                    Testimonials
                                </span>
                                <h2 className="wow fadeInUp wow" data-wow-delay=".2s">
                                    What Our Clients Say
                                </h2>
                            </div>
                            <div className="swiper testimonial-slider3">
                                <div className="swiper-wrapper">
                                <Slider ref={sliderRef} {...settings}>
                                {testimonialContent.map((item, i) => (
                                    <div key={i} className="swiper-slide">
                                        <div className="testimonial-card-items">
                                            <div className="client-info-items">
                                                <div className="client-info">
{/*                                                    <div className="client-image">
                                                        <Image src={item.img} alt="img" width={60} height={60}   />
                                                    </div>*/}
                                                    <div className="content">
                                                        <h4>
                                                        {item.title}
                                                        </h4>
                                                        <p>
                                                        {item.subtitle}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="37" viewBox="0 0 50 37" fill="none">
                                                        <path d="M0 0V37L18.75 18.5V0H0ZM31.25 0V37L50 18.5V0H31.25Z" fill="#1CA8CB"/>
                                                   </svg>
                                                </div>
                                            </div>
                                            <p>
                                            {item.content}
                                            </p>
                                        </div>
                                    </div>
                        ))}
                        </Slider>

                                </div>
                            </div>
                            <div className="array-button">
                                <button onClick={previous} className="array-prev">
                                <i className="bi bi-arrow-up"></i>
                                </button>
                                <button onClick={next} className="array-next">
                                <i className="bi bi-arrow-down"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Testimonial3;