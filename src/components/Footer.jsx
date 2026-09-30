import { Link } from 'react-router-dom';
import { Leaf, Phone, Mail, MapPin, Clock } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        {/* Brand Column */}
        <div className="footer-col brand-col">
          <Link to="/" className="footer-logo">
            <img src="/LOGO.png" alt="Green Paper Products" className="logo-img" />
          </Link>
          <p className="footer-desc">
            Sustainable paper cup solutions for a cleaner, greener future. We manufacture high-quality, eco-friendly paper cups for businesses.
          </p>
          <div className="social-links">
            <a href="#" aria-label="Facebook">FB</a>
            <a href="#" aria-label="Instagram">IG</a>
            <a href="#" aria-label="LinkedIn">LI</a>
            <a href="#" aria-label="YouTube">YT</a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-col">
          <h4 className="footer-heading">Contact Info</h4>
          <ul className="footer-contact">
            <li>
              <Phone size={18} />
              <span>+91 98765 43210</span>
            </li>
            <li>
              <Mail size={18} />
              <span>info@greenpaperproducts.com</span>
            </li>
            <li>
              <MapPin size={18} />
              <span>
                GREEN PAPER PRODUCTS V-459A, Karamolpeedika,<br />
                Perumbavoor - Kolenchery Road, Near KSEB Office,<br />
                Kolenchery S.O, Ernakulam - 682311<br />
                Kolanchery, Kerala
              </span>
            </li>
          </ul>
        </div>

        {/* Business Hours */}
        <div className="footer-col">
          <h4 className="footer-heading">Business Hours</h4>
          <ul className="footer-contact">
            <li className="hours-item">
              <Clock size={18} />
              <div>
                <span>Monday – Saturday</span>
                <span>9:00 AM – 6:00 PM</span>
                <span className="closed">(Closed on Sundays)</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-container">
          <p>&copy; {new Date().getFullYear()} Green Paper Products. All Rights Reserved.</p>
          <p>Better Cups. A Better Future. <Leaf size={14} style={{ display: 'inline', marginLeft: '4px' }} /></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
