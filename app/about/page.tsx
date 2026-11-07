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

const CHECKS = [
  "15 years building businesses and scaling brands.",
  "Based in Austin, working across Southeast Asia.",
  "Founder of 100Bold, a full-service growth agency.",
];

const FAQ: [string, string][] = [
  ["How much of my time does this take?", "3 to 4 hours upfront for voice capture sessions. After that, less than 30 minutes per month for strategy alignment. We handle everything else."],
  ["How long until I see results?", "Most clients see meaningful engagement within the first 30 days. Inbound conversations typically start within 60 to 90 days. Growth accelerates from month 3 onward."],
  ["Do you manage other platforms besides LinkedIn?", "LinkedIn is our primary focus. For clients who need it, we also manage content on company pages and provide full-service marketing through 100Bold, including paid ads, SEO, video production, and brand strategy."],
  ["Who writes the content?", "Our team writes every post, but it sounds like you. The voice capture process ensures your thinking, your stories, and your expertise come through in every piece."],
  ["What industries do you work with?", "We work across multiple industries with proven results in legal, real estate, investment, import/export, and manufacturing. The strategy adapts to your market and your target audience."],
];

export default function AboutPage() {
  return (
    <>
      <SiteNav active="about" />

      <main className="ab">
        {/* 1. Statement hero */}
        <section className="ab-hero">
          <div className="ab-wrap">
            <h1 className="ab-title reveal">
              We don&apos;t run your LinkedIn for likes.
              <span className="accent"> We run it for business.</span>
            </h1>
            <p className="ab-lead reveal">
              The deals, the partnerships, the speaking invitations. It all starts with showing up. The Mark is the system that makes it happen.
            </p>
          </div>
        </section>

        {/* 2. Founder story + photo */}
        <section className="ab-story">
          <div className="ab-wrap ab-split">
            <div className="ab-text reveal">
              <div className="csx-label">Behind The Mark</div>
              <h2 className="ab-h2">Built by someone who has done the work.</h2>
              <p className="ab-body">
                <strong>Minh Mac</strong> is the Founder of 100Bold, a growth agency based in Austin, Texas. Over 15 years he has built businesses, scaled brands, and learned what it takes to turn a founder&apos;s LinkedIn into a real growth channel.
              </p>
              <ul className="ab-checks">
                {CHECKS.map((c) => (
                  <li key={c}><span className="ab-check-icon" aria-hidden>&#10003;</span>{c}</li>
                ))}
              </ul>
              <a href="https://www.linkedin.com/in/minhlaunch/" className="founder-btn" target="_blank" rel="noopener noreferrer">
                Connect on LinkedIn <span aria-hidden>&rarr;</span>
              </a>
            </div>
            <div className="ab-photo reveal">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/team/minh-mac.webp" alt="Minh Mac, Founder of 100Bold" />
              <div className="ab-photo-tag">
                <span className="ab-photo-name">Minh Mac</span>
                <span className="ab-photo-role">Founder, 100Bold</span>
              </div>
            </div>
          </div>
        </section>

        {/* 3. FAQ */}
        <section className="ab-faq">
          <div className="ab-wrap">
            <div className="csx-head">
              <div className="csx-label reveal">Questions</div>
              <h2 className="csx-h2 reveal">Frequently <span className="accent">asked</span></h2>
              <span className="ab-underline reveal" aria-hidden />
            </div>
            <div className="ab-faq-list">
              {FAQ.map(([q, a], i) => (
                <div key={q} className="ab-faq-card reveal">
                  <span className="ab-faq-num">{i + 1}</span>
                  <div>
                    <h3 className="ab-faq-q">{q}</h3>
                    <p className="ab-faq-a">{a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <CtaSection />

      <SiteFooter />
      <MobileApplyBar />
      <RevealObserver />
    </>
  );
}
