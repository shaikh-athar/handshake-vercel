const focusAreas = [
  { number: "01", title: "Backend engineering", text: "Designing dependable systems and services that scale with real-world needs." },
  { number: "02", title: "Java development", text: "Building software applications with a strong foundation in Java and practical engineering." },
  { number: "03", title: "GenAI solutions", text: "Exploring useful AI-powered products, automation, and developer tools." },
]

export default function Page() {
  return (
    <main className="portfolio-shell" id="top">
      <nav className="nav-bar" aria-label="Primary navigation">
        <a className="wordmark" href="#top" aria-label="Athar Shaikh home">AS<span>.</span></a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#focus">Focus</a>
          <a className="nav-contact" href="https://www.linkedin.com/in/athar-shaikh/" target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
        </div>
      </nav>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-line" aria-hidden="true" /> Software developer</p>
          <h1 id="hero-title">Athar<br /><em>Shaikh</em></h1>
          <p className="hero-role">Java, Backend Engineering <span>&amp;</span> GenAI</p>
          <p className="hero-lede">I build software applications and backend systems, with experience across healthcare, fintech, and AI-powered solutions.</p>
          <div className="hero-actions">
            <a className="primary-button" href="https://www.linkedin.com/in/athar-shaikh/" target="_blank" rel="noreferrer">Connect on LinkedIn <span aria-hidden="true">↗</span></a>
            <a className="text-link" href="#about">More about me <span aria-hidden="true">↓</span></a>
          </div>
        </div>

        <div className="hero-art" aria-hidden="true">
          <div className="art-grid" />
          <div className="art-orbit orbit-one" />
          <div className="art-orbit orbit-two" />
          <div className="art-orbit orbit-three" />
          <div className="art-core">AS</div>
          <span className="art-label label-top">BUILD / SHIP / LEARN</span>
          <span className="art-label label-bottom">BACKEND · AI · SYSTEMS</span>
        </div>
      </section>

      <section className="about-section" id="about" aria-labelledby="about-title">
        <div className="section-kicker"><span>01</span> About</div>
        <div className="about-content">
          <h2 id="about-title">Building useful things<br /><span>with thoughtful systems.</span></h2>
          <p>I'm interested in scalable architectures, automation, and building practical developer tools. My work sits where solid engineering meets new possibilities in AI.</p>
        </div>
      </section>

      <section className="focus-section" id="focus" aria-labelledby="focus-title">
        <div className="focus-header"><div className="section-kicker"><span>02</span> What I do</div><h2 id="focus-title">Areas of focus</h2></div>
        <div className="focus-grid">
          {focusAreas.map((area) => (
            <article className="focus-card" key={area.number}>
              <span className="focus-number">{area.number}</span>
              <span className={`focus-icon focus-icon-${area.number}`} aria-hidden="true">
                <span />
                <span />
                <span />
              </span>
              <h3>{area.title}</h3>
              <p>{area.text}</p>
              <span className="card-arrow" aria-hidden="true">↗</span>
            </article>
          ))}
        </div>
      </section>

      <footer className="footer">
        <div><span className="footer-mark">AS<span>.</span></span><span className="footer-note">Software Developer</span></div>
        <a href="https://www.linkedin.com/in/athar-shaikh/" target="_blank" rel="noreferrer">Let's connect <span aria-hidden="true">↗</span></a>
      </footer>
    </main>
  )
}
