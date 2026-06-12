'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState({
    accentColor: '#1273eb',
    headerBg: '#ffffff',
    footerBg: '#111827',
    customFont: ''
  });

  const [mounted, setMounted] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('boscowThemeAdvanced');
    if (savedTheme) {
      try {
        setTheme(JSON.parse(savedTheme));
      } catch (e) {
        console.error('Error parsing theme from localStorage', e);
      }
    }
    setMounted(true);
  }, []);

  // Apply theme to document
  useEffect(() => {
    if (!mounted) return;
    const root = document.documentElement;
    
    // Apply RGB Colors
    root.style.setProperty('--accent', theme.accentColor);
    root.style.setProperty('--header-bg', theme.headerBg);
    root.style.setProperty('--footer-bg', theme.footerBg);

    // Provide some contrast logic for hover state if possible (simple fallback)
    root.style.setProperty('--accent-hover', theme.accentColor); 

    // Apply Custom Font
    if (theme.customFont && theme.customFont.trim() !== '') {
      const fontName = theme.customFont.trim();
      const fontUrl = `https://fonts.googleapis.com/css2?family=${fontName.replace(/\s+/g, '+')}:wght@300;400;500;600;700&display=swap`;
      
      let link = document.getElementById('custom-google-font');
      if (!link) {
        link = document.createElement('link');
        link.id = 'custom-google-font';
        link.rel = 'stylesheet';
        document.head.appendChild(link);
      }
      link.href = fontUrl;

      root.style.setProperty('--font-heading', `"${fontName}", sans-serif`);
      root.style.setProperty('--font-body', `"${fontName}", sans-serif`);
    } else {
      // Revert to Modern Default
      root.style.setProperty('--font-heading', "'Outfit', sans-serif");
      root.style.setProperty('--font-body', "'Inter', sans-serif");
      
      let link = document.getElementById('custom-google-font');
      if (link) {
        link.remove();
      }
    }

    localStorage.setItem('boscowThemeAdvanced', JSON.stringify(theme));
  }, [theme, mounted]);

  const updateTheme = (key, value) => {
    setTheme(prev => ({ ...prev, [key]: value }));
  };

  return (
    <ThemeContext.Provider value={{ theme, updateTheme }}>
      <div style={{ visibility: mounted ? 'visible' : 'hidden' }}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};
