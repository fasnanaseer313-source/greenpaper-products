import { Link } from 'react-router-dom';
import { ShieldCheck, Award, Truck, Tag, Leaf, ArrowRight, ArrowLeft } from 'lucide-react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
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
                  <div className="bubble-img"><img src="/feature_cup_tl.png" alt="cup" style={{filter: 'hue-rotate(0deg)'}} /></div>
                  <div className="bubble-icon"><ShieldCheck size={20} /></div>
                  <div className="bubble-text">
                    <h4>Food Safe<br/>& Reliable</h4>
                    <p>BPA-free and safe for hot & cold beverages.</p>
                  </div>
                </div>
                <div className="feature-bubble top-right">
                  <div className="bubble-img"><img src="/feature_cup_tr.png" alt="cup" style={{filter: 'hue-rotate(0deg)'}} /></div>
                  <div className="bubble-icon"><Award size={20} /></div>
                  <div className="bubble-text">
                    <h4>Premium<br/>Quality</h4>
                    <p>Sturdy, leak-proof cups with high-quality printing.</p>
                  </div>
                </div>
                <div className="feature-bubble bottom-left">
                  <div className="bubble-img"><img src="/party_cup_no_lid_transparent.png" alt="Party Cup" style={{filter: 'hue-rotate(0deg)'}} /></div>
                  <div className="bubble-icon"><Truck size={20} /></div>
                  <div className="bubble-text">
                    <h4>On-Time<br/>Delivery</h4>
                    <p>Timely delivery with secure packaging across India.</p>
                  </div>
                </div>
                <div className="feature-bubble bottom-right">
                  <div className="bubble-img"><img src="/feature_cup_transparent.png" alt="cup" style={{filter: 'hue-rotate(60deg)'}} /></div>
                  <div className="bubble-icon"><Tag size={20} /></div>
                  <div className="bubble-text">
                    <h4>Competitive<br/>Pricing</h4>
                    <p>Best quality at the best prices for your business.</p>
                  </div>
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
