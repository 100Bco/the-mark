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

      {/* Footer */}
      <footer>
        <div className="footer-left">The Mark by 100Bold. Austin, Texas</div>
        <div className="footer-right">Application Only</div>
      </footer>
    </>
  );
}
