import type { Metadata } from "next";
import RevealObserver from "../RevealObserver";

export const metadata: Metadata = {
  title: "About | The Mark",
  description:
    "The Mark is built by Minh Mac, Founder of 100Bold. 15 years building brands across Austin and Southeast Asia.",
};

export default function AboutPage() {
  return (
    <>
      <nav>
        <a href="/" className="nav-logo">
          <div className="nav-wordmark">The Mark</div>
        </a>
        <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
          <a href="/case-studies" style={{ fontSize: 14, fontWeight: 500, color: "var(--muted-lt)", textDecoration: "none" }}>Case Studies</a>
          <a href="/about" style={{ fontSize: 14, fontWeight: 500, color: "var(--white)", textDecoration: "none" }}>About</a>
          <a href="/#apply" className="nav-cta">Apply to Work With Us</a>
        </div>
      </nav>

      {/* About Minh Mac */}
      <section className="about" style={{ paddingTop: 160 }}>
        <div className="about-inner">
          <div className="about-left reveal">
            <div className="about-label">Behind The Mark</div>
            <h2 className="about-headline">Built by someone who has done the work.</h2>
            <p className="about-copy"><strong>Minh Mac</strong> is the Founder of 100Bold, a growth agency based in Austin, Texas. Over 15 years he has built businesses, scaled brands, and learned what it takes to turn a founder&apos;s LinkedIn into a real growth channel.</p>
            <p className="about-copy">The deals, the partnerships, the speaking invitations. It all starts with showing up. The Mark is the system that makes it happen.</p>
            <a href="https://linkedin.com/in/minhbmac" className="about-linkedin" target="_blank" rel="noopener noreferrer">Connect on LinkedIn &rarr;</a>
          </div>
          <div className="about-right reveal">
            <div style={{ position: "relative", overflow: "hidden", border: "1px solid rgba(214,206,188,0.12)" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/team/minh-mac.webp"
                alt="Minh Mac, Founder of 100Bold"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
              <div style={{ padding: "20px 24px", background: "rgba(255,255,255,0.04)" }}>
                <div className="about-card-name">Minh Mac</div>
                <div className="about-card-title">Founder, 100Bold</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: "#0A1628", padding: "100px 64px" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <div className="section-label reveal">Questions</div>
          <h2 className="what-headline reveal" style={{ marginBottom: 48 }}>Frequently asked.</h2>
          {[
            ["How much of my time does this take?", "3 to 4 hours upfront for voice capture sessions. After that, less than 30 minutes per month for strategy alignment. We handle everything else."],
            ["How long until I see results?", "Most clients see meaningful engagement within the first 30 days. Inbound conversations typically start within 60 to 90 days. Growth accelerates from month 3 onward."],
            ["Do you manage other platforms besides LinkedIn?", "LinkedIn is our primary focus. For clients who need it, we also manage content on company pages and provide full-service marketing through 100Bold, including paid ads, SEO, video production, and brand strategy."],
            ["Who writes the content?", "Our team writes every post, but it sounds like you. The voice capture process ensures your thinking, your stories, and your expertise come through in every piece."],
            ["What industries do you work with?", "We work across multiple industries with proven results in legal, real estate, investment, import/export, and manufacturing. The strategy adapts to your market and your target audience."],
          ].map(([q, a]) => (
            <div key={q} className="reveal" style={{ borderBottom: "1px solid rgba(91,155,213,0.1)", padding: "24px 0" }}>
              <h3 style={{ fontSize: 17, fontWeight: 500, color: "var(--white)", marginBottom: 10, lineHeight: 1.5 }}>{q}</h3>
              <p style={{ fontSize: 16, fontWeight: 400, color: "var(--muted-lt)", lineHeight: 1.85 }}>{a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CLOSING CTA */}
      <section id="apply" style={{ background: "var(--navy)", padding: "140px 64px", textAlign: "center", borderTop: "1px solid rgba(91,155,213,0.1)" }}>
        <h2
          className="reveal"
          style={{
            fontFamily: "var(--font-display), 'Sora', sans-serif",
            fontSize: "clamp(36px, 5vw, 56px)",
            fontWeight: 700,
            color: "var(--white)",
            lineHeight: 1.15,
            marginBottom: 20,
            letterSpacing: -0.5,
          }}
        >
          Become the best-known name<br />
          <span style={{ color: "var(--gold)" }}>in your industry.</span>
        </h2>
        <p className="reveal" style={{ fontSize: 18, fontWeight: 400, color: "var(--muted)", marginBottom: 48 }}>
          Limited spots. Application only.
        </p>
        <a
          href="mailto:start@100bold.co?subject=The Mark - Application"
          className="btn-primary reveal"
          style={{ padding: "18px 48px", fontSize: 14 }}
        >
          Apply to Work With Us
        </a>
        <p className="reveal" style={{ fontSize: 15, fontWeight: 400, color: "var(--muted)", marginTop: 24 }}>
          Or reach us directly at{" "}
          <a href="mailto:start@100bold.co" style={{ color: "var(--gold)", textDecoration: "none" }}>start@100bold.co</a>
        </p>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#080E1A", padding: "80px 64px 0", borderTop: "1px solid rgba(91,155,213,0.08)" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div className="footer-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 48, marginBottom: 64 }}>
            <div>
              <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 2, color: "var(--gold)", textTransform: "uppercase", marginBottom: 20 }}>Contact</div>
              <a href="mailto:start@100bold.co" style={{ fontSize: 15, fontWeight: 400, color: "var(--muted-lt)", textDecoration: "none", display: "block", marginBottom: 12 }}>start@100bold.co</a>
              <a href="https://linkedin.com/in/minhbmac" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 40, height: 40, borderRadius: "50%", border: "1px solid rgba(91,155,213,0.2)", marginTop: 12, marginBottom: 20 }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="var(--muted-lt)">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <p style={{ fontSize: 13, fontWeight: 400, color: "var(--muted)" }}>Austin, Texas</p>
            </div>
            <div>
              <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 2, color: "var(--gold)", textTransform: "uppercase", marginBottom: 20 }}>Pages</div>
              {[
                ["Home", "/"],
                ["Case Studies", "/case-studies"],
                ["About", "/about"],
              ].map(([label, href]) => (
                <a key={label} href={href} style={{ fontSize: 15, fontWeight: 400, color: "var(--muted-lt)", textDecoration: "none", display: "block", marginBottom: 12 }}>{label}</a>
              ))}
            </div>
            <div>
              <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 2, color: "var(--gold)", textTransform: "uppercase", marginBottom: 20 }}>Services</div>
              {[
                "LinkedIn Management",
                "Content Strategy",
                "Outreach & Conversion",
                "Amplification Network",
              ].map((item) => (
                <p key={item} style={{ fontSize: 15, fontWeight: 400, color: "var(--muted-lt)", marginBottom: 12 }}>{item}</p>
              ))}
            </div>
          </div>
          <div style={{ overflow: "hidden", padding: "40px 0 48px", textAlign: "center" }}>
            <div className="footer-brand-glow" style={{
              fontFamily: "var(--font-display), 'Sora', sans-serif",
              fontSize: "clamp(60px, 10vw, 140px)",
              fontWeight: 700,
              letterSpacing: 8,
              textTransform: "uppercase",
              lineHeight: 1,
              whiteSpace: "nowrap",
              userSelect: "none",
              color: "rgba(91,155,213,0.06)",
              backgroundImage: "linear-gradient(90deg, rgba(91,155,213,0.06) 0%, rgba(91,155,213,0.06) 48%, rgba(91,155,213,1) 50%, rgba(91,155,213,0.06) 52%, rgba(91,155,213,0.06) 100%)",
              backgroundSize: "300% 100%",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              THE MARK
            </div>
          </div>
          <div className="footer-bar" style={{ borderTop: "1px solid rgba(91,155,213,0.08)", padding: "24px 0", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <p style={{ fontSize: 13, fontWeight: 400, color: "var(--muted)" }}>&copy; 2026 The Mark by 100Bold</p>
            <p style={{ fontSize: 13, fontWeight: 400, color: "var(--muted)" }}>Application Only</p>
          </div>
        </div>
      </footer>

      <RevealObserver />
    </>
  );
}
