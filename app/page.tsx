import CaseStudy from "./CaseStudy";
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
          Book a Call
        </a>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-lines" />

        <div className="hero-eyebrow">
          LinkedIn Growth Service for CEOs &amp; Business Leaders
        </div>

        <div className="hero-logo-mark">
          <div className="hero-m">M</div>
          <div className="hero-rule" />
        </div>

        <h1 className="hero-headline">
          Turn your LinkedIn into your
          <br />
          most powerful <em>sales channel.</em>
        </h1>

        <p className="hero-sub">
          The Mark is a fully managed LinkedIn service for CEOs and business
          leaders who want inbound deals, strategic connections, and a presence
          that converts — without posting a single thing themselves.
        </p>

        <div className="hero-cta-group">
          <a href="#apply" className="btn-primary">
            Book a Call
          </a>
          <a href="#what" className="btn-ghost">
            How It Works
          </a>
        </div>

        <div className="hero-scroll">
          <div className="scroll-line" />
          <span>Scroll</span>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="problem">
        <div className="problem-inner">
          <div className="problem-left reveal">
            <div className="problem-label">The Reality</div>
            <h2 className="problem-headline">
              You built a real business.
              <br />
              Your LinkedIn is <em>silent.</em>
            </h2>
          </div>
          <div className="problem-right reveal">
            <p className="problem-copy">
              Your track record closes deals in person. But on LinkedIn — where
              your next investor, partner, and client is already searching — you
              are invisible. No content. No authority. No inbound.
            </p>
            <p className="problem-copy">
              <strong>
                At your level, silence on LinkedIn is not neutral.
              </strong>{" "}
              It costs you deals you never heard about, introductions that never
              happened, and opportunities that went to the founder who showed up
              first.
            </p>
            <div className="problem-rule" />
            <p className="problem-stat">
              &ldquo;89% of the impressions we generate reach people outside
              your existing network. These are new prospects, new partners, new
              deal flow — people who would never have found you otherwise.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* WHAT IS THE MARK */}
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
              <div className="layer-title">Voice &amp; Strategy</div>
              <div className="layer-name">
                Your thinking.
                <br />
                Your authority.
              </div>
              <p className="layer-copy">
                We start with deep-dive sessions to capture your voice, your
                expertise, and your point of view. Then we build a content
                strategy designed to position you as the go-to leader in your
                space — and drive real business conversations.
              </p>
            </div>
            <div className="layer reveal">
              <div className="layer-num">02</div>
              <div className="layer-title">Content &amp; Presence</div>
              <div className="layer-name">
                Show up daily.
                <br />
                Touch nothing.
              </div>
              <p className="layer-copy">
                3 to 4 posts per week. Written content, carousels, strategic
                commentary. Full account management — replies, connection
                requests, inbox conversations. All handled. You stay visible
                without lifting a finger.
              </p>
            </div>
            <div className="layer reveal">
              <div className="layer-num">03</div>
              <div className="layer-title">Amplification &amp; Outreach</div>
              <div className="layer-name">
                Engineered reach.
                <br />
                Real conversations.
              </div>
              <p className="layer-copy">
                A coordinated engagement network triggers the algorithm the
                moment your content publishes. Combined with strategic outreach
                to your ideal prospects, we turn impressions into conversations
                and conversations into deals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROOF */}
      <section className="proof">
        <div className="proof-inner">
          <div className="section-label reveal">Proven Results</div>
          <h2 className="proof-headline reveal">
            One client. One year.
            <br />
            <em>1 million impressions.</em>
            <br />
            Zero paid ads.
          </h2>
          <div className="proof-stats">
            <div className="stat-block reveal">
              <div className="stat-num">1M+</div>
              <div className="stat-label">
                LinkedIn impressions
                <br />
                in 12 months
              </div>
            </div>
            <div className="stat-block reveal">
              <div className="stat-num">296K</div>
              <div className="stat-label">
                Members reached
                <br />
                on the platform
              </div>
            </div>
            <div className="stat-block reveal">
              <div className="stat-num">89%</div>
              <div className="stat-label">
                Out-of-network
                <br />
                reach
              </div>
            </div>
          </div>
          <div className="proof-quote reveal">
            <div className="proof-quote-mark">&ldquo;</div>
            <p className="proof-quote-text">
              Within 12 months, I went from zero LinkedIn presence to 1 million
              impressions. I was invited to speak at the International
              Manufacturing Congress in Hanoi and featured on a podcast by
              Vietnam Supply Chain Network. Investors and partners I had never
              met started reaching out directly. The content did not just build
              visibility — it opened doors that moved my business forward.
            </p>
            <div className="proof-quote-attr">
              Tung Cao — Co-Founder &amp; Head of International Trade, 100B
              Global
            </div>
          </div>
        </div>
      </section>

      {/* CASE STUDY */}
      <CaseStudy />

      {/* DELIVERABLES */}
      <section className="delivers">
        <div className="delivers-inner">
          <div className="section-label reveal">What You Get</div>
          <h2 className="delivers-headline reveal">
            Everything. <em>Done for you.</em>
          </h2>
          <div className="deliver-grid">
            <div className="deliver-item reveal">
              <div className="deliver-num">01</div>
              <div>
                <div className="deliver-title">Voice Capture</div>
                <div className="deliver-outcome">
                  You sound like yourself. On your best day. Every time.
                </div>
                <p className="deliver-detail">
                  3 to 4 hours of deep-dive sessions. We extract your thinking,
                  your stories, your convictions. Everything published under
                  your name sounds like you wrote it at your sharpest.
                </p>
              </div>
            </div>
            <div className="deliver-item reveal">
              <div className="deliver-num">02</div>
              <div>
                <div className="deliver-title">Content Creation</div>
                <div className="deliver-outcome">
                  Consistent presence without lifting a finger.
                </div>
                <p className="deliver-detail">
                  3 to 4 posts per week. Written posts, carousels, infographics,
                  strategic commentary — all crafted to position you as a
                  thought leader and drive engagement with the right audience.
                </p>
              </div>
            </div>
            <div className="deliver-item reveal">
              <div className="deliver-num">03</div>
              <div>
                <div className="deliver-title">Account Management</div>
                <div className="deliver-outcome">
                  Your LinkedIn runs like a business development machine.
                </div>
                <p className="deliver-detail">
                  Connection requests, comment replies, inbox conversations,
                  profile optimization. We manage your entire LinkedIn presence
                  so every touchpoint reinforces your authority.
                </p>
              </div>
            </div>
            <div className="deliver-item reveal">
              <div className="deliver-num">04</div>
              <div>
                <div className="deliver-title">Amplification Network</div>
                <div className="deliver-outcome">
                  Your reach is engineered from day one.
                </div>
                <p className="deliver-detail">
                  A coordinated network of real accounts and established company
                  pages engages on your content the moment it publishes.
                  Algorithm triggered. Momentum built. 89% out-of-network reach
                  proven.
                </p>
              </div>
            </div>
            <div className="deliver-item reveal">
              <div className="deliver-num">05</div>
              <div>
                <div className="deliver-title">Monthly Strategy</div>
                <div className="deliver-outcome">
                  Direct access. Not delegated.
                </div>
                <p className="deliver-detail">
                  Monthly strategy sessions with The Mark&apos;s founding team.
                  We calibrate content themes, outreach targets, and conversion
                  goals. Everything aimed at your specific near-term outcomes.
                </p>
              </div>
            </div>
            <div className="deliver-item reveal">
              <div className="deliver-num">06</div>
              <div>
                <div className="deliver-title">
                  Conversion &amp; Outreach Support
                </div>
                <div className="deliver-outcome">
                  Impressions become introductions. Introductions become deals.
                </div>
                <p className="deliver-detail">
                  Strategic outreach to decision-makers in your target market.
                  Warm DM sequences. Connection campaigns. We turn your growing
                  LinkedIn presence into a pipeline of real business
                  conversations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MEMBERSHIP */}
      <section className="membership" id="membership">
        <div className="membership-inner">
          <div className="section-label reveal">Membership</div>
          <h2 className="membership-headline reveal">
            An investment that
            <br />
            <em>pays for itself.</em>
          </h2>
          <div className="tiers">
            <div className="tier reveal">
              <div className="tier-badge">Limited</div>
              <div className="tier-name">Founding Member</div>
              <div className="tier-price">$4,000</div>
              <div className="tier-period">per month — locked for life</div>
              <div className="tier-divider" />
              <ul className="tier-features">
                <li>Full LinkedIn service delivery</li>
                <li>Voice capture &amp; content strategy</li>
                <li>3–4 posts per week</li>
                <li>Amplification network access</li>
                <li>Rate locked as long as active</li>
              </ul>
            </div>
            <div className="tier featured reveal">
              <div className="tier-name">Member</div>
              <div className="tier-price">$5,000</div>
              <div className="tier-period">per month</div>
              <div className="tier-divider" />
              <ul className="tier-features">
                <li>Full LinkedIn service delivery</li>
                <li>Monthly strategy call</li>
                <li>Account &amp; inbox management</li>
                <li>Amplification network access</li>
                <li>Conversion &amp; outreach support</li>
              </ul>
            </div>
            <div className="tier reveal">
              <div className="tier-name">Strategic</div>
              <div className="tier-price">Custom</div>
              <div className="tier-period">for select clients</div>
              <div className="tier-divider" />
              <ul className="tier-features">
                <li>Everything in Member</li>
                <li>Speaker placement support</li>
                <li>Capital raise positioning</li>
                <li>Multi-platform expansion</li>
              </ul>
            </div>
          </div>
          <p className="membership-note reveal">
            Limited spots available. The founding cohort is closed once full.
          </p>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about">
        <div className="about-inner">
          <div className="about-left reveal">
            <div className="about-label">Behind The Mark</div>
            <h2 className="about-headline">
              Built by someone who has done the work.
            </h2>
            <p className="about-copy">
              <strong>Minh Mac</strong> is the Founder of 100Bold, a growth
              marketing agency based in Austin, Texas. Over 15 years he has
              built businesses, scaled brands, and learned firsthand what it
              takes to turn a founder&apos;s LinkedIn presence into a genuine
              business development channel.
            </p>
            <p className="about-copy">
              The Mark exists because of one proven insight: the leaders who
              show up consistently on LinkedIn are the ones who attract the
              deals, the partnerships, and the speaking invitations. Everything
              else is noise.
            </p>
            <a
              href="https://linkedin.com/in/minhbmac"
              className="about-linkedin"
              target="_blank"
              rel="noopener noreferrer"
            >
              Connect on LinkedIn →
            </a>
          </div>
          <div className="about-right reveal">
            <div className="about-card">
              <div className="about-card-name">Minh Mac</div>
              <div className="about-card-title">Founder &amp; Strategist</div>
              <div className="about-card-rule" />
              <p className="about-card-copy">
                Founder of 100Bold. 15 years building brands and businesses
                across Austin and Southeast Asia. Builder of the Tung Cao
                LinkedIn case study — 0 to 1M impressions, 2 speaker
                invitations, and a pipeline of inbound deals from a single
                platform.
              </p>
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
        <h2 className="cta-headline reveal">
          Ready to turn LinkedIn into
          <br />
          <em>your growth engine?</em>
        </h2>
        <p className="cta-sub reveal">
          Let&apos;s talk about what The Mark can do for your business.
        </p>
        <a
          href="mailto:start@100bold.co?subject=The Mark — Book a Call"
          className="cta-btn reveal"
        >
          Book a Call
        </a>
        <p className="cta-email reveal">
          Or reach us directly at{" "}
          <a href="mailto:start@100bold.co">start@100bold.co</a>
        </p>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-left">
          The Mark — LinkedIn Growth for Leaders — Powered by 100Bold
        </div>
        <div className="footer-right">Austin, Texas</div>
      </footer>

      <RevealObserver />
    </>
  );
}
