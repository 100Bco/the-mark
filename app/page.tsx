import RevealObserver from "./RevealObserver";
import JourneyTimeline from "./JourneyTimeline";
import SiteNav from "./components/SiteNav";
import SiteFooter from "./components/SiteFooter";
import CtaSection from "./components/CtaSection";
import MobileApplyBar from "./components/MobileApplyBar";
import WhatWeDoCards from "./components/WhatWeDoCards";
import HeroBeforeAfter from "./components/HeroBeforeAfter";

export default function Home() {
  return (
    <>
      {/* NAVIGATION */}
      <SiteNav />

      {/* HERO */}
      <section className="hero hero-ba">
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
          <a href="#apply" className="btn-primary">
            Apply to Work With Us
          </a>
          <a href="#results" className="btn-ghost">
            See Client Results
          </a>
        </div>

        <HeroBeforeAfter />

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
                borderRight: label !== "Out-of-Network" ? "1px solid rgba(91,155,213,0.2)" : "none",
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
      <section className="what" style={{ paddingBottom: 80, background: "#0A1628" }}>
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
      <section className="casestudy" id="results" style={{ background: "#0A1628" }}>
        <div className="casestudy-inner">
          <div className="section-label reveal">The Results</div>
          <h2 className="what-headline reveal" style={{ marginBottom: 64, maxWidth: "none" }}>
            Real founders. <em>Real outcomes.</em>
          </h2>

          {/* Case cards — side by side */}
          <div className="reveal cards-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>

            {/* Case 1: Tung Cao */}
            <div style={{ border: "1px solid rgba(91,155,213,0.15)", borderRadius: 10, overflow: "hidden" }}>
              <div style={{ height: 280, overflow: "hidden" }}>
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
                <a href="/case-studies/tung-cao" className="cs-case-link">Read the case study &rarr;</a>
              </div>
            </div>

            {/* Case 2: Loc Dang */}
            <div style={{ border: "1px solid rgba(91,155,213,0.15)", borderRadius: 10, overflow: "hidden" }}>
              <div style={{ height: 280, overflow: "hidden" }}>
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
                <a href="/case-studies/loc-dang" className="cs-case-link">Read the case study &rarr;</a>
              </div>
            </div>

          </div>

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
                  background: "rgba(91,155,213,0.04)",
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

      {/* ABOUT — wide card */}
      <section style={{ background: "#0A1628", padding: "100px 64px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div className="section-label reveal" style={{ color: "var(--gold)", textAlign: "center", marginBottom: 32 }}>Behind The Mark</div>
          <div
            className="reveal about-card-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "280px 1fr",
              gap: 48,
              alignItems: "center",
              background: "rgba(91,155,213,0.06)",
              border: "1px solid rgba(91,155,213,0.15)",
              borderRadius: 10,
              padding: "56px 56px",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/team/minh-mac.webp"
              alt="Minh Mac, Founder of 100Bold"
              style={{
                width: 280,
                height: 280,
                borderRadius: 8,
                objectFit: "cover",
                display: "block",
                border: "2px solid rgba(91,155,213,0.15)",
              }}
            />
            <div>
              <div style={{ fontSize: 32, fontWeight: 700, color: "var(--white)", marginBottom: 6 }}>Minh Mac</div>
              <div style={{ fontSize: 16, fontWeight: 500, color: "var(--gold)", marginBottom: 24 }}>Founder, 100Bold</div>
              <p style={{ fontSize: 18, fontWeight: 400, color: "var(--muted-lt)", lineHeight: 1.8, marginBottom: 28 }}>
                15 years building businesses and scaling brands across Austin and Southeast Asia. The Mark is the system he built to turn a founder&apos;s LinkedIn into a real growth channel.
              </p>
              <a href="/about" className="cs-case-link">Learn more &rarr;</a>
            </div>
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
