import RevealObserver from "../RevealObserver";
import SiteNav from "../components/SiteNav";
import SiteFooter from "../components/SiteFooter";
import CtaSection from "../components/CtaSection";
import MobileApplyBar from "../components/MobileApplyBar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies | The Mark",
  description:
    "Real results from real founders. See how The Mark turned zero LinkedIn presence into 1M+ impressions, speaker invitations, and inbound deals.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <SiteNav active="cases" />

      {/* Hero */}
      <section className="page-hero" style={{ background: "#0B1322", padding: "160px 64px 80px", textAlign: "center" }}>
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
      <section style={{ background: "#0B1322", padding: "0 64px 120px" }}>
        <div className="cards-2col" style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>

          {/* Case 1: Tung Cao */}
          <a href="/case-studies/tung-cao" style={{ textDecoration: "none", border: "1px solid rgba(201,163,106,0.15)", borderRadius: 10, overflow: "hidden", transition: "border-color 0.3s ease" }}>
            <div style={{ height: 300, overflow: "hidden" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/tung-cao/tc-imc-group.webp" alt="Tung Cao at International Manufacturing Congress" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 60%", display: "block" }} />
            </div>
            <div style={{ padding: "32px 28px" }}>
              <div style={{ fontSize: 28, fontWeight: 700, color: "var(--white)", marginBottom: 4 }}>Tung Cao</div>
              <div style={{ fontSize: 16, fontWeight: 500, color: "var(--gold)", marginBottom: 20 }}>Co-Founder, 100B Global</div>
              <p style={{ fontSize: 17, fontWeight: 400, color: "var(--muted-lt)", lineHeight: 1.65, marginBottom: 28 }}>
                From zero to 1M+ impressions in 12 months. 2 speaker invitations, daily inbound from decision-makers worldwide.
              </p>
              <div style={{ display: "flex", gap: 40, marginBottom: 28 }}>
                <div>
                  <div style={{ fontSize: 40, fontWeight: 700, color: "var(--gold)", lineHeight: 1 }}>1M+</div>
                  <div style={{ fontSize: 13, fontWeight: 600, letterSpacing: 1.5, color: "var(--muted-lt)", textTransform: "uppercase", marginTop: 8 }}>Impressions</div>
                </div>
                <div>
                  <div style={{ fontSize: 40, fontWeight: 700, color: "var(--gold)", lineHeight: 1 }}>7K</div>
                  <div style={{ fontSize: 13, fontWeight: 600, letterSpacing: 1.5, color: "var(--muted-lt)", textTransform: "uppercase", marginTop: 8 }}>Followers</div>
                </div>
              </div>
              <span className="cs-case-link">Read the case study &rarr;</span>
            </div>
          </a>

          {/* Case 2: Loc Dang */}
          <a href="/case-studies/loc-dang" style={{ textDecoration: "none", border: "1px solid rgba(201,163,106,0.15)", borderRadius: 10, overflow: "hidden", transition: "border-color 0.3s ease" }}>
            <div style={{ height: 300, overflow: "hidden" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/loc-dang/ld-office-portrait.webp" alt="Loc Dang at his office in Austin" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 25%", display: "block" }} />
            </div>
            <div style={{ padding: "32px 28px" }}>
              <div style={{ fontSize: 28, fontWeight: 700, color: "var(--white)", marginBottom: 4 }}>Loc Dang</div>
              <div style={{ fontSize: 16, fontWeight: 500, color: "var(--gold)", marginBottom: 20 }}>Founder, Dang Law Group</div>
              <p style={{ fontSize: 17, fontWeight: 400, color: "var(--muted-lt)", lineHeight: 1.65, marginBottom: 28 }}>
                Never used social media. 49K+ impressions and 3,596 followers in 4 months, reaching attorneys, founders, and CEOs.
              </p>
              <div style={{ display: "flex", gap: 40, marginBottom: 28 }}>
                <div>
                  <div style={{ fontSize: 40, fontWeight: 700, color: "var(--gold)", lineHeight: 1 }}>49K+</div>
                  <div style={{ fontSize: 13, fontWeight: 600, letterSpacing: 1.5, color: "var(--muted-lt)", textTransform: "uppercase", marginTop: 8 }}>Impressions</div>
                </div>
                <div>
                  <div style={{ fontSize: 40, fontWeight: 700, color: "var(--gold)", lineHeight: 1 }}>3,596</div>
                  <div style={{ fontSize: 13, fontWeight: 600, letterSpacing: 1.5, color: "var(--muted-lt)", textTransform: "uppercase", marginTop: 8 }}>Followers</div>
                </div>
              </div>
              <span className="cs-case-link">Read the case study &rarr;</span>
            </div>
          </a>

        </div>
      </section>

      <CtaSection />

      <SiteFooter />
      <MobileApplyBar />

      <RevealObserver />
    </>
  );
}
