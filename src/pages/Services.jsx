import { Link } from 'react-router-dom';
import { MessageSquare, PenTool, CheckCircle, Truck } from 'lucide-react';
import './Services.css';
import './Home.css';

const Services = () => {
  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="hero services-hero">
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
          <span className="eyebrow hero-eyebrow">CUSTOM PAPER CUPS</span>
          <h1 className="hero-title">
            Your Brand.<br />
            Our Cups.
          </h1>
          <p className="hero-subtitle">Fully Customizable Paper Cups<br />for Every Business.</p>
          <p className="hero-desc">
            We help you create custom paper cups<br />
            with your logo, name, design and colors<br />
            — tailored to your brand.
          </p>
          <div className="hero-actions">
            <Link to="/contact" className="btn btn-hero-primary">Start Customizing</Link>
            <Link to="/products" className="btn btn-hero-outline">View Products</Link>
          </div>
        </div>

        {/* Image side */}
        <div className="hero-image-wrapper">
          <img src="/ai_services_hero.jpg" alt="Custom branded paper cups" className="hero-img" />
        </div>
        
        {/* SVG Bottom Wave */}
        <div className="services-hero-wave-bottom">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
            <path d="M0,40 C500,-20 900,100 1440,20 L1440,120 L0,120 Z" fill="#f4eee6" />
          </svg>
        </div>
      </section>

      {/* Our Products Display */}
      <section className="services-products text-center">
        <div className="services-products-banner-wrapper" style={{ margin: '0 0 40px', position: 'relative' }}>
          
          {/* Text Overlay */}
          <div className="container relative z-10" style={{ 
            paddingTop: '60px',
            paddingBottom: '40px',
            width: '100%' 
          }}>
            <span className="eyebrow">OUR PRODUCTS</span>
            <h2 className="section-title" style={{ marginBottom: '10px' }}>Quality Cups for Every Business</h2>
          </div>

          <div className="custom-cups-row">
             <img src="/custom_cup_1.png" alt="Custom Cup 1" className="custom-cup-item" />
             <img src="/custom_cup_2.png" alt="Custom Cup 2" className="custom-cup-item" />
             <img src="/custom_cup_3.png" alt="Custom Cup 3" className="custom-cup-item" />
             <img src="/custom_cup_4.png" alt="Custom Cup 4" className="custom-cup-item" />
             <img src="/custom_cup_5.png" alt="Custom Cup 5" className="custom-cup-item" />
             <img src="/custom_cup_7.png" alt="Custom Cup 7" className="custom-cup-item" />
          </div>
        </div>
        
        <div className="container relative z-10" style={{ backgroundColor: '#EBE5D9', padding: '40px 20px' }}>
          <p className="services-products-desc">Custom designs. Premium quality. Made for your brand.</p>
          <div className="services-products-action">
            <Link to="/products" className="btn btn-primary products-btn">View All Products</Link>
          </div>
        </div>
        
        {/* SVG Wave transitioning to white */}
        <div className="services-products-wave-bottom">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
            <path d="M0,80 C400,120 1000,0 1440,40 L1440,120 L0,120 Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* How to Customize */}
      <section className="how-to-customize section-padding text-center relative">
        <div className="container relative z-10">
          <h2 className="section-title mb-12">How to Customize Your Cup</h2>
          
          <div className="steps-container">
            <div className="step-card">
              <div className="step-icon-wrapper">
                <div className="step-icon-inner"><MessageSquare size={24} strokeWidth={1.5} /></div>
              </div>
              <div className="step-num">01</div>
              <h4>Share Your Idea</h4>
              <p>Tell us your logo,<br/>design & colors.</p>
            </div>
            
            <div className="step-arrow">⟶</div>
            
            <div className="step-card">
              <div className="step-icon-wrapper">
                <div className="step-icon-inner"><PenTool size={24} strokeWidth={1.5} /></div>
              </div>
              <div className="step-num">02</div>
              <h4>We Create a Design</h4>
              <p>We prepare a digital<br/>design.</p>
            </div>
            
            <div className="step-arrow">⟶</div>
            
            <div className="step-card">
              <div className="step-icon-wrapper">
                <div className="step-icon-inner"><CheckCircle size={24} strokeWidth={1.5} /></div>
              </div>
              <div className="step-num">03</div>
              <h4>Approve & Confirm</h4>
              <p>Review and approve<br/>your design.</p>
            </div>
            
            <div className="step-arrow">⟶</div>
            
            <div className="step-card">
              <div className="step-icon-wrapper">
                <div className="step-icon-inner"><Truck size={24} strokeWidth={1.5} /></div>
              </div>
              <div className="step-num">04</div>
              <h4>We Deliver</h4>
              <p>Your custom cups<br/>delivered to you.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Cup CTA */}
      <section className="services-cta">
        {/* SVG Top Wave */}
        <div className="services-cta-wave-top">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
            <path d="M0,0 C480,140 960,140 1440,0 L1440,120 L0,120 Z" />
          </svg>
        </div>
        
         <div className="container services-cta-container">
            <div className="cta-text">
               <h2 className="section-title">Let's Create<br/>Your Custom Cup</h2>
               <p className="cta-subtitle">Your brand. Our cup.</p>
               <Link to="/contact" className="btn btn-secondary cta-btn">Get Started &rarr;</Link>
            </div>
            <div className="cta-cups-mockup">
               <img src="/cta_4_colorful_cups_transparent.png" alt="Premium Custom Colorful Cups" className="cta-showcase-image" />
            </div>
         </div>

         {/* SVG Bottom Wave */}
         <div className="services-cta-wave-bottom" style={{ lineHeight: 0, width: '100%', position: 'absolute', bottom: -1, left: 0, zIndex: 5 }}>
           <svg viewBox="0 0 1440 120" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: '8vw', minHeight: '60px' }}>
             <path d="M0,40 C500,-20 900,100 1440,20 L1440,120 L0,120 Z" fill="#f4eee6" />
           </svg>
         </div>
      </section>
    </div>
  );
};

export default Services;
