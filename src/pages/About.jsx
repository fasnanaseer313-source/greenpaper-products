import { Link } from 'react-router-dom';
import { Leaf, ShieldCheck, Users, Settings, Target, Maximize, Palette, CupSoda } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-image-bg">
           <img src="/hero_5_cups.jpg" alt="5 Colorful Paper Cups" />
        </div>
        <div className="about-hero-content-wrapper">
          <div className="about-hero-content">
            <span className="eyebrow">ABOUT US</span>
            <h1 className="hero-title">
              More Than<br />
              <span className="font-serif text-highlight">Just Paper Cups</span>
            </h1>
            <div className="hero-line"></div>
            <p className="hero-desc">
              Sustainable solutions for a cleaner, greener tomorrow.
            </p>
          </div>
          <div className="about-hero-wave">
            <svg viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0,0 C120,30 -20,70 100,100 L0,100 L0,0 Z" fill="#F4EFE7" />
            </svg>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="who-we-are section-padding">
        <div className="container">
          <div className="who-pill-container">
            
            {/* Left Image Pill */}
            <div className="who-image-pill">
              <img src="/who_left_cups.jpg" alt="Beautiful Paper Cups Collection" />
            </div>

            {/* Center Content */}
            <div className="who-content">
                <span className="eyebrow">WHO WE ARE</span>
                <h2 className="section-title">Your Trusted<br />Paper Cup Partner</h2>
                <p className="section-desc">
                  Green Paper Products is a paper cup manufacturing company providing high-quality and eco-friendly paper cup solutions for businesses of all sizes.
                </p>
                
                <div className="who-features">
                   <div className="who-feature-item">
                      <Leaf className="who-icon" size={28} />
                      <span>Sustainable<br/>Materials</span>
                   </div>
                   <div className="who-feature-item">
                      <ShieldCheck className="who-icon" size={28} />
                      <span>Reliable<br/>Quality</span>
                   </div>
                   <div className="who-feature-item">
                      <Users className="who-icon" size={28} />
                      <span>Business<br/>Focused</span>
                   </div>
                </div>
            </div>

            {/* Right Image Pill */}
            <div className="who-image-pill">
              <img src="/who_right_cups.jpg" alt="Dark Patterned Paper Cups" />
            </div>

          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="about-why-us section-padding">
        <div className="container">
           <div className="text-center mb-12">
              <span className="eyebrow">WHY CHOOSE US</span>
           </div>
           
           <div className="about-features-grid">
              <div className="about-feature-card" style={{backgroundColor: '#F7F4F0'}}>
                 <div className="card-icon"><Settings size={36} strokeWidth={1.2} /></div>
                 <h4>Quality<br/>Manufacturing</h4>
                 <p>Made with care<br/>and attention.</p>
                 <img src="/about_cup_green.jpg" alt="Green Leaf Pattern Cup" className="card-bottom-img cup-pos-left" />
              </div>
              
              <div className="about-feature-card" style={{backgroundColor: '#F3EDE4'}}>
                 <div className="card-icon"><Leaf size={36} strokeWidth={1.2} /></div>
                 <h4>Eco-Friendly<br/>Focus</h4>
                 <p>Committed to<br/>a greener future.</p>
                 <img src="/about_cup_pink.jpg" alt="Pink Abstract Pattern Cup" className="card-bottom-img cup-pos-right" />
              </div>
              
              <div className="about-feature-card" style={{backgroundColor: '#EEF0F6'}}>
                 <div className="card-icon"><CupSoda size={36} strokeWidth={1.2} /></div>
                 <h4>Multiple<br/>Sizes</h4>
                 <p>Different sizes for<br/>various needs.</p>
                 <img src="/about_cup_blue.jpg" alt="Blue Wavy Pattern Cup" className="card-bottom-img cup-pos-right" />
              </div>
              
              <div className="about-feature-card" style={{backgroundColor: '#F1EFF1'}}>
                 <div className="card-icon"><Palette size={36} strokeWidth={1.2} /></div>
                 <h4>Custom<br/>Designs</h4>
                 <p>Customizable designs<br/>and branding.</p>
                 {/* No cup on the 4th card, the large CTA cup covers this area */}
              </div>
           </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="about-cta section-padding">
        <div className="container">
          <div className="about-cta-banner">
             <div className="cta-left">
                <div className="cta-icon-circle"><Leaf size={32} className="cta-leaf" /></div>
                <div>
                  <span className="cta-subtitle">Let's Build</span>
                  <h2 className="cta-title">A Greener Tomorrow</h2>
                  <p><strong>Partner with Green Paper Products</strong><br/>for reliable and sustainable paper cup solutions.</p>
                </div>
             </div>
             <div className="cta-right">
                <Link to="/contact" className="btn btn-primary">Contact Us &rarr;</Link>
             </div>
             
             {/* Overlapping Hero Cup on Cork Block */}
             <div className="cta-overlapping-cup">
                <img src="/about_cta_cup.jpg" alt="Premium Purple Floral Paper Cup" />
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
