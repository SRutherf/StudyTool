function App() {
  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'grid',
        placeItems: 'center',
        background: '#111827',
        color: 'white',
        padding: '24px',
        textAlign: 'center',
      }}
    >
      <div>
        <h1 style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>
          Study Tool PWA
        </h1>
        <p style={{ fontSize: '1.1rem', opacity: 0.9 }}>
          Hello world. If this installs on iPhone, the setup works.
        </p>
      </div>
    </main>
  )
}

export default App