// Tour/Tour.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useMemo, useCallback } from 'react';
import '../../assets/tours.css';
const TOURS_PER_PAGE = 12;

// Функция для извлечения страны из location
const extractCountry = (location) => {
  // Удаляем город и запятую, оставляем только страну
  const parts = location.split(',');
  return parts.length > 1 ? parts[1].trim() : parts[0].trim();
};

export default function Tour() {
  const [tours, setTours] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 3000 });
  const [loading, setLoading] = useState(true);
  const [availableCountries, setAvailableCountries] = useState([]);

  useEffect(() => {
    fetch('/data/tours.json')
      .then(res => res.json())
      .then(data => {
        setTours(data);
        
        // Извлекаем уникальные страны из данных
        const countriesSet = new Set();
        data.forEach(tour => {
          const country = extractCountry(tour.location);
          countriesSet.add(country);
        });
        const countriesArray = Array.from(countriesSet).sort();
        setAvailableCountries(countriesArray);
        
        // Определяем максимальную цену из данных
        const maxPrice = data.reduce((max, tour) => {
          const priceNum = Number(tour.price?.replace(/[^0-9.]/g, '') || 0);
          return priceNum > max ? priceNum : max;
        }, 0);
        setPriceRange(prev => ({ 
          ...prev, 
          max: Math.ceil(maxPrice) || 3000 
        }));
      })
      .catch(error => {
        console.error('Error loading tours:', error);
      })
      .finally(() => setLoading(false));
  }, []);

  // Обработчик для фильтра по странам
  const handleCountryChange = useCallback((country) => {
    setSelectedCountries(prev => {
      if (prev.includes(country)) {
        return prev.filter(c => c !== country);
      } else {
        return [...prev, country];
      }
    });
    setCurrentPage(1);
  }, []);

  // Очистка всех фильтров
  const clearAllFilters = useCallback(() => {
    setSelectedCountries([]);
    setPriceRange(prev => ({ min: 0, max: prev.max }));
    setCurrentPage(1);
  }, []);

  // Функция для фильтрации туров
  const filteredTours = useMemo(() => {
    return tours.filter(tour => {
      // Фильтр по странам
      if (selectedCountries.length > 0) {
        const tourCountry = extractCountry(tour.location);
        if (!selectedCountries.includes(tourCountry)) {
          return false;
        }
      }

      // Фильтр по цене
      const tourPrice = Number(tour.price?.replace(/[^0-9.]/g, '') || 0);
      if (tourPrice < priceRange.min || tourPrice > priceRange.max) {
        return false;
      }

      return true;
    });
  }, [tours, selectedCountries, priceRange]);

  // Получаем количество туров для каждой страны
  const getCountryCount = useCallback((country) => {
    return tours.filter(tour => extractCountry(tour.location) === country).length;
  }, [tours]);

  // Пагинация
  const totalPages = Math.ceil(filteredTours.length / TOURS_PER_PAGE);
  const currentTours = filteredTours.slice(
    (currentPage - 1) * TOURS_PER_PAGE,
    currentPage * TOURS_PER_PAGE
  );

  const handlePageChange = useCallback((page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [totalPages]);

  // Генерация номеров страниц для пагинации
  const getPageNumbers = useCallback(() => {
    const pages = [];
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push('...');
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push('...');
        pages.push(currentPage - 1);
        pages.push(currentPage);
        pages.push(currentPage + 1);
        pages.push('...');
        pages.push(totalPages);
      }
    }
    
    return pages;
  }, [totalPages, currentPage]);



  return (
    <section className="tour-section section-padding fix">
      <div className="container custom-container">
        <div className="tour-destination-wrapper">
          {/* Заголовок и статистика */}
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-4 gap-3">

            {(selectedCountries.length > 0 || priceRange.min > 0) && (
              <button
                onClick={clearAllFilters}
                className="btn btn-outline-primary d-flex align-items-center"
              >
                <i className="bi bi-x-circle me-2"></i>
                Reset Filters
              </button>
            )}
          </div>

          <div className="row g-4">
            {/* Основной контент с турами */}
            <div className="col-xl-8">
              {loading ? (
                <div className="text-center py-5">
                  <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Загрузка...</span>
                  </div>
                  <p className="mt-3">
                    Loading tours...
                  </p>
                </div>
              ) : currentTours.length === 0 ? (
                <div className="text-center py-5">
                  <h4 className="mb-3">
                    Tours Not Found
                  </h4>
                  <p className="text-muted mb-4">
                    Please try adjusting your filter parameters
                  </p>
                  <button onClick={clearAllFilters} className="btn btn-primary">
                    <i className="bi bi-arrow-clockwise me-2"></i>
                    Reset Filters
                  </button>
                </div>
              ) : (
                <>
                  {/* Список туров */}
                  <div className="row g-4">
                    {currentTours.map((item) => (
                      <div
                        key={item.id}
                        className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                        data-wow-delay=".3s"
                      >
                        <div className="destination-card-items mt-0 h-100 d-flex flex-column">
                          <div
                            className="destination-image"
                            style={{
                              width: '100%',
                              height: '240px',
                              position: 'relative',
                              overflow: 'hidden',
                              borderRadius: '10px',
                            }}
                          >
                            {item.img && (
                              <Image
                                src={item.img}
                                alt={item.title || 'Tour image'}
                                fill
                                style={{ objectFit: 'cover' }}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
                                            <Link href={`/tour/${item.id}`} >
                                                {item.title}
                                                </Link>
                                            </h5>
                                            <ul className="info">
                                                <li>
                                                <i className="bi bi-clock"></i>
                                                    {item.day}
                                                </li>
                                                <li>
                                                <i className="bi bi-person"></i>
                                                {item.number}
                                                </li>
                                            </ul>
                                            <div className="price">
                                                <h6>{item.price}<span>/Per day</span></h6>
                                                <Link href={`/tour/${item.id}`} className="theme-btn style-2">Learn more<i className="bi bi-arrow-right"></i></Link>
                                            </div>
                                        </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Пагинация */}
                  {totalPages > 1 && (
                    <div className="page-nav-wrap text-center mt-5">
                      <ul className="pagination justify-content-center flex-wrap">
                        <li className="page-item">
                          <button
                            className="page-link"
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            aria-label="Last page"
                          >
                            <i className="bi bi-chevron-left"></i>
                          </button>
                        </li>

                        {getPageNumbers().map((page, index) => (
                          <li className="page-item" key={index}>
                            {page === '...' ? (
                              <span className="page-link disabled">...</span>
                            ) : (
                              <button
                                className={`page-link ${currentPage === page ? 'active fw-bold' : ''}`}
                                onClick={() => handlePageChange(page)}
                              >
                                {page}
                              </button>
                            )}
                          </li>
                        ))}

                        <li className="page-item">
                          <button
                            className="page-link"
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            aria-label="Следующая страница"
                          >
                            <i className="bi bi-chevron-right"></i>
                          </button>
                        </li>
                      </ul>
                      
                      <div className="mt-3 text-muted small">
                        Page <span className="fw-medium">{currentPage}</span> of{' '}
                        <span className="fw-medium">{totalPages}</span> •{' '}
                        <span className="fw-medium">{filteredTours.length}</span> tours
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>

            {/* Боковая панель с фильтрами */}
            <div className="col-xl-4">
              <div className="main-sidebar mt-0 sticky-top" style={{ top: '20px' }}>
                
                {/* Диапазон цен */}
                <div className="single-sidebar-widget mb-4">
                  <div className="wid-title d-flex align-items-center mb-3">
                    <div>
                      <h4 className="mb-0">
                        Price Range
                      </h4>
                      <p className="text-muted small mb-0">Specify your budget</p>
                    </div>
                  </div>
                  <div className="price-range-slider p-3 bg-light rounded">
                    
                    {/* Значения */}
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <div className="text-center">
                        <div className="fs-5 fw-bold text-primary">${priceRange.min}</div>
                        <div className="text-muted small">Min.</div>
                      </div>
                      <div className="mx-3 text-muted">
                        <i className="bi bi-arrow-left-right"></i>
                      </div>
                      <div className="text-center">
                        <div className="fs-5 fw-bold text-primary">${priceRange.max}</div>
                        <div className="text-muted small">Max.</div>
                      </div>
                    </div>
                    
                    {/* Поля ввода */}
                    <div className="row g-2">
                      <div className="col">
                        <input
                          type="number"
                          className="form-control form-control-sm"
                          value={priceRange.min}
                          onChange={(e) => setPriceRange(prev => ({
                            ...prev,
                            min: Math.min(Number(e.target.value) || 0, prev.max - 10)
                          }))}
                          min="0"
                          max={priceRange.max - 10}
                          placeholder="Мин. цена"
                        />
                      </div>
                      <div className="col">
                        <input
                          type="number"
                          className="form-control form-control-sm"
                          value={priceRange.max}
                          onChange={(e) => setPriceRange(prev => ({
                            ...prev,
                            max: Math.max(Number(e.target.value) || 0, prev.min + 10)
                          }))}
                          min={priceRange.min + 10}
                          placeholder="Макс. цена"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Фильтр по странам */}
                <div className="single-sidebar-widget mb-4">
                  <div className="wid-title d-flex justify-content-between align-items-center mb-3">
                    <div className="d-flex align-items-center">

                      <div>
                        <h4 className="mb-0">Countries</h4>
                        <p className="text-muted small mb-0">Select a destination</p>
                      </div>
                    </div>
                    {selectedCountries.length > 0 && (
                      <span className="badge bg-primary rounded-pill">
                        {selectedCountries.length}
                      </span>
                    )}
                  </div>
                  
                  <div className="categories-list">
                    {availableCountries.map((country) => {
                      const count = getCountryCount(country);
                      const isSelected = selectedCountries.includes(country);
                      
                      return (
<label
  key={country}
  className={`checkbox-single d-flex justify-content-between align-items-center p-2 rounded mb-2 cursor-pointer ${
    isSelected 
      ? 'bg-primary bg-opacity-10 border-start border-primary border-3' 
      : 'hover-bg-light'
  }`}
>
  <div className="d-flex align-items-center gap-2">
    <input
      type="checkbox"
      checked={isSelected}
      onChange={() => handleCountryChange(country)}
      className="form-check-input"
    />
    <span className={`${isSelected ? 'fw-bold text-primary' : 'text-dark'}`}>
      {country}
    </span>
  </div>
  <span className={`badge ${isSelected ? 'bg-primary' : 'bg-secondary bg-opacity-25 text-dark'}`}>
    {count}
  </span>
</label>

                      );
                    })}
                  </div>
                  
                  {availableCountries.length === 0 && !loading && (
                    <div className="text-center py-3 text-muted">
                      <i className="bi bi-globe fs-4 d-block mb-2"></i>
                      Loading countries...
                    </div>
                  )}
                </div>

                {/* Active Filters */}
                {(selectedCountries.length > 0 || priceRange.min > 0) && (
                  <div className="single-sidebar-widget">
                    <div className="wid-title mb-3">
                      <h4 className="d-flex align-items-center">
                        <i className="bi bi-funnel me-2"></i>
                        Active Filters
                      </h4>
                    </div>
                    <div className="active-filters p-3 bg-light rounded">
                      <div className="d-flex flex-wrap gap-2 mb-3">
                        {selectedCountries.map(country => {
                          return (
                            <span 
                              key={country}
                              className="badge bg-primary d-inline-flex align-items-center py-2 px-3"
                              style={{ cursor: 'pointer' }}
                              onClick={() => handleCountryChange(country)}
                            >
                              <span className="me-2"></span>
                              {country}
                              <i className="bi bi-x ms-2"></i>
                            </span>
                          );
                        })}
                      </div>
                      
                      {priceRange.min > 0 && (
                        <div className="mb-3">
                          <div className="d-flex justify-content-between align-items-center mb-1">
                            <span className="text-muted">Price:</span>
                            <button 
                              className="btn btn-sm btn-link text-danger p-0"
                              onClick={() => setPriceRange(prev => ({ ...prev, min: 0 }))}
                            >
                              <i className="bi bi-x-circle"></i>
                            </button>
                          </div>
                          <div className="d-flex align-items-center gap-2">
                            <span className="badge bg-success">From ${priceRange.min}</span>
                            <span className="text-muted">—</span>
                            <span className="badge bg-success">To ${priceRange.max}</span>
                          </div>
                        </div>
                      )}
                      
                      <button
                        onClick={clearAllFilters}
                        className="btn btn-outline-danger w-100 d-flex justify-content-center align-items-center"
                      >
                        <i className="bi bi-trash me-2"></i>
                        Clear All Filters
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
