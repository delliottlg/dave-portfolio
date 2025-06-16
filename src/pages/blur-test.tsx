import { useEffect, useState } from 'react';

export default function BlurTest() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <style jsx>{`
        .container {
          min-height: 100vh;
          background: linear-gradient(to bottom right, #0f0f1b, #111118);
          padding: 3rem;
        }
        .card {
          background-color: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          width: 20rem;
          padding: 2rem;
          border-radius: 1rem;
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: white;
        }
      `}</style>
      <div className="container">
        <div className="card">
          <h2>Blur Test</h2>
          <p>If you see a frosted glass effect, backdrop-filter is working!</p>
        </div>
      </div>
    </>
  );
}