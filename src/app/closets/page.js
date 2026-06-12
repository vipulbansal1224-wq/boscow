import fs from 'fs';
import path from 'path';
import ClientImageGallery from '../../components/ClientImageGallery';

export const metadata = {
  title: 'Closet Organizers | Boscow Glass',
  description: 'Custom built closet storage solutions to maximize your space and organize your home beautifully.',
};

export default function Closets() {
  // Read images dynamically from public directory
  const imagesDir = path.join(process.cwd(), 'public', 'images', '2021', '09');
  let images = [];
  try {
    const files = fs.readdirSync(imagesDir);
    // Filter for closet images that are full size (not the resized thumbnails like 150x150)
    images = files
      .filter(f => f.startsWith('closets-') && f.endsWith('.jpg') && !f.match(/-\d+x\d+\.jpg$/))
      .map(f => `/images/2021/09/${f}`);
  } catch (error) {
    console.error('Error reading images directory', error);
  }

  return (
    <div className="container animate-fade-in-up">
      <div style={{ padding: '4rem 0' }}>
        <h1 className="section-title" style={{ marginBottom: '1rem' }}>Closet Organizers</h1>
        <p style={{ textAlign: 'center', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto 3rem', fontSize: '1.1rem' }}>
          Maximize your space with our custom built closet storage solutions. We design, build, and install closet organizers that perfectly fit your lifestyle and home decor.
        </p>
        
        <ClientImageGallery images={images} category="Closet" />
      </div>
    </div>
  );
}
