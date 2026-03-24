import React, { useState, useEffect } from 'react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
    setActiveSection(id);
  };

  const navProgress = Math.min(scrollY / (document.body.scrollHeight - window.innerHeight || 1), 1);

  const skillCategories = [
    {
      label: 'Languages',
      icon: '💻',
      skills: ['Java', 'JavaScript', 'Python', 'C++', 'PHP'],
    },
    {
      label: 'Frontend',
      icon: '🎨',
      skills: ['React.js', 'HTML5', 'CSS3', 'Bootstrap', 'Tailwind CSS'],
    },
    {
      label: 'Backend',
      icon: '⚙️',
      skills: ['Node.js', 'Express.js', 'Spring Boot'],
    },
    {
      label: 'Databases',
      icon: '🗄️',
      skills: ['MySQL', 'MongoDB', 'PostgreSQL', 'Firebase', 'SQLite'],
    },
    {
      label: 'Tools',
      icon: '🛠️',
      skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Docker'],
    },
    {
      label: 'Concepts',
      icon: '📐',
      skills: ['REST APIs', 'OOP', 'MVC', 'Agile', 'AJAX'],
    },
  ];

  const projects = [
    {
      title: 'SithaMithuru',
      subtitle: 'AI-Powered Elder Care App',
      status: 'Ongoing',
      desc: 'Real client project: AI-powered mobile application supporting elderly users and their guardians with emergency detection, medication reminders, and offline-first architecture.',
      tags: ['React Native', 'Node.js', 'Firebase', 'SQLite', 'TensorFlow Lite', 'Python'],
      icon: '🧓',
      highlights: [
        'On-device emergency keyword detection via TensorFlow Lite',
        'Offline-first architecture with Firebase synchronization',
        'Medication reminder and monitoring features',
      ],
    },
    {
      title: 'TalkGov',
      subtitle: 'Government Services Portal',
      status: null,
      desc: 'Centralized web portal providing information about Sri Lankan government services, with an AI-powered chatbot for navigation assistance.',
      tags: ['Python (Django)', 'JavaScript'],
      icon: '🏛️',
      highlights: [
        'Displayed required documents, fees, timelines, and office locations',
        'AI-powered chatbot for user assistance',
      ],
    },
    {
      title: 'Melody Masters',
      subtitle: 'Music E-Commerce Platform',
      status: null,
      desc: 'Full-featured e-commerce platform for selling musical instruments online with secure admin dashboard.',
      tags: ['PHP', 'MySQL'],
      icon: '🎸',
      highlights: [
        'Complete product and order management system',
        'Secure admin dashboard',
      ],
    },
    {
      title: 'Campus Lost & Found',
      subtitle: 'Mobile Application',
      status: null,
      desc: 'Mobile app helping students report and recover lost items within the campus with posting, categorization, and communication features.',
      tags: ['Flutter (Dart)', 'Supabase'],
      icon: '📱',
      highlights: [
        'Posting system with images and details',
        'Categorized listing for easy browsing',
        'Connect and claim recovered items',
      ],
    },
  ];

  return (
    <div className="app">
      {/* Scroll Progress Bar */}
      <div className="progress-bar" style={{ transform: `scaleX(${navProgress})` }} />

      {/* Navbar */}
      <nav className={`navbar ${scrollY > 50 ? 'navbar-scrolled' : ''}`}>
        <div className="nav-logo" onClick={() => scrollTo('home')}>
          <span className="accent">D</span>enethmi<span className="accent">.</span>
        </div>
        <div className="nav-links">
          {['home', 'about', 'skills', 'projects', 'education', 'contact'].map((s) => (
            <button
              key={s}
              onClick={() => scrollTo(s)}
              className={activeSection === s ? 'nav-btn active' : 'nav-btn'}
            >
              {s.charAt(0).toUpperCase() + s.slice(1)}
            </button>
          ))}
        </div>
        <button className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>
      </nav>

      {isMenuOpen && (
        <div className="mobile-menu">
          {['home', 'about', 'skills', 'projects', 'education', 'contact'].map((s) => (
            <button key={s} onClick={() => scrollTo(s)} className="mobile-nav-btn">
              {s.charAt(0).toUpperCase() + s.slice(1)}
            </button>
          ))}
        </div>
      )}

      {/* ─── HERO ─── */}
      <section id="home" className="hero">
        <div className="hero-bg-dots" />
        <div className="hero-glow" />
        <div className="container hero-inner">
          {/* Left: Text */}
          <div className="hero-text" style={{ position: 'relative', zIndex: 1 }}>
            <div className="badge">👋 Available for Internships</div>
            <h1 className="hero-title">
              Hi, I'm <span className="accent">Denethmi</span><br />
              <span className="gradient-text">Ranasinghe.</span>
            </h1>
            <p className="hero-role">Software Engineering Undergraduate · CINEC Campus</p>
            <p className="hero-sub">
              Full-stack developer skilled in React.js, Node.js, Flutter &amp; modern databases.
              Passionate about building user-focused, scalable applications.
            </p>
            <div className="hero-actions">
              <button className="btn-primary" onClick={() => scrollTo('projects')}>
                View Projects <span className="arrow">→</span>
              </button>
              <button className="btn-outline" onClick={() => scrollTo('contact')}>
                Contact Me
              </button>
            </div>
            <div className="hero-socials">
              <a
                href="https://github.com/denethmiranasinghe"
                target="_blank"
                rel="noreferrer"
                className="social-icon"
                aria-label="GitHub"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" /></svg>
              </a>
              <a
                href="https://www.linkedin.com/in/denethmi-ranasinghe-800149338/"
                target="_blank"
                rel="noreferrer"
                className="social-icon"
                aria-label="LinkedIn"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
              </a>
              <a href="mailto:denethmi@example.com" className="social-icon" aria-label="Email">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
              </a>
            </div>
          </div>
          {/* Right: Photo */}
          <div className="hero-photo-wrap">
            <div className="hero-photo-ring">
              <div className="hero-photo-inner">
                <img src="/profile.jpg" alt="Denethmi Ranasinghe" className="hero-photo" />
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="scroll-dot" />
        </div>
      </section>

      {/* ─── ABOUT ─── */}
      <section id="about" className="section alt-section">
        <div className="container about-grid">
          <div className="about-info">
            <span className="section-label">About Me</span>
            <h2 className="section-title">Who I Am</h2>
            <p className="about-text">
              I'm a <strong>motivated Software Engineering undergraduate</strong> at CINEC Campus with hands-on
              experience in full-stack development. I build responsive web and mobile applications
              using <strong>React.js, Node.js, Flutter</strong>, and modern databases.
            </p>
            <p className="about-text">
              Experienced in developing <strong>RESTful APIs</strong>, implementing CRUD operations, and working
              on real-world projects. Passionate about problem-solving, clean code practices, and
              delivering user-focused solutions.
            </p>
            <p className="about-text">
              I'm actively seeking a <strong>Full Stack Developer internship</strong> to apply and grow my
              technical skills in a professional environment.
            </p>
            <div className="about-stats">
              <div className="stat">
                <span className="stat-val accent">4+</span>
                <span className="stat-label">Projects</span>
              </div>
              <div className="stat">
                <span className="stat-val accent">3+</span>
                <span className="stat-label">Certifications</span>
              </div>
              <div className="stat">
                <span className="stat-val accent">2</span>
                <span className="stat-label">IEEE Member</span>
              </div>
            </div>
          </div>
          <div className="about-achievements glass-card">
            <h3 className="about-card-title">🏆 Achievements</h3>
            <ul className="achievement-list">
              <li>
                <span className="ach-icon">🥇</span>
                <div>
                  <strong>CodeRally 6.0 Hackathon</strong>
                  <p>Intermediate Tier — IEEE Computer Society, IIT</p>
                </div>
              </li>
              <li>
                <span className="ach-icon">📜</span>
                <div>
                  <strong>Python for Beginners</strong>
                  <p>University of Moratuwa</p>
                </div>
              </li>
              <li>
                <span className="ach-icon">📜</span>
                <div>
                  <strong>Front-End Web Development</strong>
                  <p>University of Moratuwa</p>
                </div>
              </li>
              <li>
                <span className="ach-icon">📜</span>
                <div>
                  <strong>Web Design for Beginners</strong>
                  <p>University of Moratuwa</p>
                </div>
              </li>
              <li>
                <span className="ach-icon">🔌</span>
                <div>
                  <strong>IEEE Member</strong>
                  <p>IEEE CINEC Student Branch — 2026</p>
                </div>
              </li>
              <li>
                <span className="ach-icon">🎨</span>
                <div>
                  <strong>Graphic Designing Pillar Member</strong>
                  <p>CINEC Student Media Circle — 2026</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ─── SKILLS ─── */}
      <section id="skills" className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Expertise</span>
            <h2 className="section-title">Technical Skills</h2>
            <p className="section-sub">Technologies I work with across the full development stack.</p>
          </div>
          <div className="skills-grid">
            {skillCategories.map((cat) => (
              <div key={cat.label} className="skill-card">
                <div className="skill-card-header">
                  <span className="skill-icon">{cat.icon}</span>
                  <span className="skill-cat-name">{cat.label}</span>
                </div>
                <div className="skill-pills">
                  {cat.skills.map((s) => (
                    <span key={s} className="skill-pill">{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROJECTS ─── */}
      <section id="projects" className="section alt-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Portfolio</span>
            <h2 className="section-title">Projects</h2>
            <p className="section-sub">Real-world applications I've built from scratch.</p>
          </div>
          <div className="projects-grid">
            {projects.map((p) => (
              <div key={p.title} className="project-card">
                <div className="project-card-top">
                  <span className="project-icon">{p.icon}</span>
                  {p.status && <span className="project-status">{p.status}</span>}
                </div>
                <h3>{p.title}</h3>
                <p className="project-subtitle">{p.subtitle}</p>
                <p className="project-desc">{p.desc}</p>
                <ul className="project-highlights">
                  {p.highlights.map((h) => (
                    <li key={h}><span className="hi-dot">▸</span>{h}</li>
                  ))}
                </ul>
                <div className="tags">
                  {p.tags.map((t) => <span key={t} className="tag">{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── EDUCATION ─── */}
      <section id="education" className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Background</span>
            <h2 className="section-title">Education</h2>
          </div>
          <div className="education-list">
            <div className="edu-card">
              <div className="edu-icon-wrap">🎓</div>
              <div className="edu-info">
                <span className="edu-period">2023 – Present</span>
                <h3>BSc (Hons) in Software Engineering</h3>
                <p>CINEC Campus, Sri Lanka</p>
                <span className="edu-badge">Expected Graduation: 2027</span>
              </div>
            </div>
            <div className="edu-card">
              <div className="edu-icon-wrap">📋</div>
              <div className="edu-info">
                <span className="edu-period">Completed</span>
                <h3>Diploma in Information Technology</h3>
                <p>ESOFT Metro Campus, Sri Lanka</p>
              </div>
            </div>
            <div className="edu-card">
              <div className="edu-icon-wrap">🗣️</div>
              <div className="edu-info">
                <span className="edu-period">Completed</span>
                <h3>Diploma in English</h3>
                <p>ESOFT Metro Campus, Sri Lanka</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CONTACT ─── */}
      <section id="contact" className="section alt-section">
        <div className="container">
          <div className="contact-box glass-card">
            <span className="section-label">Contact</span>
            <h2 className="section-title">
              Let's Build Something<br /><span className="accent">Amazing</span> Together.
            </h2>
            <p className="section-sub" style={{ margin: '1rem auto 2.5rem', maxWidth: '480px' }}>
              I'm open to internship opportunities, collaborations, or just a friendly chat about tech!
            </p>
            <div className="contact-actions">
              <a
                href="https://www.linkedin.com/in/denethmi-ranasinghe-800149338/"
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                LinkedIn Profile
              </a>
              <a
                href="https://github.com/denethmiranasinghe"
                target="_blank"
                rel="noreferrer"
                className="btn-outline"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" /></svg>
                GitHub Profile
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="footer">
        <div className="container footer-inner">
          <span className="footer-logo"><span className="accent">D</span>enethmi Ranasinghe<span className="accent">.</span></span>
          <p>© 2024 · Software Engineering Undergraduate · CINEC Campus</p>
          <div className="footer-links">
            <a href="https://github.com/denethmiranasinghe" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/denethmi-ranasinghe-800149338/" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
