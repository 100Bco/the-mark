"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  { label: "Strategy\n& Voice", week: "Week 1-2", icon: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" },
  { label: "Launch\n& Manage", week: "Week 3-4", icon: "M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.840a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" },
  { label: "Grow\n& Engage", week: "Month 2-4", icon: "M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.750a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" },
  { label: "Convert\n& Scale", week: "Month 5+", icon: "M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.940 2.28l-2.28 5.941" },
];

/* Bar heights rise step by step: the section reads as a growth staircase */
const BAR_H = [84, 144, 204, 264]; // desktop px
const BAR_W = [46, 64, 82, 100]; // mobile % width
const AREA_H = 280; // desktop bar area height

/* Points on top of each bar (viewBox 1000 x AREA_H) */
const PTS = BAR_H.map((h, i) => [125 + i * 250, AREA_H - h] as const);
const LINE =
  `M${PTS[0][0]} ${PTS[0][1]} ` +
  PTS.slice(1).map(([x, y], i) => {
    const [px, py] = PTS[i];
    const cx = (px + x) / 2;
    return `C${cx} ${py} ${cx} ${y} ${x} ${y}`;
  }).join(" ") +
  ` L985 ${PTS[3][1] - 22}`;

function useIsMobile() {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 900px)");
    const set = () => setMobile(mq.matches);
    set();
    mq.addEventListener("change", set);
    return () => mq.removeEventListener("change", set);
  }, []);
  return mobile;
}

function Icon({ d, size }: { d: string; size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d={d} />
    </svg>
  );
}

export default function JourneyTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const [built, setBuilt] = useState(false);
  const [active, setActive] = useState(-1);
  const isMobile = useIsMobile();

  // Build once when the section scrolls into view
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setBuilt(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // After the staircase is built, a light walks up the steps and loops
  useEffect(() => {
    if (!built) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let i = -1;
    let id: ReturnType<typeof setInterval>;
    const start = setTimeout(() => {
      id = setInterval(() => {
        i = (i + 1) % 5; // 4 steps + 1 beat of rest
        setActive(i < 4 ? i : -1);
      }, 1800);
    }, 5000);
    return () => {
      clearTimeout(start);
      clearInterval(id);
    };
  }, [built]);

  /* ── MOBILE: horizontal bars that grow longer step by step ── */
  if (isMobile) {
    return (
      <div ref={ref} className={`stair-m${built ? " is-built" : ""}`}>
        {steps.map((s, i) => (
          <div key={s.week} className={`stair-m-row${active === i ? " is-active" : ""}`} style={{ transitionDelay: `${i * 450}ms` }}>
            <div className="stair-m-head">
              <span className="stair-icon stair-icon--m"><Icon d={s.icon} size={24} /></span>
              <span className="stair-m-text">
                <span className="stair-label">{s.label.replace("\n", " ")}</span>
                <span className="stair-week">{s.week}</span>
              </span>
            </div>
            <div className="stair-m-track">
              <div className="stair-m-bar" style={{ width: built ? `${BAR_W[i]}%` : "0%", transitionDelay: `${200 + i * 450}ms` }} />
            </div>
          </div>
        ))}
      </div>
    );
  }

  /* ── DESKTOP: rising staircase with a growth line on top ── */
  return (
    <div ref={ref} className={`stair${built ? " is-built" : ""}`}>
      <div className="stair-cols">
        {steps.map((s, i) => (
          <div key={s.week} className={`stair-col${active === i ? " is-active" : ""}`}>
            <div className="stair-content" style={{ bottom: BAR_H[i] + 22, transitionDelay: `${300 + i * 500}ms` }}>
              <span className="stair-icon"><Icon d={s.icon} size={30} /></span>
              <span className="stair-label">{s.label}</span>
              <span className="stair-week">{s.week}</span>
            </div>
            <div className="stair-bar" style={{ height: BAR_H[i], transitionDelay: `${i * 500}ms` }} />
          </div>
        ))}
      </div>

      {/* Growth line across the bar tops */}
      <svg className="stair-line" viewBox={`0 0 1000 ${AREA_H}`} preserveAspectRatio="none" aria-hidden>
        <path d={LINE} pathLength={1} className="stair-line-path" />
      </svg>
      {PTS.map(([x, y], i) => (
        <span
          key={i}
          className={`stair-dot${active === i ? " is-active" : ""}`}
          style={{ left: `${x / 10}%`, top: `calc(100% - ${AREA_H}px + ${y}px)`, transition: `opacity 0.6s ease ${1600 + Math.round((i / 3) * 2800)}ms, transform 0.6s ease ${1600 + Math.round((i / 3) * 2800)}ms, background 0.8s ease, box-shadow 0.8s ease` }}
        />
      ))}
      <span className="stair-arrow" style={{ top: `calc(100% - ${AREA_H}px + ${PTS[3][1] - 22}px)` }}>
        <svg viewBox="0 0 24 24" aria-hidden><path d="M7 17L17 7M17 7H9M17 7v8" /></svg>
      </span>
      <div className="stair-base" />
    </div>
  );
}
