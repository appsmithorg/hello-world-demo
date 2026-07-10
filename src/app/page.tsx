export default function Home() {
  return (
    <main
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
        margin: 0,
        padding: '2rem',
        boxSizing: 'border-box',
      }}
    >
      <h1
        style={{
          fontSize: 'clamp(2.5rem, 8vw, 5rem)',
          fontWeight: 700,
          color: '#0f172a',
          letterSpacing: '-0.03em',
          margin: 0,
          textAlign: 'center',
        }}
      >
        Hello, World!
      </h1>
      <p
        style={{
          marginTop: '1.25rem',
          fontSize: '1.125rem',
          color: '#64748b',
          textAlign: 'center',
          maxWidth: '400px',
        }}
      >
        A simple demo site built with Next.js &amp; Kite.
      </p>
    </main>
  )
}
