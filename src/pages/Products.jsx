import { Link } from 'react-router-dom';
import { CheckCircle2, PaintBucket, ShieldCheck, Award, Users, Leaf, ArrowRight } from 'lucide-react';
import './Products.css';

const Products = () => {
  const productsList = [
    {
      id: 1,
      name: "Fresh Juice Cups",
      desc: "For juice bars, cafés\nand healthy drink brands.",
      img: "/new_juice_cup.png"
    },
    {
      id: 2,
      name: "Malabar Caterers Cups",
      desc: "For events, planners\nand functions.",
      img: "/malabar_violet.png"
    },
    {
      id: 3,
      name: "Nila Caterers Cups",
      desc: "For restaurants,\ncaterers and mess services.",
      img: "/new_cup_10_24.png"
    },
    {
      id: 4,
      name: "Silver Kitchen Cups",
      desc: "For outdoor caterers\nand bulk food services.",
      img: "/silver_kitchen_new.png"
    },
    {
      id: 5,
      name: "Manaal Grills Cups",
      desc: "For grills, BBQ spots\nand takeaway counters.",
      img: "/manaal_new.png"
    }
  ];

  const bottomCups = [
    { name: 'Brew\nBliss', img: '/malabar_caterers_cup.jpg' },
    { name: 'Good\nVibes', img: '/fresh_juice_cup.jpg' },
    { name: 'The\nLeaf Café', img: '/nila_caterers_cup.jpg' },
    { name: 'Stay\nHydrated', img: '/silver_kitchen_cup.jpg' },
    { name: 'Sip\nHappy', img: '/manaal_grills_cup.jpg' }
  ];

  return (
    <div className="products-page">
      {/* Hero */}
      <section className="products-hero section-padding">
        <div className="container products-hero-container">
          <div className="hero-text-content">
            <span className="eyebrow">OUR PRODUCTS</span>
            <h1 className="hero-title">Paper Cups</h1>
            <h3 className="hero-subtitle">Made for Every Occasion</h3>
            <p className="hero-desc">High-quality paper cups for businesses<br/>that care.</p>
            
            <div className="hero-features-inline">
               <div className="feature-inline"><Leaf size={24} strokeWidth={1.5} /> Quality<br/>Products</div>
               <div className="feature-inline"><PaintBucket size={24} strokeWidth={1.5} /> Custom<br/>Prints</div>
               <div className="feature-inline"><ShieldCheck size={24} strokeWidth={1.5} /> Reliable<br/>Supply</div>
            </div>
          </div>
          <div className="hero-wood-stage">
            <img src="/final_hero_showcase.png?v=2" alt="Cups on Wood" className="wood-stage-img" />
          </div>
        </div>
      </section>

      {/* Our Products Grid */}
      <section className="products-grid-section section-padding">
        <div className="container">
          <div className="products-section-header">
             <h2 className="section-title">Our Products</h2>
             <svg className="title-wave" viewBox="0 0 100 20" preserveAspectRatio="none"><path d="M0,10 Q25,0 50,10 T100,10" fill="none" stroke="#2c5c4f" strokeWidth="2" strokeLinecap="round" opacity="0.3" /></svg>
          </div>
          
          <div className="products-grid">
            {productsList.map(product => (
              <div key={product.id} className="product-card">
                 <div className="product-img-wrapper">
                    <img src={product.img} alt={product.name} />
                 </div>
                 <h4 className="product-name">{product.name}</h4>
                 <p className="product-desc" style={{ whiteSpace: 'pre-line' }}>{product.desc}</p>
                 <Link to="/contact" className="btn btn-dark-pill">Enquire Now &rarr;</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Design CTA */}
      <section className="custom-design-cta section-padding">
        <div className="container custom-design-container">
           <div className="custom-design-img-wrapper">
              <img src="/custom_event_cup.png" alt="Custom Event Cup Design" className="custom-design-img" />
           </div>
           <div className="custom-design-content">
              <h2>Need a Custom Design?</h2>
              <p>Get your own branding and design on paper cups.</p>
              <Link to="/contact" className="btn btn-dark-pill mt-6">Enquire for Custom Designs &rarr;</Link>
           </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="commitment-section section-padding">
        <div className="container commitment-container">
           <div className="commitment-left">
              <span className="eyebrow">OUR COMMITMENT</span>
              <h2 className="section-title">Your Business.<br />Our Support.</h2>
              <p>We provide the right paper cup<br/>solutions for your business.</p>
           </div>
           
           <div className="commitment-center">
              <div className="commit-feature">
                 <Award size={36} strokeWidth={1} />
                 <span>Quality<br/>Products</span>
              </div>
              <div className="commit-feature">
                 <Users size={36} strokeWidth={1} />
                 <span>Customer<br/>Focus</span>
              </div>
              <div className="commit-feature">
                 <Leaf size={36} strokeWidth={1} />
                 <span>Reliable<br/>Supply</span>
              </div>
           </div>
           
           <div className="commitment-right">
              <p className="handwritten-text">Supporting<br/>Businesses with<br/>Sustainable<br/>Choices.</p>
              <Leaf className="handwritten-leaf" size={48} strokeWidth={1} color="#44755a" />
           </div>
        </div>
      </section>

      {/* Bottom Product Showcase */}
      <section className="bottom-showcase">
        <div className="showcase-cups">
           {bottomCups.map((cup, i) => (
             <div key={i} className="showcase-cup">
               <img src={cup.img} alt={cup.name} />
               <span style={{ whiteSpace: 'pre-line' }}>{cup.name}</span>
             </div>
           ))}
        </div>
      </section>
    </div>
  );
};

export default Products;
