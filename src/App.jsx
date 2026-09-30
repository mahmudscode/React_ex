import { useState } from 'react'
import './App.css'

const projects = [
  { number: '01', type: 'Product design / 2024', title: 'Sonder Finance', description: 'A calmer way for independent teams to understand their money.', className: 'project-sage', tags: ['Strategy', 'UX/UI', 'Development'] },
  { number: '02', type: 'Brand world / 2023', title: 'Morrow Studio', description: 'A warm, tactile identity for a new kind of creative practice.', className: 'project-coral', tags: ['Identity', 'Art direction', 'Web design'] },
  { number: '03', type: 'Digital experience / 2023', title: 'Field Notes', description: 'Turning a growing archive of places into something worth exploring.', className: 'project-blue', tags: ['Concept', 'Interaction', 'Front-end'] },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" onClick={closeMenu} aria-label="Alex Morgan home"><span className="brand-mark">AM</span><span>Alex Morgan</span></a>
        <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="site-navigation" onClick={() => setMenuOpen((isOpen) => !isOpen)}>
          <span>{menuOpen ? 'Close' : 'Menu'}</span><span className="menu-icon" aria-hidden="true"><i></i><i></i></span>
        </button>
        <nav id="site-navigation" className={menuOpen ? 'site-nav is-open' : 'site-nav'} aria-label="Main navigation">
          <a href="#work" onClick={closeMenu}>Work</a><a href="#about" onClick={closeMenu}>About</a><a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot"></span> Independent designer & developer</p>
            <h1>Digital work<br /><em>with feeling.</em></h1>
            <p className="hero-intro">I help thoughtful brands and ambitious teams turn big ideas into clear, memorable digital experiences.</p>
            <a className="text-link" href="#work">Explore selected work <span aria-hidden="true">↘</span></a>
          </div>
          <div className="hero-art" aria-label="Abstract portrait illustration" role="img">
            <div className="sun"></div><div className="portrait"><div className="portrait-hair"></div><div className="portrait-face"><span className="eye eye-left"></span><span className="eye eye-right"></span><span className="nose"></span><span className="mouth"></span></div><div className="portrait-shirt"></div></div>
            <span className="art-note note-one">curious<br />by default</span><span className="art-note note-two">est. 2018</span>
          </div>
        </section>

        <section className="ticker" aria-label="Services"><span>Brand systems</span><b>✳</b><span>Digital products</span><b>✳</b><span>Creative development</span><b>✳</b><span>Brand systems</span></section>

        <section className="work-section content-section" id="work">
          <div className="section-heading"><p className="eyebrow">A few things I have made</p><span className="section-count">(03)</span></div>
          <div className="projects-list">{projects.map((project) => <article className="project" key={project.number}>
            <div className={`project-visual ${project.className}`}><span className="project-number">{project.number}</span><div className="project-shape shape-one"></div><div className="project-shape shape-two"></div><div className="project-shape shape-three"></div><span className="visual-label">{project.title}</span></div>
            <div className="project-info"><p className="project-type">{project.type}</p><h2>{project.title}</h2><p>{project.description}</p><div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div>
            <a className="project-arrow" href="#contact" aria-label={`Learn more about ${project.title}`}>↗</a>
          </article>)}</div>
        </section>

        <section className="about-section content-section" id="about">
          <div className="section-heading"><p className="eyebrow">A little about me</p><span className="section-count">(04)</span></div>
          <div className="about-grid"><h2>I make space for<br /><em>good ideas.</em></h2><div className="about-copy"><p>I am Alex, a multidisciplinary designer and developer based in Copenhagen. I work across identity, interface and code to make digital things feel more human.</p><p>My process is collaborative, curious and just structured enough. The best work usually starts with a good question.</p><a className="text-link" href="mailto:hello@alexmorgan.design">Say hello <span aria-hidden="true">↗</span></a></div></div>
        </section>

        <section className="contact-section" id="contact"><p className="eyebrow">Have a good one?</p><h2>Let us make<br /><em>something matter.</em></h2><a className="contact-link" href="mailto:hello@alexmorgan.design">hello@alexmorgan.design <span aria-hidden="true">↗</span></a></section>
      </main>
      <footer><span>© 2024 Alex Morgan</span><span>Copenhagen / available worldwide</span><a href="#top">Back to top ↑</a></footer>
    </div>
  )
}

export default App
