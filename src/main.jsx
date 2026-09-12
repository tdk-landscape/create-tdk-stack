import React, { useEffect, useMemo, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowRight, Boxes, Check, ChevronRight, Copy, Database, GitBranch, Network, Play, Shield, Sparkles, Terminal, Workflow, Zap } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './styles.css';

gsap.registerPlugin(ScrollTrigger);

const stack = [
  ['Bun', 'Instant installs, fast TypeScript runtime, generator-friendly defaults.'],
  ['Node.js', 'Standard ecosystem compatibility for teams with existing services.'],
  ['TypeScript', 'Contracts stay typed across generated frontends, backends, SDKs, and workers.'],
  ['Docker', 'Every service boots in a plain container your team can inspect.'],
  ['Traefik', 'Local domains, retries, routing, and health-aware service discovery.'],
  ['Tilt', 'Selective startup and hot reload across the exact slice you need.'],
  ['Prisma', 'Generated database wiring and migrations without setup archaeology.'],
  ['PostgreSQL', 'Real relational state beside the app, not mocked into usefulness.'],
  ['NATS JetStream', 'Events and queues included in the local feedback loop.'],
  ['Infisical', 'Machine identities and secrets are wired as generated contracts.'],
  ['Playwright', 'End-to-end checks run against the full local topology.'],
  ['AGENTS.md', 'AI assistants get the map before they touch the code.']
];

const cliLines = [
  '$ npm create tdk-stack@latest',
  'project name: commerce-fieldkit',
  'stack: ecommerce',
  'runtime: Bun + Node.js',
  'services: api-gateway, orders, inventory, storefront',
  'database: PostgreSQL + Prisma',
  'network: Traefik local domains',
  'events: NATS JetStream',
  'secrets: Infisical identities',
  'tests: Playwright',
  'writing 68 generated files...',
  'ready in 4.6s'
];

