export default function ParticlesBg() {
  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 0, overflow: 'hidden', pointerEvents: 'none'
    }}>
      {[...Array(30)].map((_, i) => (
        <div key={i} style={{
          position: 'absolute',
          width: '3px', height: '3px',
          borderRadius: '50%',
          background: i % 2 ? '#00f5ff' : '#a855f7',
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          boxShadow: `0 0 10px ${i % 2 ? '#00f5ff' : '#a855f7'}`,
          animation: `float ${5 + Math.random() * 10}s linear infinite`,
          opacity: 0.5
        }} />
      ))}
      <style>{`
        @keyframes float {
          from { transform: translateY(0); }
          to { transform: translateY(-100vh); }
        }
      `}</style>
    </div>
  );
}