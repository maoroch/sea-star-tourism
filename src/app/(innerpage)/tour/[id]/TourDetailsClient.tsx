'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const faqContent = [
  {
    title: 'How do I book a tour with your agency?',
    content:
      'You can book a tour by selecting your preferred package on our website and submitting a booking request. Our team will contact you to confirm availability and finalize the details.'
  },
  {
    title: 'What payment methods do you accept?',
    content:
      'We accept major credit and debit cards, bank transfers, and other secure online payment methods. Payment details will be provided during the booking process.'
  },
  {
    title: 'Can I customize my travel itinerary?',
    content:
      'Yes, we offer customized tours tailored to your preferences. You can adjust the itinerary, accommodation, activities, and travel dates to suit your needs.'
  },
  {
    title: 'What is your cancellation policy?',
    content:
      'Cancellation policies depend on the selected tour and service providers. Please contact us for detailed information regarding cancellations, refunds, and applicable fees.'
  }
];
export default function TourDetailsClient({ initialTour, id }) {
  const [tour, setTour] = useState(initialTour);
  const [loading, setLoading] = useState(!initialTour);
  const [openItemIndex, setOpenItemIndex] = useState(-1);
  const [firstItemOpen, setFirstItemOpen] = useState(true);
  const accordionContentRef = useRef(null);

  useEffect(() => {
    if (!initialTour) {
      fetch('/data/tours.json')
        .then(res => res.json())
        .then(data => {
          const found = data.find(item => item.id === id);
          setTour(found || null);
        })
        .finally(() => setLoading(false));
    }
  }, [id, initialTour]);

  useEffect(() => {
    if (firstItemOpen) {
      setOpenItemIndex(0);
      setFirstItemOpen(false);
    }
  }, [firstItemOpen]);

  const handleItemClick = index => {
    if (index === openItemIndex) {
      setOpenItemIndex(-1);
    } else {
      setOpenItemIndex(index);
    }
  };

  if (loading) {
    return (
      <div className="text-center py-5">
        <p>Загрузка тура...</p>
      </div>
    );
  }

  if (!tour) {
    return (
      <div className="text-center py-5">
        <h3>Тур не найден</h3>
        <Link href="/tour" className="btn btn-primary mt-3">
          Вернуться к списку туров
        </Link>
      </div>
    );
  }

  return (
    <section className="activities-details-section fix section-padding">
      <div className='nav-substrate'></div>
      <div className="container">
        <div className="activities-details-wrapper">
          <div className="row g-4 justify-content-center">
            <div className="col-12 col-lg-8">
              <div className="details-thumb">
                <Image src={tour.img} alt={tour.title} width={856} height={510} />


              </div>
              <div className="activities-details-content">
                <p className="text-muted">
  <i className="bi bi-geo-alt me-2"></i>
  {tour.location}
</p>
                <h2 className="mb-3">{tour.title}</h2>
                <p>
                  {tour.description}
                </p>

                <div className="activities-list-item">
{tour.highlights && tour.highlights.length > 0 && (
  <div className="activities-list-item">
    <h3>Tour Highlights</h3>
    <div className="activities-item">
      <div className="row">
        <div className="col-md-7">
          <ul className="activities-list">
            {tour.highlights.slice(0, 3).map((highlight, index) => (
              <li key={index} className="mb-3">
                <i className="bi bi-check-circle-fill text-success me-2"></i>
                {highlight}
              </li>
            ))}
          </ul>
        </div>
        {tour.highlights.length > 3 && (
          <div className="col-md-7">
            <ul className="activities-list">
              {tour.highlights.slice(3).map((highlight, index) => (
                <li key={index} className="mb-3">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  </div>
)}
                </div>
                <div className="activities-box-wrap">
                  <div className="activities-box-area">
                    <div className="activities-box-item">
                      <div className="icon">
                        <Image src="/assets/img/icon/27.svg" alt="img" width={26} height={27} />
                      </div>
                      <div className="content">
                        <span>
                          Accommodation
                        </span>
                        <h6>
                          5 Stare Hotel
                        </h6>
                      </div>
                    </div>
                    <div className="activities-box-item style-2">
                      <div className="icon">
                        <Image src="/assets/img/icon/28.svg" alt="img" width={26} height={27} />
                      </div>
                      <div className="content">
                        <span>
                          Admission Free
                        </span>
                        <h6>
                          No
                        </h6>
                      </div>
                    </div>
                    <div className="activities-box-item">
                      <div className="icon">
                        <Image src="/assets/img/icon/29.svg" alt="img" width={26} height={27} />
                      </div>
                      <div className="content">
                        <span>
                          Arrival City
                        </span>
                        <h6>
                          {tour.location.split(',')[0].trim()}
                        </h6>
                      </div>
                    </div>
                    <div className="activities-box-item">
                      <div className="icon">
                        <Image src="/assets/img/icon/30.svg" alt="img" width={26} height={27} />
                      </div>
                      <div className="content">
                        <span>
                          Language
                        </span>
                        <h6>
                          English
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="activities-box-area mb-0">
                    <div className="activities-box-item">
                      <div className="icon">
                        <Image src="/assets/img/icon/31.svg" alt="img" width={26} height={27} />
                      </div>
                      <div className="content">
                        <span>
                          Hotel Transfer
                        </span>
                        <h6>
                          Available
                        </h6>
                      </div>
                    </div>
                    <div className="activities-box-item">
                      <div className="icon">
                        <Image src="/assets/img/icon/32.svg" alt="img" width={26} height={27} />
                      </div>
                      <div className="content">
                        <span>
                          Guide
                        </span>
                        <h6>
                          Professional<br /> Tour Guide
                        </h6>
                      </div>
                    </div>
                    <div className="activities-box-item">
                      <div className="icon">
                        <Image src="/assets/img/icon/33.svg" alt="img" width={26} height={27} />
                      </div>
                      <div className="content">
                        <span>
                          Group Size
                        </span>
                        <h6>
                          {tour.number}
                        </h6>
                      </div>
                    </div>
                    <div className="activities-box-item">
                      <div className="icon">
                        <Image src="/assets/img/icon/34.svg" alt="img" width={26} height={27} />
                      </div>
                      <div className="content">
                        <span>
                          Duration
                        </span>
                        <h6>
                          {tour.day}
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="faq-items">
                  <h3>Tour Plan</h3>
                  <div className="faq-accordion">
                    <div className="accordion" id="accordion">
                      {faqContent.map((item, index) => (
                        <div key={index} className={`accordion-item mb-3 ${index === openItemIndex ? "active" : "" }`} >
                          <h5 onClick={() => handleItemClick(index)} className="accordion-header">
                            <button className="accordion-button collapsed" type="button"
                              data-bs-toggle="collapse" data-bs-target="#faq1"
                              aria-expanded="true" aria-controls="faq1">
                              {item.title}
                            </button>
                            
                          </h5>
                          <div ref={accordionContentRef} id="faq1" className="accordion-collapse collapse"
                            data-bs-parent="#accordion">
                            <div className="accordion-body">
                              <p>
                                {item.content}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
{/**
 *                 <div className="map-area">
                  <h3>View in Map</h3>
                  <div className="google-map">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6678.7619084840835!2d144.9618311901502!3d-37.81450084255415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642b4758afc1d%3A0x3119cc820fdfc62e!2sEnvato!5e0!3m2!1sen!2sbd!4v1641984054261!5m2!1sen!2sbd"
                      loading="lazy"></iframe>
                  </div>
                </div>
                <h3>Customer Reviews</h3>
                <div className="courses-reviews-box-items">
                  <div className="courses-reviews-box">
                    <div className="reviews-box">
                      <h2><span className="count">4.9</span></h2>
                      <div className="star">
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                      </div>
                      <p>856+ Reviews</p>
                    </div>
                    <div className="reviews-ratting-right">
                      <div className="reviews-ratting-item">
                        <div className="star">
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                        </div>
                        <div className="progress">
                          <div className="progress-value style-two"></div>
                        </div>
                        <span>Services</span>
                      </div>
                      <div className="reviews-ratting-item">
                        <div className="star">
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                        </div>
                        <div className="progress">
                          <div className="progress-value style-three"></div>
                        </div>
                        <span>Safety</span>
                      </div>
                      <div className="reviews-ratting-item">
                        <div className="star">
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                        </div>
                        <div className="progress">
                          <div className="progress-value style-three"></div>
                        </div>
                        <span>Guides</span>
                      </div>
                      <div className="reviews-ratting-item">
                        <div className="star">
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                        </div>
                        <div className="progress">
                          <div className="progress-value style-four"></div>
                        </div>
                        <span>Foods</span>
                      </div>
                      <div className="reviews-ratting-item">
                        <div className="star">
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                        </div>
                        <div className="progress">
                          <div className="progress-value style-five"></div>
                        </div>
                        <span>Hotels</span>
                      </div>
                      <div className="reviews-ratting-item">
                        <div className="star">
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                        </div>
                        <div className="progress">
                          <div className="progress-value style-five"></div>
                        </div>
                        <span>Places</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="cliect-review-area">
                  <h3>client review</h3>
                  <ul className="review-items">
                    <li>
                      <div className="thumb">
                        <Image src="/assets/img/destails/client-1.jpg" alt="img" width={110} height={110} />
                      </div>
                      <div className="content">
                        <div className="star">
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                        </div>
                        <h5>Shikhon Islam</h5>
                        <p>Neque porro est qui dolorem ipsum quia quaed inventor veritatis et quasi
                          architecto var sed efficitur turpis gilla sed sit amet finibus eros.
                          Lorem Ipsum is simply dummy</p>
                        <span className="reply-icon">
                          <i className="fa-solid fa-reply"></i> Reply
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="thumb">
                        <Image src="/assets/img/destails/client-2.jpg" alt="img" width={110} height={110} />
                      </div>
                      <div className="content">
                        <div className="star">
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                        </div>
                        <h5>Ralph Edwards</h5>
                        <p>
                          Neque porro est qui dolorem ipsum quia quaed inventor veritatis et quasi
                          architecto var sed efficitur turpis gilla sed sit amet finibus eros.
                        </p>
                        <span className="reply-icon">
                          <i className="fa-solid fa-reply"></i> Reply
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="thumb">
                        <Image src="/assets/img/destails/client-3.jpg" alt="img" width={110} height={110} />
                      </div>
                      <div className="content">
                        <div className="star">
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                        </div>
                        <h5>Sohel Islam</h5>
                        <p>
                          Neque porro est qui dolorem ipsum quia quaed inventor veritatis et quasi
                          architecto var sed efficitur turpis gilla sed sit amet finibus eros.
                          Lorem Ipsum is simply dummy
                        </p>
                        <span className="reply-icon">
                          <i className="fa-solid fa-reply"></i> Reply
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="client-ratting-items">
                  <h3>Add Your Reviews</h3>
                  <ul>
                    <li>
                      Services
                      <div className="star">
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                      </div>
                    </li>
                    <li>
                      Hotel
                      <div className="star">
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                      </div>
                    </li>
                    <li>
                      Places
                      <div className="star">
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                      </div>
                    </li>
                  </ul>
                  <ul className="mb-4">
                    <li>
                      Safety
                      <div className="star">
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                      </div>
                    </li>
                    <li>
                      Foods
                      <div className="star">
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                      </div>
                    </li>
                    <li>
                      Guides
                      <div className="star">
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                      </div>
                    </li>
                  </ul>
                  <form action="#" id="contact-form" method="POST">
                    <div className="row g-4">
                      <div className="col-lg-6">
                        <div className="form-clt">
                          <input type="text" name="name" id="name" placeholder="Your name" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-clt">
                          <input type="text" name="phone" id="phone" placeholder="Your phone" />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-clt">
                          <input type="text" name="email2" id="email21" placeholder="Your email" />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-clt">
                          <textarea name="message" id="message"
                            placeholder="Your comments..."></textarea>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <button type="submit" className="theme-btn text-center">
                          Submit Reviews <i className="bi bi-arrow-right"></i>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>  */}
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <div className="main-bar">
                <div className="main-sideber">
                  <div className="single-sidebar-widget">
                    <div className="wid-title">
                      <h4>Contact for Booking</h4>
                    </div>
                    <div className="desti-booking-form">
                      <form action="#" id="contact-form" method="POST">
                        <div className="row g-4">
                          <div className="col-lg-12">
                            <div className="form-clt">
                              <input type="text" name="name" id="name11" placeholder="Your Name"/>
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="form-clt">
                              <input type="text" name="email" id="email212" placeholder="Your Email"/>
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="form-clt">
                              <textarea name="message" id="message11" placeholder="Type Comment Here"></textarea>
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <button type="submit" className="theme-btn text-center">
                              Send Now <i className="bi bi-arrow-right"></i>
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
<div
  className="booking-bg bg-cover"
  style={{
    backgroundImage: "url('/assets/img/destails/bg3.jpg')"
  }}
>
  <h3 className="text-title">
    Book Now And Enjoy Amazing Savings!
  </h3>
</div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}