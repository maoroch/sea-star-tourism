import Image from 'next/image';
import React from 'react';

const Contact = () => {
    return (
        <div>
            
         <section className="contact-us-section fix section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="contact-us-main">
                            <div className="contact-box-items">
                                <div className="icon">
                                    <Image src="/assets/img/icon/18.svg" alt="img" width={70} height={70}   />
                                </div>
                                <div className="content">
                                    <h3>
                                        Наш адрес
                                    </h3>
                                    <p>
                                        Проспект Достык, 162 к4, Алматы
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="contact-us-main style-2">
                            <div className="contact-box-items">
                                <div className="icon">
                                    <Image src="/assets/img/icon/19.svg" alt="img" width={70} height={70}   />
                                </div>
                                <div className="content">
                                    <h3>
                                        <a href="mailto:info@tripco.com">info@sea-star-tourism.kz</a>
                                    </h3>
                                    <p>
                                        Почта для написания вопросов
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="contact-us-main">
                            <div className="contact-box-items">
                                <div className="icon">
                                    <Image src="/assets/img/icon/20.svg" alt="img" width={70} height={70}   />
                                </div>
                                <div className="content">
                                    <h3>
                                        <a href="tel:Hot+208-666-0112">+7‒707‒555‒85‒84</a>
                                    </h3>
                                    <p>
                                        единый номер
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         </section>           

          <section className="contact-us-section-2 section-bg-2 fix">
            <div className="container">
                <div className="contact-us-wrapper">
                    <div className="row g-4">
                        <div className="col-lg-6">
                            <div className="contact-us-contact">
                                <div className="section-title">
                                    <span className="sub-title text-white wow fadeInUp">
                                        Получите консультацию
                                    </span>
                                    <h2 className=" text-white wow fadeInUp wow" data-wow-delay=".2s">
                                        Связаться с нами
                                    </h2>

                                </div>
                                <div className="comment-form-wrap">
                                    <form action="#" id="contact-form" method="POST">
                                        <div className="row g-4">
                                            <div className="col-lg-6">
                                                <div className="form-clt">
                                                    <input type="text" name="name" id="name" placeholder="Имя" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-clt">
                                                    <input type="text" name="email" id="email4" placeholder="Ваш Email" />
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-clt">
                                                   <input type="text" name="subject" id="name" placeholder="Тема" />
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-clt">
                                                    <textarea name="message" id="message" placeholder="Ваше сообщение"></textarea>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <button type="submit" className="theme-btn">
                                                    Отправить сообщение
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="map-area">
                                <div className="google-map">
                                    <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A6d2c4982dbc91ef1a43428c19c1fc44ff7b4f52abfcd1c5ae6c2db7650d9f818&amp;source=constructor"loading="lazy"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         </section>           
        </div>
    );
};

export default Contact;