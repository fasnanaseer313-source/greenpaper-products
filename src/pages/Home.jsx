import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Award, Truck, Tag, Leaf, ArrowRight, ArrowLeft, ChevronDown } from 'lucide-react';
import './Home.css';

const Home = () => {
  const [hasStarted, setHasStarted] = useState(false);
  const [playBlocked, setPlayBlocked] = useState(false);
  const hasStartedRef = useRef(false);
  const videoRef = useRef(null);

  const startVideo = () => {
    if (hasStartedRef.current) return;
    hasStartedRef.current = true;
    setHasStarted(true);

    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.defaultMuted = true;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setPlayBlocked(false);
          })
          .catch((err) => {
            console.warn('Playback prevented by browser policy:', err);
            setPlayBlocked(true);
          });
      }
    }
  };

  const handleManualTrigger = (e) => {
    if (e && e.stopPropagation) {
      e.stopPropagation();
    }
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.defaultMuted = true;
      video.play()
        .then(() => {
          hasStartedRef.current = true;
          setHasStarted(true);
          setPlayBlocked(false);
        })
        .catch((err) => {
          console.warn('Manual play failed:', err);
        });
    } else {
      startVideo();
    }
  };

  const ensurePausedAtFirstFrame = () => {
    if (typeof window !== 'undefined' && window.innerWidth <= 768) return;
    const video = videoRef.current;
    if (video && !hasStartedRef.current) {
      video.muted = true;
      video.defaultMuted = true;
      video.pause();
      if (video.currentTime !== 0) {
        video.currentTime = 0;
      }
    }
  };

  useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    const video = videoRef.current;

    if (isMobile) {
      // Mobile view: keep exact previous behavior (plays automatically on load)
      if (video) {
        video.muted = true;
        video.defaultMuted = true;
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {
            const onCanPlay = () => {
              video.play().catch(() => {});
              video.removeEventListener('canplay', onCanPlay);
            };
            video.addEventListener('canplay', onCanPlay);
          });
        }
      }
      return;
    }

    ensurePausedAtFirstFrame();

    if (hasStarted) return;

    const handleScrollIntent = (e) => {
      if (hasStartedRef.current) return;

      if (e.type === 'wheel') {
        if (e.deltaY > 0 || Math.abs(e.deltaY) > 2) {
          startVideo();
        }
      } else if (e.type === 'scroll') {
        if (window.scrollY > 2) {
          startVideo();
        }
      } else if (e.type === 'touchmove') {
        startVideo();
      } else if (e.type === 'keydown') {
        if (['Space', 'ArrowDown', 'PageDown'].includes(e.code)) {
          startVideo();
        }
      }
    };

    window.addEventListener('wheel', handleScrollIntent, { passive: true });
    window.addEventListener('scroll', handleScrollIntent, { passive: true });
    window.addEventListener('touchmove', handleScrollIntent, { passive: true });
    window.addEventListener('keydown', handleScrollIntent, { passive: true });

    return () => {
      window.removeEventListener('wheel', handleScrollIntent);
      window.removeEventListener('scroll', handleScrollIntent);
      window.removeEventListener('touchmove', handleScrollIntent);
      window.removeEventListener('keydown', handleScrollIntent);
    };
  }, [hasStarted]);

  return (
    <div className="home-page">
      {/* Intro Brand Video Section */}
      <section 
        className="home-video-hero" 
        aria-label="Brand Showcase Video"
        onClick={!hasStarted ? handleManualTrigger : undefined}
      >
        <div className="home-video-container">
          <video
            ref={videoRef}
            className="home-video-player"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="/video-poster.jpg"
            onLoadedMetadata={ensurePausedAtFirstFrame}
            onCanPlay={ensurePausedAtFirstFrame}
          >
            <source src="/product_video_2k.mp4" type="video/mp4" media="(min-width: 769px)" />
            <source src="/product_video_1080p.mp4" type="video/mp4" />
            <source src="/product_video.mp4" type="video/mp4" />
            Your browser does not support HTML5 video.
          </video>

          {/* Vignette shadow to ensure indicator contrast */}
          <div className="home-video-vignette" />

          {/* Animated "Scroll Here" Indicator */}
          <button
            type="button"
            className={`scroll-here-indicator ${hasStarted && !playBlocked ? 'is-hidden' : ''} ${playBlocked ? 'is-fallback' : ''}`}
            onClick={handleManualTrigger}
            aria-label={playBlocked ? 'Click to play video' : 'Scroll here or click to start video'}
          >
            {playBlocked ? (
              <>
                <span className="scroll-fallback-icon">▶</span>
                <span className="scroll-here-text">CLICK TO PLAY</span>
              </>
            ) : (
              <>
                <div className="scroll-mouse-pill" aria-hidden="true">
                  <div className="scroll-mouse-dot" />
                </div>
                <span className="scroll-here-text">SCROLL HERE</span>
                <ChevronDown size={18} className="scroll-here-arrow" aria-hidden="true" />
              </>
            )}
          </button>
        </div>
      </section>

      {/* Hero Section */}
      <section className="hero">
        {/* Decorative leaves */}
        <svg className="hero-leaf hero-leaf--tl" viewBox="0 0 120 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M60 300 C60 220 15 150 15 70 C15 25 60 0 60 0 C60 0 105 25 105 70 C105 150 60 220 60 300Z" fill="#4A6741" opacity="0.18"/>
          <path d="M30 260 C30 200 5 140 5 80 C5 40 30 20 30 20" stroke="#4A6741" strokeWidth="1.5" opacity="0.12" fill="none"/>
        </svg>
        <svg className="hero-leaf hero-leaf--bl" viewBox="0 0 80 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M40 200 C40 150 10 100 10 50 C10 20 40 0 40 0 C40 0 70 20 70 50 C70 100 40 150 40 200Z" fill="#4A6741" opacity="0.15"/>
        </svg>

        {/* Text content side */}
        <div className="hero-content">
          <span className="eyebrow hero-eyebrow">SUSTAINABLE PAPER CUP SOLUTIONS</span>
          <h1 className="hero-title">
            Eco-Friendly<br />
            Paper Cups,<br />
            <span className="text-light-green">Made for Your Business</span>
          </h1>
          <p className="hero-desc">
            Quality paper cup solutions manufactured<br />
            for catering, hotels, restaurants, cafés,<br />
            juice shops, events, and more.
          </p>
          <div className="hero-actions">
            <Link to="/products" className="btn btn-hero-primary">Explore Products &rarr;</Link>
            <Link to="/contact" className="btn btn-hero-outline">Contact Us</Link>
          </div>
        </div>

        {/* Image side */}
        <div className="hero-image-wrapper">
          <img src="/hero_cups.jpg" alt="Custom branded paper cups" className="hero-img" />
        </div>
      </section>


      {/* Why Choose Us Section */}
      <section className="why-us section-padding">
        <div className="why-us-bg-wave"></div>
        <div className="container why-us-container">
          <div className="why-us-content">
            <span className="eyebrow inline-eyebrow"><Leaf size={16} className="mr-1 inline-icon" /> WHY CHOOSE US</span>
            <h2 className="section-title">
              More Than Cups<br />
              <span className="font-serif italic text-highlight">A Better Choice</span>
            </h2>
            <p className="section-desc">
              We combine quality, sustainability, and<br />
              reliability to deliver paper cup solutions<br />
              you can count on.
            </p>
            <Link to="/about" className="btn btn-hero-primary mt-4">Discover Our Difference &rarr;</Link>
          </div>

          <div className="why-us-features">
            <div className="feature-card-large">
                <img src="/chef_catering_cup_transparent.png" alt="Catering Chef Cup" className="feature-main-img" />
            </div>
            
            <div className="feature-nodes">
                <div className="feature-bubble top-left">
                  <div className="bubble-img"><img src="/catering_cup_ai.png" alt="Catering cup" /></div>
                  <div className="bubble-content">
                    <div className="bubble-icon"><ShieldCheck size={24} /></div>
                    <div className="bubble-text">
                      <h4>Food Safe &<br/>Reliable</h4>
                      <p>BPA-free and safe for hot & cold beverages.</p>
                    </div>
                  </div>
                  {/* Decorative elements */}
                  <svg className="decor-arrow" viewBox="0 0 50 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M40 15 C30 25 15 25 5 15 M5 15 L15 5 M5 15 L15 25" stroke="#1B3524" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <svg className="decor-lines" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 15 L15 15 M10 5 L15 10 M5 5 L12 12" stroke="#1B3524" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <div className="feature-bubble top-right">
                  <div className="bubble-img"><img src="/colorful_cup_1.png" alt="Premium cup" /></div>
                  <div className="bubble-content">
                    <div className="bubble-icon"><Award size={24} /></div>
                    <div className="bubble-text">
                      <h4>Premium<br/>Quality</h4>
                      <p>Sturdy, leak-proof cups with high-quality printing.</p>
                    </div>
                  </div>
                  <svg className="decor-arrow" viewBox="0 0 50 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M40 15 C30 25 15 25 5 15 M5 15 L15 5 M5 15 L15 25" stroke="#1B3524" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="feature-bubble bottom-left">
                  <div className="bubble-img"><img src="/party_cup_no_lid_transparent.png" alt="Party cup" /></div>
                  <div className="bubble-content">
                    <div className="bubble-icon"><Truck size={24} /></div>
                    <div className="bubble-text">
                      <h4>On-Time<br/>Delivery</h4>
                      <p>Timely delivery with secure packaging across India.</p>
                    </div>
                  </div>
                  <svg className="decor-arrow" viewBox="0 0 50 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M40 15 C30 25 15 25 5 15 M5 15 L15 5 M5 15 L15 25" stroke="#1B3524" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="feature-bubble bottom-right">
                  <div className="bubble-img"><img src="/colorful_cup_2.png" alt="Competitive cup" /></div>
                  <div className="bubble-content">
                    <div className="bubble-icon"><Tag size={24} /></div>
                    <div className="bubble-text">
                      <h4>Competitive<br/>Pricing</h4>
                      <p>Best quality at the best prices for your business.</p>
                    </div>
                  </div>
                  <svg className="decor-arrow" viewBox="0 0 50 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M40 15 C30 25 15 25 5 15 M5 15 L15 5 M5 15 L15 25" stroke="#1B3524" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Products Section */}
      <section className="home-products section-padding">
        <div className="container home-products-container">
          
          <div className="product-showcase-left single-image-showcase">
            <img src="/cups_showcase.jpg" alt="Beautiful Paper Cups on Pedestal" className="showcase-main-img" />
          </div>

          <div className="home-products-content-right">
             <span className="eyebrow">OUR PRODUCTS</span>
             <h2 className="section-title">Quality Cups for Every Business</h2>
             <p className="section-desc">Custom designs. Trusted quality. Made for every occasion.</p>
             
             <div className="products-actions mt-6">
               <Link to="/products" className="btn btn-hero-primary mr-4">View All Products &rarr;</Link>
               <button className="nav-arrow"><ArrowLeft size={20} /></button>
               <button className="nav-arrow"><ArrowRight size={20} /></button>
             </div>
          </div>

        </div>
      </section>

      {/* Custom Cup CTA & Categories Section */}
      <section className="custom-cups-section section-padding">
        <div className="container custom-cups-container">
          
          {/* Top Banner */}
          <div className="custom-cta-banner">
            <div className="cta-icon-wrapper">
               <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-coffee"><path d="M10 2v2"/><path d="M14 2v2"/><path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1"/><path d="M6 2v2"/></svg>
            </div>
            <div className="cta-content">
              <h2 className="cta-title">Need Custom Cups<br />for Your Business?</h2>
              <p className="cta-desc">Get your brand printed on high-quality paper cups. Perfect for cafés, restaurants, events and more.</p>
            </div>
            <div className="cta-action">
              <Link to="/contact" className="btn btn-hero-primary">Request a Quote &rarr;</Link>
            </div>
          </div>

          {/* Categories Row */}
          <div className="categories-row-wrapper">
            <div className="categories-inline-list">
               <div className="inline-cat">
                 <img src="/cat_cup_1.png" alt="Tropical Cup" />
               </div>
               <div className="inline-cat">
                 <img src="/cat_cup_2.png" alt="Geometric Cup" />
               </div>
               <div className="inline-cat">
                 <img src="/cat_cup_3.png" alt="Neon Cup" />
               </div>
               <div className="inline-cat">
                 <img src="/cat_cup_4.png" alt="Floral Cup" />
               </div>
               <div className="inline-cat">
                 <img src="/cat_cup_5.png" alt="Vintage Cup" />
               </div>
               <div className="inline-cat">
                 <img src="/cat_cup_6.png" alt="Cosmic Cup" />
               </div>
            </div>
            
            {/* Side Info Box */}
            <div className="categories-side-box">
              <Link to="/contact" className="btn btn-hero-primary w-full text-center" style={{display: 'block'}}>Request a Quote &rarr;</Link>
              <ul className="cat-features">
                <li><Award size={16}/> High-Quality Printing</li>
                <li><Truck size={16}/> Low Minimum Order</li>
                <li><ShieldCheck size={16}/> Fast Turnaround</li>
              </ul>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Home;
