import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Boxes, Check, Copy, Database, Github, KeyRound, Network, Route, Search, Server, ShieldCheck, Terminal, TestTube2, Workflow, Zap } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './styles.css';

gsap.registerPlugin(ScrollTrigger);

const tech = [
  ['Bun', Zap, 'Fast package installs and TypeScript runtime for generated services.'],
  ['Node.js', Server, 'The standard JavaScript runtime path for existing teams and libraries.'],
  ['TypeScript', ShieldCheck, 'Typed contracts across apps, APIs, workers, and SDKs.'],
  ['Docker', Boxes, 'Plain containers for every service, database, queue, and tool.'],
  ['Traefik', Route, 'Automatic local domains, routing, retries, and health-aware discovery.'],
  ['Tilt', Workflow, 'Selective startup and hot reload for only the services you touch.'],
  ['Prisma', Database, 'Generated database clients, migrations, and service data wiring.'],
  ['PostgreSQL', Database, 'Real relational state running locally from the first boot.'],
  ['NATS JetStream', Network, 'Queues and events included in the development loop.'],
  ['Infisical', KeyRound, 'Machine identities and secrets without onboarding spreadsheets.'],
  ['Playwright', TestTube2, 'End-to-end tests against the actual local topology.'],
  ['AGENTS.md', Terminal, 'A generated map for humans, Codex, Cursor, and Claude.']
];

const terminalLines = [
  '$ npm create tdk-stack@latest',
  'Need to install create-tdk-stack. Ok to proceed? yes',
  'What are you building? commerce',
  'Pick runtimes: Bun, Node.js',
  'Pick infrastructure: Docker, Traefik, Tilt',
  'Pick data: PostgreSQL, Prisma, NATS JetStream',
  'Pick safety: Infisical, Playwright, AGENTS.md',
  'Generated 4 services, 68 files, C4 diagrams, env contracts',
  'Ready in 4.6s'
];

function App() {
  const [copied, setCopied] = useState(false);
  const terminalRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-logo, .hero h1, .hero-copy, .hero-actions, .install-card', {
        y: 34,
        opacity: 0,
        duration: 0.85,
        stagger: 0.08,
        ease: 'power3.out'
      });
      gsap.from('.tech-card', {
        y: 28,
        opacity: 0,
        duration: 0.65,
        stagger: 0.045,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.tech-grid', start: 'top 82%' }
      });
      gsap.to('.word', {
        opacity: 1,
        y: 0,
        stagger: 0.035,
        ease: 'none',
        scrollTrigger: { trigger: '.manifesto', start: 'top 80%', end: 'bottom 48%', scrub: 0.55 }
      });
      ScrollTrigger.create({
        trigger: '.compact-demo',
        start: 'top 20%',
        end: 'bottom 95%',
        pin: '.demo-copy',
        pinSpacing: false
      });
    });
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const node = terminalRef.current;
    if (!node) return;
    node.innerHTML = '';
    let lineIndex = 0;
    let charIndex = 0;
    let row = document.createElement('div');
    row.className = 'terminal-line';
    node.appendChild(row);

    const timer = window.setInterval(() => {
      const line = terminalLines[lineIndex];
      row.textContent = line.slice(0, charIndex + 1);
      charIndex += 1;
      if (charIndex >= line.length) {
        lineIndex += 1;
        charIndex = 0;
        if (lineIndex >= terminalLines.length) {
          window.clearInterval(timer);
          return;
        }
        row = document.createElement('div');
        row.className = 'terminal-line';
        node.appendChild(row);
      }
    }, 24);

    return () => window.clearInterval(timer);
  }, []);

  const copyCommand = async () => {
    await navigator.clipboard.writeText('npm create tdk-stack@latest');
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1400);
  };

  const manifesto = 'Forge TDK does one thing: start a complete local microservice landscape without hiding the stack. Choose what you need, skip what you do not, and keep every generated file.';

  return (
    <main className="site-shell">
      <nav className="nav">
        <a className="brand" href="#top">Forge TDK</a>
        <div className="nav-links">
          <a href="#docs">Docs</a>
          <a href="#stack">Stack</a>
          <a href="#community">Community</a>
        </div>
        <a className="github-link" href="https://github.com/tdk-landscape/create-tdk-stack" target="_blank" rel="noreferrer"><Github size={20} /></a>
      </nav>

      <section className="hero" id="top">
        <div className="hero-logo"><Terminal size={54} /></div>
        <h1>The best way to start a local-first TDK stack</h1>
        <p className="hero-copy">A focused Create T3-style launcher for TDK CLI. It asks a few questions, then writes a runnable Bun, Node.js, Docker, Traefik, Tilt, Prisma, PostgreSQL, NATS, Infisical, and Playwright workspace.</p>
        <div className="hero-actions">
          <a className="button primary" href="#docs">Documentation</a>
          <a className="button secondary" href="https://github.com/tdk-landscape/create-tdk-stack" target="_blank" rel="noreferrer">GitHub</a>
        </div>
        <div className="install-card">
          <code>npm create tdk-stack@latest</code>
          <button onClick={copyCommand} aria-label="Copy install command">{copied ? <Check size={19} /> : <Copy size={19} />}</button>
        </div>
      </section>

      <section className="intro" id="docs">
        <div>
          <h2>Local from the start</h2>
          <p>We made Forge TDK to do one thing: streamline the setup of serious multi-service apps without compromising ownership, speed, or inspectability.</p>
          <p>This is not an all-inclusive platform. Bring your product code. Forge TDK gives you the local topology, generated contracts, routing, secrets, tests, docs, and service scaffolding.</p>
        </div>
        <div className="mini-terminal">
          <div><Search size={16} /> Pick only what you need</div>
          <span>frontend</span>
          <span>backend</span>
          <span>database</span>
          <span>queues</span>
          <span>secrets</span>
          <span>tests</span>
        </div>
      </section>

      <section className="stack-section" id="stack">
        <div className="stack-head">
          <h2>The best of the local microservice ecosystem...</h2>
          <h3>...but only the parts you need</h3>
          <p>Take what you want and nothing more.</p>
        </div>
        <div className="tech-grid">
          {tech.map(([name, Icon, copy]) => (
            <article className="tech-card" key={name}>
              <div className="tech-icon"><Icon size={28} /></div>
              <h4>{name}</h4>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="manifesto">
        <h2>{manifesto.split(' ').map((word, index) => <span className="word" key={`${word}-${index}`}>{word} </span>)}</h2>
      </section>

      <section className="compact-demo">
        <div className="demo-copy">
          <h2>What it generates</h2>
          <p>Service manifests, Dockerfiles, Vite and TypeScript config, Traefik routes, Tilt startup, Prisma setup, test wiring, C4 diagrams, and AGENTS.md.</p>
        </div>
        <div className="terminal">
          <div className="terminal-bar"><i /><i /><i /><span>create-tdk-stack</span></div>
          <div className="terminal-body" ref={terminalRef} />
        </div>
      </section>

      <section className="community" id="community">
        <h2>Community</h2>
        <p>Build the local stack generator with TDK Landscape. Ship useful services instead of setup rituals.</p>
        <div className="community-actions">
          <a className="button primary" href="https://github.com/tdk-landscape/create-tdk-stack" target="_blank" rel="noreferrer">Contribute</a>
          <a className="button secondary" href="https://github.com/tdk-landscape" target="_blank" rel="noreferrer">TDK Landscape</a>
        </div>
      </section>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
