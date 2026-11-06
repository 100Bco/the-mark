import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Loc Dang — 49K+ Impressions in 4 Months From Zero | The Mark",
  description:
    "How The Mark took Loc Dang from zero social media presence to 49K+ impressions, 3,596 followers, and a stream of inbound opportunities in just 4 months.",
};

export default function LocDangPage() {
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
            src="/images/loc-dang/ld-office-portrait.webp"
            alt="Loc Dang at his office in Austin"
            className="cs-hero-img"
            style={{ width: "100%", height: 500, objectFit: "cover", objectPosition: "center 25%", display: "block", borderRadius: 12 }}
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
            <img src="/images/loc-dang/Loc Dang.png" alt="" style={{ width: 60, height: 60, borderRadius: "50%", objectFit: "cover", border: "2px solid rgba(91,155,213,0.2)" }} />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 22, fontWeight: 700, color: "var(--white)", marginBottom: 4 }}>Loc Dang.</div>
              <p style={{ fontSize: 14, fontWeight: 400, color: "var(--muted-lt)", fontStyle: "italic", lineHeight: 1.6 }}>
                &ldquo;I never used social media before. Within 4 months, attorneys and business owners were reaching out to connect, podcast hosts were inviting me on their shows, and my name was being recognized in the Austin legal community, all from LinkedIn.&rdquo;
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
            Founder of Dang Law Group, a personal injury law firm based in Austin, Texas. Before working with The Mark, Loc had never used social media. No LinkedIn profile activity, no content, no online presence. His reputation was built entirely through word of mouth and courtroom results.
          </p>
          <p style={{ fontSize: 17, fontWeight: 400, color: "var(--muted-lt)", lineHeight: 1.85, marginBottom: 20 }}>
            Starting in June 2026, we built Loc&apos;s LinkedIn presence from scratch. Voice capture sessions extracted his perspective on personal injury law, client advocacy, and what accident victims need to know.
          </p>
          <p style={{ fontSize: 17, fontWeight: 400, color: "var(--muted-lt)", lineHeight: 1.85, marginBottom: 20 }}>
            <strong style={{ color: "var(--white)" }}>3 to 4 posts per week</strong> covering accident case insights, legal rights education, community involvement, and the story of building Dang Law Group. Full account management handled.
          </p>
          <p style={{ fontSize: 17, fontWeight: 400, color: "var(--muted-lt)", lineHeight: 1.85 }}>
            In 4 months, Loc went from invisible online to a recognized voice in Austin&apos;s legal and business community.
          </p>
        </div>
      </section>

      {/* RESULTS */}
      <section style={{ background: "var(--navy)", padding: "80px 64px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", border: "1px solid rgba(91,155,213,0.15)", borderRadius: 12, padding: 40 }}>
          <h2 style={{ fontFamily: "var(--font-display), 'Sora', sans-serif", fontSize: 28, fontWeight: 700, color: "var(--white)", marginBottom: 32 }}>Results</h2>
          <div className="cs-results-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16 }}>
            {[
              "49,055 total impressions",
              "3,596 followers from zero",
              "4,632% growth rate",
              "12% attorney audience",
              "Podcast invitation received",
              "10+ inbound conversations",
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
              <div style={{ fontSize: 52, fontWeight: 700, color: "var(--gold)", lineHeight: 1, marginBottom: 10 }}>4,632%</div>
              <div style={{ fontSize: 13, fontWeight: 600, letterSpacing: 2, color: "var(--muted)", textTransform: "uppercase" }}>Follower Growth</div>
            </div>
            <div style={{ background: "rgba(91,155,213,0.06)", border: "1px solid rgba(91,155,213,0.15)", borderRadius: 10, padding: "48px 40px", textAlign: "center" }}>
              <div style={{ fontSize: 52, fontWeight: 700, color: "var(--gold)", lineHeight: 1, marginBottom: 10 }}>0 &rarr; 3,596</div>
              <div style={{ fontSize: 13, fontWeight: 600, letterSpacing: 2, color: "var(--muted)", textTransform: "uppercase" }}>Followers in 4 Months</div>
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
              { num: "01", title: "Podcast — Austin Business Spotlight Series", desc: "Featured podcast (200+ episodes) reached out via LinkedIn and followed up three times to book Loc as a guest." },
              { num: "02", title: "VIP Event — Moody Center", desc: "Invited to exclusive Moody Center events for strategic partnerships within the legal industry." },
              { num: "03", title: "Peer & Partner Inbound", desc: "Attorneys, firm owners, and sales directors reaching out for lunch meetings, calls, and collaboration. All inbound." },
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
            <div style={{ fontSize: 13, fontWeight: 600, letterSpacing: 2, color: "var(--gold)", textTransform: "uppercase", marginBottom: 16 }}>Analytics</div>
            <div className="cs-proof-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 32 }}>
              {[
                { src: "/images/loc-dang/Impression LD.jpg", alt: "Impressions" },
                { src: "/images/loc-dang/Follower LD.jpg", alt: "Followers" },
                { src: "/images/loc-dang/Demographics LD.jpg", alt: "Demographics" },
                { src: "/images/loc-dang/Engagement LD.jpg", alt: "Engagement" },
              ].map((img) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img key={img.src} src={img.src} alt={img.alt} style={{ width: "100%", height: 200, objectFit: "cover", borderRadius: 6, border: "1px solid rgba(91,155,213,0.08)" }} />
              ))}
            </div>
            <div style={{ fontSize: 13, fontWeight: 600, letterSpacing: 2, color: "var(--gold)", textTransform: "uppercase", marginBottom: 8 }}>Inbound Messages</div>
            <p style={{ fontSize: 13, color: "var(--muted)", marginBottom: 16, fontStyle: "italic" }}>Names and profile photos redacted for privacy.</p>
            <div className="cs-proof-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
              {[
                { src: "/images/loc-dang/Inbox LD.jpg", alt: "Inbox 1" },
                { src: "/images/loc-dang/Inbox 2 LD.jpg", alt: "Inbox 2" },
                { src: "/images/loc-dang/Inbox 3 LD.jpg", alt: "Inbox 3" },
                { src: "/images/loc-dang/Inbox 4 LD.jpg", alt: "Inbox 4" },
                { src: "/images/loc-dang/Inbox 5 LD.jpg", alt: "Inbox 5" },
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
          <h2 style={{ fontFamily: "var(--font-display), 'Sora', sans-serif", fontSize: 32, fontWeight: 700, color: "var(--white)", marginBottom: 32 }}>Follow <span style={{ color: "var(--gold)" }}>Loc</span></h2>
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
          Want results like <span style={{ color: "var(--gold)" }}>Loc?</span>
        </h2>
        <p style={{ fontSize: 17, fontWeight: 400, color: "var(--muted)", marginBottom: 40, maxWidth: 480, margin: "0 auto 40px" }}>
          We take on a limited number of clients at a time. Tell us your goal and we&apos;ll show you what we&apos;d build.
        </p>
        <a href="/#apply" className="btn-primary" style={{ padding: "18px 48px", fontSize: 14 }}>Apply to Work With Us</a>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#080E1A", padding: "40px 64px", borderTop: "1px solid rgba(91,155,213,0.08)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <p style={{ fontSize: 13, fontWeight: 400, color: "var(--muted)" }}>&copy; 2026 The Mark by 100Bold</p>
        <p style={{ fontSize: 13, fontWeight: 400, color: "var(--muted)" }}>Austin, Texas</p>
      </footer>
    </>
  );
}
