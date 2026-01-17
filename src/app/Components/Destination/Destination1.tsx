import Image from 'next/image';
import Link from 'next/link';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

async function getTours() {
  const res = await fetch(`${baseUrl}/data/tours.json`, { cache: 'no-store' });
  return res.json();
}


const Destination1 = async () => {
  const destinationContent = await getTours();

  return (
    <section className="popular-destination-section section-padding pt-10">
      <div className="container">
        <div className="section-title-area justify-content-between">
          <div className="section-title">
            <span className="sub-title">
              Discover the best places to visit
            </span>
            <h2>
              Popular Destinations
            </h2>
          </div>
          <Link href="/tour/" className="theme-btn">
            Learn More <i className="bi bi-arrow-right"></i>
          </Link>
        </div>

        <div className="row">
          {destinationContent
            .slice(-4)
            .map((item, i) => (
              <div
                key={i}
                className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <div className="destination-card-items">
                  {/* Ограничиваем контейнер изображения фиксированными размерами */}
                  <div
                    className="destination-image"
                    style={{
                      width: '100%',
                      height: '254px',
                      position: 'relative',
                      overflow: 'hidden',
                      borderRadius: '10px', // если нужно скругление
                    }}
                  >
                    {item.img && (
                      <Image
                        src={item.img}
                        alt={item.title || 'Tour image'}
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    )}
                  </div>

                  <div className="destination-content">
                    <ul className="meta">
                      <li>
                        <i className="bi bi-geo-alt"></i>
                        {item.location}
                      </li>
                      <li className="rating">
                        <div className="star">
                          <i className="bi bi-star-fill"></i>
                        </div>
                        <p>{item.rating}</p>
                      </li>
                    </ul>

                    <h5>
                      <Link href={`/tour/${item.id}`}>
                        {item.title}
                      </Link>
                    </h5>

<ul className="info">
  <li>
    <i className="bi bi-clock"></i>
    {item.day} {/* раньше было item.duration */}
  </li>
  <li>
    <i className="bi bi-person"></i>
    {item.number || '2 Person'}
  </li>
</ul>


                    <div className="price">
                      <h6>
                        {item.price}
                        <span>/Per day</span>
                      </h6>
                      <Link
                        href={`/tour/${item.id}`}
                        className="theme-btn style-2"
                      >
                        Learn more <i className="bi bi-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Destination1;
