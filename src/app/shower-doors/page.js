import fs from 'fs';
import path from 'path';
import ClientImageGallery from '../../components/ClientImageGallery';

export const metadata = {
  title: 'Shower Doors | Boscow Glass',
  description: 'Elegant, frameless and custom shower enclosures designed specifically for your bathroom.',
};

export default function ShowerDoors() {
  const imagesDir = path.join(process.cwd(), 'public', 'images', '2021', '09');
  let images = [];
  try {
    const files = fs.readdirSync(imagesDir);
    images = files
      .filter(f => f.startsWith('shower-door-') && f.endsWith('.jpg') && !f.match(/-\d+x\d+\.jpg$/))
      .map(f => `/images/2021/09/${f}`);
  } catch (error) {
    console.error('Error reading images directory', error);
  }

  return (
    <div className="container animate-fade-in-up">
      <div style={{ padding: '4rem 0' }}>
        <h1 className="section-title" style={{ marginBottom: '1rem' }}>Shower Doors & Enclosures</h1>
        <p style={{ textAlign: 'center', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto 3rem', fontSize: '1.1rem' }}>
          Elegant, frameless and custom shower enclosures designed specifically for your bathroom space.
        </p>
        
        <ClientImageGallery images={images} category="Shower Door" />
      </div>
    </div>
  );
}
