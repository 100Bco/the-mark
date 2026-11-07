import RevealObserver from "../RevealObserver";
import SiteNav from "../components/SiteNav";
import SiteFooter from "../components/SiteFooter";
import CtaSection from "../components/CtaSection";
import MobileApplyBar from "../components/MobileApplyBar";
import CaseCard from "../components/CaseCard";
import { CASES } from "../components/cases";
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
      <section className="page-hero" style={{ background: "#091020", padding: "160px 64px 80px", textAlign: "center" }}>
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
      <section style={{ background: "#091020", padding: "0 64px 120px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div className="reveal cards-2col case-grid">
            {CASES.map((c) => <CaseCard key={c.href} d={c} />)}
          </div>
        </div>
      </section>

      <CtaSection />

      <SiteFooter />
      <MobileApplyBar />

      <RevealObserver />
    </>
  );
}
