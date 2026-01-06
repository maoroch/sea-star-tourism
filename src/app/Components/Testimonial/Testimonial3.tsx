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
        {img:'/assets/img/testimonial/client-1.png', subtitle:'2ГИС', title:'Эльнура Р.', content:'Все понравилось! Спасибо, что забронировали без всяких условий, выручили, приятная обстановка, удобная локация👍'},        
        {img:'/assets/img/testimonial/client-2.png', subtitle:'2ГИС', title:'Айжан Ауесбаева', content:'Большое спасибо за прекрасный отдых! Тур был организован оперативно, очень быстро подготовили документы, отель нашли возле моря, менеджер (руководитель) Лаура всегда была с нами на связи. Мы остались очень довольны.'},        
        {img:'/assets/img/testimonial/client-3.png', subtitle:'2ГИС', title:'​Иван Охрименко', content:'Замечательная тур фирма. Ответственные сотрудники. Особая благодарность Айман за организацию нашего отдыха.'},        
        {img:'/assets/img/testimonial/client-3.png', subtitle:'2ГИС', title:'Альмира Тулеубекова', content:'Спасибо большое Sea Star Tourism Ltd, устроили моей семье незабываемый отдых, благодарю за оперативность и понимание менеджера Винеру, угодила всем, такой вредине как я 😅 🙌'},        
        {img:'/assets/img/testimonial/client-3.png', subtitle:'2ГИС', title:'Kamilya Kenzhegaliyeva', content:'Летаю через данное агентство с 2022 года, менеджер Бота самая лучшая. Всегда предлагает интересные варианты помогает со всеми документами и визами. Отличные цены по сравнению с другими агентствами и высокий сервис. Летала с ними в разные страны, успела посетить Италию, Швейцарию, Лихтенштейн и Бали'},        
        {img:'/assets/img/testimonial/client-3.png', subtitle:'2ГИС', title:'​Aruzhan Abdugapparova', content:'Хочется сказать огромное спасибо турагентству Seastar и особенно нашему любимому турагенту Айман! Мы уже не впервые обращаемся к ней за организацией отдыха, и каждый раз остаёмся в полном восторге. Айман всегда очень внимательно относится к нашим пожеланиям, предлагает только проверенные и действительно стоящие варианты. С ней всегда надёжно и спокойно — она подскажет, посоветует и всё организует на высшем уровне.'},        
      ]; 

    return (
        <section className="testimonial-section section-padding fix bg-cover" data-background="/assets/img/testimonial/testimonial-bg.jpg" >
        <div className="container">
            <div className="testimonial-wrapper-3">
                <div className="row g-4 align-items-center">
                    <div className="col-lg-6 wow fadeInUp wow" data-wow-delay=".3s">
                        <div className="testimonial-image">
                            <Image src="/assets/img/testimonial/02.png" alt="img" width={636} height={657}   />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="testimonial-content">
                            <div className="section-title">
                                <span className="sub-title wow fadeInUp">
                                    Отзывы
                                </span>
                                <h2 className="wow fadeInUp wow" data-wow-delay=".2s">
                                    Что говорят наши клиенты
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
                                                    <div className="client-image">
                                                        <Image src={item.img} alt="img" width={60} height={60}   />
                                                    </div>
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