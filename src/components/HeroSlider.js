"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: '/images/2021/09/SLIDER1.jpg',
      title: 'Elevate Your Space with Premium Glass',
      subtitle: 'We offer a complete line of custom build shower door enclosures, glass railing systems, custom glass and mirrors.',
    },
    {
      id: 2,
      image: '/images/2021/09/SLIDER2.jpg',
      title: 'Expert Installation & Service',
      subtitle: 'From small residential projects to complex commercial jobs, ensuring you are completely satisfied.',
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div style={{ position: 'relative', width: '100%', height: '80vh', overflow: 'hidden' }}>
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            opacity: index === currentSlide ? 1 : 0,
            transition: 'opacity 1s ease-in-out',
            backgroundImage: `url(${slide.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <div className="container animate-fade-in-up" style={{ textAlign: 'center', color: '#fff' }}>
              <h1 style={{ fontSize: '4rem', fontWeight: '800', lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-0.02em', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
                {slide.title}
              </h1>
              <p style={{ fontSize: '1.25rem', maxWidth: '700px', margin: '0 auto 2.5rem', textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
                {slide.subtitle}
              </p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                <Link href="/contact" className="btn btn-primary" style={{ boxShadow: '0 4px 6px rgba(0,0,0,0.3)' }}>
                  Get a Free Quote
                </Link>
                <Link href="/about" className="btn" style={{ background: 'rgba(255,255,255,0.2)', color: '#fff', border: '1px solid rgba(255,255,255,0.3)', backdropFilter: 'blur(10px)', boxShadow: '0 4px 6px rgba(0,0,0,0.3)' }}>
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
      
      {/* Slider Controls */}
      <div style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '0.5rem' }}>
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              border: 'none',
              background: index === currentSlide ? 'var(--accent)' : 'rgba(255,255,255,0.5)',
              cursor: 'pointer',
              transition: 'background 0.3s ease'
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
