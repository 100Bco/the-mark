import RevealObserver from "./RevealObserver";

export default function Home() {
  return (
    <>
      {/* NAVIGATION */}
      <nav>
        <a href="#" className="nav-logo">
          <div className="nav-wordmark">The Mark</div>
        </a>
        <a href="#apply" className="nav-cta">
          Apply to Work With Us
        </a>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-eyebrow">The Mark by 100Bold</div>

        <h1 className="hero-headline">
          Done-for-you LinkedIn growth
          <br />
          for <span style={{ color: "var(--gold)" }}>founders and CEOs.</span>
        </h1>

        <p className="hero-sub">
          We build your LinkedIn presence, generate inbound leads, and turn
          your profile into a pipeline of deals, partnerships, and speaking
          invitations.
        </p>

        <div className="hero-cta-group">
          <a href="#apply" className="btn-primary">
            Apply to Work With Us
          </a>
          <a href="#results" className="btn-ghost">
            See Client Results
          </a>
        </div>

        {/* Stats bar */}
        <div
          style={{
            display: "flex",
            gap: 48,
            justifyContent: "center",
            marginTop: 56,
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
              style={{
                textAlign: "center",
                padding: "0 24px",
                borderRight: label !== "Out-of-Network" ? "1px solid rgba(214,206,188,0.15)" : "none",
                paddingRight: label !== "Out-of-Network" ? 48 : 24,
              }}
            >
              <div
                style={{
                  fontSize: 32,
                  fontWeight: 700,
                  color: "var(--gold)",
                  lineHeight: 1,
                  marginBottom: 6,
                }}
              >
                {num}
              </div>
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: 1.5,
                  color: "var(--muted)",
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
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 12,
            marginTop: 40,
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
                width: 32,
                height: 32,
                borderRadius: "50%",
                objectFit: "cover",
                border: "2px solid var(--navy)",
              }}
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/loc-dang/loc-dang-headshot.webp"
              alt=""
              style={{
                width: 32,
                height: 32,
                borderRadius: "50%",
                objectFit: "cover",
                objectPosition: "center 20%",
                border: "2px solid var(--navy)",
                marginLeft: -8,
              }}
            />
          </div>
          <span
            style={{
              fontSize: 13,
              fontWeight: 400,
              color: "var(--muted)",
            }}
          >
            Trusted by founders across industries
          </span>
        </div>
      </section>

      {/* WE DO TWO THINGS */}
      <section className="problem">
        <div className="problem-inner">
          <div className="problem-left reveal">
            <div className="problem-label">What We Do</div>
            <h2 className="problem-headline">
              We do <em>two things.</em>
            </h2>
          </div>
          <div className="problem-right reveal">
            <p className="problem-copy">
              <strong>Build your authority and reach.</strong> We capture
              your voice, create the content, and manage your entire LinkedIn
              so the right people find you before you ever walk into the room.
            </p>
            <p className="problem-copy">
              <strong>Turn that reach into revenue.</strong> Speaker
              invitations. Partnership proposals. Inbound from decision-makers
              who found you through your content. We build the system that
              delivers results consistently.
            </p>
            <div className="problem-rule" />
            <p className="problem-stat">
              The Mark is a fully managed LinkedIn growth service. We are the
              team behind founders and CEOs who want measurable results from
              their online presence.
            </p>
          </div>
        </div>
      </section>

      {/* YOUR JOURNEY — Horizontal Timeline */}
      <section className="what" id="what">
        <div className="what-inner">
          <div className="section-label reveal">Your Journey With Us</div>
          <h2 className="what-headline reveal">
            From onboarding to <em>inbound pipeline.</em>
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(7, auto)", gap: 0, alignItems: "start", justifyContent: "center", marginTop: 48 }}>
            {[
              { week: "Week 1-2", title: "Strategy & Voice", desc: "We study your market, capture your voice, and build a content system designed to attract the right people.", icon: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" },
              { week: "Week 3-4", title: "Launch & Manage", desc: "Your LinkedIn goes live. 3-4 posts/week. Full account management. You don't touch a thing.", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
              { week: "Month 2-4", title: "Grow & Engage", desc: "Your name shows up where it matters. Decision-makers start paying attention. Conversations begin.", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0" },
              { week: "Month 5+", title: "Convert & Scale", desc: "The pipeline builds. Inbound flows. You close deals while we keep the engine running.", icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" },
            ].flatMap((step, i, arr) => {
              const stepEl = (
                <div
                  key={step.week}
                  style={{
                    textAlign: "center",
                    maxWidth: 180,
                    opacity: 0,
                    animation: `fadeUp 0.6s ${0.2 * i}s forwards`,
                  }}
                >
                  <div style={{
                    width: 64,
                    height: 64,
                    borderRadius: "50%",
                    border: "2px solid var(--gold)",
                    background: i === arr.length - 1 ? "rgba(184,149,90,0.15)" : "var(--navy)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 20px",
                  }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d={step.icon} />
                    </svg>
                  </div>
                  <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: 2, color: "var(--gold)", textTransform: "uppercase", marginBottom: 8 }}>
                    {step.week}
                  </div>
                  <div style={{ fontSize: 17, fontWeight: 600, color: "var(--white)", marginBottom: 8, lineHeight: 1.3 }}>
                    {step.title}
                  </div>
                  <p style={{ fontSize: 13, fontWeight: 300, color: "var(--muted-lt)", lineHeight: 1.7 }}>
                    {step.desc}
                  </p>
                </div>
              );
              if (i < arr.length - 1) {
                const arrowEl = (
                  <div
                    key={`arrow-${i}`}
                    style={{
                      color: "var(--gold)",
                      fontSize: 20,
                      padding: "0 16px",
                      paddingTop: 20,
                      opacity: 0,
                      animation: `fadeUp 0.4s ${0.2 * i + 0.12}s forwards`,
                    }}
                  >
                    &rarr;
                  </div>
                );
                return [stepEl, arrowEl];
              }
              return [stepEl];
            })}
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section className="casestudy" id="results">
        <div className="casestudy-inner">
          <div className="section-label reveal">The Results</div>
          <h2 className="what-headline reveal" style={{ marginBottom: 64 }}>
            Real founders. <em>Real outcomes.</em>
          </h2>

          {/* Case 1: Tung Cao */}
          <div className="reveal" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2, marginBottom: 2 }}>
            <div style={{ position: "relative", overflow: "hidden", border: "1px solid rgba(214,206,188,0.1)", height: 420, background: "var(--navy-mid)" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/tung-cao/1789130366853.jpeg" alt="Tung Cao at International Manufacturing Congress 2026" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            </div>
            <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(214,206,188,0.1)", padding: "48px 36px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <p style={{ fontSize: 18, fontWeight: 400, color: "var(--white)", lineHeight: 1.6, marginBottom: 20 }}>
                From zero to 1M+ impressions in 12 months. 2 speaker invitations, daily inbound from decision-makers worldwide.
              </p>
              <p style={{ fontSize: 14, fontWeight: 400, color: "var(--muted)", marginBottom: 32 }}>
                Tung Cao, Co-Founder, 100B Global
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px 32px", marginBottom: 32 }}>
                <div>
                  <div style={{ fontSize: 36, fontWeight: 700, color: "var(--gold)", lineHeight: 1 }}>1M+</div>
                  <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: 1.5, color: "var(--muted)", textTransform: "uppercase", marginTop: 6 }}>Impressions</div>
                </div>
                <div>
                  <div style={{ fontSize: 36, fontWeight: 700, color: "var(--gold)", lineHeight: 1 }}>7K</div>
                  <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: 1.5, color: "var(--muted)", textTransform: "uppercase", marginTop: 6 }}>Followers</div>
                </div>
                <div>
                  <div style={{ fontSize: 36, fontWeight: 700, color: "var(--gold)", lineHeight: 1 }}>296K</div>
                  <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: 1.5, color: "var(--muted)", textTransform: "uppercase", marginTop: 6 }}>Members Reached</div>
                </div>
                <div>
                  <div style={{ fontSize: 36, fontWeight: 700, color: "var(--gold)", lineHeight: 1 }}>2x</div>
                  <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: 1.5, color: "var(--muted)", textTransform: "uppercase", marginTop: 6 }}>Speaker Events</div>
                </div>
              </div>
              <a href="/case-studies/tung-cao" className="cs-case-link">Read the case study &rarr;</a>
            </div>
          </div>

          {/* Case 2: Loc Dang */}
          <div className="reveal" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2, marginBottom: 48 }}>
            <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(214,206,188,0.1)", padding: "48px 36px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <p style={{ fontSize: 18, fontWeight: 400, color: "var(--white)", lineHeight: 1.6, marginBottom: 20 }}>
                Never used social media. 49K+ impressions and 3,596 followers in 4 months, reaching attorneys, founders, and CEOs.
              </p>
              <p style={{ fontSize: 14, fontWeight: 400, color: "var(--muted)", marginBottom: 32 }}>
                Loc Dang, Founder, Dang Law Group
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px 32px", marginBottom: 32 }}>
                <div>
                  <div style={{ fontSize: 36, fontWeight: 700, color: "var(--gold)", lineHeight: 1 }}>49K+</div>
                  <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: 1.5, color: "var(--muted)", textTransform: "uppercase", marginTop: 6 }}>Impressions</div>
                </div>
                <div>
                  <div style={{ fontSize: 36, fontWeight: 700, color: "var(--gold)", lineHeight: 1 }}>3,596</div>
                  <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: 1.5, color: "var(--muted)", textTransform: "uppercase", marginTop: 6 }}>Followers</div>
                </div>
                <div>
                  <div style={{ fontSize: 36, fontWeight: 700, color: "var(--gold)", lineHeight: 1 }}>4,632%</div>
                  <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: 1.5, color: "var(--muted)", textTransform: "uppercase", marginTop: 6 }}>Growth Rate</div>
                </div>
                <div>
                  <div style={{ fontSize: 36, fontWeight: 700, color: "var(--gold)", lineHeight: 1 }}>10+</div>
                  <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: 1.5, color: "var(--muted)", textTransform: "uppercase", marginTop: 6 }}>Inbound Conversations</div>
                </div>
              </div>
              <a href="/case-studies/loc-dang" className="cs-case-link">Read the case study &rarr;</a>
            </div>
            <div style={{ position: "relative", overflow: "hidden", border: "1px solid rgba(214,206,188,0.1)", height: 420, background: "var(--navy-mid)" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/loc-dang/loc-dang-headshot.webp" alt="Loc Dang, Founder of Dang Law Group" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 20%", display: "block" }} />
            </div>
          </div>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="problem">
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div className="section-label reveal" style={{ color: "var(--gold)" }}>Who This Is For</div>
          <div className="reveal" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 32, marginTop: 40 }}>
            <div>
              <h3 style={{ fontFamily: "var(--font-inter), 'Inter', sans-serif", fontSize: 24, fontWeight: 300, color: "var(--navy)", marginBottom: 12, lineHeight: 1.3 }}>Founders<br />&amp; <em style={{ color: "var(--gold)" }}>CEOs.</em></h3>
              <p style={{ fontSize: 15, fontWeight: 300, color: "var(--soft)", lineHeight: 1.85 }}>You run the business. You don&apos;t have time to run LinkedIn. But you know you should be there.</p>
            </div>
            <div>
              <h3 style={{ fontFamily: "var(--font-inter), 'Inter', sans-serif", fontSize: 24, fontWeight: 300, color: "var(--navy)", marginBottom: 12, lineHeight: 1.3 }}>Leaders with no<br /><em style={{ color: "var(--gold)" }}>online presence.</em></h3>
              <p style={{ fontSize: 15, fontWeight: 300, color: "var(--soft)", lineHeight: 1.85 }}>Your reputation is real but invisible online. The right people can&apos;t find you.</p>
            </div>
            <div>
              <h3 style={{ fontFamily: "var(--font-inter), 'Inter', sans-serif", fontSize: 24, fontWeight: 300, color: "var(--navy)", marginBottom: 12, lineHeight: 1.3 }}>Businesses that<br /><em style={{ color: "var(--gold)" }}>rely on referrals.</em></h3>
              <p style={{ fontSize: 15, fontWeight: 300, color: "var(--soft)", lineHeight: 1.85 }}>Referrals work, but they don&apos;t scale. LinkedIn puts you in front of new people every day.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="what">
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
            <div key={q} className="reveal" style={{ borderBottom: "1px solid rgba(214,206,188,0.1)", padding: "24px 0" }}>
              <h3 style={{ fontSize: 15, fontWeight: 500, color: "var(--cream)", marginBottom: 10, lineHeight: 1.5 }}>{q}</h3>
              <p style={{ fontSize: 15, fontWeight: 300, color: "var(--muted-lt)", lineHeight: 1.85 }}>{a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="about">
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

      {/* CLOSING CTA */}
      <section className="cta-close" id="apply">
        <div className="cta-close-bg" />
        <div className="cta-logo reveal">
          <div className="cta-m">M</div>
          <div className="cta-rule" />
        </div>
        <h2 className="cta-headline reveal">Become the best-known name<br /><em>in your industry.</em></h2>
        <p className="cta-sub reveal">Limited spots. Application only.</p>
        <a href="mailto:start@100bold.co?subject=The Mark - Application" className="cta-btn reveal">Apply to Work With Us</a>
        <p className="cta-email reveal">Or reach us directly at{" "}<a href="mailto:start@100bold.co">start@100bold.co</a></p>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-left">The Mark by 100Bold. Austin, Texas</div>
        <div className="footer-right">Application Only</div>
      </footer>

      <RevealObserver />
    </>
  );
}
