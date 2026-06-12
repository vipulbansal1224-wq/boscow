import fs from 'fs';
import path from 'path';
import ClientImageGallery from '../../components/ClientImageGallery';

export const metadata = {
  title: 'Mirrors | Boscow Glass',
  description: 'Custom mirrors tailored for residential and commercial spaces.',
};

export default function Mirrors() {
  const imagesDir = path.join(process.cwd(), 'public', 'images', '2021', '09');
  let images = [];
  try {
    const files = fs.readdirSync(imagesDir);
    images = files
      .filter(f => f.startsWith('mirrors-') && f.endsWith('.jpg') && !f.match(/-\d+x\d+\.jpg$/))
      .map(f => `/images/2021/09/${f}`);
  } catch (error) {
    console.error('Error reading images directory', error);
  }

  return (
    <div className="container animate-fade-in-up">
      <div style={{ padding: '4rem 0' }}>
        <h1 className="section-title" style={{ marginBottom: '1rem' }}>Custom Mirrors</h1>
        <p style={{ textAlign: 'center', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto 3rem', fontSize: '1.1rem' }}>
          Custom mirrors tailored for residential and commercial spaces. Whether for bathrooms, gyms, or decorative walls, we provide the perfect fit and finish.
        </p>
        
        <ClientImageGallery images={images} category="Mirror" />
      </div>
    </div>
  );
}
