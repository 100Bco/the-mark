"use client";

import { useCallback, useEffect, useRef, useState, type PointerEvent } from "react";

/* Shared profile layout so BEFORE and AFTER line up pixel-for-pixel */
type Side = "before" | "after";

const STATS: Record<Side, { v: string; l: string }[]> = {
  before: [
    { v: "0", l: "Followers" },
    { v: "0", l: "Impressions" },
    { v: "0%", l: "Out-of-network" },
  ],
  after: [
    { v: "7,000+", l: "Followers" },
    { v: "1M+", l: "Impressions" },
    { v: "89%", l: "Out-of-network" },
  ],
};

const INBOX = ["Speaker invitation", "Partnership request", "Investor wants to connect"];

function Profile({ side }: { side: Side }) {
  const after = side === "after";
  return (
    <div className={`ba-profile ba-${side}`}>
      <div className="ba-banner" />
      <div className="ba-grid">
        {/* Identity + stats */}
        <div className="ba-col ba-id">
          <div className="ba-avatar">
            <svg viewBox="0 0 40 40" aria-hidden>
              <circle cx="20" cy="15" r="7" />
              <path d="M6 36c2-8 8-12 14-12s12 4 14 12" />
            </svg>
          </div>
          <div className="ba-name">
            Your Name {after && <span className="ba-verified">&#10003;</span>}
          </div>
          <div className="ba-role">Founder &amp; CEO</div>
          <div className="ba-stats">
            {STATS[side].map((s) => (
              <div key={s.l} className="ba-stat">
                <span className="ba-stat-v">{s.v}</span>
                <span className="ba-stat-l">{s.l}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Activity */}
        <div className="ba-col ba-activity">
          <div className="ba-col-title">Activity</div>
          {after ? (
            <div className="ba-chart">
              <svg viewBox="0 0 300 120" preserveAspectRatio="none" aria-hidden>
                <defs>
                  <linearGradient id="baFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="rgba(123,179,224,0.45)" />
                    <stop offset="100%" stopColor="rgba(123,179,224,0)" />
                  </linearGradient>
                </defs>
                <path d="M0 112 C40 110 60 104 90 96 S140 80 170 62 S230 30 300 8 L300 120 L0 120 Z" fill="url(#baFill)" />
                <path d="M0 112 C40 110 60 104 90 96 S140 80 170 62 S230 30 300 8" fill="none" stroke="#7BB3E0" strokeWidth="3" />
              </svg>
              <div className="ba-chart-note">3 to 4 posts per week</div>
            </div>
          ) : (
            <div className="ba-empty">
              <svg viewBox="0 0 24 24" aria-hidden><path d="M4 5h16v14H4z M8 10h8 M8 14h5" /></svg>
              <span>No posts yet</span>
            </div>
          )}
        </div>

        {/* Inbox */}
        <div className="ba-col ba-inbox">
          <div className="ba-col-title">
            Messages {after && <span className="ba-badge">3</span>}
          </div>
          {after ? (
            INBOX.map((m, i) => (
              <div key={m} className="ba-msg">
                <span className={`ba-msg-av av${i}`} />
                <span className="ba-msg-text">{m}</span>
                <span className="ba-msg-dot" />
              </div>
            ))
          ) : (
            <div className="ba-empty">
              <svg viewBox="0 0 24 24" aria-hidden><path d="M3 6h18v12H3z M3 6l9 7 9-7" /></svg>
              <span>No new messages</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function HeroBeforeAfter() {
  const frameRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(100); // % from left where AFTER starts
  const [mobileSide, setMobileSide] = useState<Side>("before");
  const autoRef = useRef(true);
  const resumeRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const dragRef = useRef(false);

  /* Desktop: auto sweep 100% -> 0% -> 100% with holds */
  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const CYCLE = 9000;
    const ease = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
    const tick = (now: number) => {
      if (autoRef.current) {
        const t = ((now - start) % CYCLE) / CYCLE;
        let p: number;
        if (t < 0.12) p = 100; // hold BEFORE
        else if (t < 0.42) p = 100 - 100 * ease((t - 0.12) / 0.3); // sweep to AFTER
        else if (t < 0.78) p = 0; // hold AFTER (longer)
        else p = 100 * ease((t - 0.78) / 0.22); // sweep back
        setPos(p);
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  /* Mobile: toggle every 3.2s unless the visitor tapped */
  useEffect(() => {
    const id = setInterval(() => {
      if (autoRef.current) setMobileSide((s) => (s === "before" ? "after" : "before"));
    }, 3200);
    return () => clearInterval(id);
  }, []);

  const pauseAuto = useCallback(() => {
    autoRef.current = false;
    if (resumeRef.current) clearTimeout(resumeRef.current);
    resumeRef.current = setTimeout(() => { autoRef.current = true; }, 7000);
  }, []);

  const moveTo = (clientX: number) => {
    const r = frameRef.current?.getBoundingClientRect();
    if (!r) return;
    setPos(Math.max(0, Math.min(100, ((clientX - r.left) / r.width) * 100)));
  };

  const onDown = (e: PointerEvent<HTMLDivElement>) => {
    dragRef.current = true;
    pauseAuto();
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
    moveTo(e.clientX);
  };
  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    if (!dragRef.current) return;
    pauseAuto();
    moveTo(e.clientX);
  };
  const onUp = () => { dragRef.current = false; };

  return (
    <div className="ba-wrap">
      {/* ── Desktop: drag slider ── */}
      <div
        ref={frameRef}
        className="ba-frame ba-desktop"
        onPointerDown={onDown}
        onPointerMove={onMove}
        onPointerUp={onUp}
        onPointerCancel={onUp}
      >
        <Profile side="before" />
        <div className="ba-layer-after" style={{ clipPath: `inset(0 0 0 ${pos}%)` }}>
          <Profile side="after" />
        </div>
        <span className="ba-tag ba-tag-before" style={{ opacity: pos > 12 ? 1 : 0 }}>Before</span>
        <span className="ba-tag ba-tag-after" style={{ opacity: pos < 88 ? 1 : 0 }}>After The Mark</span>
        <div className="ba-handle" style={{ left: `${pos}%` }}>
          <span className="ba-knob">
            <svg viewBox="0 0 24 24" aria-hidden><path d="M9 6l-6 6 6 6 M15 6l6 6-6 6" /></svg>
          </span>
        </div>
      </div>

      {/* ── Mobile: tap toggle with crossfade ── */}
      <div className="ba-mobile">
        <div className="ba-toggle" role="tablist">
          <span className={`ba-toggle-pill${mobileSide === "after" ? " is-after" : ""}`} />
          {(["before", "after"] as Side[]).map((s) => (
            <button
              key={s}
              type="button"
              role="tab"
              aria-selected={mobileSide === s}
              className={mobileSide === s ? "is-active" : ""}
              onClick={() => { pauseAuto(); setMobileSide(s); }}
            >
              {s === "before" ? "Before" : "After"}
            </button>
          ))}
        </div>
        <div className="ba-frame ba-frame-m">
          <div className={`ba-fade${mobileSide === "before" ? " is-on" : ""}`}><Profile side="before" /></div>
          <div className={`ba-fade${mobileSide === "after" ? " is-on" : ""}`}><Profile side="after" /></div>
        </div>
      </div>

      <p className="ba-caption">Real client result: Tung Cao, 12 months with The Mark</p>
    </div>
  );
}
