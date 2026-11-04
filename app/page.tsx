import RevealObserver from "./RevealObserver";

export default function Home() {
  return (
    <>
      {/* NAVIGATION */}
      <nav>
        <a href="#" className="nav-logo">
          <div>
            <div className="nav-m">M</div>
            <div className="nav-mark-rule" />
          </div>
          <div className="nav-wordmark">The Mark</div>
        </a>
        <a href="#apply" className="nav-cta">
          Apply to Work With Us
        </a>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-lines" />

        <div className="hero-eyebrow">The Mark by 100Bold</div>

        <div className="hero-logo-mark">
          <div className="hero-m">M</div>
          <div className="hero-rule" />
        </div>

        <h1 className="hero-headline">
          Done-for-you LinkedIn growth
          <br />
          for <em>founders and CEOs.</em>
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

        <div className="hero-scroll">
          <div className="scroll-line" />
          <span>Scroll</span>
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

          <div className="reveal" style={{ position: "relative", marginTop: 48 }}>
            {/* Horizontal line */}
            <div style={{ position: "absolute", top: 28, left: 0, right: 0, height: 2, background: "linear-gradient(to right, var(--gold), rgba(184,149,90,0.15))" }} />

            <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 0, position: "relative" }}>
              {[
                { week: "Week 1", title: "Research", sub: "ICP & Strategy", icon: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" },
                { week: "Week 2", title: "Voice Capture", sub: "Profile Setup", icon: "M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" },
                { week: "Week 3-4", title: "Launch", sub: "Go Live", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
                { week: "Month 2-3", title: "Authority", sub: "Build Trust", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
                { week: "Month 3-6", title: "Outreach", sub: "Inbound Deals", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0" },
                { week: "Month 6+", title: "Scale", sub: "Compound Growth", icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" },
              ].map((step, i) => (
                <div key={step.week} style={{ textAlign: "center", position: "relative", padding: "0 8px" }}>
                  {/* Icon circle */}
                  <div style={{
                    width: 56,
                    height: 56,
                    borderRadius: "50%",
                    border: "2px solid var(--gold)",
                    background: i === 0 ? "rgba(184,149,90,0.15)" : "var(--navy)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 20px",
                    position: "relative",
                    zIndex: 1,
                  }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d={step.icon} />
                    </svg>
                  </div>

                  {/* Arrow between dots (except last) */}
                  {i < 5 && (
                    <div style={{
                      position: "absolute",
                      top: 26,
                      right: -8,
                      color: "var(--gold)",
                      fontSize: 14,
                      zIndex: 2,
                    }}>
                      &rarr;
                    </div>
                  )}

                  <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: 2, color: "var(--gold)", textTransform: "uppercase", marginBottom: 8 }}>
                    {step.week}
                  </div>
                  <div style={{ fontSize: 16, fontWeight: 600, color: "var(--white)", marginBottom: 4, lineHeight: 1.3 }}>
                    {step.title}
                  </div>
                  <div style={{ fontSize: 13, fontWeight: 300, color: "var(--muted-lt)" }}>
                    {step.sub}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Detail cards below timeline */}
          <div className="reveal" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 2, marginTop: 48 }}>
            <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(214,206,188,0.1)", padding: "28px 24px" }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, color: "var(--gold)", textTransform: "uppercase", marginBottom: 10 }}>Phase 1: Foundation</div>
              <p style={{ fontSize: 14, fontWeight: 300, color: "var(--muted-lt)", lineHeight: 1.8 }}>
                Research your market. Define your ICP. Capture your voice. Optimize your profile for conversion. Launch with 3-4 posts per week.
              </p>
            </div>
            <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(214,206,188,0.1)", padding: "28px 24px" }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, color: "var(--gold)", textTransform: "uppercase", marginBottom: 10 }}>Phase 2: Growth</div>
              <p style={{ fontSize: 14, fontWeight: 300, color: "var(--muted-lt)", lineHeight: 1.8 }}>
                Build authority in your industry. Grow engagement and followers. Strategic outreach to decision-makers. Convert impressions into conversations.
              </p>
            </div>
            <div style={{ background: "rgba(184,149,90,0.06)", border: "1px solid rgba(184,149,90,0.2)", padding: "28px 24px" }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, color: "var(--gold)", textTransform: "uppercase", marginBottom: 10 }}>Phase 3: Revenue</div>
              <p style={{ fontSize: 14, fontWeight: 300, color: "var(--muted-lt)", lineHeight: 1.8 }}>
                Inbound pipeline running. Speaker invitations. Partnership deals. Consistent deal flow. The system compounds. You focus on closing.
              </p>
            </div>
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
              <h3 style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif", fontSize: 24, fontWeight: 300, color: "var(--navy)", marginBottom: 12, lineHeight: 1.3 }}>Founders building<br /><em style={{ color: "var(--gold)" }}>pipeline.</em></h3>
              <p style={{ fontSize: 15, fontWeight: 300, color: "var(--soft)", lineHeight: 1.85 }}>You want LinkedIn to generate inbound leads, attract investors, and open doors to partnerships that drive revenue.</p>
            </div>
            <div>
              <h3 style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif", fontSize: 24, fontWeight: 300, color: "var(--navy)", marginBottom: 12, lineHeight: 1.3 }}>CEOs building<br /><em style={{ color: "var(--gold)" }}>authority.</em></h3>
              <p style={{ fontSize: 15, fontWeight: 300, color: "var(--soft)", lineHeight: 1.85 }}>You want to be the recognized leader in your industry. The one invited to speak, sought out by the right people, and trusted before the first meeting.</p>
            </div>
            <div>
              <h3 style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif", fontSize: 24, fontWeight: 300, color: "var(--navy)", marginBottom: 12, lineHeight: 1.3 }}>Leaders building<br /><em style={{ color: "var(--gold)" }}>legacy.</em></h3>
              <p style={{ fontSize: 15, fontWeight: 300, color: "var(--soft)", lineHeight: 1.85 }}>You have built something real and want your name to carry weight beyond your company, in your industry and your market.</p>
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
