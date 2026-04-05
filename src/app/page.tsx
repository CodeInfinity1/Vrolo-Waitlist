'use client';

import { useState, FormEvent } from 'react';

/* ─── Inline SVG Icons ─────────────────────────────────────────── */
const IconZap = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

const IconClock = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const IconAlertTriangle = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
    <line x1="12" y1="9" x2="12" y2="13" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);

const IconUsers = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const IconBrain = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.46 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" />
    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.46 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" />
  </svg>
);

const IconCopy = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
  </svg>
);

const IconShield = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const IconCheckCircle = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

const IconXCircle = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="15" y1="9" x2="9" y2="15" />
    <line x1="9" y1="9" x2="15" y2="15" />
  </svg>
);

const IconRocket = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
  </svg>
);

const IconStar = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const IconArrowRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{width:'16px',height:'16px'}}>
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

/* ─── Waitlist Form Component ─────────────────────────────────── */
type FormState = 'idle' | 'loading' | 'success' | 'error';

function WaitlistForm({ id = 'default' }: { id?: string }) {
  const [email, setEmail] = useState('');
  const [state, setState] = useState<FormState>('idle');
  const [message, setMessage] = useState('');
  const [emailError, setEmailError] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setEmailError(false);

    if (!email.trim()) {
      setEmailError(true);
      return;
    }

    setState('loading');
    setMessage('');

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim() }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setState('success');
        setMessage(data.message);
        setEmail('');
      } else {
        setState('error');
        setMessage(data.message || 'Something went wrong. Please try again.');
      }
    } catch {
      setState('error');
      setMessage('Network error. Please check your connection and try again.');
    }
  };

  if (state === 'success') {
    return (
      <div className="feedback-message success animate-fade-up" style={{ maxWidth: '520px', margin: '0 auto' }}>
        <IconCheckCircle />
        <div>
          <strong>You&apos;re in!</strong> {message}
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="waitlist-form" noValidate>
      <div className="email-cta-row">
        <input
          id={`waitlist-email-${id}`}
          type="email"
          className={`input${emailError ? ' error-state' : ''}`}
          placeholder="Enter your work email"
          value={email}
          onChange={(e) => { setEmail(e.target.value); setEmailError(false); }}
          disabled={state === 'loading'}
          required
          autoComplete="email"
        />
        <button
          type="submit"
          id={`join-waitlist-btn-${id}`}
          className="btn-primary"
          disabled={state === 'loading'}
        >
          {state === 'loading' ? (
            <><span className="spinner" /> Joining&hellip;</>
          ) : (
            <>Join Waitlist <IconArrowRight /></>
          )}
        </button>
      </div>

      {emailError && (
        <span style={{ fontSize: '0.82rem', color: 'var(--error)', alignSelf: 'flex-start' }}>
          Please enter your email address.
        </span>
      )}

      {state === 'error' && (
        <div className="feedback-message error" style={{ width: '100%' }}>
          <IconXCircle />
          <span>{message}</span>
        </div>
      )}

      <p className="form-hint">No credit card required &middot; Early access only &middot; No spam, ever</p>
    </form>
  );
}

