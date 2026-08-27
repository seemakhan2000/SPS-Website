"use client";

import React from "react";

const timelineData = [
  {
    year: "Early 90s",
    title: "Start of App Development and CASE",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
  },
  {
    year: "Mid 90s",
    title: "Start of Internet Security & Web Infrastructure",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop",
  },
  {
    year: "Late 90s",
    title: "Start of K-12 Focus with Alexandria City Public Schools",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop",
  },
  {
    year: "Early 2000s",
    title: "Start of Virtual Learning Focus",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
  },
  {
    year: "Mid 2000s",
    title: "Renewed Focus of Cyber Security & Information Assurance",
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop",
  },
  {
    year: "Late 2000s",
    title: "Start of e-learning and training as a service",
    image:
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    year: "2015 – SMILE",
    title: "Security Mobile Infrastructure Learning Events",
    image:
      "https://images.unsplash.com/photo-1516321165247-4aa89a48be28?q=80&w=1200&auto=format&fit=crop",
  },
  {
    year: "2018 – SCALE",
    title: "Security, Cloud, Artificial Intelligence Learning",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop",
  },
];

const achievements = [
  {
    title: "AVNET BLUEMIX WITH IBM",
    description:
      "2018 finalist in IBM Watson Build competition and winner of the Social Justice Award.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    year: "2018",
  },
  {
    title: "Winner of the Avnet Bluemix",
    description:
      "Sniff IT mobile application and Watchover IoT-based application recognition.",
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=1200&auto=format&fit=crop",
    year: "2019",
  },
  {
    title: "IBM Cognitive Build Challenge",
    description:
      "Two IBM Cloud champions from our team became semi-finalists.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop",
    year: "2020",
  },
];

const processSteps = [
  {
    id: "01",
    title: "Problem Idea",
    subtitle: "Discovery",
    desc: "We identify real business problems and opportunities to create impactful digital solutions.",
    icon: "💡",
  },
  {
    id: "02",
    title: "Hypothesis",
    subtitle: "Research",
    desc: "Our experts validate concepts, analyze requirements, and define strategic objectives.",
    icon: "🧠",
  },
  {
    id: "03",
    title: "MVP Backlog",
    subtitle: "Prototyping",
    desc: "We prioritize features and create a scalable MVP roadmap for faster development.",
    icon: "📋",
  },
  {
    id: "04",
    title: "Agile Delivery",
    subtitle: "Execution",
    desc: "Using agile methodologies, we build reliable and high-performing software products.",
    icon: "🚚",
  },
  {
    id: "05",
    title: "Working Software",
    subtitle: "Technical Excellence",
    desc: "We ensure smooth deployment, performance optimization, and continuous improvements.",
    icon: "💻",
  },
  {
    id: "06",
    title: "User Needs",
    subtitle: "Customer Success",
    desc: "User feedback and business goals drive the evolution of every solution we deliver.",
    icon: "👥",
  },
];

