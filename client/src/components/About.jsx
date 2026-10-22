import { motion } from 'framer-motion';

export default function About() {
  const skills = {
    Frontend: ['React', 'JavaScript', 'HTML/CSS', 'Tailwind', 'Vite'],
    Backend: ['Node.js', 'Express', 'MongoDB', 'REST APIs', 'JWT'],
    'Data Science': ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'SQL'],
    Tools: ['Git', 'GitHub', 'VS Code', 'Postman', 'Figma'],
  };

  const education = [
    {
      degree: 'B.Tech — CSE (Data Science)',
      year: 'Pursuing',
      icon: '🎓',
      desc: 'Focusing on AI/ML and full-stack web development.',
    },
    {
      degree: 'Diploma in Information Technology',
      year: 'Completed — 2 Years',
      icon: '📜',
      desc: 'Foundation in programming, databases, and networking.',
    },
  ];

  return (
    <section id="about" style={{ position: 'relative' }}>
      <div className="orb orb-teal" style={{ width: 350, height: 350, top: 100, right: -100 }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div className="section-label">About Me</div>
        <h2>
          A little about <span className="accent">my journey</span>
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '2rem',
          }}
        >
          {/* Education */}
          <motion.div
            className="card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3
              style={{
                fontFamily: 'Sora, sans-serif',
                fontSize: '1.3rem',
                marginBottom: '1.8rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
              }}
            >
              <span style={{ color: '#f5a623' }}>🎓</span> Education
            </h3>
            {education.map((e, i) => (
              <div
                key={i}
                style={{
                  marginBottom: '1.5rem',
                  paddingLeft: '1.2rem',
                  borderLeft: '2px solid #f5a623',
                }}
              >
                <p style={{ fontWeight: 600, marginBottom: '0.3rem', color: '#e8eaed' }}>
                  {e.degree}
                </p>
                <p style={{ color: '#14b8a6', fontSize: '0.85rem', marginBottom: '0.4rem' }}>
                  {e.year}
                </p>
                <p style={{ color: '#9aa4b2', fontSize: '0.9rem' }}>{e.desc}</p>
              </div>
            ))}
          </motion.div>

          {/* Skills */}
          <motion.div
            className="card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            viewport={{ once: true }}
          >
            <h3
              style={{
                fontFamily: 'Sora, sans-serif',
                fontSize: '1.3rem',
                marginBottom: '1.8rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
              }}
            >
              <span style={{ color: '#f5a623' }}>⚡</span> Tech Stack
            </h3>
            {Object.entries(skills).map(([cat, items]) => (
              <div key={cat} style={{ marginBottom: '1.3rem' }}>
                <p
                  style={{
                    color: '#f5a623',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    marginBottom: '0.6rem',
                  }}
                >
                  {cat}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {items.map((skill) => (
                    <span
                      key={skill}
                      style={{
                        padding: '6px 14px',
                        background: '#1a2129',
                        border: '1px solid #2a3442',
                        borderRadius: '8px',
                        fontSize: '0.82rem',
                        color: '#e8eaed',
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}