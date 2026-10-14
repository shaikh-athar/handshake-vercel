const features = [
  { number: "01", title: "Organize tasks", text: "Keep daily work in one clear, focused workspace." },
  { number: "02", title: "Set deadlines", text: "Make important dates visible before they become urgent." },
  { number: "03", title: "Track progress", text: "See what is moving forward and what needs attention." },
]

export default function Page() {
  return (
    <main className="site-shell">
      <nav className="nav-bar" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="TaskFlow home">
          <span className="brand-mark" aria-hidden="true"><span /><span /></span>
          <span>TaskFlow</span>
        </a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#features">How it works</a>
          <a className="nav-cta" href="https://example.com/taskflow" target="_blank" rel="noreferrer">See TaskFlow <span aria-hidden="true">↗</span></a>
        </div>
      </nav>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-dot" aria-hidden="true" /> Smart task management</p>
          <h1 id="hero-title">Make space for<br /><em>what matters.</em></h1>
          <p className="hero-lede">TaskFlow helps you organize tasks, set deadlines, and track your progress in one place — so your work stays clear and your focus stays yours.</p>
          <div className="hero-actions">
            <a className="primary-button" href="https://example.com/taskflow" target="_blank" rel="noreferrer">Explore TaskFlow <span aria-hidden="true">↗</span></a>
            <a className="text-link" href="#features">See how it works <span aria-hidden="true">↓</span></a>
          </div>
        </div>

        <div className="dashboard-card" aria-label="TaskFlow dashboard preview">
          <div className="dashboard-topline"><span>My workspace</span><span className="dashboard-status"><i /> On track</span></div>
          <div className="dashboard-heading"><div><p className="muted-label">Tuesday, October 14</p><h2>Good morning</h2></div><span className="avatar">AM</span></div>
          <div className="progress-row"><div><span>Weekly progress</span><strong>72%</strong></div><div className="progress-track"><span /></div></div>
          <div className="task-list">
            <div className="task-list-head"><span>Today&apos;s focus</span><span>3 tasks</span></div>
            <div className="task-item done"><span className="check">✓</span><span>Review product brief</span><b>Done</b></div>
            <div className="task-item"><span className="check" /><span>Plan next sprint</span><b>2:00 PM</b></div>
            <div className="task-item"><span className="check" /><span>Share project update</span><b>4:30 PM</b></div>
          </div>
          <div className="dashboard-footer"><span className="mini-bars"><i /><i /><i /><i /><i /></span><span>Progress, at a glance</span></div>
        </div>
      </section>

      <section className="intro-band" id="about" aria-labelledby="about-title">
        <p className="section-kicker">A calmer way to get things done</p>
        <div className="intro-content"><h2 id="about-title">Your work has a lot going on.<br /><span>TaskFlow keeps it together.</span></h2><p>TaskFlow is a simple productivity application for managing daily work, staying focused on priorities, and avoiding missed deadlines.</p></div>
      </section>

      <section className="features-section" id="features" aria-labelledby="features-title">
        <div className="features-header"><p className="section-kicker">Everything in one place</p><h2 id="features-title">Built for forward motion.</h2></div>
        <div className="feature-grid">{features.map((feature) => <article className="feature-card" key={feature.number}><span className="feature-number">{feature.number}</span><h3>{feature.title}</h3><p>{feature.text}</p><span className="feature-arrow" aria-hidden="true">↗</span></article>)}</div>
      </section>

      <footer className="footer"><div className="footer-brand"><span className="brand-mark" aria-hidden="true"><span /><span /></span><span>TaskFlow</span></div><p>Made by Alex Morgan, Priya Sharma, and Daniel Lee.</p><a href="https://example.com/taskflow" target="_blank" rel="noreferrer">See the project <span aria-hidden="true">↗</span></a></footer>
    </main>
  )
}
