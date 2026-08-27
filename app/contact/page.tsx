"use client";

export default function ContactPage() {
  return (
    <>
      <section className="contact-page">

        {/* ── HERO ─────────────────────────────────────────── */}
        <div className="contact-hero  bg-[#0F1C3F]">
          <div className="hero-noise" />
          <div className="hero-grid-lines" />
          <div className="hero-orb hero-orb-1" />
          <div className="hero-orb hero-orb-2" />
          <div className="hero-orb hero-orb-3" />

          <div className="container hero-inner">
            {/* Left */}
            <div className="hero-identity">
              <div className="hero-logo- ring">
              
              </div>
              <div className="hero-text-block">
                <p className="hero-eyebrow">SOFTWARE PRODUCTIVITY STRATEGISTS</p>
                <h1 className="hero-title">
                  
                  Contact Us
                </h1>
                <p className="hero-sub">We're here to help — reach out anytime</p>
                <nav className="hero-breadcrumb">
                  <span>HOME</span>
                  <svg width="6" height="10" viewBox="0 0 6 10" fill="none">
                    <path d="M1 1L5 5L1 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="bc-active">CONTACT</span>
                </nav>
              </div>
            </div>

            {/* Right – quick-info grid */}
            <div className="hero-info-grid">
              <div className="hig-card">
                <div className="hig-icon-wrap">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div className="hig-text">
                  <p className="hig-label">LOCATION</p>
                  <p className="hig-val">2400 Research Blvd</p>
                  <p className="hig-sub">Rockville, MD 20850</p>
                </div>
              </div>

              <div className="hig-card">
                <div className="hig-icon-wrap">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 11.5a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.56 1h3a2 2 0 0 1 2 1.72c.12.5.27.99.45 1.46a2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.47.18.96.33 1.46.45A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div className="hig-text">
                  <p className="hig-label">PHONE</p>
                  <p className="hig-val">301-337-2290</p>
                  <p className="hig-sub">Mon – Fri, 9am – 5pm</p>
                </div>
              </div>

              <div className="hig-card">
                <div className="hig-icon-wrap">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div className="hig-text">
                  <p className="hig-label">EMAIL</p>
                  <p className="hig-val">support@spsnet.com</p>
                  <p className="hig-sub">Reply within 24 hours</p>
                </div>
              </div>

              <div className="hig-card hig-card--gold">
                <div className="hig-icon-wrap hig-icon-wrap--gold">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
                  </svg>
                </div>
                <div className="hig-text">
                  <p className="hig-label hig-label--gold">INTERNSHIP</p>
                  <p className="hig-val">internship@spsnet.com</p>
                  <p className="hig-sub">Now accepting applications</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom wave */}
          <div className="hero-wave">
            <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
              <path d="M0 30C360 60 1080 0 1440 30V60H0V30Z" fill="#f4f6f9"/>
            </svg>
          </div>
        </div>

        {/* ── MAIN CONTENT ─────────────────────────────────── */}
        <div className="contact-body">
          <div className="container content-grid">

            {/* ── LEFT: Contact card ── */}
            <div className="contact-card">
              <div className="card-badge">OUR OFFICE</div>
              <h2 className="card-title">Corporate<br/>Headquarters</h2>
              <p className="card-subtitle">Software Productivity Strategists, Inc.</p>

              <div className="card-divider" />

              <div className="address-block">
                <div className="address-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <address className="address-text">
                  2400 Research Blvd, Suite 115<br/>
                  Rockville, MD 20850
                </address>
              </div>

              <div className="contact-rows">
                <div className="contact-row">
                  <div className="cr-icon">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 11.5a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.56 1h3a2 2 0 0 1 2 1.72c.12.5.27.99.45 1.46a2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.47.18.96.33 1.46.45A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  </div>
                  <div>
                    <span className="cr-label">Phone</span>
                    <a href="tel:3013372290" className="cr-value">301-337-2290</a>
                  </div>
                </div>
                <div className="contact-row">
                  <div className="cr-icon">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </div>
                  <div>
                    <span className="cr-label">Support Email</span>
                    <a href="mailto:support@spsnet.com" className="cr-value">support@spsnet.com</a>
                  </div>
                </div>
              </div>

              <div className="internship-panel">
                <div className="ip-header">
                  <div className="ip-dot" />
                  <span className="ip-tag">INTERNSHIP PROGRAM — OPEN</span>
                </div>
                <p className="ip-desc">Reach out to our internship team directly:</p>
                <div className="ip-links">
                  <a href="mailto:internship@spsnet.com" className="ip-link">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                    </svg>
                    internship@spsnet.com
                  </a>
                  <a href="mailto:internqueries@spsnet.com" className="ip-link">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                    </svg>
                    internqueries@spsnet.com
                  </a>
                </div>
              </div>
            </div>

            {/* ── RIGHT: Directions card ── */}
            <div className="direction-card">
              <div className="card-badge">DIRECTIONS</div>
              <h2 className="card-title">How to<br/>Find Us</h2>
              <p className="card-subtitle">Step-by-step driving directions to our office</p>

              <div className="card-divider" />

              <div className="dir-section">
                <div className="dir-header dir-header--north">
                  <div className="dir-arrow">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 19V5M5 12l7-7 7 7"/>
                    </svg>
                  </div>
                  <span>Going North on I-270</span>
                </div>
                <ol className="dir-list">
                  <li>
                    <div className="dir-num">1</div>
                    <p>Take I-270 North to <strong>Exit 8</strong> (Shady Grove). Follow the exit ramp around to the stop light and turn left.</p>
                  </li>
                  <li>
                    <div className="dir-num">2</div>
                    <p>Cross the bridge, staying in the left lane. Continue to the <strong>4th traffic light</strong> at Key West Ave and turn left — then take your first left.</p>
                  </li>
                  <li>
                    <div className="dir-num">3</div>
                    <p><strong>Building 2400</strong> will be directly ahead as you enter the parking lot.</p>
                  </li>
                </ol>
              </div>

              <div className="dir-section">
                <div className="dir-header dir-header--south">
                  <div className="dir-arrow dir-arrow--south">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 5v14M5 12l7 7 7-7"/>
                    </svg>
                  </div>
                  <span>Going South on I-270</span>
                </div>
                <ol className="dir-list">
                  <li>
                    <div className="dir-num">1</div>
                    <p>Take I-270 South and exit at <strong>Exit 8</strong> — Shady Grove Road.</p>
                  </li>
                  <li>
                    <div className="dir-num">2</div>
                    <p>Proceed to the <strong>3rd traffic light</strong> at Key West Ave, turn left, then take your first left.</p>
                  </li>
                  <li>
                    <div className="dir-num">3</div>
                    <p><strong>Building 2400</strong> will be straight ahead as you enter the parking lot.</p>
                  </li>
                </ol>
              </div>

              <a
                href="https://maps.google.com/?q=2400+Research+Blvd+Rockville+MD+20850"
                target="_blank"
                rel="noopener noreferrer"
                className="map-cta"
                 
              >
                <svg  width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                </svg>
                Open in Google Maps
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
              </a>
            </div>

          </div>
        </div>
      </section>

      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Outfit:wght@300;400;500;600&display=swap");

        /* ── BASE ───────────────────────────────────────────── */
        * { box-sizing: border-box; }

        .contact-page {
          font-family: "Outfit", sans-serif;
          background: #f4f6f9;
          min-height: 100vh;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 32px;
        }

        /* ── HERO ───────────────────────────────────────────── */
        .contact-hero {
          position: relative;
          overflow: hidden;
          padding-bottom: 0;
        }

        /* subtle grid texture */
        .hero-grid-lines {
          position: absolute; inset: 0; pointer-events: none;
          background-image:
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 48px 48px;
        }

        /* noise overlay */
        .hero-noise {
          position: absolute; inset: 0; pointer-events: none; z-index: 1;
          opacity: 0.025;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          background-size: 200px;
        }

        /* glowing orbs */
        .hero-orb {
          position: absolute; border-radius: 50%; pointer-events: none;
          filter: blur(60px);
        }
        .hero-orb-1 {
          width: 400px; height: 400px;
          background: radial-gradient(circle, rgba(15,143,168,0.35) 0%, transparent 70%);
          top: -120px; right: -80px;
        }
        .hero-orb-2 {
          width: 260px; height: 260px;
          background: radial-gradient(circle, rgba(255,236,159,0.12) 0%, transparent 70%);
          bottom: 40px; left: 15%;
        }
        .hero-orb-3 {
          width: 180px; height: 180px;
          background: radial-gradient(circle, rgba(15,143,168,0.25) 0%, transparent 70%);
          top: 40px; left: 40%;
        }

        .hero-inner {
          position: relative; z-index: 2;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 48px;
          padding-top: 60px;
          padding-bottom: 80px;
          min-height: 90vh;

        }

        /* identity block */
        .hero-identity {
          display: flex;
          align-items: flex-start;
          gap: 22px;
          flex-shrink: 0;
          max-width: 380px;
        }

        .hero-logo-ring {
          width: 80px; height: 80px;
          background: rgba(255,255,255,0.1);
          border: 1.5px solid rgba(255,255,255,0.2);
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 0 0 8px rgba(255,255,255,0.04);
        }
        .hero-logo-ring img {
          width: 58px; height: 58px;
          object-fit: contain; border-radius: 50%;
        }

        .hero-text-block { display: flex; flex-direction: column; gap: 4px; }

        .hero-eyebrow {
          margin: 0 0 8px;
          font-size: 9.5px; font-weight: 600;
          letter-spacing: 2.5px;
          color: rgba(255,255,255,0.45);
          text-transform: uppercase;
        }

        .hero-title {
          font-family: "Playfair Display", serif;
          font-size: 3rem; font-weight: 700;
          color: #fff; margin: 0 0 8px;
          line-height: 1.05;
          letter-spacing: -0.5px;
        }
        .hero-title-accent { color: #ffec9f; font-style: italic; }

        .hero-sub {
          margin: 0 0 16px;
          font-size: 14px; font-weight: 300;
          color: rgba(255,255,255,0.5);
          line-height: 1.5;
        }

        .hero-breadcrumb {
          display: flex; align-items: center; gap: 8px;
          font-size: 10px; font-weight: 600;
          letter-spacing: 1px;
          color: rgba(255,255,255,0.4);
          text-transform: uppercase;
        }
        .bc-active { color: #ffec9f; }

        /* quick-info grid */
        .hero-info-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
          flex: 1;
          max-width: 560px;
        }

        .hig-card {
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.11);
          border-radius: 18px;
          padding: 20px 22px;
          display: flex;
          align-items: flex-start;
          gap: 16px;
          transition: background 0.2s, border-color 0.2s;
          cursor: default;
        }
        .hig-card:hover {
          background: rgba(255,255,255,0.12);
          border-color: rgba(255,255,255,0.2);
        }
        .hig-card--gold {
          background: rgba(255,236,159,0.08);
          border-color: rgba(255,236,159,0.2);
        }
        .hig-card--gold:hover {
          background: rgba(255,236,159,0.14);
          border-color: rgba(255,236,159,0.32);
        }

        .hig-icon-wrap {
          width: 40px; height: 40px;
          background: rgba(255,255,255,0.12);
          border-radius: 11px;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          color: rgba(255,255,255,0.85);
        }
        .hig-icon-wrap--gold {
          background: rgba(255,236,159,0.18);
          color: #ffec9f;
        }

        .hig-text { display: flex; flex-direction: column; gap: 1px; }
        .hig-label {
          margin: 0 0 4px;
          font-size: 9px; font-weight: 700;
          letter-spacing: 2px; text-transform: uppercase;
          color: rgba(255,255,255,0.4);
        }
        .hig-label--gold { color: rgba(255,236,159,0.6); }
        .hig-val {
          margin: 0;
          font-size: 13.5px; font-weight: 600;
          color: #fff; line-height: 1.5;
        }
        .hig-sub {
          margin: 3px 0 0;
          font-size: 11px; font-weight: 300;
          color: rgba(255,255,255,0.38);
        }

        /* wave */
        .hero-wave {
          position: relative; z-index: 2;
          line-height: 0; margin-top: -2px;
        }
        .hero-wave svg { width: 100%; display: block; }

        /* ── BODY ───────────────────────────────────────────── */
        .contact-body { padding: 56px 0 100px; }

        .content-grid {
          display: grid;
          grid-template-columns: 420px 1fr;
          gap: 28px;
          align-items: start;
        }

        /* ── SHARED CARD STYLES ─────────────────────────────── */
        .contact-card,
        .direction-card {
          background: #fff;
          border-radius: 24px;
          padding: 44px 40px;
          border: 1px solid rgba(0,0,0,0.06);
          box-shadow: 0 2px 4px rgba(0,0,0,0.04), 0 20px 60px -10px rgba(0,0,0,0.09);
        }

        .card-badge {
          display: inline-block;
          background: #eaf7fa;
          color: #0a6a80;
          font-size: 10px; font-weight: 700;
          letter-spacing: 2px; text-transform: uppercase;
          padding: 6px 14px;
          border-radius: 100px;
          margin-bottom: 18px;
        }

        .card-title {
          font-family: "Playfair Display", serif;
          font-size: 2.2rem; font-weight: 700;
          color: #0a1628; margin: 0 0 8px;
          line-height: 1.15;
          letter-spacing: -0.3px;
        }

        .card-subtitle {
          font-size: 13.5px; font-weight: 400;
          color: #7a8a9a; margin: 0;
        }

        .card-divider {
          height: 1px;
          background: linear-gradient(to right, #e2e8ef 60%, transparent);
          margin: 28px 0;
        }

        /* ── CONTACT CARD ───────────────────────────────────── */
        .address-block {
          display: flex; gap: 14px; align-items: flex-start;
          margin-bottom: 20px;
        }
        .address-icon {
          width: 34px; height: 34px;
          background: #f0f8fa; border-radius: 9px;
          display: flex; align-items: center; justify-content: center;
          color: #0a6a80; flex-shrink: 0;
          margin-top: 1px;
        }
        .address-text {
          font-style: normal;
          font-size: 14px; font-weight: 400;
          color: #4a5568; line-height: 1.8;
          margin: 0;
        }

        .contact-rows {
          display: flex; flex-direction: column; gap: 10px;
          margin-bottom: 28px;
        }
        .contact-row {
          display: flex; align-items: center; gap: 14px;
          padding: 14px 16px;
          background: #f7f9fb;
          border-radius: 13px;
          border: 1px solid #edf0f4;
          transition: border-color 0.2s;
        }
        .contact-row:hover { border-color: #c9d8e8; }

        .cr-icon {
          width: 36px; height: 36px;
          background: #e8f4f8; border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
          color: #0a6a80; flex-shrink: 0;
        }
        .cr-label {
          display: block;
          font-size: 10px; font-weight: 600;
          text-transform: uppercase; letter-spacing: 0.5px;
          color: #a0adb8;
          margin-bottom: 2px;
        }
        .cr-value {
          display: block;
          font-size: 14px; font-weight: 600;
          color: #1a2940;
          text-decoration: none;
          transition: color 0.2s;
        }
        .cr-value:hover { color: #0a6a80; }

        /* internship panel */
        .internship-panel {
          background: linear-gradient(145deg, #062033 0%, #0a3550 100%);
          border-radius: 18px;
          padding: 26px 28px;
        }
        .ip-header {
          display: flex; align-items: center; gap: 8px;
          margin-bottom: 10px;
        }
        .ip-dot {
          width: 7px; height: 7px;
          background: #5de5a0;
          border-radius: 50%;
          box-shadow: 0 0 6px rgba(93,229,160,0.6);
          animation: pulse 2s ease-in-out infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.65; transform: scale(1.3); }
        }
        .ip-tag {
          font-size: 10px; font-weight: 700;
          letter-spacing: 1.5px; text-transform: uppercase;
          color: #5de5a0; margin: 0;
        }
        .ip-desc {
          font-size: 12px; font-weight: 300;
          color: rgba(255,255,255,0.45);
          margin: 0 0 14px;
        }
        .ip-links { display: flex; flex-direction: column; gap: 8px; }
        .ip-link {
          display: flex; align-items: center; gap: 9px;
          font-size: 13.5px; font-weight: 500;
          color: #fff; text-decoration: none;
          padding: 10px 14px;
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 10px;
          transition: background 0.2s, color 0.2s;
        }
        .ip-link:hover {
          background: rgba(255,236,159,0.15);
          color: #ffec9f;
          border-color: rgba(255,236,159,0.25);
        }

        /* ── DIRECTION CARD ─────────────────────────────────── */
        .dir-section { margin-bottom: 28px; }
        .dir-section:last-of-type { margin-bottom: 20px; }

        .dir-header {
          display: flex; align-items: center; gap: 12px;
          font-size: 13px; font-weight: 700;
          letter-spacing: 0.3px;
          padding: 12px 16px;
          border-radius: 11px;
          margin-bottom: 20px;
        }
        .dir-header--north {
          background: #eaf7fa; color: #085a6e;
        }
        .dir-header--south {
          background: #e8f4f0; color: #0a5940;
        }

        .dir-arrow {
          width: 30px; height: 30px;
          background: rgba(0,0,0,0.07);
          border-radius: 8px;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }

        .dir-list {
          list-style: none; margin: 0; padding: 0;
          display: flex; flex-direction: column; gap: 0;
        }
        .dir-list li {
          display: flex; gap: 16px; align-items: flex-start;
          padding: 14px 0;
          border-bottom: 1px solid #f0f3f6;
          position: relative;
        }
        .dir-list li:last-child { border-bottom: none; }

        .dir-num {
          width: 28px; height: 28px;
          background: #0a6a80;
          color: #fff;
          border-radius: 8px;
          display: flex; align-items: center; justify-content: center;
          font-size: 12px; font-weight: 700;
          flex-shrink: 0; margin-top: 1px;
        }

        .dir-list li p {
          margin: 0;
          font-size: 14px; font-weight: 400;
          color: #4a5a6a; line-height: 1.7;
          padding-top: 4px;
        }
        .dir-list li strong { color: #1a2940; font-weight: 600; }

        /* map CTA */
        .map-cta {
          display: flex; align-items: center; justify-content: center; gap: 10px;
          padding: 15px 24px;
          background: #0a6a80;
          color: #fff;
          border-radius: 13px;
          text-decoration: none;
          font-size: 14px; font-weight: 600;
          letter-spacing: 0.2px;
          transition: background 0.2s, transform 0.15s;
          margin-top: 8px;
        }
        .map-cta:hover {
          background: #085a6e;
          transform: translateY(-1px);
        }
        .map-cta:active { transform: translateY(0); }

        /* ── RESPONSIVE ─────────────────────────────────────── */
        @media (max-width: 1100px) {
          .content-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 900px) {
          .hero-inner {
            flex-direction: column;
            align-items: flex-start;
            gap: 36px;
            padding-top: 50px;
            padding-bottom: 70px;
          }
          .hero-info-grid {
            max-width: 100%; width: 100%;
          }
          .hero-identity { max-width: 100%; }
        }

        @media (max-width: 768px) {
          .content-grid {
            grid-template-columns: 1fr;
          }
          .contact-card,
          .direction-card {
            padding: 32px 28px;
          }
          .hero-title { font-size: 2.4rem; }
        }

        @media (max-width: 480px) {
          .hero-info-grid {
            grid-template-columns: 1fr;
          }
          .hero-title { font-size: 2rem; }
          .container { padding: 0 20px; }
          .contact-card,
          .direction-card {
            padding: 26px 22px;
          }
        }
      `}</style>
    </>
  );
}