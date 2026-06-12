import Link from 'next/link';

export const metadata = {
  title: 'About Us | Boscow Glass',
  description: 'Learn more about Boscow Glass and our commitment to quality, safety, and customer satisfaction in custom glass and mirror installations.',
};

export default function About() {
  return (
    <div className="animate-fade-in-up">
      {/* Top Banner */}
      <section className="page-banner" style={{ backgroundImage: 'url(/images/2021/11/shutterstock_1748232191-scaled.jpg)' }}>
        <div className="container page-banner-content">
          <h1 className="page-banner-title">About Us</h1>
          <div className="breadcrumbs">
            <Link href="/">Home</Link> &gt; <span>About</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section container">
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 className="section-title">About Boscow Glass</h2>
          
          <div style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
            <p style={{ marginBottom: '1.5rem' }}>
              <strong style={{ color: 'var(--text-primary)' }}>Boscow Glass</strong> offers a complete line of custom build shower door enclosures, glass railing systems, various custom glass and mirrors suited for all residential and commercial applications, closet organizers and kitchen back splashes.
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
              We are equipped to handle any architectural glass service. Our staff is well trained and takes care of your project from the initial measurements to the final touches.
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
              Putting the quality and safety first, the customer satisfaction is our priority, hence most of our business is based on referrals from satisfied customers.
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
              We are committed to providing customers with direct and straightforward pricing from the manufacturer, as well as a rapid turnaround time. Our extensive selection of products and finishes ensures that you will find something that is conducive to your needs and desires. We will design and install the glass product of your choosing, providing you with a seamless experience.
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
              By choosing Boscow Glass, every client is making the right choice for a maintenance free, long term investment, adding value and beauty to any property.
            </p>
            <p style={{ marginBottom: '2rem' }}>
              From small residential projects to complex commercial jobs, our customers receive the same Express Response to their glass projects.
            </p>
            
            <div className="card" style={{ textAlign: 'center', marginTop: '3rem' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '400', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>Call now to get a free quote and consultation.<br/>We will be glad to assist you!</h3>
              <Link href="/contact" className="btn btn-primary">
                Contact Us Today
              </Link>
            </div>
          </div>

          <div style={{ marginTop: '5rem', textAlign: 'center' }}>
            <h2 className="section-title" style={{ marginBottom: '3rem' }}>What Our Customers Say</h2>
            <div className="card" style={{ padding: '3rem', fontStyle: 'italic', position: 'relative', borderLeft: '4px solid var(--accent)', textAlign: 'left' }}>
              <div style={{ fontSize: '4rem', color: 'var(--border)', position: 'absolute', top: '10px', left: '20px', lineHeight: 1 }}>"</div>
              <p style={{ position: 'relative', zIndex: 1, marginBottom: '1.5rem', fontSize: '1.1rem' }}>
                Excellent service and install. Great communication and an efficient and clean install. They are honest, reliable and skilled at the glass work he does. We use this company first time with lots of hesitation in our mind to work with unknown company but these guys are really good. will definitely use next time. Highly recommend!
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', borderTop: '1px solid var(--border)', paddingTop: '1.5rem' }}>
                <img src="https://i.pravatar.cc/150?img=47" alt="Kayla Koen" style={{ width: '50px', height: '50px', borderRadius: '50%', objectFit: 'cover' }} />
                <p style={{ fontWeight: '500', fontStyle: 'normal', textTransform: 'uppercase', letterSpacing: '0.1em', margin: 0 }}>— Kayla Koen</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
