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
          Request an Introduction
        </a>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-lines" />

        <div className="hero-eyebrow">
          An Invitation-Only Network for Founders and CEOs
        </div>

        <div className="hero-logo-mark">
          <div className="hero-m">M</div>
          <div className="hero-rule" />
        </div>

        <h1 className="hero-headline">
          Your name should be the
          <br />
          first thing <em>they find.</em>
        </h1>

        <p className="hero-sub">
          The Mark is a closed network for established founders and CEOs who are
          ready to build their public authority, command the room, and leave
          something that lasts.
        </p>

        <div className="hero-cta-group">
          <a href="#apply" className="btn-primary">
            Request an Introduction
          </a>
          <a href="#what" className="btn-ghost">
            Learn More
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
              You built something real.
              <br />
              Online, you are <em>invisible.</em>
            </h2>
          </div>
          <div className="problem-right reveal">
            <p className="problem-copy">
              Your business speaks for itself. Your track record is real. But on
              the platform where your next investor, your next partner, your next
              deal is already looking — you are nowhere to be found.
            </p>
            <p className="problem-copy">
              <strong>Invisibility at your level is not neutral.</strong> It
              costs you deals you never knew you lost, conversations that never
              started, and a legacy that exists only in the rooms you physically
              walk into.
            </p>
            <div className="problem-rule" />
            <p className="problem-stat">
              &ldquo;The founders who raise capital, recruit the best people,
              and attract the right partnerships have one thing in common: they
              show up before the meeting starts.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* WHAT IS THE MARK */}
      <section className="what" id="what">
        <div className="what-inner">
          <div className="section-label reveal">What Is The Mark</div>
          <h2 className="what-headline reveal">
            A managed service and a vetted network.
            <br />
            <em>Built to compound over time.</em>
          </h2>
          <div className="layers">
            <div className="layer reveal">
              <div className="layer-num">01</div>
              <div className="layer-title">The Service</div>
              <div className="layer-name">
                Your LinkedIn.
                <br />
                Fully managed.
              </div>
              <p className="layer-copy">
                We capture your voice, your thinking, your story. Then we build
                and run your entire LinkedIn presence — content, posting,
                engagement, amplification — so you show up consistently without
                lifting a finger.
              </p>
            </div>
            <div className="layer reveal">
              <div className="layer-num">02</div>
              <div className="layer-title">The Network</div>
              <div className="layer-name">
                Vetted peers.
                <br />
                Real deal flow.
              </div>
              <p className="layer-copy">
                Every member is hand-selected. Non-competing. At your level.
                Private dinners in Austin. Annual retreat in Southeast Asia. The
                kind of room where one conversation changes the trajectory of a
                deal.
              </p>
            </div>
            <div className="layer reveal">
              <div className="layer-num">03</div>
              <div className="layer-title">First Aura</div>
              <div className="layer-name">
                Where it leads
                <br />
                for the bold.
              </div>
              <p className="layer-copy">
                As your audience grows, brands, platforms, and media seek
                access. First Aura — our creator management firm — manages those
                opportunities on your behalf. Pure commission. No ceiling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROOF */}
      <section className="proof">
        <div className="proof-inner">
          <div className="section-label reveal">Proof of Concept</div>
          <h2 className="proof-headline reveal">
            We built the playbook
            <br />
            on a <em>real account.</em>
            <br />
            Here are the numbers.
          </h2>
          <div className="proof-stats">
            <div className="stat-block reveal">
              <div className="stat-num">0</div>
              <div className="stat-label">
                Followers
                <br />
                at the start
              </div>
            </div>
            <div className="stat-block reveal">
              <div className="stat-num">3,000+</div>
              <div className="stat-label">
                Engaged followers
                <br />
                in under 9 months
              </div>
            </div>
            <div className="stat-block reveal">
              <div className="stat-num">Daily</div>
              <div className="stat-label">
                Inbound conversations
                <br />
                from the right people
              </div>
            </div>
          </div>
          <div className="proof-quote reveal">
            <div className="proof-quote-mark">&ldquo;</div>
            <p className="proof-quote-text">
              Before this, I had been in the industry for years and nobody
              outside my immediate circle knew who I was. Within months, the
              right people were finding me. Investors I had never met were
              reaching out. That does not happen by accident.
            </p>
            <div className="proof-quote-attr">
              Founding case study — B2B operator, Austin TX
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
                  your name sounds like you wrote it in your best moment.
                </p>
              </div>
            </div>
            <div className="deliver-item reveal">
              <div className="deliver-num">02</div>
              <div>
                <div className="deliver-title">Content and Presence</div>
                <div className="deliver-outcome">
                  You show up consistently, without lifting a finger.
                </div>
                <p className="deliver-detail">
                  3 to 4 posts per week. Written posts, infographics, strategic
                  commentary. Full account management: replies, connections,
                  inbox. All handled.
                </p>
              </div>
            </div>
            <div className="deliver-item reveal">
              <div className="deliver-num">03</div>
              <div>
                <div className="deliver-title">Amplification Network</div>
                <div className="deliver-outcome">
                  Your reach is engineered from day one.
                </div>
                <p className="deliver-detail">
                  The Mark operates a coordinated network of real accounts and
                  established company pages that engage on your content the
                  moment it publishes. Algorithm triggered. Momentum built.
                </p>
              </div>
            </div>
            <div className="deliver-item reveal">
              <div className="deliver-num">04</div>
              <div>
                <div className="deliver-title">Monthly Strategy</div>
                <div className="deliver-outcome">
                  Direct access. Not delegated.
                </div>
                <p className="deliver-detail">
                  Monthly strategy sessions with The Mark&apos;s founding team.
                  We calibrate the content, the outreach, the narrative.
                  Everything aimed at your specific near-term goals.
                </p>
              </div>
            </div>
            <div className="deliver-item reveal">
              <div className="deliver-num">05</div>
              <div>
                <div className="deliver-title">Private Event Series</div>
                <div className="deliver-outcome">
                  The room you have been missing.
                </div>
                <p className="deliver-detail">
                  Curated Austin dinners. Annual retreat in Southeast Asia.
                  Vetted members only. Every gathering has a declared purpose.
                  Not networking — a room with intention. Separately priced.
                </p>
              </div>
            </div>
            <div className="deliver-item reveal">
              <div className="deliver-num">06</div>
              <div>
                <div className="deliver-title">Network Access</div>
                <div className="deliver-outcome">
                  The right introductions, when it matters.
                </div>
                <p className="deliver-detail">
                  Non-competing founders across industries. Warm introductions
                  based on your specific goals. Real deal flow from people who
                  are building at the same level.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EVENTS */}
      <section className="events">
        <div className="events-inner">
          <div className="events-left reveal">
            <div className="problem-label">The Gatherings</div>
            <h2 className="events-headline">
              The room is half
              <br />
              the <em>value.</em>
            </h2>
            <p className="events-copy">
              We design every gathering around a single declared purpose. No
              panels. No sponsors. No name tags with your company and job title.
              Just the right people, the right question, and enough space to
              think at a scale that daily life does not allow.
            </p>
            <div className="event-type">
              <div className="event-type-label">Austin</div>
              <div className="event-type-name">Quarterly Private Dinners</div>
              <p className="event-type-copy">
                10 to 14 members. Rotating curated venues. Each dinner opens
                with a framing question that sets the tone for the entire
                evening. Separately priced.
              </p>
            </div>
            <div className="event-type">
              <div className="event-type-label">Southeast Asia</div>
              <div className="event-type-name">
                Annual Retreat — Vietnam
              </div>
              <p className="event-type-copy">
                Once a year. Founding members only at launch. Private villas, Ha
                Long Bay cave dinners, artisan experiences, morning meditation.
                The kind of trip people talk about for years. Separately priced.
              </p>
            </div>
          </div>
          <div className="events-right reveal">
            <div className="events-visual">
              <div className="events-visual-bg" />
              <div className="events-visual-content">
                <div className="events-visual-label">Vietnam Retreat</div>
                <h3 className="events-visual-title">
                  A cave dinner on
                  <br />
                  <em>Ha Long Bay.</em>
                  <br />
                  No phones.
                  <br />
                  No agenda.
                </h3>
                {[
                  "Private villa compound outside Hoi An",
                  "Dinner inside the caves of Ha Long Bay",
                  "Morning meditation with a local practitioner",
                  "Private water puppet performance and dinner with the artists",
                  "One half-day with no phones, no schedule, no agenda",
                  "Local partners handle all logistics. You just show up.",
                ].map((text) => (
                  <div className="event-detail" key={text}>
                    <div className="event-dot" />
                    <div className="event-detail-text">{text}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOR WHO */}
      <section className="forwho">
        <div className="forwho-inner">
          <div className="forwho-left reveal">
            <div className="forwho-display">
              Who
              <br />
              this is
              <br />
              <em>for.</em>
            </div>
          </div>
          <div className="forwho-right reveal">
            <ul className="criteria">
              <li>
                <div className="criteria-num">01</div>
                <div className="criteria-text">
                  <strong>Founders and CEOs</strong> of businesses doing $5M or
                  more in annual revenue
                </div>
              </li>
              <li>
                <div className="criteria-num">02</div>
                <div className="criteria-text">
                  Operating in{" "}
                  <strong>
                    real estate, construction, development, professional
                    services,
                  </strong>{" "}
                  or adjacent industries
                </div>
              </li>
              <li>
                <div className="criteria-num">03</div>
                <div className="criteria-text">
                  Ready to become a <strong>public voice</strong> in their
                  industry — not just a name on a business card
                </div>
              </li>
              <li>
                <div className="criteria-num">04</div>
                <div className="criteria-text">
                  Interested in{" "}
                  <strong>
                    raising capital, attracting the right partners,
                  </strong>{" "}
                  or building something that outlasts the business
                </div>
              </li>
              <li>
                <div className="criteria-num">05</div>
                <div className="criteria-text">
                  Here <strong>by invitation.</strong> Membership is extended,
                  not applied for.
                </div>
              </li>
            </ul>
            <div className="not-fit">
              <p className="not-fit-text">
                Not the right fit for those who want to stay anonymous, are not
                ready to show up publicly, or are looking for a social media
                agency. The Mark is for founders who understand that presence is
                an asset — and are ready to build it.
              </p>
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
                <li>Full service delivery</li>
                <li>All network benefits</li>
                <li>Founding member status</li>
                <li>Rate locked as long as active</li>
                <li>First cohort only</li>
              </ul>
            </div>
            <div className="tier featured reveal">
              <div className="tier-name">Member</div>
              <div className="tier-price">$5,000</div>
              <div className="tier-period">per month</div>
              <div className="tier-divider" />
              <ul className="tier-features">
                <li>Full service delivery</li>
                <li>All network benefits</li>
                <li>Monthly strategy call</li>
                <li>Amplification network</li>
                <li>Event access (separately priced)</li>
              </ul>
            </div>
            <div className="tier reveal">
              <div className="tier-name">Strategic</div>
              <div className="tier-price">Custom</div>
              <div className="tier-period">for select members</div>
              <div className="tier-divider" />
              <ul className="tier-features">
                <li>Capital raise support</li>
                <li>Brand partnership access</li>
                <li>Speaking placement</li>
                <li>International investor network introductions</li>
              </ul>
            </div>
          </div>
          <p className="membership-note reveal">
            Membership is by introduction only. The founding cohort is limited.
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
              <strong>Minh Mac</strong> is the Founder and Brand Builder of
              100Bold, a growth marketing agency based in Austin, Texas. Over 15
              years he has built businesses, connected communities, and learned
              what it takes to make a founder&apos;s name mean something.
            </p>
            <p className="about-copy">
              The Mark is built on a simple belief: the founders who show up
              publicly, consistently, and authentically are the ones who raise
              the money, close the deals, and leave the legacy. Everything else
              is just noise.
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
              <div className="about-card-title">Founder & Brand Builder</div>
              <div className="about-card-rule" />
              <p className="about-card-copy">
                Founder of 100Bold. 15 years building brands and businesses
                across Austin and Southeast Asia. Active member of the Greater
                Austin Asian Chamber of Commerce. Builder of the Tung Cao case
                study that proved this model works.
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
          Membership is by
          <br />
          <em>introduction only.</em>
        </h2>
        <p className="cta-sub reveal">
          If you believe this is for you, let&apos;s have a conversation.
        </p>
        <a
          href="mailto:start@100bold.co?subject=The Mark — Introduction Request"
          className="cta-btn reveal"
        >
          Request an Introduction
        </a>
        <p className="cta-email reveal">
          Or reach us directly at{" "}
          <a href="mailto:start@100bold.co">start@100bold.co</a>
        </p>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-left">
          The Mark — Permanent Presence — Powered by 100Bold
        </div>
        <div className="footer-right">Austin, Texas — By Invitation Only</div>
      </footer>

      <RevealObserver />
    </>
  );
}
