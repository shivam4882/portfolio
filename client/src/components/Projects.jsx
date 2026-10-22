import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    _id: 1,
    title: 'Chikoo Travels',
    subtitle: 'Travel Booking Website',
    description:
      'A fully responsive travel booking platform with package listings, enquiry form, and admin panel for managing tours and customer bookings.',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB'],
    icon: '✈️',
    accent: '#f5a623',
    githubLink: '#',
    liveLink: 'https://chikootravels.com/',
    highlights: ['Package Listings', 'Enquiry System', 'Admin Dashboard'],
  },
  {
    _id: 2,
    title: 'Shashi Hospital Management',
    subtitle: 'Hospital Management System',
    description:
      'Complete hospital management system for patient registration, doctor scheduling, appointment booking, and medical records management.',
    techStack: ['React', 'Node.js', 'MongoDB', 'JWT Auth'],
    icon: '🏥',
    accent: '#14b8a6',
    githubLink: '#',
    liveLink: '#',
    highlights: ['Patient Records', 'Doctor Scheduling', 'Appointments'],
  },
  {
    _id: 3,
    title: 'Bangles Trading',
    subtitle: 'E-Commerce Platform',
    description:
      'Modern e-commerce website for bangles trading with product catalog, shopping cart, secure checkout, and order tracking for customers.',
    techStack: ['React', 'Node.js', 'MongoDB', 'Razorpay'],
    icon: '🛒',
    accent: '#e879a6',
    githubLink: '#',
    liveLink: '#',
    highlights: ['Product Catalog', 'Cart & Checkout', 'Order Tracking'],
  },
];

export default function Projects() {
  return (
    <section id="projects" style={{ position: 'relative' }}>
      <div
        className="orb orb-amber"
        style={{ width: 400, height: 400, bottom: 0, left: -150 }}
      />

      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div className="section-label">Portfolio</div>
        <h2>
          Featured <span className="accent">projects</span>
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem',
          }}
        >
          {projects.map((p, i) => (
            <motion.div
              key={p._id}
              className="card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              style={{ display: 'flex', flexDirection: 'column' }}
            >
              {/* Icon */}
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: 14,
                  background: `${p.accent}15`,
                  border: `1px solid ${p.accent}40`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.6rem',
                  marginBottom: '1.3rem',
                }}
              >
                {p.icon}
              </div>

              {/* Title + Subtitle */}
              <h3
                style={{
                  fontFamily: 'Sora, sans-serif',
                  fontSize: '1.25rem',
                  marginBottom: '0.2rem',
                  color: '#e8eaed',
                }}
              >
                {p.title}
              </h3>
              <p
                style={{
                  color: p.accent,
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  marginBottom: '1rem',
                  letterSpacing: '0.5px',
                }}
              >
                {p.subtitle}
              </p>

              {/* Description */}
              <p
                style={{
                  color: '#9aa4b2',
                  fontSize: '0.9rem',
                  marginBottom: '1.2rem',
                  lineHeight: 1.6,
                  flex: 1,
                }}
              >
                {p.description}
              </p>

              {/* Highlights */}
              <div style={{ marginBottom: '1.2rem' }}>
                {p.highlights.map((h) => (
                  <div
                    key={h}
                    style={{
                      color: '#9aa4b2',
                      fontSize: '0.82rem',
                      marginBottom: '0.35rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                    }}
                  >
                    <span style={{ color: p.accent }}>✓</span> {h}
                  </div>
                ))}
              </div>

              {/* Tech pills */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.4rem',
                  marginBottom: '1.5rem',
                }}
              >
                {p.techStack.map((t) => (
                  <span
                    key={t}
                    style={{
                      fontSize: '0.72rem',
                      padding: '4px 10px',
                      background: `${p.accent}10`,
                      border: `1px solid ${p.accent}30`,
                      borderRadius: '6px',
                      color: p.accent,
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div
                style={{
                  display: 'flex',
                  gap: '1rem',
                  paddingTop: '1.2rem',
                  borderTop: '1px solid #2a3442',
                }}
              >
                <a
                  href={p.githubLink}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    color: '#9aa4b2',
                    fontSize: '0.88rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = p.accent)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#9aa4b2')}
                >
                  <FaGithub /> Code
                </a>
                <a
                  href={p.liveLink}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    color: '#9aa4b2',
                    fontSize: '0.88rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = p.accent)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#9aa4b2')}
                >
                  <FaExternalLinkAlt size={12} /> Live Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}