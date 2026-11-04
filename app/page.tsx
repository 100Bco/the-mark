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

      {/* YOUR JOURNEY */}
      <section className="what" id="what">
        <div className="what-inner">
          <div className="section-label reveal">Your Journey With Us</div>
          <h2 className="what-headline reveal">
            From onboarding to <em>inbound pipeline.</em>
          </h2>

          {/* Timeline */}
          <div className="reveal" style={{ maxWidth: 800, margin: "0 auto", position: "relative", paddingLeft: 40 }}>
            {/* Vertical line */}
            <div style={{ position: "absolute", left: 15, top: 0, bottom: 0, width: 2, background: "linear-gradient(to bottom, var(--gold), rgba(184,149,90,0.1))" }} />

            {[
              {
                week: "Week 1-2",
                title: "Research & Strategy",
                desc: "We research your industry, competitors, and target audience. Build your ICP (Ideal Customer Profile), brand guidelines, and content strategy tailored to your goals.",
              },
              {
                week: "Week 2-3",
                title: "Voice Capture & Profile Setup",
                desc: "3 to 4 hours of deep-dive sessions to extract your expertise, stories, and point of view. Optimize your LinkedIn profile for conversion. Everything ready to launch.",
              },
              {
                week: "Week 3-4",
                title: "Channel Launch",
                desc: "First posts go live. 3 to 4 posts per week. Full account management begins: replies, connections, inbox. Amplification network activated from day one.",
              },
              {
                week: "Month 2-3",
                title: "Personal Branding & Authority",
                desc: "Content builds momentum. Your name starts appearing in your industry. Engagement grows. The algorithm recognizes your account as a consistent, high-value voice.",
              },
              {
                week: "Month 3-6",
                title: "Outreach & Inbound Pipeline",
                desc: "Strategic outreach to decision-makers in your target market. Inbound conversations start flowing. Podcast invitations, partnership proposals, meeting requests.",
              },
              {
                week: "Month 6+",
                title: "Scale & Compound",
                desc: "Your presence compounds. Speaker invitations. Media features. Consistent deal flow from LinkedIn. The system runs. You focus on closing.",
              },
            ].map((step, i) => (
              <div
                key={step.week}
                className="reveal"
                style={{
                  position: "relative",
                  paddingBottom: i === 5 ? 0 : 48,
                  paddingLeft: 40,
                }}
              >
                {/* Dot */}
                <div
                  style={{
                    position: "absolute",
                    left: -33,
                    top: 4,
                    width: 12,
                    height: 12,
                    borderRadius: "50%",
                    background: i === 0 ? "var(--gold)" : "var(--navy-mid)",
                    border: "2px solid var(--gold)",
                  }}
                />
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: 2,
                    color: "var(--gold)",
                    textTransform: "uppercase",
                    marginBottom: 8,
                  }}
                >
                  {step.week}
                </div>
                <h3
                  style={{
                    fontSize: 20,
                    fontWeight: 600,
                    color: "var(--white)",
                    marginBottom: 8,
                    lineHeight: 1.3,
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    fontSize: 15,
                    fontWeight: 300,
                    color: "var(--muted-lt)",
                    lineHeight: 1.8,
                    maxWidth: 600,
                  }}
                >
                  {step.desc}
                </p>
              </div>
            ))}
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
