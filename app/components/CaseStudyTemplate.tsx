import type { ReactNode } from "react";
import SiteNav from "./SiteNav";
import SiteFooter from "./SiteFooter";
import CtaSection from "./CtaSection";
import MobileApplyBar from "./MobileApplyBar";
import RevealObserver from "../RevealObserver";

export type CaseStudyData = {
  firstName: string;
  name: string;
  hero: { src: string; alt: string; position: string };
  avatar: { src: string; position?: string };
  quote: string;
  work: ReactNode[];
  bigNumbers: { value: string; label: string }[];
  results: string[];
  milestones: { kicker?: string; title: string; desc: string }[];
  proof: {
    role: string;
    company: string;
    followers: string;
    followersExtra?: string;
    tags: string;
    period: string;
    headline: string;
    headlineLabel: string;
    line1: string;
    line2: string;
    inbound: { main: string; sub?: string }[];
  };
};

export default function CaseStudyTemplate({ d }: { d: CaseStudyData }) {
  const p = d.proof;
  return (
    <>
      <SiteNav active="cases" />

      {/* HERO: large photo + overlapping name card */}
      <section className="cs-hero">
        <div className="site-container">
          <a href="/case-studies" className="cs-back">&larr; Back to Case Studies</a>
          <div className="cs-hero-frame">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={d.hero.src} alt={d.hero.alt} className="cs-hero-img" style={{ objectPosition: d.hero.position }} />
            <div className="cs-hero-shade" />
          </div>
          <div className="cs-hero-card">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={d.avatar.src} alt="" className="cs-hero-avatar" style={{ objectPosition: d.avatar.position ?? "center" }} />
            <div>
              <div className="cs-hero-name">{d.name}<span className="accent">.</span></div>
              <p className="cs-hero-quote">&ldquo;{d.quote}&rdquo;</p>
            </div>
          </div>
        </div>
      </section>

      {/* THE WORK */}
      <section className="cs-section cs-bg-mid">
        <div className="site-narrow">
          <h2 className="cs-h2 reveal">The work.</h2>
          <div className="cs-kicker reveal">What we did</div>
          {d.work.map((para, i) => (
            <p key={i} className="cs-body reveal">{para}</p>
          ))}
        </div>
      </section>

      {/* RESULTS (big numbers + checklist in one block) */}
      <section className="cs-section cs-bg-navy">
        <div className="site-container">
          <div className="cs-results reveal">
            <div className="cs-kicker">Results</div>
            <div className="cs-bignums">
              {d.bigNumbers.map((n) => (
                <div key={n.label} className="cs-bignum">
                  <div className="cs-bignum-value">{n.value}</div>
                  <div className="cs-bignum-label">{n.label}</div>
                </div>
              ))}
            </div>
            <div className="cs-results-grid">
              {d.results.map((item) => (
                <div key={item} className="cs-check">
                  <span className="cs-check-icon">&#10003;</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* KEY MILESTONES */}
      <section className="cs-section cs-bg-deep">
        <div className="site-container">
          <div className="section-label reveal">Key Milestones</div>
          <div className="cs-milestones-grid reveal">
            {d.milestones.map((m, i) => (
              <div key={m.title} className="cs-milestone">
                <div className="cs-milestone-num">0{i + 1}</div>
                {m.kicker && <div className="cs-milestone-kicker">{m.kicker}</div>}
                <h3 className="cs-milestone-title">{m.title}</h3>
                <p className="cs-milestone-desc">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE PROOF: 3 designed cards, centre card raised */}
      <section className="cs-section cs-bg-navy">
        <div className="site-container" style={{ textAlign: "center" }}>
          <div className="section-label reveal">Take a look at</div>
          <h2 className="cs-h2 reveal" style={{ marginBottom: 56 }}>
            The <span className="accent">proof</span>
          </h2>

          <div className="proof-track">
            {/* Card 1: LinkedIn profile */}
            <div className="proof-card proof-card--profile">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={d.avatar.src} alt="" className="proof-avatar" style={{ objectPosition: d.avatar.position ?? "center" }} />
              <div className="proof-name">{d.name}</div>
              <div className="proof-role">{p.role}</div>
              <div className="proof-company">{p.company}</div>
              <div className="proof-rule" />
              <div className="proof-stat">{p.followers}</div>
              <div className="proof-stat-label">Followers</div>
              {p.followersExtra && <div className="proof-extra">{p.followersExtra}</div>}
              <div className="proof-tags">{p.tags}</div>
            </div>

            {/* Card 2: headline achievement (raised) */}
            <div className="proof-card proof-card--hero">
              <div className="proof-period">{p.period}</div>
              <div className="proof-big">{p.headline}</div>
              <div className="proof-big-label">{p.headlineLabel}</div>
              <div className="proof-rule proof-rule--short" />
              <div className="proof-line1">{p.line1}</div>
              <div className="proof-line2">{p.line2}</div>
            </div>

            {/* Card 3: inbound pipeline */}
            <div className="proof-card proof-card--inbound">
              <div className="proof-period">Inbound Pipeline</div>
              <div className="proof-inbound-title">What LinkedIn delivered</div>
              {p.inbound.map((item) => (
                <div key={item.main} className="proof-inbound-item">
                  <span className="proof-dot" />
                  <span>
                    <span className="proof-inbound-main">{item.main}</span>
                    {item.sub && <span className="proof-inbound-sub">{item.sub}</span>}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="proof-swipe-hint">Swipe to see more &rarr;</div>
        </div>
      </section>

      <CtaSection
        title={<>Want results like <span className="accent">{d.firstName}?</span></>}
        sub="We take on a limited number of clients at a time. Tell us your goal and we'll show you what we'd build."
        showEmail={false}
      />

      <SiteFooter />
      <MobileApplyBar />
      <RevealObserver />
    </>
  );
}
