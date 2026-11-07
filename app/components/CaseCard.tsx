"use client";

import type { MouseEvent } from "react";

import type { CaseCardData } from "./cases";

/* Elevated, fully clickable result card (shared by Home and /case-studies) */
export default function CaseCard({ d }: { d: CaseCardData }) {
  const track = (e: MouseEvent<HTMLAnchorElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <a href={d.href} className="case-card" onMouseMove={track}>
      <div className="case-card-media">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={d.img.src} alt={d.img.alt} className="case-card-img" style={d.img.style} />
        <div className="case-card-shade" />
      </div>
      <div className="case-card-body">
        <div className="case-card-name">{d.name}</div>
        <div className="case-card-title">{d.title}</div>
        <p className="case-card-intro">{d.intro}</p>
        <div className="case-card-stats">
          {d.stats.map((s) => (
            <div key={s.label}>
              <div className="case-card-num">{s.value}</div>
              <div className="case-card-label">{s.label}</div>
            </div>
          ))}
        </div>
        <span className="case-card-link">
          Read the case study <span className="case-card-arrow">&rarr;</span>
        </span>
      </div>
    </a>
  );
}
