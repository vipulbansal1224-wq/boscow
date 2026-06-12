'use client';

import { useState, useEffect } from 'react';

export default function ClientImageGallery({ images, category }) {
  const [selectedImage, setSelectedImage] = useState(null);

  const openLightbox = (src) => {
    setSelectedImage(src);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  // Add Escape key listener to close lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeLightbox();
      }
    };
    
    if (selectedImage) {
      document.addEventListener('keydown', handleKeyDown);
    }
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedImage]);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((src, idx) => (
          <div key={idx} className="card" style={{ height: '300px', overflow: 'hidden', cursor: 'pointer', position: 'relative' }} onClick={() => openLightbox(src)}>
            <img 
              src={src} 
              alt={`${category} project ${idx + 1}`} 
              style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s ease' }}
              className="gallery-img hover:scale-105"
            />
            {/* Overlay hint */}
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0)', transition: 'background 0.3s ease' }} className="hover:bg-black/10" />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div 
          style={{
            position: 'fixed',
            top: 0, left: 0, right: 0, bottom: 0,
            backgroundColor: 'rgba(255, 255, 255, 0.4)', // Light transparent background instead of black blackout
            backdropFilter: 'blur(3px)', // Slight blur to focus on image
            zIndex: 99999,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '2rem',
            overflow: 'auto'
          }}
          onClick={closeLightbox}
        >
          <button 
            style={{
              position: 'absolute',
              top: '20px',
              right: '30px',
              background: 'white',
              border: '1px solid #ddd',
              color: 'black',
              fontSize: '2rem',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              cursor: 'pointer',
              zIndex: 100000,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
            }}
            onClick={closeLightbox}
            aria-label="Close"
          >
            &times;
          </button>
          <img 
            src={selectedImage} 
            alt="Expanded view" 
            style={{
              maxWidth: '90vw',
              maxHeight: '80vh',
              objectFit: 'contain',
              boxShadow: '0 10px 40px rgba(0,0,0,0.2)', // Stronger shadow since background is light
              borderRadius: '8px',
              border: '4px solid white',
              marginBottom: '1rem'
            }} 
            onClick={(e) => e.stopPropagation()} 
          />
          <div style={{ color: '#333', fontSize: '1rem', fontWeight: '500', background: 'rgba(255,255,255,0.8)', padding: '8px 16px', borderRadius: '20px', textAlign: 'center' }}>
            Scroll to find image or press ESC to cancel
          </div>
        </div>
      )}
    </>
  );
}
