import { useState, useRef, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Factory, ChevronLeft, ChevronRight, ArrowRight, CheckCircle2 } from 'lucide-react';
import './FactorySection.css';

const factoryCards = [
  {
    id: 1,
    title: 'Production Setup',
    badge: 'Production Plant',
    status: 'Automated Facility',
    image: '/factory_card_1_setup.jpg',
    description: 'A well-organized manufacturing facility designed for efficient and consistent production.'
  },
  {
    id: 2,
    title: 'Advanced Printing Facility',
    badge: 'Printing Tech',
    status: 'High-Precision Color',
    image: '/factory_card_2_printing.jpg',
    description: 'Advanced printing facilities for clear, attractive, and customized cup designs.'
  },
  {
    id: 3,
    title: 'Material Stock',
    badge: 'Raw Materials',
    status: 'Food-Grade Certified',
    image: '/factory_card_3_materials.jpg',
    description: 'Reliable material management to support smooth and continuous production.'
  },
  {
    id: 4,
    title: 'Quality Checking',
    badge: 'Quality Assurance',
    status: 'Rigorous Inspection',
    image: '/factory_card_4_quality.jpg',
    description: 'Careful quality inspections at every important stage of manufacturing.'
  },
  {
    id: 5,
    title: 'In-House Bulk Production',
    badge: 'Mass Manufacturing',
    status: 'High-Volume Output',
    image: '/factory_card_5_bulk.jpg',
    description: 'In-house manufacturing capabilities to handle bulk orders efficiently.'
  },
  {
    id: 6,
    title: 'Enquire With Us',
    badge: 'Direct Partnership',
    status: 'Custom Orders Ready',
    image: '/factory_card_6_enquire.jpg',
    description: 'Looking for a reliable paper cup manufacturing partner? Contact us to discuss your requirements.',
    isEnquiry: true,
    buttonText: 'Enquire Now',
    buttonLink: '/contact'
  }
];

const FactorySection = () => {
  const trackRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Update arrow states and active dot based on scroll position
  const updateScrollState = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    const { scrollLeft, scrollWidth, clientWidth } = track;
    setCanScrollLeft(scrollLeft > 15);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 15);

    // Calculate nearest card
    const cards = track.querySelectorAll('.factory-card');
    if (cards.length === 0) return;

    let closestIdx = 0;
    let minDistance = Infinity;

    cards.forEach((card, idx) => {
      const distance = Math.abs(card.offsetLeft - track.offsetLeft - scrollLeft);
      if (distance < minDistance) {
        minDistance = distance;
        closestIdx = idx;
      }
    });

    setActiveIndex(closestIdx);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const handleScroll = () => {
      requestAnimationFrame(updateScrollState);
    };

    track.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    // Initial check
    updateScrollState();

    return () => {
      track.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [updateScrollState]);

  const scrollToCard = (index) => {
    const track = trackRef.current;
    if (!track) return;

    const cards = track.querySelectorAll('.factory-card');
    const clampedIndex = Math.max(0, Math.min(index, factoryCards.length - 1));

    if (cards[clampedIndex]) {
      const targetCard = cards[clampedIndex];
      const paddingLeft = parseFloat(window.getComputedStyle(track).paddingLeft) || 0;
      track.scrollTo({
        left: targetCard.offsetLeft - track.offsetLeft - paddingLeft,
        behavior: 'smooth'
      });
      setActiveIndex(clampedIndex);
    }
  };

  const handlePrev = () => {
    scrollToCard(activeIndex - 1);
  };

  const handleNext = () => {
    scrollToCard(activeIndex + 1);
  };

  return (
    <section className="factory-production-section" aria-label="Our Factory and Production">
      {/* Background soft decorative gradient */}
      <div className="factory-bg-glow" aria-hidden="true" />

      <div className="container factory-container">
        
        {/* Section Header */}
        <div className="factory-header-row">
          <div className="factory-header-content">
            <span className="eyebrow inline-eyebrow">
              <Factory size={16} className="inline-icon mr-1" />
              OUR INFRASTRUCTURE
            </span>
            <h2 className="section-title factory-main-heading">
              Our Factory &amp; Production
            </h2>
            <p className="section-desc factory-subtitle">
              Discover our manufacturing capabilities, advanced printing technology, and commitment to quality at every stage of production.
            </p>
          </div>

          {/* Desktop Navigation Arrows */}
          <div className="factory-nav-controls">
            <div className="factory-slide-counter">
              <span className="current-num">0{activeIndex + 1}</span>
              <span className="divider">/</span>
              <span className="total-num">0{factoryCards.length}</span>
            </div>
            <div className="factory-arrow-group">
              <button
                type="button"
                className={`factory-nav-btn ${!canScrollLeft ? 'is-disabled' : ''}`}
                onClick={handlePrev}
                disabled={!canScrollLeft}
                aria-label="Previous factory slide"
              >
                <ChevronLeft size={22} />
              </button>
              <button
                type="button"
                className={`factory-nav-btn ${!canScrollRight ? 'is-disabled' : ''}`}
                onClick={handleNext}
                disabled={!canScrollRight}
                aria-label="Next factory slide"
              >
                <ChevronRight size={22} />
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Carousel Track */}
        <div className="factory-carousel-wrapper">
          <div 
            className="factory-carousel-track" 
            ref={trackRef}
            tabIndex={0}
            role="region"
            aria-label="Factory sliding cards"
            onKeyDown={(e) => {
              if (e.key === 'ArrowLeft') handlePrev();
              if (e.key === 'ArrowRight') handleNext();
            }}
          >
            {factoryCards.map((card, index) => (
              <article 
                key={card.id} 
                className={`factory-card ${card.isEnquiry ? 'factory-card--enquiry' : ''} ${activeIndex === index ? 'is-active-card' : ''}`}
              >
                {/* Image Container with Badge */}
                <div className="factory-card-media">
                  <img 
                    src={card.image} 
                    alt={card.title} 
                    className="factory-card-img" 
                    loading="lazy" 
                  />
                  <div className="factory-card-badge">{card.badge}</div>
                  <div className="factory-card-overlay" />
                </div>

                {/* Card Content */}
                <div className="factory-card-body">
                  <div className="factory-card-text">
                    <h3 className="factory-card-title">{card.title}</h3>
                    <p className="factory-card-desc">{card.description}</p>
                  </div>

                  {/* Bottom Action Area */}
                  <div className="factory-card-footer">
                    {card.isEnquiry ? (
                      <Link to={card.buttonLink} className="factory-enquire-btn">
                        <span>{card.buttonText}</span>
                        <ArrowRight size={16} className="btn-arrow" />
                      </Link>
                    ) : (
                      <div className="factory-status-tag">
                        <CheckCircle2 size={15} className="status-icon" />
                        <span>{card.status}</span>
                      </div>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Carousel Pagination Dots */}
        <div className="factory-pagination-bar" aria-label="Carousel pagination">
          <div className="factory-dots-group">
            {factoryCards.map((card, idx) => (
              <button
                key={card.id}
                type="button"
                className={`factory-dot ${activeIndex === idx ? 'is-active' : ''}`}
                onClick={() => scrollToCard(idx)}
                aria-label={`Go to slide ${idx + 1}: ${card.title}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default FactorySection;
