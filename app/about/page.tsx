import type { Metadata } from "next";
import RevealObserver from "../RevealObserver";
import SiteNav from "../components/SiteNav";
import SiteFooter from "../components/SiteFooter";
import CtaSection from "../components/CtaSection";
import MobileApplyBar from "../components/MobileApplyBar";

export const metadata: Metadata = {
  title: "About | The Mark",
  description:
    "The Mark is built by Minh Mac, Founder of 100Bold. 15 years building brands across Austin and Southeast Asia.",
};

export default function AboutPage() {
  return (
    <>
      <SiteNav active="about" />

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
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <div className="section-label reveal">Questions</div>
          <h2 className="what-headline reveal" style={{ marginBottom: 48 }}>Frequently asked.</h2>
          {[
            ["How much of my time does this take?", "3 to 4 hours upfront for voice capture sessions. After that, less than 30 minutes per month for strategy alignment. We handle everything else."],
            ["How long until I see results?", "Most clients see meaningful engagement within the first 30 days. Inbound conversations typically start within 60 to 90 days. Growth accelerates from month 3 onward."],
            ["Do you manage other platforms besides LinkedIn?", "LinkedIn is our primary focus. For clients who need it, we also manage content on company pages and provide full-service marketing through 100Bold, including paid ads, SEO, video production, and brand strategy."],
            ["Who writes the content?", "Our team writes every post, but it sounds like you. The voice capture process ensures your thinking, your stories, and your expertise come through in every piece."],
            ["What industries do you work with?", "We work across multiple industries with proven results in legal, real estate, investment, import/export, and manufacturing. The strategy adapts to your market and your target audience."],
          ].map(([q, a]) => (
            <div key={q} className="reveal" style={{ borderBottom: "1px solid rgba(91,155,213,0.1)", padding: "28px 0" }}>
              <h3 style={{ fontSize: 20, fontWeight: 600, color: "var(--white)", marginBottom: 12, lineHeight: 1.45 }}>{q}</h3>
              <p style={{ fontSize: 18, fontWeight: 400, color: "var(--muted-lt)", lineHeight: 1.8 }}>{a}</p>
            </div>
          ))}
        </div>
      </section>

      <CtaSection />

      <SiteFooter />
      <MobileApplyBar />

      <RevealObserver />
    </>
  );
}
