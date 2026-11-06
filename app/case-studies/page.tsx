import RevealObserver from "../RevealObserver";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies | The Mark",
  description:
    "Real results from real founders. See how The Mark turned zero LinkedIn presence into 1M+ impressions, speaker invitations, and inbound deals.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <nav>
        <a href="/" className="nav-logo">
          <div className="nav-wordmark">The Mark</div>
        </a>
        <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
          <a href="/case-studies" style={{ fontSize: 14, fontWeight: 500, color: "var(--white)", textDecoration: "none" }}>Case Studies</a>
          <a href="/about" style={{ fontSize: 14, fontWeight: 500, color: "var(--muted-lt)", textDecoration: "none" }}>About</a>
          <a href="/#apply" className="nav-cta">Apply to Work With Us</a>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ background: "#0A1628", padding: "160px 64px 80px", textAlign: "center" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div className="section-label">Case Studies</div>
          <h1 style={{ fontFamily: "var(--font-display), 'Sora', sans-serif", fontSize: "clamp(40px, 5vw, 64px)", fontWeight: 700, color: "var(--white)", lineHeight: 1.1, marginBottom: 20 }}>
            The <span style={{ color: "var(--gold)" }}>results.</span>
          </h1>
          <p style={{ fontSize: 18, fontWeight: 400, color: "var(--muted-lt)", lineHeight: 1.7, maxWidth: 560, margin: "0 auto" }}>
            The results you can expect from working with us.
          </p>
        </div>
      </section>

      {/* Case Study Cards */}
      <section style={{ background: "#0A1628", padding: "0 64px 120px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>

          {/* Case 1: Tung Cao */}
          <a href="/case-studies/tung-cao" style={{ textDecoration: "none", border: "1px solid rgba(91,155,213,0.15)", borderRadius: 10, overflow: "hidden", transition: "border-color 0.3s ease" }}>
            <div style={{ height: 300, overflow: "hidden" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/tung-cao/tc-imc-group.webp" alt="Tung Cao at International Manufacturing Congress" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 60%", display: "block" }} />
            </div>
            <div style={{ padding: "32px 28px" }}>
              <div style={{ fontSize: 28, fontWeight: 700, color: "var(--white)", marginBottom: 4 }}>Tung Cao</div>
              <div style={{ fontSize: 14, fontWeight: 500, color: "var(--gold)", marginBottom: 20 }}>Co-Founder, 100B Global</div>
              <p style={{ fontSize: 17, fontWeight: 400, color: "var(--muted-lt)", lineHeight: 1.65, marginBottom: 28 }}>
                From zero to 1M+ impressions in 12 months. 2 speaker invitations, daily inbound from decision-makers worldwide.
              </p>
              <div style={{ display: "flex", gap: 40, marginBottom: 28 }}>
                <div>
                  <div style={{ fontSize: 40, fontWeight: 700, color: "var(--gold)", lineHeight: 1 }}>1M+</div>
                  <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: 1.5, color: "var(--muted)", textTransform: "uppercase", marginTop: 6 }}>Impressions</div>
                </div>
                <div>
                  <div style={{ fontSize: 40, fontWeight: 700, color: "var(--gold)", lineHeight: 1 }}>7K</div>
                  <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: 1.5, color: "var(--muted)", textTransform: "uppercase", marginTop: 6 }}>Followers</div>
                </div>
              </div>
              <span className="cs-case-link">Read the case study &rarr;</span>
            </div>
          </a>

          {/* Case 2: Loc Dang */}
          <a href="/case-studies/loc-dang" style={{ textDecoration: "none", border: "1px solid rgba(91,155,213,0.15)", borderRadius: 10, overflow: "hidden", transition: "border-color 0.3s ease" }}>
            <div style={{ height: 300, overflow: "hidden" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/loc-dang/ld-office-portrait.webp" alt="Loc Dang at his office in Austin" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 25%", display: "block" }} />
            </div>
            <div style={{ padding: "32px 28px" }}>
              <div style={{ fontSize: 28, fontWeight: 700, color: "var(--white)", marginBottom: 4 }}>Loc Dang</div>
              <div style={{ fontSize: 14, fontWeight: 500, color: "var(--gold)", marginBottom: 20 }}>Founder, Dang Law Group</div>
              <p style={{ fontSize: 17, fontWeight: 400, color: "var(--muted-lt)", lineHeight: 1.65, marginBottom: 28 }}>
                Never used social media. 49K+ impressions and 3,596 followers in 4 months, reaching attorneys, founders, and CEOs.
              </p>
              <div style={{ display: "flex", gap: 40, marginBottom: 28 }}>
                <div>
                  <div style={{ fontSize: 40, fontWeight: 700, color: "var(--gold)", lineHeight: 1 }}>49K+</div>
                  <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: 1.5, color: "var(--muted)", textTransform: "uppercase", marginTop: 6 }}>Impressions</div>
                </div>
                <div>
                  <div style={{ fontSize: 40, fontWeight: 700, color: "var(--gold)", lineHeight: 1 }}>3,596</div>
                  <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: 1.5, color: "var(--muted)", textTransform: "uppercase", marginTop: 6 }}>Followers</div>
                </div>
              </div>
              <span className="cs-case-link">Read the case study &rarr;</span>
            </div>
          </a>

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
