import RevealObserver from "./RevealObserver";
import JourneyTimeline from "./JourneyTimeline";
import SiteNav from "./components/SiteNav";
import SiteFooter from "./components/SiteFooter";
import CtaSection from "./components/CtaSection";
import MobileApplyBar from "./components/MobileApplyBar";
import WhatWeDoCards from "./components/WhatWeDoCards";
import CaseCard from "./components/CaseCard";
import { CASES } from "./components/cases";

export default function Home() {
  return (
    <>
      {/* NAVIGATION */}
      <SiteNav />

      {/* HERO */}
      <section className="hero">
        <div className="hero-eyebrow">The Mark by 100Bold</div>

        <h1 className="hero-headline">
          Done-for-you<br className="br-m" /> LinkedIn growth for{" "}
          <br className="br-m" />
          <span style={{ color: "var(--gold)" }}>founders and CEOs.</span>
        </h1>

        <p className="hero-sub">
          We build your LinkedIn, generate inbound leads, and turn your
          profile into a pipeline of deals and partnerships.
        </p>

        <div className="hero-cta-group">
          <a href="/apply" className="btn-primary">
            Apply to Work With Us
          </a>
          <a href="#results" className="btn-ghost">
            See Client Results
          </a>
        </div>

        {/* Stats bar */}
        <div
          className="stats-bar-wrap"
          style={{
            display: "flex",
            gap: 64,
            justifyContent: "center",
            marginTop: 64,
            opacity: 0,
            animation: "fadeUp 0.8s 0.9s forwards",
          }}
        >
          {[
            ["1M+", "Impressions"],
            ["10K+", "Followers"],
            ["89%", "Out-of-Network"],
          ].map(([num, label]) => (
            <div
              key={label}
              className="stat-cell"
              style={{
                textAlign: "center",
                padding: "0 32px",
                borderRight: label !== "Out-of-Network" ? "1px solid rgba(209,172,114,0.2)" : "none",
                paddingRight: label !== "Out-of-Network" ? 64 : 32,
              }}
            >
              <div
                className="stat-num"
                style={{
                  fontSize: 48,
                  fontWeight: 700,
                  color: "var(--gold)",
                  lineHeight: 1,
                  marginBottom: 10,
                }}
              >
                {num}
              </div>
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  letterSpacing: 2,
                  color: "var(--muted-lt)",
                  textTransform: "uppercase",
                }}
              >
                {label}
              </div>
            </div>
          ))}
        </div>

        {/* Trust line */}
        <div
          className="trust-line"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 16,
            marginTop: 48,
            opacity: 0,
            animation: "fadeUp 0.8s 1.1s forwards",
          }}
        >
          <div style={{ display: "flex", marginRight: 4 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/tung-cao/Tung Cao Photo.png"
              alt=""
              style={{
                width: 60,
                height: 60,
                borderRadius: "50%",
                objectFit: "cover",
                border: "3px solid var(--navy)",
              }}
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/loc-dang/loc-dang-headshot.webp"
              alt=""
              style={{
                width: 60,
                height: 60,
                borderRadius: "50%",
                objectFit: "cover",
                objectPosition: "center 20%",
                border: "3px solid var(--navy)",
                marginLeft: -14,
              }}
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/lezlie-avatar.webp"
              alt=""
              style={{
                width: 60,
                height: 60,
                borderRadius: "50%",
                objectFit: "cover",
                objectPosition: "center 30%",
                border: "3px solid var(--navy)",
                marginLeft: -14,
              }}
            />
          </div>
          <span
            style={{
              fontSize: 16,
              fontWeight: 400,
              color: "var(--muted-lt)",
            }}
          >
            Trusted by founders across industries
          </span>
        </div>
      </section>

      {/* WE DO TWO THINGS */}
      <section className="what" style={{ paddingBottom: 80, background: "#091020" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center" }}>
          <div className="section-label reveal">What We Do</div>
          <h2 className="reveal" style={{ fontFamily: "var(--font-display), 'Sora', sans-serif", fontSize: "clamp(32px, 4vw, 46px)", fontWeight: 700, color: "var(--white)", lineHeight: 1.15, marginBottom: 16 }}>
            We do <span style={{ color: "var(--gold)" }}>two things.</span>
          </h2>
          <p className="reveal" style={{ fontSize: 18, fontWeight: 400, color: "var(--muted-lt)", marginBottom: 48, maxWidth: 680, marginLeft: "auto", marginRight: "auto", lineHeight: 1.7 }}>
            The Mark is a fully managed LinkedIn growth service for founders and CEOs who want measurable results from their online presence.
          </p>

          <WhatWeDoCards />
        </div>
      </section>

      {/* YOUR JOURNEY — Horizontal icon flow */}
      <section className="what" id="what" style={{ background: "var(--navy)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div className="section-label reveal">Your Journey With Us</div>
          <h2 className="what-headline reveal" style={{ marginBottom: 64 }}>
            From onboarding to <em>inbound pipeline.</em>
          </h2>

          <JourneyTimeline />
        </div>
      </section>

      {/* RESULTS */}
      <section className="casestudy" id="results" style={{ background: "#091020" }}>
        <div className="casestudy-inner">
          <div className="section-label reveal">The Results</div>
          <h2 className="what-headline reveal" style={{ marginBottom: 64, maxWidth: "none" }}>
            Real founders. <em>Real outcomes.</em>
          </h2>

          <div className="reveal cards-2col case-grid">
            {CASES.map((c) => <CaseCard key={c.href} d={c} />)}
          </div>

          <p className="case-note reveal">Every client starts from a different place. Results depend on industry, audience, and consistency.</p>

          {/* View all link */}
          <div className="reveal" style={{ textAlign: "center", marginTop: 40 }}>
            <a href="/case-studies" style={{ fontSize: 14, fontWeight: 600, letterSpacing: 2, color: "var(--gold)", textTransform: "uppercase", textDecoration: "none" }}>View all case studies &rarr;</a>
          </div>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section style={{ background: "var(--navy)", padding: "100px 64px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div className="section-label reveal" style={{ color: "var(--gold)", textAlign: "center" }}>Who This Is For</div>
          <div className="reveal cards-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 20, marginTop: 48 }}>
            {[
              { num: "01", title: "Founders", highlight: "& CEOs.", desc: "You run the business. You don't have time to run LinkedIn. But you know you should be there." },
              { num: "02", title: "Leaders with no", highlight: "online presence.", desc: "Your reputation is real but invisible online. The right people can't find you." },
              { num: "03", title: "Businesses that", highlight: "rely on referrals.", desc: "Referrals work, but they don't scale. LinkedIn puts you in front of new people every day." },
            ].map((item) => (
              <div
                key={item.num}
                className="who-card"
                style={{
                  background: "rgba(209,172,114,0.04)",
                  borderRadius: 8,
                  padding: "36px 28px 36px 32px",
                  borderLeft: "3px solid var(--gold)",
                  transition: "border-color 0.3s ease, box-shadow 0.3s ease",
                }}
              >
                <div style={{ fontSize: 36, fontWeight: 700, color: "var(--gold)", marginBottom: 20, opacity: 0.4 }}>{item.num}</div>
                <h3 style={{ fontSize: 24, fontWeight: 600, color: "var(--white)", marginBottom: 16, lineHeight: 1.35 }}>
                  {item.title}<br /><span style={{ color: "var(--gold)" }}>{item.highlight}</span>
                </h3>
                <p style={{ fontSize: 17, fontWeight: 400, color: "var(--muted-lt)", lineHeight: 1.75 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT: editorial portrait with offset brass frame */}
      <section className="founder-section">
        <div className="founder reveal">
          <div className="founder-media">
            <span className="founder-frame" aria-hidden />
            <div className="founder-photo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/team/minh-mac.webp" alt="Minh Mac, Founder of 100Bold" />
              <span className="founder-curtain" aria-hidden />
            </div>
          </div>
          <div className="founder-text">
            <div className="founder-label f-line" style={{ transitionDelay: "0.55s" }}>Behind The Mark</div>
            <h2 className="founder-name f-line" style={{ transitionDelay: "0.7s" }}>Minh Mac</h2>
            <div className="founder-role f-line" style={{ transitionDelay: "0.85s" }}>Founder, 100Bold</div>
            <span className="founder-rule f-line" style={{ transitionDelay: "1s" }} aria-hidden />
            <p className="founder-bio f-line" style={{ transitionDelay: "1.1s" }}>
              15 years building businesses and scaling brands across Austin and Southeast Asia. The Mark is the system he built to turn a founder&apos;s LinkedIn into a real growth channel.
            </p>
            <a href="/about" className="founder-btn f-line" style={{ transitionDelay: "1.3s" }}>
              Learn more <span aria-hidden>&rarr;</span>
            </a>
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <CtaSection />

      <SiteFooter />
      <MobileApplyBar />

      <RevealObserver />
    </>
  );
}
