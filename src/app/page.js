'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    '/images/2021/11/shutterstock_696855190-scaled.jpg',
    '/images/2021/11/shutterstock_1718432365-scaled.jpg'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <>
      <section className="hero-section" style={{ position: 'relative', height: '600px', display: 'flex', alignItems: 'center', color: 'white', overflow: 'hidden' }}>
        {slides.map((slide, index) => (
          <div 
            key={slide}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url(${slide})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: currentSlide === index ? 1 : 0,
              transition: 'opacity 1s ease-in-out',
              zIndex: 0
            }}
          />
        ))}
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <h1 style={{ fontSize: '3rem', fontWeight: '300', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>Planning to renovate or built up new home and need few ideas?</h1>
          <p style={{ fontSize: '1.25rem', marginBottom: '2rem', textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>We offer a complete line of custom built shower doors, glass railings, mirrors, and closet organizers.</p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <Link href="/contact" className="btn btn-primary" style={{ padding: '1rem 2rem' }}>Get a Quote</Link>
            <Link href="/services" className="btn btn-secondary" style={{ padding: '1rem 2rem' }}>Our Services</Link>
          </div>
        </div>
      </section>

      {/* Why Boscow Glass Section */}
      <section className="container" style={{ padding: '4rem 0' }}>
        <h2 className="section-title">Why Boscow Glass</h2>
        
        <div className="grid grid-cols-2" style={{ gap: '2rem', alignItems: 'center' }}>
          <div className="card" style={{ padding: '2rem', display: 'flex', justifyContent: 'center' }}>
            <img src="/images/2021/11/shutterstock_1748232191-scaled.jpg" alt="Why Boscow Glass" style={{ maxWidth: '100%', borderRadius: '8px' }} />
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            <div className="card" style={{ padding: '2rem', textAlign: 'center' }}>
              <img src="/images/2021/12/shutterstock_520465333.png" alt="One day installations" style={{ height: '60px', margin: '0 auto 1rem' }} />
              <h3 style={{ fontSize: '1.2rem', fontWeight: '600' }}>One day installations*</h3>
            </div>
            
            <div className="card" style={{ padding: '2rem', textAlign: 'center' }}>
              <img src="/images/2021/12/shutterstock_1773210545-1-scaled.jpg" alt="Free consultations" style={{ height: '60px', margin: '0 auto 1rem', objectFit: 'cover', width: '60px', borderRadius: '50%' }} />
              <h3 style={{ fontSize: '1.2rem', fontWeight: '600' }}>Free consultations</h3>
            </div>
            
            <div className="card" style={{ padding: '2rem', textAlign: 'center' }}>
              <img src="/images/2021/12/shutterstock_109028594.png" alt="100% satisfaction" style={{ height: '60px', margin: '0 auto 1rem' }} />
              <h3 style={{ fontSize: '1.2rem', fontWeight: '600' }}>100% satisfaction</h3>
            </div>
            
            <div className="card" style={{ padding: '2rem', textAlign: 'center' }}>
              <img src="/images/2021/12/shutterstock_1914818590.png" alt="Limited warranty" style={{ height: '60px', margin: '0 auto 1rem' }} />
              <h3 style={{ fontSize: '1.2rem', fontWeight: '600' }}>Limited warranty*</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <p style={{ textAlign: 'center', color: 'var(--text-secondary)', maxWidth: '900px', margin: '0 auto 3rem', fontSize: '1.1rem' }}>
            We offer a variety of a complete line of custom build shower door enclosures, glass railing systems,various custom glass and mirrors suited for all residential and commercial applications, closet organizers and kitchen back splashes.
          </p>
          <div className="grid grid-cols-2" style={{ gap: '2rem' }}>
            <Link href="/closets" className="card" style={{ padding: '3rem', textAlign: 'center', display: 'block' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', color: 'var(--accent)' }}>Closets</h3>
              <p style={{ color: 'var(--text-secondary)' }}>Custom built storage solutions for your home.</p>
            </Link>
            <Link href="/glass-railing" className="card" style={{ padding: '3rem', textAlign: 'center', display: 'block' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', color: 'var(--accent)' }}>Glass Railing</h3>
              <p style={{ color: 'var(--text-secondary)' }}>Sleek, modern glass railing systems for stairs and balconies.</p>
            </Link>
            <Link href="/mirrors" className="card" style={{ padding: '3rem', textAlign: 'center', display: 'block' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', color: 'var(--accent)' }}>Mirrors</h3>
              <p style={{ color: 'var(--text-secondary)' }}>Custom mirrors tailored for residential and commercial spaces.</p>
            </Link>
            <Link href="/shower-doors" className="card" style={{ padding: '3rem', textAlign: 'center', display: 'block' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', color: 'var(--accent)' }}>Shower Door</h3>
              <p style={{ color: 'var(--text-secondary)' }}>Elegant, frameless and custom shower enclosures.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Restore, Repair, Replace */}
      <section className="section section-bg-light">
        <div className="container" style={{ padding: '4rem 2rem' }}>
          <h2 className="section-title">Restore, Repair, Replace</h2>
          <div style={{ maxWidth: '900px', margin: '0 auto', color: 'var(--text-secondary)', fontSize: '1.1rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <p>Our teams of glass professionals will offer you the broadest range of solutions to address your individual needs, that you simply won’t find anywhere else or with any other glass company.</p>
            <p>When appropriate we’ll provide you right advice according to your needs and best suitable options for your project. Our aim is to save your time, money, and hassle.</p>
            <p>We work for you. Our skilled technicians will provide you with a positive service experience, delivering a quality service and installation on every job! Quality products, professional repairs and installations, excellent service with a smile. All for a fair price.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section container" style={{ paddingBottom: '4rem' }}>
        <h2 className="section-title">Testimonials</h2>
        <div className="grid grid-cols-3" style={{ gap: '2rem' }}>
          <div className="card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', gap: '5px', color: '#fbbf24', marginBottom: '1rem' }}>★★★★★</div>
              <p style={{ color: 'var(--text-secondary)', fontStyle: 'italic', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                "Outstanding job! From first contact to the installation! Excellent craftsmanship very fair price! Everything that was agreed upon was exactly what happened. Oh yea and they showed up exactly when they said they would. Only a few days from the measure to the install."
              </p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', borderTop: '1px solid var(--border)', paddingTop: '1rem' }}>
              <img src="https://i.pravatar.cc/150?img=11" alt="berney hersrien" style={{ width: '50px', height: '50px', borderRadius: '50%', objectFit: 'cover' }} />
              <div style={{ fontWeight: '600', textTransform: 'capitalize', color: 'var(--text-primary)' }}>berney hersrien</div>
            </div>
          </div>
          <div className="card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', gap: '5px', color: '#fbbf24', marginBottom: '1rem' }}>★★★★★</div>
              <p style={{ color: 'var(--text-secondary)', fontStyle: 'italic', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                "Amazing Company!!! I called boscow glass to set up measuring for frameless shower door. they called an hour later, they took measured. 2 weeks later they came to install. The installers were so friendly, professional and made everything looks to clean.The shower door looks great!!! Highly recommend."
              </p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', borderTop: '1px solid var(--border)', paddingTop: '1rem' }}>
              <img src="https://i.pravatar.cc/150?img=60" alt="Rachael B" style={{ width: '50px', height: '50px', borderRadius: '50%', objectFit: 'cover' }} />
              <div>
                <div style={{ fontWeight: '600', color: 'var(--text-primary)' }}>Rachael B</div>
              </div>
            </div>
          </div>
          <div className="card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', gap: '5px', color: '#fbbf24', marginBottom: '1rem' }}>★★★★★</div>
              <p style={{ color: 'var(--text-secondary)', fontStyle: 'italic', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                "Excellent service and install. Great communication and an efficient and clean install . They are honest, reliable and skilled at the glass work he does. We use this company first time with lots of hesitation in our mind to work with unknown company but these guys are really good. will definitely use next time. Highly recommend!"
              </p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', borderTop: '1px solid var(--border)', paddingTop: '1rem' }}>
              <img src="https://i.pravatar.cc/150?img=47" alt="Kayla Koen" style={{ width: '50px', height: '50px', borderRadius: '50%', objectFit: 'cover' }} />
              <div style={{ fontWeight: '600', color: 'var(--text-primary)' }}>Kayla Koen</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
