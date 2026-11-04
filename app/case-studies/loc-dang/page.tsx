import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Loc Dang — 49K+ Impressions in 4 Months From Zero | The Mark",
  description:
    "How The Mark took Loc Dang from zero social media presence to 49K+ impressions, 3,596 followers, and a stream of inbound opportunities — in just 4 months.",
};

export default function LocDangPage() {
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
              src="/images/loc-dang/loc-dang-headshot.webp"
              alt="Loc Dang"
              style={{
                width: 100,
                height: 100,
                borderRadius: "50%",
                objectFit: "cover",
                objectPosition: "center 20%",
                border: "2px solid rgba(184,149,90,0.3)",
              }}
            />
            <div>
              <div className="cs-detail-quote">
                <p className="cs-detail-quote-text">
                  &ldquo;I never used social media before. Within 4 months,
                  attorneys and business owners were reaching out to connect,
                  podcast hosts were inviting me on their shows, and my name was
                  being recognized in the Austin legal community &mdash; all from
                  LinkedIn.&rdquo;
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
                  Loc Dang
                </h2>
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 500,
                    color: "var(--muted)",
                    marginBottom: 12,
                  }}
                >
                  Founder, Dang Law Group
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
                  Legal &bull; Personal Injury &bull; Austin, TX
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
            Founder of Dang Law Group, a personal injury law firm based in
            Austin, Texas. Before working with The Mark, Loc had never used
            social media &mdash; no LinkedIn profile activity, no content, no
            online presence. His reputation was built entirely through word of
            mouth and courtroom results.
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
            Starting in June 2026, we built Loc&apos;s LinkedIn presence from
            scratch. Voice capture sessions extracted his perspective on personal
            injury law, client advocacy, and what accident victims need to know.
            We created content that positioned Loc not just as a lawyer, but as
            a trusted authority in the Austin legal community.
          </p>
          <p>
            <strong>3&ndash;4 posts per week</strong> covering accident case
            insights, legal rights education, community involvement, and the
            story of building Dang Law Group. Full account management &mdash;
            every connection request, comment, and inbox message handled.
          </p>
          <p>
            The result: in 4 months, Loc went from invisible online to a
            recognized voice in Austin&apos;s legal and business community.
          </p>
        </div>
      </section>

      {/* RESULTS */}
      <section className="cs-detail-results">
        <div className="cs-detail-results-inner">
          <div className="section-label">Results</div>
          <div className="cs-detail-stats-grid">
            {[
              ["49,055", "Total Impressions"],
              ["3,596", "Followers (from zero)"],
              ["4,632%", "Growth Rate"],
              ["12%", "Attorney Audience"],
              ["8%", "Founder Audience"],
              ["Podcast", "Invitation Received"],
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
              <div className="cs-detail-big-stat-num">4,632%</div>
              <div className="cs-detail-big-stat-label">
                Follower Growth
              </div>
            </div>
            <div className="cs-detail-big-stat">
              <div className="cs-detail-big-stat-num">
                0 &rarr; 3,596
              </div>
              <div className="cs-detail-big-stat-label">
                Followers in 4 Months
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KEY OUTCOMES */}
      <section className="cs-detail-milestones">
        <div className="cs-detail-milestones-inner">
          <div className="section-label">Key Outcomes</div>

          <div className="cs-detail-milestone">
            <div className="cs-detail-milestone-num">01</div>
            <div className="cs-detail-milestone-title">
              Podcast &mdash; Austin Business Spotlight Series
            </div>
            <p className="cs-detail-milestone-text">
              Featured podcast (200+ episodes) reached out via LinkedIn
              and followed up three times to book Loc as a guest.
            </p>
          </div>

          <div className="cs-detail-milestone">
            <div className="cs-detail-milestone-num">02</div>
            <div className="cs-detail-milestone-title">
              VIP Event &mdash; Moody Center
            </div>
            <p className="cs-detail-milestone-text">
              Invited to exclusive Moody Center events for strategic
              partnerships within the legal industry.
            </p>
          </div>

          <div className="cs-detail-milestone">
            <div className="cs-detail-milestone-num">03</div>
            <div className="cs-detail-milestone-title">
              Peer &amp; Partner Inbound
            </div>
            <p className="cs-detail-milestone-text">
              Attorneys, firm owners, and sales directors reaching out for
              lunch meetings, calls, and collaboration &mdash; all inbound.
            </p>
          </div>

          <div className="cs-detail-milestone">
            <div className="cs-detail-milestone-num">04</div>
            <div className="cs-detail-milestone-title">
              Right Audience, Proven
            </div>
            <p className="cs-detail-milestone-text">
              12% Attorneys, 8% Founders, 4% Owners, 2% CEOs &mdash; exactly
              the referral partners a law firm needs.
            </p>
          </div>
        </div>
      </section>

      {/* IMAGES */}
      <section className="cs-detail-images">
        <div className="cs-detail-images-inner">
          <div className="section-label">The Proof</div>
          <div className="cs-detail-images-grid">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/loc-dang/Impression LD.jpg"
              alt="Loc Dang LinkedIn impressions — 49K"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/loc-dang/Follower LD.jpg"
              alt="Loc Dang follower growth — 3,596"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/loc-dang/Demographics LD.jpg"
              alt="Loc Dang audience demographics"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/loc-dang/Loc Dang.png"
              alt="Loc Dang portrait"
            />
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
          Want results like{" "}
          <em style={{ color: "var(--gold)", fontStyle: "italic" }}>Loc?</em>
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
