import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Leaf } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Services', path: '/services' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        {/* Logo */}
        <Link to="/" className="logo">
          <Leaf className="logo-icon" size={28} />
          <div className="logo-text">
            <span className="logo-title">Green</span>
            <span className="logo-subtitle">Paper Products</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <ul className="nav-list">
            <li>
              <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Home</NavLink>
            </li>
            <li className="nav-item-dropdown">
              <NavLink to="/products" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                Products <span className="caret">v</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>About Us</NavLink>
            </li>
            <li>
              <NavLink to="/services" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Services</NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Contact Us</NavLink>
            </li>
          </ul>
        </nav>

        {/* Right CTA */}
        <div className="header-cta">
          <Link to="/contact" className="btn btn-primary">
            Get a Quote &rarr;
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="mobile-menu-btn" onClick={toggleMobileMenu} aria-label="Toggle Menu">
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-list">
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink 
                to={link.path} 
                className="mobile-nav-link"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
          <li style={{ marginTop: '20px' }}>
             <Link to="/contact" className="btn btn-primary" onClick={() => setIsMobileMenuOpen(false)}>
              Get a Quote &rarr;
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
