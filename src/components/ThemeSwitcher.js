'use client';

import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

export default function ThemeSwitcher() {
  const { theme, updateTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [fontInput, setFontInput] = useState(theme.customFont || '');

  const togglePanel = () => setIsOpen(!isOpen);

  const applyFont = () => {
    updateTheme('customFont', fontInput);
  };

  const clearFont = () => {
    setFontInput('');
    updateTheme('customFont', '');
  };

  return (
    <>
      {/* Floating Gear Icon */}
      <button 
        onClick={togglePanel}
        style={{
          position: 'fixed',
          top: '50%',
          right: '0',
          transform: 'translateY(-50%)',
          backgroundColor: 'var(--accent)',
          color: 'white',
          border: 'none',
          padding: '12px',
          borderRadius: '8px 0 0 8px',
          cursor: 'pointer',
          boxShadow: '-2px 0 8px rgba(0,0,0,0.2)',
          zIndex: 10000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
        aria-label="Toggle Theme Settings"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3"></circle>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
        </svg>
      </button>

      {/* Side Panel Overlay */}
      <div 
        onClick={togglePanel}
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.5)',
          zIndex: 100000,
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? 'auto' : 'none',
          transition: 'opacity 0.3s ease'
        }}
      />

      {/* Settings Side Panel */}
      <div 
        style={{
          position: 'fixed',
          top: 0,
          right: isOpen ? '0' : '-320px',
          width: '320px',
          height: '100vh',
          backgroundColor: 'var(--bg-primary)',
          boxShadow: '-4px 0 15px rgba(0,0,0,0.1)',
          zIndex: 100001,
          transition: 'right 0.3s ease',
          padding: '2rem',
          display: 'flex',
          flexDirection: 'column',
          overflowY: 'auto'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', margin: 0, color: 'var(--text-primary)' }}>Theme Settings</h2>
          <button 
            onClick={togglePanel}
            style={{ background: 'none', border: 'none', fontSize: '2rem', cursor: 'pointer', color: 'var(--text-primary)' }}
          >
            &times;
          </button>
        </div>

        <div style={{ marginBottom: '2.5rem' }}>
          <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Custom Colors</h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Accent Color */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <label style={{ fontSize: '0.9rem', color: 'var(--text-primary)' }}>Primary / Accent Color</label>
              <input 
                type="color" 
                value={theme.accentColor} 
                onChange={(e) => updateTheme('accentColor', e.target.value)} 
                style={{ width: '50px', height: '40px', cursor: 'pointer', padding: '0', border: 'none', borderRadius: '4px' }}
              />
            </div>

            {/* Header Background */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <label style={{ fontSize: '0.9rem', color: 'var(--text-primary)' }}>Header Background</label>
              <input 
                type="color" 
                value={theme.headerBg} 
                onChange={(e) => updateTheme('headerBg', e.target.value)} 
                style={{ width: '50px', height: '40px', cursor: 'pointer', padding: '0', border: 'none', borderRadius: '4px' }}
              />
            </div>

            {/* Footer Background */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <label style={{ fontSize: '0.9rem', color: 'var(--text-primary)' }}>Footer Background</label>
              <input 
                type="color" 
                value={theme.footerBg} 
                onChange={(e) => updateTheme('footerBg', e.target.value)} 
                style={{ width: '50px', height: '40px', cursor: 'pointer', padding: '0', border: 'none', borderRadius: '4px' }}
              />
            </div>
          </div>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Custom Google Font</h3>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
            Type any Google Font name (e.g. Oswald, Lato, Montserrat)
          </p>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <input 
              type="text" 
              value={fontInput}
              onChange={(e) => setFontInput(e.target.value)}
              placeholder="e.g. Montserrat"
              style={{ flex: 1, padding: '0.5rem', borderRadius: '4px', border: '1px solid var(--border)', color: 'var(--text-primary)', background: 'var(--bg-primary)' }}
            />
            <button 
              onClick={applyFont}
              style={{ background: 'var(--accent)', color: 'white', border: 'none', padding: '0.5rem 1rem', borderRadius: '4px', cursor: 'pointer' }}
            >
              Apply
            </button>
          </div>
          {theme.customFont && (
            <button 
              onClick={clearFont}
              style={{ background: 'transparent', color: 'red', border: 'none', padding: '0.5rem 0', cursor: 'pointer', fontSize: '0.85rem', marginTop: '0.5rem' }}
            >
              Reset to Default Font
            </button>
          )}
        </div>

      </div>
    </>
  );
}
