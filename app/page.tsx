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

        <div className="hero-eyebrow">The Mark &mdash; by 100Bold</div>

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
          We build your authority on LinkedIn, then turn that attention into
          deals, partnerships, and speaking invitations &mdash; so you never
          have to post a thing yourself.
        </p>

        <div className="hero-cta-group">
          <a href="#apply" className="btn-primary">
            Apply to Work With Us
          </a>
          <a href="#results" className="btn-ghost">
            See Client Results
          </a>
        </div>

        {/* Aggregate stats */}
        <div
          style={{
            display: "flex",
            gap: 48,
            justifyContent: "center",
            marginTop: 64,
            opacity: 0,
            animation: "fadeUp 0.9s 1s forwards",
          }}
        >
          {[
            ["1M+", "Impressions Generated"],
            ["10K+", "Followers Grown"],
            ["2", "Industries Proven"],
          ].map(([num, label]) => (
            <div key={label} style={{ textAlign: "center" }}>
              <div
                style={{
                  fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
                  fontSize: 28,
                  fontWeight: 300,
                  color: "var(--gold)",
                  lineHeight: 1,
                  marginBottom: 4,
                }}
              >
                {num}
              </div>
              <div
                style={{
                  fontSize: 8,
                  fontWeight: 600,
                  letterSpacing: 2,
                  color: "var(--muted)",
                  textTransform: "uppercase",
                }}
              >
                {label}
              </div>
            </div>
          ))}
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
              <strong>Build your authority and attention.</strong> We capture
              your voice, create the content, and run your entire LinkedIn
              presence &mdash; so the right people find you before you ever walk
              into the room.
            </p>
            <p className="problem-copy">
              <strong>Turn that attention into revenue.</strong> Speaker
              invitations. Partnership proposals. Inbound from decision-makers
              who found you through your content. We build the system that makes
              it happen consistently.
            </p>
            <div className="problem-rule" />
            <p className="problem-stat">
              The Mark is a fully managed LinkedIn service &mdash; not a
              ghostwriting agency, not a social media tool. We are the team
              behind founders who want to be known.
            </p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="what" id="what">
        <div className="what-inner">
          <div className="section-label reveal">How It Works</div>
          <h2 className="what-headline reveal">
            Your LinkedIn. Fully managed.
            <br />
            <em>Built to convert.</em>
          </h2>
          <div className="layers">
            <div className="layer reveal">
              <div className="layer-num">01</div>
              <div className="layer-title">Voice Capture</div>
              <div className="layer-name">We learn how<br />you think.</div>
              <p className="layer-copy">
                3&ndash;4 hours of deep-dive sessions. We extract your
                expertise, your stories, and your point of view. Everything
                published sounds like you wrote it on your best day.
              </p>
            </div>
            <div className="layer reveal">
              <div className="layer-num">02</div>
              <div className="layer-title">Content &amp; Management</div>
              <div className="layer-name">We run your<br />entire presence.</div>
              <p className="layer-copy">
                3&ndash;4 posts per week. Replies, connections, inbox. Full
                account management. You stay visible and authoritative without
                touching LinkedIn once.
              </p>
            </div>
            <div className="layer reveal">
              <div className="layer-num">03</div>
              <div className="layer-title">Distribution &amp; Conversion</div>
              <div className="layer-name">We turn reach<br />into results.</div>
              <p className="layer-copy">
                Amplification network triggers the algorithm on publish.
                Strategic outreach to your ideal prospects. Impressions become
                conversations. Conversations become deals.
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
            <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(214,206,188,0.1)", padding: "40px 32px" }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 3, color: "var(--gold)", textTransform: "uppercase", marginBottom: 20 }}>Import &amp; Export</div>
              <h3 style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif", fontSize: 32, fontWeight: 300, color: "var(--cream)", marginBottom: 6 }}>Tung Cao</h3>
              <p style={{ fontSize: 12, fontWeight: 300, color: "var(--muted)", marginBottom: 24 }}>Co-Founder, 100B Global &mdash; Vietnam</p>
              <div style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif", fontSize: 48, fontWeight: 300, color: "var(--gold)", lineHeight: 1, marginBottom: 8 }}>1M+</div>
              <p style={{ fontSize: 12, fontWeight: 500, letterSpacing: 1.5, color: "var(--muted-lt)", textTransform: "uppercase", marginBottom: 24 }}>LinkedIn impressions in 12 months</p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {["0 → 7,000 followers, 296K members reached", "89% of reach from outside existing network", "2x speaker invitations sourced via LinkedIn", "Podcast feature by Vietnam Supply Chain Network (9K members)", "Inbound: partnership proposals, sourcing inquiries, investor meetings"].map((item) => (
                  <li key={item} style={{ fontSize: 13, fontWeight: 300, color: "var(--muted-lt)", lineHeight: 1.7, padding: "4px 0", paddingLeft: 16, position: "relative" }}>
                    <span style={{ position: "absolute", left: 0, top: 10, width: 4, height: 4, background: "var(--gold)", borderRadius: "50%" }} />
                    {item}
                  </li>
                ))}
              </ul>
              <a href="/case-studies/tung-cao" className="cs-case-link">Read the case study &rarr;</a>
            </div>
            <div style={{ position: "relative", overflow: "hidden", border: "1px solid rgba(214,206,188,0.1)", minHeight: 400, background: "var(--navy-mid)" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/tung-cao/1789130366853.jpeg" alt="Tung Cao speaking at International Manufacturing Congress 2026" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "16px 20px", background: "linear-gradient(transparent, rgba(13,27,42,0.92))", fontSize: 9, fontWeight: 600, letterSpacing: 2, color: "var(--gold)", textTransform: "uppercase" }}>Speaker &mdash; International Manufacturing Congress 2026, Hanoi</div>
            </div>
          </div>

          {/* Case 2: Loc Dang */}
          <div className="reveal" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2, marginBottom: 48 }}>
            <div style={{ position: "relative", overflow: "hidden", border: "1px solid rgba(214,206,188,0.1)", minHeight: 400, background: "var(--navy-mid)" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/loc-dang/Loc Dang.png" alt="Loc Dang, Founder of Dang Law Group" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            </div>
            <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(214,206,188,0.1)", padding: "40px 32px" }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 3, color: "var(--gold)", textTransform: "uppercase", marginBottom: 20 }}>Legal</div>
              <h3 style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif", fontSize: 32, fontWeight: 300, color: "var(--cream)", marginBottom: 6 }}>Loc Dang</h3>
              <p style={{ fontSize: 12, fontWeight: 300, color: "var(--muted)", marginBottom: 24 }}>Founder, Dang Law Group &mdash; Austin, TX</p>
              <div style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif", fontSize: 48, fontWeight: 300, color: "var(--gold)", lineHeight: 1, marginBottom: 8 }}>49K+</div>
              <p style={{ fontSize: 12, fontWeight: 500, letterSpacing: 1.5, color: "var(--muted-lt)", textTransform: "uppercase", marginBottom: 24 }}>Impressions in 4 months &mdash; from zero</p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {["Never used social media before — started June 2026", "0 → 3,596 followers (+4,632% growth)", "Audience: 12% Attorneys, 8% Founders, 4% Owners", "Podcast invitation from Austin Business Spotlight (200+ episodes)", "Inbound: peer attorneys, strategic events, partnership requests"].map((item) => (
                  <li key={item} style={{ fontSize: 13, fontWeight: 300, color: "var(--muted-lt)", lineHeight: 1.7, padding: "4px 0", paddingLeft: 16, position: "relative" }}>
                    <span style={{ position: "absolute", left: 0, top: 10, width: 4, height: 4, background: "var(--gold)", borderRadius: "50%" }} />
                    {item}
                  </li>
                ))}
              </ul>
              <a href="/case-studies/loc-dang" className="cs-case-link">Read the case study &rarr;</a>
            </div>
          </div>

          <p className="reveal" style={{ textAlign: "center", fontSize: 12, fontWeight: 300, fontStyle: "italic", color: "var(--muted)", fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif" }}>
            Every client starts from zero. The system is the same. The results speak for themselves.
          </p>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="problem">
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div className="section-label reveal" style={{ color: "var(--gold)" }}>Who This Is For</div>
          <div className="reveal" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 32, marginTop: 40 }}>
            <div>
              <h3 style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif", fontSize: 24, fontWeight: 300, color: "var(--navy)", marginBottom: 12, lineHeight: 1.3 }}>Founders building<br /><em style={{ color: "var(--gold)" }}>pipeline.</em></h3>
              <p style={{ fontSize: 14, fontWeight: 300, color: "var(--soft)", lineHeight: 1.85 }}>You want LinkedIn to generate inbound leads, attract investors, and open doors to the partnerships that move your business forward.</p>
            </div>
            <div>
              <h3 style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif", fontSize: 24, fontWeight: 300, color: "var(--navy)", marginBottom: 12, lineHeight: 1.3 }}>CEOs building<br /><em style={{ color: "var(--gold)" }}>authority.</em></h3>
              <p style={{ fontSize: 14, fontWeight: 300, color: "var(--soft)", lineHeight: 1.85 }}>You want to be the recognized leader in your industry &mdash; the one invited to speak, quoted by media, and sought out by the right people.</p>
            </div>
            <div>
              <h3 style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif", fontSize: 24, fontWeight: 300, color: "var(--navy)", marginBottom: 12, lineHeight: 1.3 }}>Leaders building<br /><em style={{ color: "var(--gold)" }}>legacy.</em></h3>
              <p style={{ fontSize: 14, fontWeight: 300, color: "var(--soft)", lineHeight: 1.85 }}>You have built something real and want your name to carry weight beyond your company &mdash; in your industry, your community, and your market.</p>
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
            ["How is The Mark different from a LinkedIn ghostwriter?", "A ghostwriter writes posts. We build and run your entire LinkedIn presence — content, engagement, connections, inbox, amplification, and outreach. We are a growth system, not a writing service."],
            ["How much of my time does this take?", "3–4 hours upfront for voice capture sessions. After that, less than 30 minutes per month for strategy alignment. We handle everything else."],
            ["How long until I see results?", "Most clients see meaningful engagement within the first 30 days. Inbound conversations typically start within 60–90 days. Compounding growth accelerates from month 3 onward."],
            ["Do you only manage LinkedIn?", "LinkedIn is our core focus — it is the highest-leverage platform for B2B founders and CEOs. For select clients, we offer multi-platform expansion through our Strategic tier."],
            ["Who writes the content?", "Our team writes every post, but it sounds like you. The voice capture process ensures your thinking, your stories, and your expertise come through in every piece."],
            ["Is this for a specific industry?", "No. Our system works across industries — we have proven results in import/export, manufacturing, and legal. The positioning strategy adapts to your market."],
          ].map(([q, a]) => (
            <div key={q} className="reveal" style={{ borderBottom: "1px solid rgba(214,206,188,0.1)", padding: "24px 0" }}>
              <h3 style={{ fontSize: 15, fontWeight: 500, color: "var(--cream)", marginBottom: 10, lineHeight: 1.5 }}>{q}</h3>
              <p style={{ fontSize: 14, fontWeight: 300, color: "var(--muted-lt)", lineHeight: 1.85 }}>{a}</p>
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
            <p className="about-copy">Everything downstream of attention &mdash; the deals, the partnerships, the speaking invitations &mdash; starts with showing up. The Mark is the system that makes it happen.</p>
            <a href="https://linkedin.com/in/minhbmac" className="about-linkedin" target="_blank" rel="noopener noreferrer">Connect on LinkedIn &rarr;</a>
          </div>
          <div className="about-right reveal">
            <div className="about-card">
              <div className="about-card-name">Minh Mac</div>
              <div className="about-card-title">Founder, 100Bold</div>
              <div className="about-card-rule" />
              <p className="about-card-copy">15 years building brands across Austin and Southeast Asia. Builder of the Tung Cao case study (0 &rarr; 1M impressions) and the Loc Dang case study (0 &rarr; 49K impressions in 4 months). The system works.</p>
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
        <a href="mailto:start@100bold.co?subject=The Mark — Application" className="cta-btn reveal">Apply to Work With Us</a>
        <p className="cta-email reveal">Or reach us directly at{" "}<a href="mailto:start@100bold.co">start@100bold.co</a></p>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-left">The Mark &mdash; by 100Bold &mdash; Austin, Texas</div>
        <div className="footer-right">Application Only</div>
      </footer>

      <RevealObserver />
    </>
  );
}