/* ─── Main Page ───────────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      {/* ── Navbar ─────────────────────────────────────────── */}
      <nav className="navbar">
        <div className="container">
          <div className="navbar-inner">
            <a href="/" className="logo" aria-label="Vrolo home">
              <div className="logo-icon">
                <IconZap />
              </div>
              <span className="logo-text">Vrolo</span>
            </a>

            <div className="navbar-badge">
              <span className="badge-dot" />
              <span>Waitlist open</span>
            </div>
          </div>
        </div>
      </nav>

      {/* ── Hero ───────────────────────────────────────────── */}
      <section className="hero" id="hero">
        <div className="hero-bg-gradient" aria-hidden />
        <div className="hero-grid" aria-hidden />

        <div className="container">
          <div className="hero-content">
            <div className="hero-eyebrow animate-fade-up">
              <IconRocket />
              <span>Built for operational continuity</span>
            </div>

            <h1 className="hero-headline animate-fade-up delay-1">
              Work shouldn&apos;t stop when your{' '}
              <span className="highlight">team is unavailable</span>
            </h1>

            <p className="hero-subtext animate-fade-up delay-2">
              Vrolo picks up routine work when someone is unavailable — handling tasks
              in a way that matches how your team normally operates.
            </p>

            <div className="animate-fade-up delay-3">
              <WaitlistForm id="hero" />
            </div>
          </div>

          {/* Stats strip */}
          <div className="stats-strip animate-fade-up delay-4">
            <div className="stat-item">
              <div className="stat-value">No handoffs</div>
              <div className="stat-label">Routine tasks move forward without manual intervention</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">Always covered</div>
              <div className="stat-label">Standard work continues even when the owner is out</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">Less scramble</div>
              <div className="stat-label">Your team doesn&apos;t have to fill every gap manually</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Problem Section ────────────────────────────────── */}
      <section className="section problem-section" id="problem">
        <div className="container">
          <div className="section-header">
            <div className="section-tag animate-fade-up">
              <IconAlertTriangle />
              The Problem
            </div>
            <h2 className="section-title animate-fade-up delay-1">
              The issue isn&apos;t absence. It&apos;s dependency.
            </h2>
            <p className="section-subtitle animate-fade-up delay-2">
              When one person is out, the work they own waits with them. That delay compounds
              across your team — and customers often feel it before you do.
            </p>
          </div>

          <div className="problem-grid">
            <div className="problem-card animate-fade-up delay-1">
              <div className="problem-icon"><IconClock /></div>
              <h3>Work stalls at one person</h3>
              <p>
                Decisions get delayed. Inboxes back up. A task that should take an hour waits
                days because one person — on leave, sick, or in another timezone — isn&apos;t there.
              </p>
            </div>

            <div className="problem-card animate-fade-up delay-2">
              <div className="problem-icon"><IconUsers /></div>
              <h3>Everyone else picks up the slack</h3>
              <p>
                Colleagues reconstruct context they don&apos;t have, duplicate effort, or escalate
                things that didn&apos;t need to become emergencies in the first place.
              </p>
            </div>

            <div className="problem-card animate-fade-up delay-3">
              <div className="problem-icon"><IconAlertTriangle /></div>
              <h3>Customers notice before you do</h3>
              <p>
                Response times slip. Commitments get quietly pushed. Most teams don&apos;t realise
                how visible the gap is until a customer mentions it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Solution Section ───────────────────────────────── */}
      <section className="section solution-section" id="solution">
        <div className="container">
          <div className="section-header">
            <div className="section-tag animate-fade-up">
              <IconBrain />
              How Vrolo Works
            </div>
            <h2 className="section-title animate-fade-up delay-1">
              How Vrolo keeps things moving
            </h2>
            <p className="section-subtitle animate-fade-up delay-2">
              Vrolo learns from your team&apos;s past work, then steps in to handle routine tasks
              when someone is out — without needing a replacement or a manual handoff.
            </p>
          </div>

          <div className="solution-grid">
            <div className="solution-card animate-fade-up delay-1">
              <div className="solution-step"><span className="step-num">1</span> Learn</div>
              <div className="solution-icon"><IconBrain /></div>
              <h3>Understands how your team works</h3>
              <p>
                Vrolo reviews past emails, documents, and recurring tasks to understand the
                patterns in how your team handles requests — not in theory, but in practice.
              </p>
            </div>

            <div className="solution-card animate-fade-up delay-2">
              <div className="solution-step"><span className="step-num">2</span> Act</div>
              <div className="solution-icon"><IconCopy /></div>
              <h3>Handles routine requests while they&apos;re out</h3>
              <p>
                When someone is unavailable, Vrolo drafts responses and processes standard
                requests — matching how your team normally responds to that kind of work.
              </p>
            </div>

            <div className="solution-card animate-fade-up delay-3">
              <div className="solution-step"><span className="step-num">3</span> Protect</div>
              <div className="solution-icon"><IconShield /></div>
              <h3>Nothing gets quietly dropped</h3>
              <p>
                Stakeholders still get timely replies. Standard tasks keep moving. And your
                team doesn&apos;t have to coordinate coverage for work that can be handled automatically.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Social Proof / Launch Section ─────────────────── */}
      <section className="section proof-section" id="early-access">
        <div className="container">
          <div className="proof-inner">
            <div className="proof-left animate-fade-up">
              <div className="section-tag" style={{ justifyContent: 'flex-start' }}>
                <IconStar />
                Early Access
              </div>
              <h2>Get early access</h2>
              <p>
                We&apos;re working with a small group of teams who deal with this problem directly.
                If that&apos;s you, join the waitlist — we&apos;ll be in touch as we open access.
              </p>
              <div className="launch-badge">
                <IconRocket />
                Launching soon
              </div>
            </div>

            <div className="proof-cards animate-fade-up delay-2">
              <div className="proof-card">
                <div className="proof-card-value">Early access</div>
                <div className="proof-card-label">Opens to waitlist members first</div>
              </div>
              <div className="proof-card">
                <div className="proof-card-value">No charge</div>
                <div className="proof-card-label">Free to join and use during early access</div>
              </div>
              <div className="proof-card">
                <div className="proof-card-value">Founder access</div>
                <div className="proof-card-label">Direct line to the team building the product</div>
              </div>
              <div className="proof-card">
                <div className="proof-card-value">Your input</div>
                <div className="proof-card-label">Shapes what we prioritise and build next</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Final CTA ──────────────────────────────────────── */}
      <section className="section final-cta" id="join">
        <div className="container">
          <div className="final-cta-card animate-fade-up">
            <div className="section-tag" style={{ justifyContent: 'center' }}>
              <IconZap />
              Limited Early Access
            </div>
            <h2>If this problem sounds familiar, we&apos;d like to hear from you.</h2>
            <p>
              Join the waitlist and get early access. We&apos;re working with a small group of
              teams to get this right — and your feedback will directly shape the product.
            </p>
            <WaitlistForm id="footer" />
          </div>
        </div>
      </section>

      {/* ── Footer ─────────────────────────────────────────── */}
      <footer className="footer">
        <div className="container">
          <div className="footer-inner">
            <div className="footer-copy">
              © {new Date().getFullYear()} Vrolo. All rights reserved.
            </div>
            <div className="footer-links">
              <a href="mailto:hello@vrolo.io">Contact</a>
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
