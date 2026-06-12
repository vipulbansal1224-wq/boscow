import './globals.css'
import Link from 'next/link'
import { ThemeProvider } from '../context/ThemeContext'
import ThemeSwitcher from '../components/ThemeSwitcher'

export const metadata = {
  title: 'Boscow Glass - Custom Glass & Mirror Solutions',
  description: 'Boscow Glass offers custom build shower door enclosures, glass railing systems, custom glass and mirrors, closet organizers and kitchen back splashes for residential and commercial applications.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <ThemeSwitcher />
          <header className="header" style={{ position: 'fixed', width: '100%', zIndex: 100 }}>
            {/* Top Contact Bar */}
            <div style={{ background: 'var(--accent)', color: 'white', padding: '0.5rem 0', fontSize: '0.9rem', transition: 'background 0.3s ease' }}>
              <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', gap: '2rem' }}>
                  <span>📍 11741 92 Avenue Delta BC V4C3L</span>
                  <span>📞 +1 236-513-2691</span>
                  <span>✉️ info@boscowglass.com</span>
                  <span>🕒 8 am - 8 pm</span>
                </div>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <a href="#" style={{ color: 'white', display: 'flex', alignItems: 'center' }} aria-label="Facebook">
                    <svg fill="currentColor" width="16" height="16" viewBox="0 0 24 24"><path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"/></svg>
                  </a>
                  <a href="#" style={{ color: 'white', display: 'flex', alignItems: 'center' }} aria-label="Twitter">
                    <svg fill="currentColor" width="16" height="16" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                  </a>
                </div>
              </div>
            </div>
            {/* Main Navigation */}
            <div style={{ background: 'var(--header-bg)', padding: '1rem 0', transition: 'background 0.3s ease' }}>
              <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link href="/" className="logo" style={{ display: 'flex', alignItems: 'center' }}>
                  <img src="/images/2021/09/logo.png" alt="Boscow Glass Logo" style={{ maxHeight: '50px' }} />
                </Link>
                <nav className="nav-links" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                  <Link href="/">Home</Link>
                  <Link href="/about">About Us</Link>
                  
                  <div className="nav-dropdown">
                    <span style={{ cursor: 'pointer', padding: '0.5rem 0', display: 'inline-block' }} className="hover:text-blue-600">Products ▾</span>
                    <div className="nav-dropdown-content" style={{ background: 'var(--header-bg)' }}>
                      <Link href="/closets">Closets</Link>
                      <Link href="/glass-railing">Glass Railing</Link>
                      <Link href="/mirrors">Mirrors</Link>
                      <Link href="/shower-doors">Shower Door</Link>
                    </div>
                  </div>

                  <Link href="/contact">Contact</Link>
                  <Link href="/blogs">Blogs</Link>
                </nav>
              </div>
            </div>
          </header>

          <main style={{ paddingTop: '130px', minHeight: 'calc(100vh - 300px)' }}>
            {children}
          </main>

          <footer className="footer" style={{ paddingTop: '4rem', marginTop: 'auto' }}>
            <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem', paddingBottom: '3rem' }}>
              <div>
                <Link href="/" style={{ display: 'inline-block', marginBottom: '1.5rem', background: '#ffffff', padding: '10px 20px', borderRadius: '8px' }}>
                  <img src="/images/2021/09/logo.png" alt="Boscow Glass Logo" style={{ maxHeight: '60px' }} />
                </Link>
                <p>
                  Boscow Glass offers a complete line of custom build shower door enclosures, glass railing systems, various custom glass and mirrors suited for all residential and commercial applications, closet organizers and kitchen back splashes.
                </p>
              </div>
              <div>
                <h3 style={{ marginBottom: '1rem' }}>Quick Links</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <Link href="/about">About Us</Link>
                  <Link href="/closets">Products - Closets</Link>
                  <Link href="/glass-railing">Products - Glass Railing</Link>
                  <Link href="/mirrors">Products - Mirrors</Link>
                  <Link href="/shower-doors">Products - Shower Door</Link>
                  <Link href="/contact">Contact</Link>
                  <Link href="/blogs">Blogs</Link>
                </div>
              </div>
              <div>
                <h3 style={{ marginBottom: '1rem' }}>Contact Info</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <p>968 King Edward Avenue W Vancouver V5Z2E2</p>
                  <p>+1 778-712-2568</p>
                  <p>info@boscowglass.com</p>
                  <p>8 am - 8 pm</p>
                </div>
              </div>
              <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2604.4750304942704!2d-123.12840792450758!3d49.24844157317958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486739263a8e1d9%3A0xf83e06dc2a13754a!2s968%20W%20King%20Edward%20Ave%2C%20Vancouver%2C%20BC%20V6H%202M9%2C%20Canada!5e0!3m2!1sen!2sin!4v1751347309885!5m2!1sen!2sin" width="100%" height="200" style={{ border: 0, borderRadius: '8px' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
            <div style={{ textAlign: 'center', padding: '1.5rem 0', borderTop: '1px solid var(--border)', fontSize: '0.85rem', background: 'var(--footer-bg)' }}>
              &copy; {new Date().getFullYear()} Boscow Glass. All rights reserved.
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  )
}