function App() {
  const [copied, setCopied] = useState(false);
  const [active, setActive] = useState(0);
  const terminalRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-title span, .hero-copy, .hero-actions, .command-box', {
        y: 48,
        opacity: 0,
        duration: 1,
        stagger: 0.09,
        ease: 'power3.out'
      });
      gsap.to('.hero-media', {
        yPercent: -9,
        scale: 1.04,
        ease: 'none',
        scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true }
      });
      ScrollTrigger.create({
        trigger: '.desire',
        start: 'top top',
        end: 'bottom bottom',
        pin: '.desire-pin',
        pinSpacing: false
      });
      gsap.to('.scrub-word', {
        opacity: 1,
        y: 0,
        stagger: 0.045,
        ease: 'none',
        scrollTrigger: { trigger: '.scrub-line', start: 'top 78%', end: 'center 38%', scrub: 0.7 }
      });
      gsap.from('.bento-card', {
        y: 70,
        opacity: 0,
        duration: 0.9,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.bento-grid', start: 'top 78%' }
      });
      gsap.utils.toArray('.stack-card').forEach((card, index) => {
        gsap.to(card, {
          scale: 1 - index * 0.018,
          ease: 'none',
          scrollTrigger: { trigger: card, start: `top ${110 + index * 18}px`, end: 'bottom top', scrub: true }
        });
      });
    });
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const node = terminalRef.current;
    if (!node) return;
    node.innerHTML = '';
    let line = 0;
    let char = 0;
    let row = document.createElement('div');
    row.className = 'terminal-line';
    node.appendChild(row);
    const tick = window.setInterval(() => {
      const text = cliLines[line];
      row.textContent = text.slice(0, char + 1);
      char += 1;
      if (char >= text.length) {
        line += 1;
        char = 0;
        if (line >= cliLines.length) {
          window.clearInterval(tick);
          return;
        }
        row = document.createElement('div');
        row.className = 'terminal-line';
        node.appendChild(row);
      }
    }, 34);
    return () => window.clearInterval(tick);
  }, []);

  const words = useMemo(() => 'Forge TDK turns one product idea into a runnable local landscape with generated services, typed contracts, real databases, queues, secrets, routes, tests, and documentation.'.split(' '), []);

  const copy = async () => {
    await navigator.clipboard.writeText('npm create tdk-stack@latest');
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1400);
  };

  return (
    <main className="site-shell">
      <nav className="nav">
        <a className="brand" href="#top">Forge TDK</a>
        <div className="nav-links">
          <a href="#stack">Stack</a>
          <a href="#flow">Flow</a>
          <a href="#why">Why</a>
          <a href="https://github.com/tdk-landscape" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="hero-media" aria-hidden="true" />
        <div className="hero-wash" aria-hidden="true" />
        <div className="hero-inner">
          <div className="hero-text">
            <h1 className="hero-title">
              <span>Start a real microservice</span>
              <span>stack before coffee.</span>
            </h1>
            <p className="hero-copy">A modern Create T3-style launcher for TDK CLI. Pick a stack, generate the services, boot Bun, Node.js, Docker, Traefik, Tilt, Prisma, Postgres, NATS, Infisical, and Playwright in one local loop.</p>
            <div className="hero-actions">
              <a className="button primary" href="#install">Get started <ArrowRight size={18} /></a>
              <a className="button secondary" href="#demo">Watch the boot <Play size={17} /></a>
            </div>
          </div>
          <div className="command-box" id="install">
            <code>npm create tdk-stack@latest</code>
            <button onClick={copy} aria-label="Copy install command">{copied ? <Check size={18} /> : <Copy size={18} />}</button>
          </div>
        </div>
      </section>

      <section className="marquee-section" aria-label="Technology stack">
        <div className="marquee">
          {[...stack, ...stack].map(([name], index) => <span key={`${name}-${index}`}>{name}</span>)}
        </div>
      </section>

      <section className="section interest" id="stack">
        <div className="section-head">
          <h2>Choose the stack. Keep the source.</h2>
          <p>Forge TDK is not a black box template. It writes boring, inspectable files that your team owns.</p>
        </div>
        <div className="bento-grid">
          <article className="bento-card big">
            <Terminal size={30} />
            <h3>Interactive stack prompt</h3>
            <p>Select frontend, backend, SDK, workers, database, queues, secrets, routing, and tests. The output is standard files, not a platform lock-in story.</p>
          </article>
          <article className="bento-card">
            <Zap size={28} />
            <h3>Bun and Node</h3>
            <p>Fast where it matters, compatible where teams need it.</p>
          </article>
          <article className="bento-card image-card">
            <div className="inline-image" />
            <h3>Local domains</h3>
            <p>Traefik routes every generated service behind clear localhost URLs.</p>
          </article>
          <article className="bento-card">
            <Database size={28} />
            <h3>Data included</h3>
            <p>Postgres, Prisma, migrations, health checks, and test fixtures arrive together.</p>
          </article>
          <article className="bento-card wide">
            <Workflow size={30} />
            <h3>Generated topology for humans and agents</h3>
            <p>Dependency manifests, C4 diagrams, and AGENTS.md give developers and coding agents the same map.</p>
          </article>
        </div>
      </section>

      <section className="section demo" id="demo">
        <div className="terminal">
          <div className="terminal-bar"><i /><i /><i /><span>forge-tdk</span></div>
          <div className="terminal-body" ref={terminalRef} />
        </div>
      </section>

      <section className="section scrub-line">
        <h2>{words.map((word, index) => <span className="scrub-word" key={`${word}-${index}`}>{word} </span>)}</h2>
      </section>

      <section className="section desire" id="flow">
        <div className="desire-pin">
          <h2>From idea to runnable landscape.</h2>
          <p>Pin the concept on the left, let the generated system scroll on the right.</p>
        </div>
        <div className="stack-flow">
          {[
            ['Intent', 'Describe ecommerce, SaaS, ERP, platform, or internal tool shape.', Sparkles],
            ['Contracts', 'Forge writes service.json, routes, env contracts, and dependency manifests.', GitBranch],
            ['Runtime', 'Bun, Node.js, Docker, Tilt, Traefik, Postgres, NATS, and Infisical boot locally.', Boxes],
            ['Confidence', 'Playwright, health checks, C4 diagrams, and AGENTS.md ship with the stack.', Shield]
          ].map(([title, copyText, Icon]) => (
            <article className="stack-card" key={title}>
              <Icon size={30} />
              <div>
                <h3>{title}</h3>
                <p>{copyText}</p>
              </div>
              <ChevronRight size={24} />
            </article>
          ))}
        </div>
      </section>

      <section className="section accordions" id="why">
        <div className="section-head">
          <h2>Pick your starting point.</h2>
          <p>Hover a track. Each one becomes a complete local system, not just a folder of hopeful files.</p>
        </div>
        <div className="accordion-row">
          {['SaaS control plane', 'Commerce landscape', 'ERP backbone', 'Platform workbench'].map((item, index) => (
            <button className={active === index ? 'accordion active' : 'accordion'} onMouseEnter={() => setActive(index)} onFocus={() => setActive(index)} key={item}>
              <span>{item}</span>
              <small>{stack.slice(index * 3, index * 3 + 3).map(([name]) => name).join(' / ')}</small>
            </button>
          ))}
        </div>
      </section>

      <footer className="footer">
        <div>
          <h2>Launch the local stack generator TDK deserved.</h2>
          <p>Forge TDK gives the TDK CLI a sharp, memorable starting point for modern teams.</p>
        </div>
        <a className="button primary" href="https://github.com/tdk-landscape/create-tdk-stack" target="_blank" rel="noreferrer">Open repo <Network size={18} /></a>
      </footer>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
