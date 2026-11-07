"use client";

import { useEffect, useRef, useState } from "react";

export type GalleryImage = { src: string; alt: string; href?: string; fit?: "cover" | "contain"; cta?: string };

/* 3 portrait slots. Desktop: 3 columns. Mobile: one card per view, swipe, dots below. */
export default function ImageRow({ images = [], kind }: { images?: GalleryImage[]; kind: "proof" | "feed" }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const onScroll = () => {
      const cards = Array.from(el.children) as HTMLElement[];
      const mid = el.scrollLeft + el.clientWidth / 2;
      let best = 0, dist = Infinity;
      cards.forEach((c, i) => {
        const d = Math.abs(c.offsetLeft + c.offsetWidth / 2 - mid);
        if (d < dist) { dist = d; best = i; }
      });
      setActive(best);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  const goTo = (i: number) => {
    const el = trackRef.current;
    const card = el?.children[i] as HTMLElement | undefined;
    if (el && card) el.scrollTo({ left: card.offsetLeft - (el.clientWidth - card.offsetWidth) / 2, behavior: "smooth" });
  };

  return (
    <>
      <div ref={trackRef} className={`csx-gallery csx-gallery--${kind}`}>
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
                <span className="csx-frame-cta" aria-hidden>{img.cta ?? "View on LinkedIn ↗"}</span>
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
      <div className="csx-dots" role="tablist" aria-label="Choose image">
        {[0, 1, 2].map((i) => (
          <button key={i} type="button" role="tab" aria-selected={active === i} aria-label={`Image ${i + 1}`}
            className={`csx-dot${active === i ? " is-active" : ""}`} onClick={() => goTo(i)} />
        ))}
      </div>
    </>
  );
}
