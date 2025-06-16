export default function InlineBlur() {
  return (
    <div 
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(to bottom right, #0f0f1b, #111118)',
        padding: '3rem'
      }}
    >
      <div 
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          width: '16rem',
          height: '8rem',
          borderRadius: '1rem',
          padding: '1rem',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }}
      >
        <span style={{ color: 'white' }}>Inline styles blur test</span>
      </div>
    </div>
  );
}