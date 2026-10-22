import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa';
import axios from 'axios';

export default function Contact() {
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/contact', form);
      setSent(true);
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => {
        setSent(false);
        setShowForm(false);
      }, 2500);
    } catch {
      alert('Something went wrong. Please try again.');
    }
  };

  const contactInfo = [
    { icon: FaEnvelope, label: 'Email', value: 'srathore4882@email.com', color: '#f5a623' },
    { icon: FaPhone, label: 'Phone', value: '+91 96672 59929', color: '#14b8a6' },
    { icon: FaMapMarkerAlt, label: 'Location', value: 'India', color: '#f5a623' },
  ];

  const inputStyle = {
    width: '100%',
    padding: '14px 16px',
    background: '#1a2129',
    border: '1px solid #2a3442',
    borderRadius: '10px',
    color: '#e8eaed',
    fontSize: '0.95rem',
    outline: 'none',
    fontFamily: 'DM Sans, sans-serif',
    transition: 'border-color 0.2s',
  };

  return (
    <section id="contact" style={{ position: 'relative', paddingBottom: '80px' }}>
      <div className="orb orb-amber" style={{ width: 400, height: 400, top: 0, right: -100 }} />

      <div style={{ maxWidth: 1000, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div className="section-label">Get In Touch</div>
        <h2>
          Let's build something <span className="accent">together</span>
        </h2>

        <p
          style={{
            color: '#9aa4b2',
            maxWidth: 600,
            marginBottom: '3rem',
            fontSize: '1.05rem',
          }}
        >
          Have a project in mind or just want to say hi? I'm always open to discussing
          new opportunities and creative ideas.
        </p>

        {/* ─── REVEAL AREA ─── */}
        <div
          style={{
            position: 'relative',
            minHeight: 480,
            perspective: '1200px',
          }}
        >
          <AnimatePresence mode="wait">
            {/* STATE 1: CTA Card with contact info */}
            {!showForm && (
              <motion.div
                key="cta"
                initial={{ opacity: 0, rotateY: -90 }}
                animate={{ opacity: 1, rotateY: 0 }}
                exit={{ opacity: 0, rotateY: 90 }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
                style={{
                  background: 'linear-gradient(145deg, #1e2732, #1a2129)',
                  border: '1px solid #2a3442',
                  borderRadius: 24,
                  padding: '3rem',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                  gap: '2rem',
                  alignItems: 'center',
                  transformStyle: 'preserve-3d',
                }}
              >
                {/* Left: contact details with staggered animation */}
                <div>
                  <h3
                    style={{
                      fontFamily: 'Sora, sans-serif',
                      fontSize: '1.5rem',
                      marginBottom: '2rem',
                      color: '#e8eaed',
                    }}
                  >
                    Contact Details
                  </h3>

                  {contactInfo.map((c, i) => {
                    const Icon = c.icon;
                    return (
                      <motion.div
                        key={c.label}
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + i * 0.15, duration: 0.5 }}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '1rem',
                          marginBottom: '1.5rem',
                        }}
                      >
                        <div
                          style={{
                            width: 44,
                            height: 44,
                            borderRadius: 12,
                            background: `${c.color}15`,
                            border: `1px solid ${c.color}40`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: c.color,
                            fontSize: '1rem',
                            flexShrink: 0,
                          }}
                        >
                          <Icon />
                        </div>
                        <div>
                          <div
                            style={{
                              fontSize: '0.75rem',
                              color: '#9aa4b2',
                              textTransform: 'uppercase',
                              letterSpacing: '1px',
                              fontWeight: 600,
                            }}
                          >
                            {c.label}
                          </div>
                          <div style={{ color: '#e8eaed', fontSize: '0.95rem' }}>
                            {c.value}
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9 }}
                    style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}
                  >
                    <a
                      href="https://github.com/shivamrathore"
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: 10,
                        background: '#1a2129',
                        border: '1px solid #2a3442',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#9aa4b2',
                        textDecoration: 'none',
                        transition: 'all 0.2s',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = '#f5a623';
                        e.currentTarget.style.borderColor = '#f5a623';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = '#9aa4b2';
                        e.currentTarget.style.borderColor = '#2a3442';
                      }}
                    >
                      <FaGithub />
                    </a>
                    <a
                      href="https://linkedin.com/in/shivamrathore"
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: 10,
                        background: '#1a2129',
                        border: '1px solid #2a3442',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#9aa4b2',
                        textDecoration: 'none',
                        transition: 'all 0.2s',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = '#14b8a6';
                        e.currentTarget.style.borderColor = '#14b8a6';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = '#9aa4b2';
                        e.currentTarget.style.borderColor = '#2a3442';
                      }}
                    >
                      <FaLinkedin />
                    </a>
                  </motion.div>
                </div>

                {/* Right: CTA button */}
                <div style={{ textAlign: 'center' }}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                  >
                    <div
                      style={{
                        width: 80,
                        height: 80,
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #f5a623, #14b8a6)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '2rem',
                        margin: '0 auto 1.5rem',
                        boxShadow: '0 12px 40px rgba(245, 166, 35, 0.3)',
                      }}
                    >
                      ✉️
                    </div>
                    <p
                      style={{
                        color: '#9aa4b2',
                        fontSize: '0.95rem',
                        marginBottom: '1.5rem',
                      }}
                    >
                      Prefer to write a message?
                    </p>
                    <button
                      onClick={() => setShowForm(true)}
                      className="btn btn-primary"
                      style={{ fontSize: '1rem' }}
                    >
                      Start a Conversation →
                    </button>
                  </motion.div>
                </div>
              </motion.div>
            )}

            {/* STATE 2: The form (flip reveal) */}
            {showForm && (
              <motion.div
                key="form"
                initial={{ opacity: 0, rotateY: 90 }}
                animate={{ opacity: 1, rotateY: 0 }}
                exit={{ opacity: 0, rotateY: -90 }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
                style={{
                  background: 'linear-gradient(145deg, #1e2732, #1a2129)',
                  border: '1px solid #2a3442',
                  borderRadius: 24,
                  padding: '3rem',
                  transformStyle: 'preserve-3d',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '2rem',
                  }}
                >
                  <h3
                    style={{
                      fontFamily: 'Sora, sans-serif',
                      fontSize: '1.5rem',
                      color: '#e8eaed',
                    }}
                  >
                    Send a Message
                  </h3>
                  <button
                    onClick={() => setShowForm(false)}
                    style={{
                      background: 'transparent',
                      border: '1px solid #2a3442',
                      color: '#9aa4b2',
                      padding: '6px 14px',
                      borderRadius: 8,
                      cursor: 'pointer',
                      fontSize: '0.85rem',
                      fontFamily: 'DM Sans, sans-serif',
                    }}
                  >
                    ← Back
                  </button>
                </div>

                <form
                  onSubmit={handleSubmit}
                  style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}
                >
                  {['name', 'email'].map((field, i) => (
                    <motion.div
                      key={field}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + i * 0.1 }}
                    >
                      <label
                        style={{
                          display: 'block',
                          fontSize: '0.8rem',
                          color: '#9aa4b2',
                          marginBottom: '0.4rem',
                          textTransform: 'capitalize',
                          fontWeight: 600,
                          letterSpacing: '0.5px',
                        }}
                      >
                        Your {field}
                      </label>
                      <input
                        required
                        type={field === 'email' ? 'email' : 'text'}
                        placeholder={field === 'email' ? 'you@example.com' : 'John Doe'}
                        value={form[field]}
                        onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                        style={inputStyle}
                        onFocus={(e) => (e.target.style.borderColor = '#f5a623')}
                        onBlur={(e) => (e.target.style.borderColor = '#2a3442')}
                      />
                    </motion.div>
                  ))}

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <label
                      style={{
                        display: 'block',
                        fontSize: '0.8rem',
                        color: '#9aa4b2',
                        marginBottom: '0.4rem',
                        fontWeight: 600,
                        letterSpacing: '0.5px',
                      }}
                    >
                      Your Message
                    </label>
                    <textarea
                      required
                      placeholder="Tell me about your project or idea..."
                      rows="4"
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      style={{ ...inputStyle, resize: 'vertical', minHeight: 120 }}
                      onFocus={(e) => (e.target.style.borderColor = '#f5a623')}
                      onBlur={(e) => (e.target.style.borderColor = '#2a3442')}
                    />
                  </motion.div>

                  <motion.button
                    type="submit"
                    className="btn btn-primary"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    style={{ marginTop: '0.5rem', justifyContent: 'center' }}
                  >
                    {sent ? '✅ Message Sent!' : 'Send Message →'}
                  </motion.button>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <p
          style={{
            textAlign: 'center',
            marginTop: '4rem',
            color: '#9aa4b2',
            fontSize: '0.85rem',
          }}
        >
          © {new Date().getFullYear()} Shivam Rathore · Built with React & MERN
        </p>
      </div>
    </section>
  );
}