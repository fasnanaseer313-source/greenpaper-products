import { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState({ type: '', message: '' });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({ type: 'error', message: 'Please fill in all required fields.' });
      return;
    }

    setIsSubmitting(true);
    setFormStatus({ type: '', message: '' });

    try {
      const response = await fetch("https://formsubmit.co/ajax/greenpaperproductskerala@gmail.com", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          company: formData.company,
          email: formData.email,
          phone: formData.phone,
          _subject: formData.subject || 'New Website Enquiry',
          message: formData.message
        })
      });

      if (response.ok) {
        setFormStatus({
          type: 'success',
          message: 'Message sent successfully! We will get back to you soon.',
        });
        setFormData({ name: '', company: '', email: '', phone: '', subject: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setFormStatus({
        type: 'error',
        message: 'There was an error sending your message. Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page">

      {/* Hero */}
      <section className="c-hero">
        <svg className="deco-leaf deco-leaf--left" viewBox="0 0 80 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M40 200 C40 150 10 100 10 50 C10 20 40 0 40 0 C40 0 70 20 70 50 C70 100 40 150 40 200Z" fill="#C8BEA8" opacity="0.35"/>
        </svg>
        <svg className="deco-leaf deco-leaf--right" viewBox="0 0 80 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M40 200 C40 150 10 100 10 50 C10 20 40 0 40 0 C40 0 70 20 70 50 C70 100 40 150 40 200Z" fill="#C8BEA8" opacity="0.25"/>
        </svg>

        <div className="container c-hero__inner">
          <div className="c-hero__text">
            <span className="eyebrow">CONTACT US</span>
            <h1 className="c-hero__title">
              Let&apos;s Build a <br />
              <em>Greener Future</em><br />
              Together.&nbsp;🌿
            </h1>
            <div className="c-hero__divider" />
            <p className="c-hero__desc">
              We&apos;re here to answer your questions, understand your
              requirements, and provide the right paper cup solutions
              for your business.
            </p>
          </div>

          <div className="c-hero__img-wrap">
            <div className="c-hero__img-blob" />
            <div className="c-hero__img-circle">
              <img
                src="/ai_3_cups_hero.jpg"
                alt="Green Paper Products branded cups"
                className="c-hero__img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Wave Curve Divider */}
      <div className="c-wave-divider">
        <svg
          viewBox="0 0 1440 90"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="c-wave-divider__svg"
        >
          <path
            d="M0,0 C240,90 480,0 720,50 C960,90 1200,10 1440,60 L1440,0 L0,0 Z"
            fill="var(--color-cream)"
          />
        </svg>
      </div>

      {/* Contact Info + Form */}
      <section className="c-mid section-padding">
        <div className="container c-mid__inner">

          {/* Left: Contact Information */}
          <div className="c-info">
            <h2 className="c-info__title">Contact Information</h2>

            <ul className="c-info__list">
              <li className="c-info__item">
                <span className="c-info__icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </span>
                <div>
                  <h4>Address</h4>
                  <p>GREEN PAPER PRODUCTS V-459A, Karamolpeedika,<br />Perumbavoor - Kolenchery Road, Near KSEB Office,<br />Kolenchery S.O, Ernakulam - 682311<br />Kolanchery, Kunnathunad, 682311, KL, IN</p>
                </div>
              </li>

              <li className="c-info__item">
                <span className="c-info__icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.36 10.5a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.11 0h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.09 7.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 14.92z"/></svg>
                </span>
                <div>
                  <h4>Phone</h4>
                  <p>+91 9497427035</p>
                </div>
              </li>

              <li className="c-info__item">
                <span className="c-info__icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
                </span>
                <div>
                  <h4>WhatsApp</h4>
                  <p>+91 9497427035</p>
                </div>
              </li>

              <li className="c-info__item">
                <span className="c-info__icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </span>
                <div>
                  <h4>Email</h4>
                  <p>greenpaperproductskerala@gmail.com</p>
                </div>
              </li>

              <li className="c-info__item">
                <span className="c-info__icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                </span>
                <div>
                  <h4>Business Hours</h4>
                  <p>Monday – Saturday<br />9:00 AM – 6:00 PM<br /><span className="muted">(Closed on Sundays)</span></p>
                </div>
              </li>
            </ul>
          </div>

          {/* Right: Form */}
          <div className="c-form-wrap">
            <div className="c-form-card">
              <h2 className="c-form-card__title">Send Us a Message</h2>
              <div className="c-form-card__divider" />

              {formStatus.message && (
                <div className={`c-form-alert c-form-alert--${formStatus.type}`}>
                  {formStatus.message}
                </div>
              )}

              <form onSubmit={handleSubmit} className="c-form">
                <div className="c-form__row">
                  <div className="c-form__group">
                    <span className="c-form__icon">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                    </span>
                    <input type="text" id="name" name="name" placeholder="Your Name*" value={formData.name} onChange={handleChange} required />
                  </div>
                  <div className="c-form__group">
                    <span className="c-form__icon">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                    </span>
                    <input type="text" id="company" name="company" placeholder="Company Name*" value={formData.company} onChange={handleChange} />
                  </div>
                </div>

                <div className="c-form__row">
                  <div className="c-form__group">
                    <span className="c-form__icon">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                    </span>
                    <input type="email" id="email" name="email" placeholder="Email Address*" value={formData.email} onChange={handleChange} required />
                  </div>
                  <div className="c-form__group">
                    <span className="c-form__icon">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.36 10.5a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.11 0h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.09 7.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 14.92z"/></svg>
                    </span>
                    <input type="tel" id="phone" name="phone" placeholder="Phone Number*" value={formData.phone} onChange={handleChange} />
                  </div>
                </div>

                <div className="c-form__group c-form__group--full">
                  <span className="c-form__icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                  </span>
                  <input type="text" id="subject" name="subject" placeholder="Subject*" value={formData.subject} onChange={handleChange} required />
                </div>

                <div className="c-form__group c-form__group--full c-form__group--textarea">
                  <span className="c-form__icon c-form__icon--top">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
                  </span>
                  <textarea id="message" name="message" placeholder="Your Message*" rows="4" value={formData.message} onChange={handleChange} required />
                </div>

                <button type="submit" className="c-form__submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : <>Send Enquiry &nbsp;&rarr;</>}
                </button>

                <p className="c-form__note">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{display:'inline',verticalAlign:'middle',marginRight:'6px'}}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  Your information is safe with us. We will get back to you as soon as possible.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Our Location */}
      <section className="c-location">
        <div className="container c-location__inner">
          <div className="c-location__text">
            <h2 className="c-location__title">Our Location</h2>
            <p>Visit us or connect with our team.<br />We&apos;re here to provide the right<br />paper cup solutions for your business.</p>
            <a href="https://www.google.com/maps/search/?api=1&query=GREEN+PAPER+PRODUCTS+V-459A,+Karamolpeedika,+Perumbavoor-+Kolenchery+Road,+Near+KSEB+Office,+Kolenchery+S.O,+Ernakulam+-682311+Kolanchery,+Kunnathunad,+682311,+KL,+IN" target="_blank" rel="noopener noreferrer" className="c-location__btn">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              View on Google Maps ↗
            </a>
          </div>

          <div className="c-location__map">
            <iframe
              title="Green Paper Products Location"
              src="https://maps.google.com/maps?q=GREEN+PAPER+PRODUCTS+V-459A,+Karamolpeedika,+Perumbavoor-+Kolenchery+Road,+Near+KSEB+Office,+Kolenchery+S.O,+Ernakulam+-682311+Kolanchery,+Kunnathunad,+682311,+KL,+IN&t=&z=14&ie=UTF8&iwloc=&output=embed"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* CTA Wave Divider */}
      <div className="c-cta-wave">
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="c-cta-wave__svg">
          <path d="M0,60 C360,0 720,80 1080,20 C1260,0 1380,40 1440,30 L1440,80 L0,80 Z" fill="var(--color-cream)" />
        </svg>
      </div>

      {/* Bottom CTA */}
      <section className="c-cta">
        {/* Decorative leaves */}
        <svg className="c-cta__leaf c-cta__leaf--left" viewBox="0 0 80 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M40 200 C40 150 10 100 10 50 C10 20 40 0 40 0 C40 0 70 20 70 50 C70 100 40 150 40 200Z" fill="#C8BEA8" opacity="0.4"/>
        </svg>
        <svg className="c-cta__leaf c-cta__leaf--right" viewBox="0 0 80 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M40 200 C40 150 10 100 10 50 C10 20 40 0 40 0 C40 0 70 20 70 50 C70 100 40 150 40 200Z" fill="#C8BEA8" opacity="0.3"/>
        </svg>

        <div className="container c-cta__inner">
          {/* Blob image */}
          <div className="c-cta__img-wrap">
            <div className="c-cta__img-blob" />
            <div className="c-cta__img-circle">
              <img src="/ai_2_cups_cta.jpg" alt="Different sized Green Paper Cups" className="c-cta__img" />
            </div>
          </div>

          {/* Text */}
          <div className="c-cta__text">
            <h3>Have a requirement?</h3>
            <p>Get in touch with us today.</p>
          </div>

          {/* Button */}
          <button className="c-cta__btn" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            Get in Touch &nbsp;&rarr;
          </button>
        </div>
      </section>

    </div>
  );
};

export default Contact;
