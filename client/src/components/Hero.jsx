import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa';

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: '120px',
        paddingBottom: '80px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle background orbs */}
      <div className="orb orb-amber" style={{ width: 500, height: 500, top: -100, right: -100 }} />
      <div className="orb orb-teal" style={{ width: 400, height: 400, bottom: 0, left: -100 }} />

      <div
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: 1200,
          margin: '0 auto',
          width: '100%',
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1.3fr) minmax(0, 1fr)',
          gap: '4rem',
          alignItems: 'center',
        }}
        className="hero-grid"
      >
        {/* LEFT — Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              padding: '8px 16px',
              background: 'rgba(245, 166, 35, 0.1)',
              border: '1px solid rgba(245, 166, 35, 0.3)',
              borderRadius: '100px',
              fontSize: '0.85rem',
              color: '#ffbe4d',
              marginBottom: '2rem',
              fontFamily: 'DM Sans',
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                background: '#14b8a6',
                borderRadius: '50%',
                animation: 'pulse 2s infinite',
              }}
            />
            Available for freelance work
          </div>

          <h1
            style={{
              fontFamily: 'Sora, sans-serif',
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
              marginBottom: '1.5rem',
            }}
          >
            Hi, I'm Shivam
            <br />
            <span
              style={{
                background: 'linear-gradient(135deg, #f5a623, #14b8a6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Rathore.
            </span>
          </h1>

          <div
            style={{
              fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
              marginBottom: '1.5rem',
              fontFamily: 'Sora, sans-serif',
              fontWeight: 600,
              color: '#e8eaed',
            }}
          >
            <TypeAnimation
              sequence={[
                'MERN Stack Developer',
                2000,
                'Data Science Student',
                2000,
                'Problem Solver',
                2000,
              ]}
              repeat={Infinity}
              style={{ color: '#14b8a6' }}
            />
          </div>

          <p
            style={{
              maxWidth: 560,
              marginBottom: '2.5rem',
              color: '#9aa4b2',
              fontSize: '1.05rem',
              lineHeight: 1.7,
            }}
          >
            B.Tech CSE (Data Science) student building modern web applications that
            combine clean code with intelligent, data-driven features. Currently
            looking for opportunities to turn ideas into real products.
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
            <a href="#projects" className="btn btn-primary">
              View My Work →
            </a>
            <a href="#contact" className="btn btn-secondary">
              Let's Talk
            </a>
          </div>

          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
            <span style={{ fontSize: '0.85rem', color: '#9aa4b2' }}>Find me on</span>
            <a
              href="https://github.com/shivamrathore"
              target="_blank"
              rel="noreferrer"
              style={{
                color: '#9aa4b2',
                fontSize: '1.3rem',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#f5a623')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#9aa4b2')}
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/shivamrathore"
              target="_blank"
              rel="noreferrer"
              style={{
                color: '#9aa4b2',
                fontSize: '1.3rem',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#f5a623')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#9aa4b2')}
            >
              <FaLinkedin />
            </a>
          </div>
        </motion.div>

        {/* RIGHT — Profile card (avatar + stats) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{ position: 'relative' }}
        >
          <div
            className="card"
            style={{
              padding: '2rem',
              textAlign: 'center',
              background:
                'linear-gradient(145deg, rgba(245, 166, 35, 0.08), rgba(20, 184, 166, 0.05))',
            }}
          >
            {/* Avatar */}
            <div
              style={{
                width: 140,
                height: 140,
                margin: '0 auto 1.5rem',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #f5a623, #14b8a6)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '3.5rem',
                fontWeight: 800,
                color: '#0f1419',
                fontFamily: 'Sora, sans-serif',
                border: '4px solid #1e2732',
                boxShadow: '0 12px 32px rgba(245, 166, 35, 0.3)',
              }}
            >
              SR
            </div>

            <h3
              style={{
                fontFamily: 'Sora, sans-serif',
                fontSize: '1.4rem',
                marginBottom: '0.4rem',
              }}
            >
              Shivam Rathore
            </h3>
            <p style={{ color: '#9aa4b2', fontSize: '0.9rem', marginBottom: '2rem' }}>
              Full Stack Developer
            </p>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '1rem',
                paddingTop: '1.5rem',
                borderTop: '1px solid #2a3442',
              }}
            >
              <div>
                <div
                  style={{
                    fontFamily: 'Sora, sans-serif',
                    fontSize: '1.8rem',
                    fontWeight: 700,
                    color: '#f5a623',
                  }}
                >
                  5+
                </div>
                <div style={{ fontSize: '0.75rem', color: '#9aa4b2' }}>Projects Built</div>
              </div>
              <div>
                <div
                  style={{
                    fontFamily: 'Sora, sans-serif',
                    fontSize: '1.8rem',
                    fontWeight: 700,
                    color: '#14b8a6',
                  }}
                >
                  2+
                </div>
                <div style={{ fontSize: '0.75rem', color: '#9aa4b2' }}>Years Learning</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}