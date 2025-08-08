export default function Home() {
  return (
    <main style={{ padding: '4rem 1rem', maxWidth: 900, margin: '0 auto' }}>
      <h1 style={{ marginBottom: 8 }}>Nathan Mukku</h1>
      <p style={{ opacity: 0.8 }}>Software Engineer · Portfolio</p>

      <section style={{ marginTop: 32 }}>
        <h2>About</h2>
        <p>
          Welcome to my portfolio. I’m preparing content for projects, accomplishments, and credentials.
        </p>
      </section>

      <section style={{ marginTop: 32 }}>
        <h2>Projects</h2>
        <ul>
          <li>
            South Park landing page demo — <a href="/southpark">/southpark</a>
          </li>
        </ul>
      </section>
    </main>
  )
}
