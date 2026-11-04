import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tung Cao — 1M+ LinkedIn Impressions in 12 Months | The Mark",
  description:
    "How The Mark took Tung Cao from zero LinkedIn presence to 1 million impressions, 296K members reached, 2 speaker invitations, and a pipeline of inbound deals.",
};

export default function TungCaoPage() {
  return (
    <>
      {/* NAV */}
      <nav>
        <a href="/" className="nav-logo">
          <div>
            <div className="nav-m">M</div>
            <div className="nav-mark-rule" />
          </div>
          <div className="nav-wordmark">The Mark</div>
        </a>
        <a href="/#apply" className="nav-cta">
          Apply to Work With Us
        </a>
      </nav>

      {/* HERO — Quote + Avatar + Intro */}
      <section className="cs-detail-hero">
        <div className="cs-detail-hero-inner">
          <a href="/" className="cs-detail-back">
            &larr; Back to Home
          </a>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "100px 1fr",
              gap: 32,
              alignItems: "start",
              marginBottom: 48,
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/tung-cao/Tung Cao Photo.png"
              alt="Tung Cao"
              style={{
                width: 100,
                height: 100,
                borderRadius: "50%",
                objectFit: "cover",
                border: "2px solid rgba(184,149,90,0.3)",
              }}
            />
            <div>
              <div className="cs-detail-quote">
                <p className="cs-detail-quote-text">
                  &ldquo;Within 12 months, investors and partners I had never met
                  started reaching out. I was invited to speak at the International
                  Manufacturing Congress in Hanoi. The content opened doors that
                  moved my business forward.&rdquo;
                </p>
              </div>
              <div style={{ marginTop: 20 }}>
                <h2
                  style={{
                    fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
                    fontSize: 32,
                    fontWeight: 300,
                    color: "var(--cream)",
                    lineHeight: 1.25,
                    marginBottom: 6,
                  }}
                >
                  Tung Cao
                </h2>
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 500,
                    color: "var(--muted)",
                    marginBottom: 12,
                  }}
                >
                  Co-Founder &amp; Head of International Trade, 100B Global
                </div>
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 600,
                    letterSpacing: 2,
                    color: "var(--gold)",
                    textTransform: "uppercase",
                  }}
                >
                  Import &amp; Export &bull; Manufacturing &bull; Vietnam
                </div>
              </div>
            </div>
          </div>

          <p
            style={{
              fontSize: 15,
              fontWeight: 300,
              color: "var(--muted-lt)",
              lineHeight: 1.85,
              maxWidth: 700,
            }}
          >
            Co-Founder and Head of International Trade at 100B Global, a
            company bridging Vietnamese manufacturers with international
            buyers. Despite years of industry expertise, Tung had zero
            LinkedIn presence &mdash; no followers, no content, no visibility
            to the global buyers and partners he needed to reach.
          </p>
        </div>
      </section>

      {/* THE WORK */}
      <section className="cs-detail-narrative">
        <div className="cs-detail-narrative-inner">
          <h2>
            The <em>work.</em>
          </h2>
          <p>
            We started with deep-dive voice capture sessions to extract
            Tung&apos;s expertise in sourcing, export compliance, and
            Vietnam&apos;s manufacturing landscape. From there, we built a
            content strategy focused on the specific problems his target
            audience &mdash; international buyers, logistics professionals, and
            supply chain decision-makers &mdash; face when sourcing from
            Vietnam.
          </p>
          <p>
            <strong>3&ndash;4 posts per week.</strong> Strategic commentary on
            trade regulations, factory selection, quality control, and
            cross-border logistics. Full account management &mdash; replies,
            connections, inbox conversations. An amplification network that
            triggered the algorithm from day one.
          </p>
          <p>
            The content wasn&apos;t generic industry news. It was Tung&apos;s
            real experience &mdash; the same advice he gives clients &mdash;
            published consistently and distributed to the right audience.
          </p>
        </div>
      </section>

      {/* RESULTS */}
      <section className="cs-detail-results">
        <div className="cs-detail-results-inner">
          <div className="section-label">Results</div>
          <div className="cs-detail-stats-grid">
            {[
              ["1,000,521", "Total Impressions"],
              ["296,123", "Members Reached"],
              ["7,000+", "Followers (from zero)"],
              ["89%", "Out-of-Network Reach"],
              ["2x", "Speaker Invitations"],
              ["Daily", "Inbound Conversations"],
            ].map(([num, label]) => (
              <div className="stat-block" key={label}>
                <div className="stat-num">{num}</div>
                <div className="stat-label">{label}</div>
              </div>
            ))}
          </div>

          <div className="section-label">By the Numbers</div>
          <div className="cs-detail-big-stats">
            <div className="cs-detail-big-stat">
              <div className="cs-detail-big-stat-num">1M+</div>
              <div className="cs-detail-big-stat-label">
                Impressions in 12 months
              </div>
            </div>
            <div className="cs-detail-big-stat">
              <div className="cs-detail-big-stat-num">89%</div>
              <div className="cs-detail-big-stat-label">
                Reach outside existing network
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KEY MILESTONES */}
      <section className="cs-detail-milestones">
        <div className="cs-detail-milestones-inner">
          <div className="section-label">Key Milestones</div>

          <div className="cs-detail-milestone">
            <div className="cs-detail-milestone-num">01</div>
            <div className="cs-detail-milestone-title">
              Speaker at International Manufacturing Congress 2026
            </div>
            <p className="cs-detail-milestone-text">
              Dubai-based organizers found Tung through his LinkedIn content and
              invited him as a panelist for a fireside chat on smart factory
              transformation. VIIF, Hanoi &mdash; the first time this
              international congress was held in Vietnam.
            </p>
          </div>

          <div className="cs-detail-milestone">
            <div className="cs-detail-milestone-num">02</div>
            <div className="cs-detail-milestone-title">
              Podcast Feature &mdash; Vietnam Supply Chain Network
            </div>
            <p className="cs-detail-milestone-text">
              VSCN&apos;s founder (9K+ member community) reached out after
              reading Tung&apos;s posts about sourcing and supply chain. Invited
              to discuss why international buyers choose &mdash; and leave
              &mdash; Vietnamese suppliers.
            </p>
          </div>

          <div className="cs-detail-milestone">
            <div className="cs-detail-milestone-num">03</div>
            <div className="cs-detail-milestone-title">
              Inbound Pipeline from Multiple Geographies
            </div>
            <p className="cs-detail-milestone-text">
              Partnership proposals from Indonesia (Mukara Global Nusantara),
              sourcing inquiries from Brazil, university collaboration offers
              from NUS Singapore, investor meeting requests &mdash; all arriving
              through LinkedIn without a single paid ad.
            </p>
          </div>
        </div>
      </section>

      {/* IMAGES */}
      <section className="cs-detail-images">
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div className="section-label" style={{ marginBottom: 32 }}>The Proof</div>
          <div className="cs-detail-images-inner">
            {/* Analytics & Events */}
            <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: 2, color: "var(--gold)", textTransform: "uppercase", marginBottom: 16 }}>
              Analytics &amp; Events
            </div>
            <div className="cs-detail-images-grid" style={{ marginBottom: 32 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/tung-cao/linkedin-analytics.png"
                alt="Tung Cao LinkedIn analytics — 1M impressions"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/tung-cao/1789130366372.jpeg"
                alt="Tung Cao at International Manufacturing Congress"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/tung-cao/1789130366853.jpeg"
                alt="Tung Cao on stage at IMC 2026"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/tung-cao/1793612259323_5866711668054345223_g1762829536104583963_feab5d33ba7fa217235c0968fa87ea39.jpg"
                alt="Tung Cao podcast recording"
              />
            </div>

            {/* Inbound & Collaboration */}
            <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: 2, color: "var(--gold)", textTransform: "uppercase", marginBottom: 8 }}>
              Inbound &amp; Collaboration Requests
            </div>
            <p style={{ fontSize: 13, color: "var(--muted)", marginBottom: 16, fontStyle: "italic" }}>
              Names and profile photos redacted for privacy.
            </p>
            <div className="cs-detail-images-grid cs-detail-images-grid--3col">
              {[
                { src: "/images/tung-cao/dm-akanksha-imc.png", alt: "Speaker invitation — International Manufacturing Congress" },
                { src: "/images/tung-cao/dm-vscn-podcast.png", alt: "Podcast invitation — Vietnam Supply Chain Network" },
                { src: "/images/tung-cao/dm-andhika.png", alt: "Partnership proposal — Indonesia commodities" },
                { src: "/images/tung-cao/dm-eduardo.png", alt: "Collaboration request — Entrepreneur & Investor" },
                { src: "/images/tung-cao/dm-nus-singapore.png", alt: "University collaboration — NUS Singapore" },
                { src: "/images/tung-cao/dm-ryan-sourcing.png", alt: "Sourcing inquiry — Brazil export" },
              ].map((dm) => (
                <div key={dm.src} style={{ position: "relative", overflow: "hidden" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={dm.src} alt={dm.alt} style={{ height: 280, objectPosition: "top" }} />
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 64,
                      backdropFilter: "blur(12px)",
                      WebkitBackdropFilter: "blur(12px)",
                      background: "linear-gradient(rgba(13,27,42,0.4), transparent)",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cs-detail-cta">
        <h2
          style={{
            fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
            fontSize: "clamp(28px, 4vw, 42px)",
            fontWeight: 300,
            color: "var(--cream)",
            lineHeight: 1.3,
            marginBottom: 12,
          }}
        >
          Want results like <em style={{ color: "var(--gold)", fontStyle: "italic" }}>Tung?</em>
        </h2>
        <p
          style={{
            fontSize: 14,
            fontWeight: 300,
            color: "var(--muted-lt)",
            marginBottom: 40,
            maxWidth: 480,
            margin: "0 auto 40px",
            lineHeight: 1.8,
          }}
        >
          We take on a limited number of clients at a time. Tell us your goal,
          and we&apos;ll show you what we&apos;d build.
        </p>
        <a href="/#apply" className="cta-btn">
          Apply to Work With Us
        </a>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-left">
          The Mark &mdash; by 100Bold &mdash; Austin, Texas
        </div>
        <div className="footer-right">Application Only</div>
      </footer>
    </>
  );
}
