import Link from 'next/link';

export const metadata = {
  title: 'Contact Us | Boscow Glass',
  description: 'Get in touch with Boscow Glass for a free quote on custom glass, shower doors, railings, and mirrors in Surrey, BC.',
};

export default function Contact() {
  return (
    <div className="animate-fade-in-up">
      {/* Top Banner */}
      <section className="page-banner" style={{ backgroundImage: 'url("https://keenitsolutions.com/products/wordpress/reobiz/wp-content/uploads/2020/06/inner4.jpg")' }}>
        <div className="container page-banner-content">
          <h1 className="page-banner-title">Contact Us</h1>
          <div className="breadcrumbs">
            <Link href="/">Home</Link> &gt; <span>Contact</span>
          </div>
        </div>
      </section>

      <section className="section container">
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '4rem', fontSize: '1.2rem' }}>
            Reach out to us today for a free quote or consultation.
          </p>
          
          <div className="grid grid-cols-2 gap-2" style={{ marginBottom: '4rem' }}>
            {/* Contact Information */}
            <div className="card" style={{ padding: '3rem' }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: '400', marginBottom: '2.5rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Get In Touch</h2>
              
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Address</h3>
                <p style={{ fontSize: '1.1rem', marginTop: '0.5rem', color: 'var(--text-primary)' }}>968 King Edward Avenue<br />W Vancouver V5Z2E2</p>
              </div>
              
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Phone</h3>
                <p style={{ fontSize: '1.1rem', marginTop: '0.5rem', color: 'var(--text-primary)' }}>+1 778-712-2568</p>
              </div>
              
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Email</h3>
                <p style={{ fontSize: '1.1rem', marginTop: '0.5rem', color: 'var(--text-primary)' }}>info@boscowglass.com</p>
              </div>
              
              <div>
                <h3 style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Business Hours</h3>
                <p style={{ fontSize: '1.1rem', marginTop: '0.5rem', color: 'var(--text-primary)' }}>8:00 AM - 8:00 PM</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="card" style={{ padding: '3rem' }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: '400', marginBottom: '2.5rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Send a Message</h2>
              <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div>
                  <label>Name</label>
                  <input type="text" placeholder="Your Name" />
                </div>
                <div>
                  <label>Email</label>
                  <input type="email" placeholder="your@email.com" />
                </div>
                <div>
                  <label>Message</label>
                  <textarea rows="4" placeholder="How can we help you?" style={{ resize: 'vertical' }}></textarea>
                </div>
                <button type="button" className="btn btn-primary" style={{ marginTop: '1rem', width: '100%' }}>
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Map */}
          <div style={{ border: '1px solid var(--border)' }}>
            <iframe 
              width="100%" 
              height="450" 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2604.4750304942704!2d-123.12840792450758!3d49.24844157317958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486739263a8e1d9%3A0xf83e06dc2a13754a!2s968%20W%20King%20Edward%20Ave%2C%20Vancouver%2C%20BC%20V6H%202M9%2C%20Canada!5e0!3m2!1sen!2sin!4v1751347309885!5m2!1sen!2sin" 
              frameBorder="0" 
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ display: 'block', border: '0' }}
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
