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
          <div className="nav-wordmark">The Mark</div>
        </a>
        <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
          <div className="nav-links" style={{ display: "flex", gap: 24 }}>
            <a href="/case-studies" style={{ fontSize: 14, fontWeight: 500, color: "var(--muted-lt)", textDecoration: "none" }}>Case Studies</a>
            <a href="/about" style={{ fontSize: 14, fontWeight: 500, color: "var(--muted-lt)", textDecoration: "none" }}>About</a>
          </div>
          <a href="/#apply" className="nav-cta">Apply to Work With Us</a>
        </div>
      </nav>

      {/* BACK LINK */}
      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "100px 64px 0" }}>
        <a href="/case-studies" style={{ fontSize: 14, fontWeight: 500, color: "var(--muted)", textDecoration: "none" }}>&larr; Back to Case Studies</a>
      </div>

      {/* HERO — Full-width image + overlapping name card */}
      <section style={{ maxWidth: 1000, margin: "0 auto", padding: "24px 64px 0" }}>
        <div style={{ position: "relative", marginBottom: 60 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/tung-cao/tc-imc-group.webp"
            alt="Tung Cao at International Manufacturing Congress 2026"
            className="cs-hero-img"
            style={{ width: "100%", height: 500, objectFit: "cover", objectPosition: "center 60%", display: "block", borderRadius: 12 }}
          />
          {/* Overlapping name card */}
          <div className="cs-hero-card" style={{
            position: "absolute", bottom: -40, left: 40, right: 40,
            background: "rgba(13,31,60,0.92)", backdropFilter: "blur(12px)",
            borderRadius: 10, padding: "24px 32px",
            display: "flex", alignItems: "center", gap: 20,
            border: "1px solid rgba(91,155,213,0.15)",
          }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/tung-cao/Tung Cao Photo.png" alt="" style={{ width: 60, height: 60, borderRadius: "50%", objectFit: "cover", border: "2px solid rgba(91,155,213,0.2)" }} />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 22, fontWeight: 700, color: "var(--white)", marginBottom: 4 }}>Tung Cao.</div>
              <p style={{ fontSize: 14, fontWeight: 400, color: "var(--muted-lt)", fontStyle: "italic", lineHeight: 1.6 }}>
                &ldquo;Within 12 months, investors and partners I had never met started reaching out. I was invited to speak at the International Manufacturing Congress in Hanoi. The content opened doors that moved my business forward.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* THE WORK */}
      <section style={{ background: "var(--navy-mid)", padding: "80px 64px" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-display), 'Sora', sans-serif", fontSize: 36, fontWeight: 700, color: "var(--white)", marginBottom: 8 }}>The work.</h2>
          <div style={{ fontSize: 14, fontWeight: 600, letterSpacing: 2, color: "var(--gold)", textTransform: "uppercase", marginBottom: 32 }}>What we did</div>
          <p style={{ fontSize: 17, fontWeight: 400, color: "var(--muted-lt)", lineHeight: 1.85, marginBottom: 20 }}>
            Co-Founder and Head of International Trade at 100B Global, a company bridging Vietnamese manufacturers with international buyers. Despite years of industry expertise, Tung had zero LinkedIn presence. No followers, no content, no visibility to the global buyers and partners he needed to reach.
          </p>
          <p style={{ fontSize: 17, fontWeight: 400, color: "var(--muted-lt)", lineHeight: 1.85, marginBottom: 20 }}>
            We started with deep-dive voice capture sessions to extract Tung&apos;s expertise in sourcing, export compliance, and Vietnam&apos;s manufacturing landscape. From there, we built a content strategy focused on the specific problems his target audience faces when sourcing from Vietnam.
          </p>
          <p style={{ fontSize: 17, fontWeight: 400, color: "var(--muted-lt)", lineHeight: 1.85, marginBottom: 20 }}>
            <strong style={{ color: "var(--white)" }}>3 to 4 posts per week.</strong> Strategic commentary on trade regulations, factory selection, quality control, and cross-border logistics. Full account management. An amplification network that triggered the algorithm from day one.
          </p>
          <p style={{ fontSize: 17, fontWeight: 400, color: "var(--muted-lt)", lineHeight: 1.85 }}>
            The content wasn&apos;t generic industry news. It was Tung&apos;s real experience, published consistently and distributed to the right audience.
          </p>
        </div>
      </section>

      {/* RESULTS */}
      <section style={{ background: "var(--navy)", padding: "80px 64px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", border: "1px solid rgba(91,155,213,0.15)", borderRadius: 12, padding: 40 }}>
          <h2 style={{ fontFamily: "var(--font-display), 'Sora', sans-serif", fontSize: 28, fontWeight: 700, color: "var(--white)", marginBottom: 32 }}>Results</h2>
          <div className="cs-results-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16 }}>
            {[
              "1,000,521 total impressions",
              "296,123 members reached",
              "7,000+ followers from zero",
              "89% out-of-network reach",
              "2x speaker invitations",
              "Daily inbound conversations",
            ].map((item) => (
              <div key={item} style={{ background: "rgba(91,155,213,0.04)", border: "1px solid rgba(91,155,213,0.12)", borderRadius: 8, padding: "20px 24px", display: "flex", gap: 12, alignItems: "flex-start" }}>
                <span style={{ color: "var(--gold)", fontSize: 18, fontWeight: 700, lineHeight: 1, flexShrink: 0 }}>&#10003;</span>
                <span style={{ fontSize: 15, fontWeight: 500, color: "var(--white)", lineHeight: 1.5 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BY THE NUMBERS */}
      <section style={{ background: "#0A1628", padding: "80px 64px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 2, color: "var(--gold)", textTransform: "uppercase", marginBottom: 24, textAlign: "center" }}>By the Numbers</div>
          <div className="cs-bignums" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <div style={{ background: "rgba(91,155,213,0.06)", border: "1px solid rgba(91,155,213,0.15)", borderRadius: 10, padding: "48px 40px", textAlign: "center" }}>
              <div style={{ fontSize: 52, fontWeight: 700, color: "var(--gold)", lineHeight: 1, marginBottom: 10 }}>1M+</div>
              <div style={{ fontSize: 13, fontWeight: 600, letterSpacing: 2, color: "var(--muted)", textTransform: "uppercase" }}>Impressions in 12 months</div>
            </div>
            <div style={{ background: "rgba(91,155,213,0.06)", border: "1px solid rgba(91,155,213,0.15)", borderRadius: 10, padding: "48px 40px", textAlign: "center" }}>
              <div style={{ fontSize: 52, fontWeight: 700, color: "var(--gold)", lineHeight: 1, marginBottom: 10 }}>89%</div>
              <div style={{ fontSize: 13, fontWeight: 600, letterSpacing: 2, color: "var(--muted)", textTransform: "uppercase" }}>Reach outside existing network</div>
            </div>
          </div>
        </div>
      </section>

      {/* KEY MILESTONES */}
      <section style={{ background: "var(--navy)", padding: "80px 64px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 2, color: "var(--gold)", textTransform: "uppercase", marginBottom: 32, textAlign: "center" }}>Key Milestones</div>
          <div className="cs-milestones-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16 }}>
            {[
              { num: "01", title: "Speaker — International Manufacturing Congress 2026", desc: "Invited as a panelist at VIIF Hanoi. Organizers found Tung directly through LinkedIn content." },
              { num: "02", title: "Podcast — Vietnam Supply Chain Network", desc: "VSCN (9K+ members) invited Tung for a podcast on sourcing and export, sourced from his LinkedIn posts." },
              { num: "03", title: "Global Inbound Pipeline", desc: "Partnership proposals from Indonesia, sourcing inquiries from Brazil, collaboration from NUS Singapore. All inbound through LinkedIn." },
            ].map((m) => (
              <div key={m.num} style={{ background: "rgba(91,155,213,0.04)", border: "1px solid rgba(91,155,213,0.12)", borderRadius: 8, padding: "28px 24px" }}>
                <div style={{ fontSize: 32, fontWeight: 700, color: "var(--gold)", opacity: 0.3, marginBottom: 12 }}>{m.num}</div>
                <h3 style={{ fontSize: 17, fontWeight: 600, color: "var(--white)", marginBottom: 10, lineHeight: 1.35 }}>{m.title}</h3>
                <p style={{ fontSize: 14, fontWeight: 400, color: "var(--muted-lt)", lineHeight: 1.75 }}>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE PROOF */}
      <section style={{ background: "#0A1628", padding: "80px 64px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 2, color: "var(--gold)", textTransform: "uppercase", marginBottom: 32, textAlign: "center" }}>The Proof</div>
          <div style={{ border: "1px solid rgba(91,155,213,0.12)", borderRadius: 12, padding: 32 }}>
            <div style={{ fontSize: 13, fontWeight: 600, letterSpacing: 2, color: "var(--gold)", textTransform: "uppercase", marginBottom: 16 }}>Analytics &amp; Events</div>
            <div className="cs-proof-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 32 }}>
              {[
                { src: "/images/tung-cao/linkedin-analytics.png", alt: "LinkedIn analytics" },
                { src: "/images/tung-cao/1789130366372.jpeg", alt: "IMC event" },
                { src: "/images/tung-cao/1789130366853.jpeg", alt: "IMC stage" },
                { src: "/images/tung-cao/tc-speaker-stage.webp", alt: "Speaker stage" },
              ].map((img) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img key={img.src} src={img.src} alt={img.alt} style={{ width: "100%", height: 200, objectFit: "cover", borderRadius: 6, border: "1px solid rgba(91,155,213,0.08)" }} />
              ))}
            </div>
            <div style={{ fontSize: 13, fontWeight: 600, letterSpacing: 2, color: "var(--gold)", textTransform: "uppercase", marginBottom: 8 }}>Inbound &amp; Collaboration</div>
            <p style={{ fontSize: 13, color: "var(--muted)", marginBottom: 16, fontStyle: "italic" }}>Names and profile photos redacted for privacy.</p>
            <div className="cs-proof-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
              {[
                { src: "/images/tung-cao/dm-akanksha-imc.png", alt: "Speaker invitation" },
                { src: "/images/tung-cao/dm-vscn-podcast.png", alt: "Podcast invitation" },
                { src: "/images/tung-cao/dm-andhika.png", alt: "Partnership proposal" },
                { src: "/images/tung-cao/dm-eduardo.png", alt: "Collaboration request" },
                { src: "/images/tung-cao/dm-nus-singapore.png", alt: "University collaboration" },
                { src: "/images/tung-cao/dm-ryan-sourcing.png", alt: "Sourcing inquiry" },
              ].map((dm) => (
                <div key={dm.src} style={{ position: "relative", overflow: "hidden", borderRadius: 6 }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={dm.src} alt={dm.alt} style={{ width: "100%", height: 240, objectFit: "cover", objectPosition: "top", border: "1px solid rgba(91,155,213,0.08)" }} />
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 64, backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", background: "linear-gradient(rgba(13,27,42,0.4), transparent)" }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FROM THE FEED */}
      <section style={{ background: "var(--navy)", padding: "80px 64px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 2, color: "var(--gold)", textTransform: "uppercase", marginBottom: 12 }}>Content</div>
          <h2 style={{ fontFamily: "var(--font-display), 'Sora', sans-serif", fontSize: 36, fontWeight: 700, color: "var(--white)", marginBottom: 48 }}>From the <span style={{ color: "var(--gold)" }}>feed</span></h2>
          <div className="cs-feed-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16 }}>
            {[1, 2, 3].map((i) => (
              <div key={i} style={{ height: 360, border: "1px solid rgba(91,155,213,0.12)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", color: "var(--muted)", fontSize: 14 }}>
                Content coming soon
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOLLOW */}
      <section style={{ background: "#0A1628", padding: "80px 64px" }}>
        <div style={{ maxWidth: 600, margin: "0 auto", textAlign: "center" }}>
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 2, color: "var(--gold)", textTransform: "uppercase", marginBottom: 12 }}>Across Socials</div>
          <h2 style={{ fontFamily: "var(--font-display), 'Sora', sans-serif", fontSize: 32, fontWeight: 700, color: "var(--white)", marginBottom: 32 }}>Follow <span style={{ color: "var(--gold)" }}>Tung</span></h2>
          <a href="#" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: 16, background: "rgba(91,155,213,0.06)", border: "1px solid rgba(91,155,213,0.15)", borderRadius: 10, padding: "20px 28px", textDecoration: "none", maxWidth: 320, margin: "0 auto" }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--muted-lt)"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
            <div style={{ textAlign: "left" }}>
              <div style={{ fontSize: 15, fontWeight: 600, color: "var(--white)" }}>LinkedIn</div>
              <div style={{ fontSize: 13, color: "var(--gold)" }}>Coming soon</div>
            </div>
          </a>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--navy)", padding: "120px 64px", textAlign: "center", borderTop: "1px solid rgba(91,155,213,0.1)" }}>
        <h2 style={{ fontFamily: "var(--font-display), 'Sora', sans-serif", fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 700, color: "var(--white)", marginBottom: 16 }}>
          Want results like <span style={{ color: "var(--gold)" }}>Tung?</span>
        </h2>
        <p style={{ fontSize: 17, fontWeight: 400, color: "var(--muted)", marginBottom: 40, maxWidth: 480, margin: "0 auto 40px" }}>
          We take on a limited number of clients at a time. Tell us your goal and we&apos;ll show you what we&apos;d build.
        </p>
        <a href="/#apply" className="btn-primary" style={{ padding: "18px 48px", fontSize: 14 }}>Apply to Work With Us</a>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#080E1A", padding: "80px 64px 0", borderTop: "1px solid rgba(91,155,213,0.08)" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div className="footer-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 48, marginBottom: 64 }}>
            <div>
              <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 2, color: "var(--gold)", textTransform: "uppercase", marginBottom: 20 }}>Contact</div>
              <a href="mailto:start@100bold.co" style={{ fontSize: 15, fontWeight: 400, color: "var(--muted-lt)", textDecoration: "none", display: "block", marginBottom: 12 }}>start@100bold.co</a>
              <a href="https://linkedin.com/in/minhbmac" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 40, height: 40, borderRadius: "50%", border: "1px solid rgba(91,155,213,0.2)", marginTop: 12, marginBottom: 20 }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="var(--muted-lt)">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <p style={{ fontSize: 13, fontWeight: 400, color: "var(--muted)" }}>Austin, Texas</p>
            </div>
            <div>
              <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 2, color: "var(--gold)", textTransform: "uppercase", marginBottom: 20 }}>Pages</div>
              {[
                ["Home", "/"],
                ["Case Studies", "/case-studies"],
                ["About", "/about"],
              ].map(([label, href]) => (
                <a key={label} href={href} style={{ fontSize: 15, fontWeight: 400, color: "var(--muted-lt)", textDecoration: "none", display: "block", marginBottom: 12 }}>{label}</a>
              ))}
            </div>
            <div>
              <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 2, color: "var(--gold)", textTransform: "uppercase", marginBottom: 20 }}>Services</div>
              {[
                "LinkedIn Management",
                "Content Strategy",
                "Outreach & Conversion",
                "Amplification Network",
              ].map((item) => (
                <p key={item} style={{ fontSize: 15, fontWeight: 400, color: "var(--muted-lt)", marginBottom: 12 }}>{item}</p>
              ))}
            </div>
          </div>
          <div style={{ overflow: "hidden", padding: "40px 0 48px", textAlign: "center" }}>
            <div className="footer-brand-glow" style={{
              fontFamily: "var(--font-display), 'Sora', sans-serif",
              fontSize: "clamp(60px, 10vw, 140px)",
              fontWeight: 700,
              letterSpacing: 8,
              textTransform: "uppercase",
              lineHeight: 1,
              whiteSpace: "nowrap",
              userSelect: "none",
              color: "rgba(91,155,213,0.06)",
              backgroundImage: "linear-gradient(90deg, rgba(91,155,213,0.06) 0%, rgba(91,155,213,0.06) 48%, rgba(91,155,213,1) 50%, rgba(91,155,213,0.06) 52%, rgba(91,155,213,0.06) 100%)",
              backgroundSize: "300% 100%",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              THE MARK
            </div>
          </div>
          <div className="footer-bar" style={{ borderTop: "1px solid rgba(91,155,213,0.08)", padding: "24px 0", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <p style={{ fontSize: 13, fontWeight: 400, color: "var(--muted)" }}>&copy; 2026 The Mark by 100Bold</p>
            <p style={{ fontSize: 13, fontWeight: 400, color: "var(--muted)" }}>Application Only</p>
          </div>
        </div>
      </footer>
    </>
  );
}
