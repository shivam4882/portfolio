import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);

  const links = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 100,
        padding: '1.2rem 8%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: scrolled ? 'rgba(15, 20, 25, 0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid #2a3442' : '1px solid transparent',
        transition: 'all 0.4s',
      }}
    >
      <a
        href="#home"
        style={{
          fontFamily: 'Sora, sans-serif',
          fontSize: '1.15rem',
          fontWeight: 700,
          color: '#e8eaed',
          textDecoration: 'none',
          letterSpacing: '-0.02em',
        }}
      >
        Shivam<span style={{ color: '#f5a623' }}>.</span>
      </a>

      <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
        {links.map((l) => (
          <a
            key={l.id}
            href={`#${l.id}`}
            style={{
              color: '#9aa4b2',
              textDecoration: 'none',
              fontSize: '0.9rem',
              fontWeight: 500,
              fontFamily: 'DM Sans, sans-serif',
              transition: 'color 0.25s',
            }}
            onMouseEnter={(e) => (e.target.style.color = '#f5a623')}
            onMouseLeave={(e) => (e.target.style.color = '#9aa4b2')}
          >
            {l.name}
          </a>
        ))}
        <a
          href="#contact"
          className="btn btn-primary"
          style={{ padding: '10px 22px', fontSize: '0.85rem' }}
        >
          Hire Me
        </a>
      </div>
    </nav>
  );
}
