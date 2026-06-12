import Link from 'next/link';

export const metadata = {
  title: 'Blogs | Boscow Glass',
  description: 'Read the latest trends and guides on custom glass, shower doors, mirrors, and closet designs by Boscow Glass.',
};

export default function Blogs() {
  const blogPosts = [
    {
      id: 1,
      title: 'THE LATEST TRENDS IN CLOSET & CABINET DESIGNS AND STORAGE SOLUTIONS',
      date: 'November 24, 2021',
      excerpt: 'Most people use their master closet to store their private stuff like hand guns/ammo, rifles, passports, wills, insurance papers, jewelry, etc. Because it’s close, handy, private, not in a...',
      link: '#',
    },
    {
      id: 2,
      title: 'Confusion between frameless and framed shower door.',
      date: 'November 1, 2021',
      excerpt: 'Are you contemplating whether to get a shower with or without a frame? This is a very important decision. When it comes to frameless shower doors, we want to...',
      link: '#',
    },
    {
      id: 3,
      title: 'Questions and answers Before installing your Custom Built Shower Door.',
      date: 'November 1, 2021',
      excerpt: 'Are you thinking of getting custom frameless shower doors? We at Boscow Glass understand how soothing it can be to take a shower surrounded by glass doors of...',
      link: '#',
    }
  ];

  return (
    <div className="animate-fade-in-up">
      {/* Top Banner */}
      <section className="page-banner" style={{ backgroundImage: 'url("https://keenitsolutions.com/products/wordpress/reobiz/wp-content/uploads/2020/06/inner4.jpg")' }}>
        <div className="container page-banner-content">
          <h1 className="page-banner-title">Our Blogs</h1>
          <div className="breadcrumbs">
            <Link href="/">Home</Link> &gt; <span>Blogs</span>
          </div>
        </div>
      </section>

      <section className="section container">
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2" style={{ gap: '2rem' }}>
            {blogPosts.map((post) => (
              <div key={post.id} className="card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', height: '100%' }}>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  {post.date}
                </div>
                <h2 style={{ fontSize: '1.4rem', fontWeight: '600', marginBottom: '1.5rem', lineHeight: '1.4', flexGrow: 1 }}>
                  <Link href={post.link} style={{ color: 'var(--text-primary)', textDecoration: 'none' }}>
                    {post.title}
                  </Link>
                </h2>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '2rem' }}>
                  {post.excerpt}
                </p>
                <div style={{ marginTop: 'auto' }}>
                  <Link href={post.link} className="btn btn-primary" style={{ padding: '0.8rem 1.5rem', fontSize: '0.9rem' }}>
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
