import fs from 'fs';
import path from 'path';
import ClientImageGallery from '../../components/ClientImageGallery';

export const metadata = {
  title: 'Glass Railings | Boscow Glass',
  description: 'Sleek, modern glass railing systems for stairs, balconies, and decks.',
};

export default function GlassRailing() {
  const imagesDir = path.join(process.cwd(), 'public', 'images', '2021', '09');
  let images = [];
  try {
    const files = fs.readdirSync(imagesDir);
    images = files
      .filter(f => f.startsWith('glass-railing-') && f.endsWith('.jpg') && !f.match(/-\d+x\d+\.jpg$/))
      .map(f => `/images/2021/09/${f}`);
  } catch (error) {
    console.error('Error reading images directory', error);
  }

  return (
    <div className="container animate-fade-in-up">
      <div style={{ padding: '4rem 0' }}>
        <h1 className="section-title" style={{ marginBottom: '1rem' }}>Glass Railing Systems</h1>
        <p style={{ textAlign: 'center', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto 3rem', fontSize: '1.1rem' }}>
          Enhance your property with our premium glass railing systems. Perfect for balconies, staircases, and decks, offering safety without compromising your view.
        </p>
        
        <ClientImageGallery images={images} category="Glass Railing" />
      </div>
    </div>
  );
}