export default function TimelineAndWhoWeAre() {
  return (
    <>
      {/* ================= SECTION 1 - Mission & About WITH GRADIENT ================= */}
      <section className="section-mission">
        <div className="container">
          <div className="mission-grid">
            <div className="mission-card">
              <span className="chip">AI + Cloud + Security</span>
              <h3>Our Mission & Vision</h3>
              <p>
                We combine AI Development, Cloud Infrastructure, Cybersecurity, and Training
                to deliver smart, secure, and efficient solutions. Using our own productivity
                tools, we create faster and more innovative experiences for our clients.
              </p>
            </div>

            <div className="mission-card">
              <span className="chip">Enterprise Security</span>
              <h3>About SPS</h3>
              <p>
                Software Productivity Strategists, Inc. (SPS) delivers AI and Cloud solutions
                with expertise in development, security, deployment, and support. Our
                award-winning team builds secure, scalable, and high-performance systems
                for clients worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 2 - Hero / Who We Are - Full Screen minus 20px ================= */}
      <section className="section-hero">
        <div className="container">
          <div className="hero-wrapper">
            <div className="hero-left">
              <span className="hero-tag">Software Productivity Strategists</span>
              <h1>
                Who <br /> We Are
              </h1>
              <p>
                We develop AI-based solutions for corporations and startups,
                guiding clients through digital transformation.
              </p>
              <div className="hero-buttons">
                <button className="btn-primary">Explore Work</button>
                <button className="btn-secondary">Meet Teams</button>
              </div>
            </div>

            <div className="hero-right">
              <div className="team-card">
                <h3>AI / Development</h3>
                <p>Building intelligent AI solutions.</p>
              </div>
              <div className="team-card">
                <h3>Security Team</h3>
                <p>Enterprise cybersecurity frameworks.</p>
              </div>
              <div className="team-card">
                <h3>Cloud &amp; Infrastructure</h3>
                <p>Scalable cloud environments.</p>
              </div>
              <div className="team-card">
                <h3>Support &amp; Helpdesk</h3>
                <p>24/7 operational support systems.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 3 - Timeline ================= */}
      <section className="section-timeline">
        <div className="container">
          <div className="section-header">
            <h2>Highlights of past two decades</h2>
            <p>
              SPS started business operations over 25 years ago to help organizations
              improve software development productivity. Since then we have come a long way...
            </p>
          </div>

          <div className="timeline-grid">
            {timelineData.map((item, index) => (
              <div key={index} className="timeline-card">
                <img src={item.image} alt={item.year} />
                <div className="timeline-content">
                  <h3>{item.year}</h3>
                  <p>{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 4 - Achievements ================= */}
      <section className="section-achievements">
        <div className="container">
          <div className="section-header">
            <h2>Achievements and Awards</h2>
            <p>
              SPS started business operations over 25 years ago to help organizations
              improve software development productivity. Since then we have come a long way...
            </p>
          </div>

          <div className="achievements-grid">
            {achievements.map((item, index) => (
              <div key={index} className="achievement-card">
                <div className="achievement-image-wrapper">
                  <img src={item.image} alt={item.title} />
                  <div className="achievement-year">{item.year}</div>
                </div>
                <div className="achievement-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <div className="achievement-line"></div>
                  <span className="achievement-label">ACHIEVEMENT</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 5 - Process ================= */}
      <section className="section-process">
        <div className="container">
          <div className="section-header">
            <span className="process-badge">WORKFLOW</span>
            <h2>
              Our <span>Process</span>
            </h2>
            <p>
              SPS started business operations over 25 years ago to help organizations
              improve software development productivity. Since then we have come a long way...
            </p>
          </div>

          <div className="process-grid">
            {processSteps.map((step) => (
              <div key={step.id} className="process-card">
                <div className="process-number">{step.id}</div>
                <div className="process-icon">{step.icon}</div>
                <span className="process-subtitle">{step.subtitle}</span>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
                <div className="process-bottom-line"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 6 - Knowledge & Innovation ================= */}
      <section className="section-knowledge">
        <div className="container">
          <div className="knowledge-wrapper">
            <div className="knowledge-left">
              <span className="knowledge-badge">Knowledge &amp; Innovation</span>
              <h2>
                Sharing Knowledge <br />
                &amp; Building Future Ideas
              </h2>
              <p>
                Sharing knowledge and inspiration is equally important in our professional
                spheres. It helps build strong visions, powerful collaborations, and
                long-term professional relationships.
              </p>

              <div className="knowledge-list">
                <div className="knowledge-item">
                  <div className="dot"></div>
                  <p>IoT MOOC launched in partnership with Avnet</p>
                </div>
                <div className="knowledge-item">
                  <div className="dot"></div>
                  <p>Monthly jumpstart sessions on chatbots</p>
                </div>
                <div className="knowledge-item">
                  <div className="dot"></div>
                  <p>IoT workshops for young &amp; old alike</p>
                </div>
                <div className="knowledge-item">
                  <div className="dot"></div>
                  <p>Monthly blockchain community events</p>
                </div>
              </div>

              <button className="knowledge-btn">Explore Careers</button>
            </div>

            <div className="knowledge-right">
              <div className="circle-main">
                <img
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=400&auto=format"
                  alt="IoT"
                />
              </div>
              <div className="circle-top">
                <img
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=300&auto=format"
                  alt="Workshop"
                />
              </div>
              <div className="circle-right">
                <div className="circle-right-content">
                  <div className="cmd-icon">⌘</div>
                  <h3>IoT MOOC</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        :global(body) {
          margin: 0;
          background: #ffffff;
          font-family: "Exo 2", sans-serif;
          color: #111827;
          overflow-x: hidden;
        }

        /* ========== CONTAINER & UTILITIES ========== */
        .container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
           min-height: 60vh;
  padding: 40px 0;
        }

        .section-header {
          text-align: center;
          max-width: 800px;
          margin: 0 auto 64px auto;
        }

        .section-header h2 {
          font-size: 48px;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 20px;
          letter-spacing: -0.02em;
        }

        .section-header p {
          font-size: 17px;
          line-height: 1.6;
          color: #4b5563;
        }

        /* ========== SECTION 1 - MISSION WITH GRADIENT ========== */
        .section-mission {
          padding: 100px 0;
          background: linear-gradient(135deg, #0a0e2e 0%, #0f1338 50%, #0a0e2e 100%);
        }

        .mission-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 32px;
        }

        .mission-card {
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(10px);
          padding: 48px;
          border-radius: 28px;
          border: 1px solid rgba(255, 255, 255, 0.15);
          transition: all 0.3s ease;
        }

        .mission-card:hover {
          transform: translateY(-4px);
          background: rgba(255, 255, 255, 0.12);
          border-color: rgba(255, 255, 255, 0.3);
          box-shadow: 0 20px 30px -12px rgba(0, 0, 0, 0.3);
        }

        .mission-card .chip {
          display: inline-block;
          background: rgba(255, 255, 255, 0.15);
          color: #a5f3ff;
          padding: 6px 14px;
          border-radius: 40px;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.3px;
          margin-bottom: 20px;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .mission-card h3 {
          font-size: 28px;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 20px;
        }

        .mission-card p {
          color: rgba(255, 255, 255, 0.85);
          line-height: 1.7;
        }

        /* ========== SECTION 2 - HERO FULL SCREEN MINUS 20PX ========== */
        .section-hero {
          min-height: calc(100vh - 20px);
          height: calc(100vh - 20px);
          display: flex;
          align-items: center;
          background: #ffffff;
          border-bottom: 1px solid #edf2f7;
          padding: 0;
        }

        .hero-wrapper {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: center;
          width: 100%;
        }

        .hero-left .hero-tag {
          display: inline-block;
          background: #eef2ff;
          color: #2563eb;
          padding: 6px 14px;
          border-radius: 40px;
          font-size: 12px;
          font-weight: 600;
          margin-bottom: 24px;
        }

        .hero-left h1 {
          font-size: 72px;
          font-weight: 700;
          color: #0f172a;
          line-height: 1.1;
          margin-bottom: 24px;
        }

        .hero-left p {
          font-size: 18px;
          color: #4b5563;
          line-height: 1.6;
          margin-bottom: 32px;
          max-width: 90%;
        }

        .hero-buttons {
          display: flex;
          gap: 18px;
          flex-wrap: wrap;
        }

        .btn-primary {
          background: #1e293b;
          color: white;
          border: none;
          padding: 14px 32px;
          border-radius: 40px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .btn-primary:hover {
          background: #0f172a;
          transform: translateY(-2px);
        }

        .btn-secondary {
          background: transparent;
          border: 1px solid #cbd5e1;
          padding: 14px 32px;
          border-radius: 40px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .btn-secondary:hover {
          background: #f8fafc;
          border-color: #94a3b8;
        }

        .hero-right {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }

        .team-card {
          background: #fafcff;
          padding: 28px;
          border-radius: 24px;
          border: 1px solid #eef2f6;
          transition: all 0.2s ease;
        }

        .team-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
          border-color: #cbdde9;
        }

        .team-card h3 {
          font-size: 20px;
          font-weight: 700;
          color: #2563eb;
          margin-bottom: 8px;
        }

        .team-card p {
          color: #4b5563;
          font-size: 14px;
        }

        /* ========== SECTION 3 - TIMELINE ========== */
        .section-timeline {
          padding: 80px 0;
          background: #f8fafc;
        }

        .timeline-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 32px;
        }

        .timeline-card {
          background: #ffffff;
          border-radius: 24px;
          overflow: hidden;
          border: 1px solid #eef2f6;
          transition: all 0.3s ease;
        }

        .timeline-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 30px -12px rgba(0, 0, 0, 0.1);
          border-color: #cbdde9;
        }

        .timeline-card img {
          width: 100%;
          height: 220px;
          object-fit: cover;
        }

        .timeline-content {
          padding: 20px;
        }

        .timeline-card h3 {
          font-size: 22px;
          font-weight: 700;
          color: #1e40af;
          margin-bottom: 10px;
        }

        .timeline-card p {
          color: #4b5563;
          line-height: 1.5;
        }

        /* ========== SECTION 4 - ACHIEVEMENTS ========== */
        .section-achievements {
          padding: 80px 0;
          background: #f1f5f9;
        }

        .achievements-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 32px;
        }

        .achievement-card {
          background: #ffffff;
          border-radius: 28px;
          overflow: hidden;
          transition: all 0.3s ease;
          border: 1px solid #eef2f6;
        }

        .achievement-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 30px -12px rgba(0, 0, 0, 0.1);
        }

        .achievement-image-wrapper {
          position: relative;
          height: 240px;
          overflow: hidden;
        }

        .achievement-image-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .achievement-card:hover .achievement-image-wrapper img {
          transform: scale(1.05);
        }

        .achievement-year {
          position: absolute;
          top: 16px;
          left: 16px;
          background: #1e3a8a;
          color: white;
          padding: 4px 14px;
          border-radius: 40px;
          font-weight: 700;
          font-size: 13px;
        }

        .achievement-content {
          padding: 28px;
        }

        .achievement-content h3 {
          font-size: 24px;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 14px;
        }

        .achievement-content p {
          color: #4b5563;
          line-height: 1.6;
          margin-bottom: 24px;
        }

        .achievement-line {
          width: 48px;
          height: 2px;
          background: #2563eb;
          margin-bottom: 12px;
        }

        .achievement-label {
          font-size: 11px;
          letter-spacing: 2px;
          color: #2563eb;
          font-weight: 600;
        }

        /* ========== SECTION 5 - PROCESS ========== */
        .section-process {
          padding: 80px 0;
          background: #ffffff;
        }

        .process-badge {
          display: inline-block;
          background: #eef2ff;
          color: #2563eb;
          padding: 6px 18px;
          border-radius: 40px;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 1px;
          margin-bottom: 24px;
        }

        .section-header h2 span {
          color: #2563eb;
        }

        .process-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 32px;
        }

        .process-card {
          background: #ffffff;
          border: 1px solid #eef2f8;
          border-radius: 28px;
          padding: 32px;
          position: relative;
          transition: all 0.3s ease;
        }

        .process-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 30px -12px rgba(0, 0, 0, 0.08);
          border-color: #cbdde9;
        }

        .process-number {
          position: absolute;
          top: 24px;
          right: 28px;
          font-size: 56px;
          font-weight: 800;
          color: #e2e8f0;
        }

        .process-icon {
          font-size: 44px;
          margin-bottom: 24px;
        }

        .process-subtitle {
          display: block;
          color: #2563eb;
          font-size: 12px;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 12px;
          font-weight: 600;
        }

        .process-card h3 {
          font-size: 26px;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 16px;
        }

        .process-card p {
          color: #4b5563;
          line-height: 1.6;
        }

        .process-bottom-line {
          margin-top: 28px;
          height: 2px;
          background: linear-gradient(90deg, #2563eb, transparent);
        }

        /* ========== SECTION 6 - KNOWLEDGE ========== */
        .section-knowledge {
          padding: 80px 0;
          background: #f8fafc;
        }

        .knowledge-wrapper {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 56px;
          align-items: center;
        }

        .knowledge-badge {
          display: inline-block;
          background: #eef2ff;
          color: #2563eb;
          padding: 6px 18px;
          border-radius: 40px;
          font-size: 12px;
          font-weight: 600;
          margin-bottom: 24px;
        }

        .knowledge-left h2 {
          font-size: 44px;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 20px;
          line-height: 1.2;
        }

        .knowledge-left > p {
          color: #4b5563;
          line-height: 1.7;
          margin-bottom: 32px;
          font-size: 17px;
        }

        .knowledge-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: 40px;
        }

        .knowledge-item {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .dot {
          width: 8px;
          height: 8px;
          background: #2563eb;
          border-radius: 50%;
        }

        .knowledge-item p {
          color: #4b5563;
        }

        .knowledge-btn {
          background: #1e293b;
          color: white;
          border: none;
          padding: 12px 32px;
          border-radius: 40px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .knowledge-btn:hover {
          background: #0f172a;
          transform: translateY(-2px);
        }

        .knowledge-right {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 400px;
        }

        .circle-main {
          width: 240px;
          height: 240px;
          border-radius: 50%;
          overflow: hidden;
          border: 5px solid white;
          box-shadow: 0 20px 35px -12px rgba(0, 0, 0, 0.2);
        }

        .circle-main img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .circle-top {
          position: absolute;
          top: 10px;
          left: 20px;
          width: 120px;
          height: 120px;
          border-radius: 50%;
          overflow: hidden;
          border: 4px solid white;
          box-shadow: 0 12px 20px rgba(0, 0, 0, 0.15);
        }

        .circle-top img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .circle-right {
          position: absolute;
          bottom: 30px;
          right: 20px;
          width: 150px;
          height: 150px;
          border-radius: 50%;
          background: white;
          border: 4px solid #eef2ff;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 15px 25px rgba(0, 0, 0, 0.1);
        }

        .circle-right-content {
          text-align: center;
        }

        .cmd-icon {
          font-size: 44px;
          margin-bottom: 6px;
        }

        .circle-right-content h3 {
          font-size: 18px;
          font-weight: 700;
          color: #0f172a;
        }

        /* ========== RESPONSIVE ========== */
        @media (max-width: 968px) {
          .hero-wrapper {
            grid-template-columns: 1fr;
            gap: 48px;
          }

          .knowledge-wrapper {
            grid-template-columns: 1fr;
            gap: 48px;
          }

          .hero-left h1 {
            font-size: 52px;
          }

          .section-header h2 {
            font-size: 36px;
          }

          .knowledge-left h2 {
            font-size: 36px;
          }

          .section-hero {
            min-height: auto;
            height: auto;
            padding: 100px 0;
          }
        }

        @media (max-width: 640px) {
          .hero-right {
            grid-template-columns: 1fr;
          }

          .timeline-grid {
            grid-template-columns: 1fr;
          }

          .achievements-grid {
            grid-template-columns: 1fr;
          }

          .process-grid {
            grid-template-columns: 1fr;
          }

          .circle-main {
            width: 180px;
            height: 180px;
          }

          .circle-top {
            width: 90px;
            height: 90px;
          }

          .circle-right {
            width: 110px;
            height: 110px;
          }

          .cmd-icon {
            font-size: 32px;
          }

          .mission-card {
            padding: 32px;
          }
        }
      `}</style>
    </>
  );
}