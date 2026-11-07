import type { ReactNode } from "react";
import SiteNav from "./SiteNav";
import SiteFooter from "./SiteFooter";
import CtaSection from "./CtaSection";
import MobileApplyBar from "./MobileApplyBar";
import RevealObserver from "../RevealObserver";

export type GalleryImage = { src: string; alt: string; href?: string; fit?: "cover" | "contain"; cta?: string };

export type CaseStudyData = {
  firstName: string;
  name: string;
  hero: { src: string; alt: string; position: string };
  avatar: { src: string; position?: string };
  quote: string;
  work: ReactNode[];
  results: string[];
  numbersTitle: string;
  bigNumbers: { value: string; label: string }[];
  milestones: { kicker?: string; title: string; desc: string }[];
  /** Portrait images for "The proof" (up to 3). Empty slots show a frame. */
  proofImages?: GalleryImage[];
  /** Portrait images of LinkedIn posts for "From the feed" (up to 3). */
  feedImages?: GalleryImage[];
  linkedin: { url: string; handle: string };
};

function Heading({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="csx-head">
      <div className="csx-label reveal">{label}</div>
      <h2 className="csx-h2 reveal">{children}</h2>
    </div>
  );
}

/* 3 portrait slots: real image when provided, an empty frame otherwise */
function ImageRow({ images = [], kind }: { images?: GalleryImage[]; kind: "proof" | "feed" }) {
  return (
    <div className={`csx-gallery csx-gallery--${kind}`}>
      {[0, 1, 2].map((i) => {
        const img = images[i];
        if (img) {
          const inner = (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={img.src} alt={img.alt} />
          );
          const cls = `csx-frame has-img${img.fit === "contain" ? " is-contain" : ""}${img.href ? " is-link" : ""}`;
          return img.href ? (
            <a key={i} href={img.href} target="_blank" rel="noopener noreferrer" className={cls} aria-label={`${img.alt} (opens in a new tab)`}>
              {inner}
              <span className="csx-frame-cta" aria-hidden>{img.cta ?? "View on LinkedIn \u2197"}</span>
            </a>
          ) : (
            <div key={i} className={cls}>{inner}</div>
          );
        }
        return (
          <div key={i} className="csx-frame is-empty" aria-hidden>
            <svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16" rx="2" /><circle cx="9" cy="10" r="2" /><path d="M21 17l-5-5-9 8" /></svg>
          </div>
        );
      })}
    </div>
  );
}

export default function CaseStudyTemplate({ d }: { d: CaseStudyData }) {
  return (
    <>
      <SiteNav active="cases" />

      <main className="csx">
        {/* 1-2. Back + hero photo with pill name card */}
        <section className="csx-hero">
          <div className="csx-wide">
            <a href="/case-studies" className="csx-back">&larr; Go back</a>
            <div className="csx-hero-frame">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={d.hero.src} alt={d.hero.alt} style={{ objectPosition: d.hero.position }} />
              <div className="csx-hero-shade" />
            </div>
            <div className="csx-namecard">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={d.avatar.src} alt="" className="csx-avatar" style={{ objectPosition: d.avatar.position ?? "center" }} />
              <div>
                <div className="csx-name">{d.name}<span className="accent">.</span></div>
                <p className="csx-quote">&ldquo;{d.quote}&rdquo;</p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. The work */}
        <section className="csx-section">
          <Heading label="The work">What we <span className="accent">did</span></Heading>
          <div className="csx-box csx-narrow reveal">
            {d.work.map((para, i) => (
              <p key={i} className="csx-body">{para}</p>
            ))}
          </div>
        </section>

        {/* 4. Results */}
        <section className="csx-section csx-section--tight">
          <div className="csx-box csx-box--glow csx-narrow reveal">
            <h3 className="csx-h3">Results</h3>
            <div className="csx-checks">
              {d.results.map((item) => (
                <div key={item} className="csx-check">
                  <span className="csx-check-icon">&#10003;</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. By the numbers */}
        <section className="csx-section">
          <Heading label="By the numbers">{d.numbersTitle}</Heading>
          <div className="csx-nums csx-mid reveal">
            {d.bigNumbers.map((n) => (
              <div key={n.label} className="csx-num">
                <div className="csx-num-value">{n.value}</div>
                <div className="csx-num-label">{n.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* 6. Key milestones */}
        <section className="csx-section">
          <Heading label="Milestones">Key <span className="accent">milestones</span></Heading>
          <div className="csx-milestones csx-wide reveal">
            {d.milestones.map((m, i) => (
              <div key={m.title} className="csx-milestone">
                <div className="csx-milestone-num">0{i + 1}</div>
                {m.kicker && <div className="csx-milestone-kicker">{m.kicker}</div>}
                <h3 className="csx-milestone-title">{m.title}</h3>
                <p className="csx-milestone-desc">{m.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 7. The proof */}
        <section className="csx-section">
          <Heading label="Take a look at">The <span className="accent">proof</span></Heading>
          <div className="csx-wide reveal"><ImageRow images={d.proofImages} kind="proof" /></div>
        </section>

        {/* 8. From the feed */}
        <section className="csx-section">
          <Heading label="Content">From the <span className="accent">feed</span></Heading>
          <div className="csx-wide reveal"><ImageRow images={d.feedImages} kind="feed" /></div>
        </section>

        {/* 9. Follow */}
        <section className="csx-section">
          <Heading label="Across socials">Follow <span className="accent">{d.firstName}</span></Heading>
          <div className="csx-socials reveal">
            <a href={d.linkedin.url} target="_blank" rel="noopener noreferrer" className="csx-social">
              <span className="csx-social-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </span>
              <span className="csx-social-text">
                <span className="csx-social-name">LinkedIn</span>
                <span className="csx-social-handle">{d.linkedin.handle}</span>
              </span>
              <span className="csx-social-arrow" aria-hidden>&#8599;</span>
            </a>
          </div>
        </section>
      </main>

      {/* 10. CTA */}
      <CtaSection
        title={<>Want results like <span className="accent">{d.firstName}?</span></>}
        sub="We take on a limited number of clients at a time. Tell us your goal and we'll show you what we'd build."
        showEmail={false}
      />

      <SiteFooter />
      <MobileApplyBar />
      <RevealObserver />
    </>
  );
}
