"use client";

import { useCallback, useEffect, useRef, useState, type MouseEvent } from "react";

/* ─────────────────────────────────────────────────────────────
   Geometry for the reach network (SVG viewBox 400 x 260)
   ───────────────────────────────────────────────────────────── */
const CX = 200;
const CY = 130;
type Node = { x: number; y: number; ring: number; parent: number };

function buildNetwork(): Node[] {
  const rings = [
    { rx: 72, ry: 46, count: 6, offset: 0.3 },
    { rx: 124, ry: 80, count: 10, offset: 0.1 },
    { rx: 178, ry: 112, count: 16, offset: 0.2 },
  ];
  const nodes: Node[] = [];
  rings.forEach((r, ri) => {
    for (let i = 0; i < r.count; i++) {
      const a = (i / r.count) * Math.PI * 2 + r.offset;
      const x = CX + Math.cos(a) * r.rx;
      const y = CY + Math.sin(a) * r.ry;
      // parent = closest node on the previous ring (or the centre)
      let parent = -1;
      if (ri > 0) {
        let best = Infinity;
        nodes.forEach((n, idx) => {
          if (n.ring !== ri - 1) return;
          const d = (n.x - x) ** 2 + (n.y - y) ** 2;
          if (d < best) { best = d; parent = idx; }
        });
      }
      nodes.push({ x: Math.round(x * 10) / 10, y: Math.round(y * 10) / 10, ring: ri, parent });
    }
  });
  return nodes;
}
const NODES = buildNetwork();
const OUTER = NODES.map((n, i) => (n.ring === 2 ? i : -1)).filter((i) => i >= 0);
// Outer nodes on the right half travel nicely towards the inbox card
const LEAD_NODES = [OUTER[1], OUTER[15], OUTER[2], OUTER[14]];

const MESSAGES = [
  "Speaker invitation received",
  "New partnership request",
  "Investor wants to connect",
  "Podcast guest request",
];

/* Timeline (ms) */
const RING_AT = [300, 1000, 1700];
const LEADS_START = 2600;
const LEAD_EVERY = 1700;
const FLY_MS = 900;
const TYPING_MS = 550;
const HOLD_END = 2200;

function easeCount(target: number, p: number) {
  return Math.round(target * (1 - Math.pow(1 - p, 3)));
}

function useIsDesktop() {
  const [desk, setDesk] = useState(true);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 901px)");
    const set = () => setDesk(mq.matches);
    set();
    mq.addEventListener("change", set);
    return () => mq.removeEventListener("change", set);
  }, []);
  return desk;
}

/* Spotlight that follows the cursor (desktop hover) */
function trackPointer(e: MouseEvent<HTMLDivElement>) {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
}

export default function WhatWeDoCards() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const inboxRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<(SVGCircleElement | null)[]>([]);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const isDesktop = useIsDesktop();

  const [started, setStarted] = useState(false);
  const [inView, setInView] = useState(false);
  const [ring, setRing] = useState(-1); // highest lit ring
  const [fading, setFading] = useState(false);
  const [impressions, setImpressions] = useState(0);
  const [pulse, setPulse] = useState(-1); // outer node currently sending a lead
  const [msgs, setMsgs] = useState(0); // delivered messages
  const [typing, setTyping] = useState(false);
  const [fly, setFly] = useState<{ x: number; y: number; go: boolean; tx: number; ty: number } | null>(null);

  // Start when the cards scroll into view
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setStarted(true);
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const later = useCallback((fn: () => void, ms: number) => {
    timers.current.push(setTimeout(fn, ms));
  }, []);

  // Fly a dot from an outer node (card 1) to the inbox (card 2)
  const launchDot = useCallback(
    (nodeIdx: number) => {
      const wrap = wrapRef.current;
      const node = nodeRefs.current[nodeIdx];
      const inbox = inboxRef.current;
      if (!wrap || !node || !inbox) return;
      const w = wrap.getBoundingClientRect();
      const n = node.getBoundingClientRect();
      const ib = inbox.getBoundingClientRect();
      const x = n.left + n.width / 2 - w.left;
      const y = n.top + n.height / 2 - w.top;
      const tx = ib.left + 28 - w.left;
      const ty = ib.top + 70 - w.top;
      setFly({ x, y, tx, ty, go: false });
      requestAnimationFrame(() => requestAnimationFrame(() => setFly({ x, y, tx, ty, go: true })));
    },
    []
  );

  // Main loop
  useEffect(() => {
    if (!started) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setRing(2);
      setImpressions(1);
      setMsgs(4);
      return;
    }

    let cancelled = false;
    const cycle = () => {
      if (cancelled) return;
      timers.current.forEach(clearTimeout);
      timers.current = [];
      setFading(false);
      setRing(-1);
      setMsgs(0);
      setTyping(false);
      setPulse(-1);
      setImpressions(0);
      setFly(null);

      RING_AT.forEach((t, i) => later(() => setRing(i), t));

      // impressions counter: 0 -> 1M over the ring build
      const steps = 24;
      for (let s = 1; s <= steps; s++) {
        later(() => setImpressions(easeCount(1000, s / steps) / 1000), RING_AT[0] + (s * 1900) / steps);
      }

      MESSAGES.forEach((_, i) => {
        const t = LEADS_START + i * LEAD_EVERY;
        const node = LEAD_NODES[i];
        later(() => {
          setPulse(node);
          if (isDesktop) launchDot(node);
        }, t);
        const arrive = t + (isDesktop ? FLY_MS : 250);
        later(() => {
          setFly(null);
          setTyping(true);
        }, arrive);
        later(() => {
          setTyping(false);
          setMsgs(i + 1);
          setPulse(-1);
        }, arrive + TYPING_MS);
      });

      const end = LEADS_START + MESSAGES.length * LEAD_EVERY + HOLD_END;
      later(() => setFading(true), end);
      later(cycle, end + 700);
    };
    cycle();

    return () => {
      cancelled = true;
      timers.current.forEach(clearTimeout);
      timers.current = [];
    };
  }, [started, isDesktop, later, launchDot]);

  const impLabel = impressions >= 1 ? "1M+" : impressions === 0 ? "0" : `${Math.round(impressions * 1000)}K`;

  return (
    <div ref={wrapRef} className="wwd-wrap">
      <div className="wwd-glow" aria-hidden />

      {/* ── CARD 1: reach network ── */}
      <div className={`wwd-card${inView ? " is-in" : ""}`} onMouseMove={trackPointer}>
        <h3 className="wwd-title">
          Build your <span className="accent">authority and reach</span>
        </h3>

        <div className={`wwd-visual net-visual${fading ? " is-fading" : ""}`}>
          <svg viewBox="0 0 400 260" className="net-svg" aria-hidden>
            <defs>
              <radialGradient id="netCore" cx="50%" cy="40%" r="60%">
                <stop offset="0%" stopColor="#7BB3E0" />
                <stop offset="100%" stopColor="#2F6DA6" />
              </radialGradient>
            </defs>

            {/* guide rings */}
            {[[72, 46], [124, 80], [178, 112]].map(([rx, ry], i) => (
              <ellipse key={i} cx={CX} cy={CY} rx={rx} ry={ry} className={`net-ring${ring >= i ? " is-lit" : ""}`} />
            ))}

            {/* links */}
            {NODES.map((n, i) => {
              const p = n.parent === -1 ? { x: CX, y: CY } : NODES[n.parent];
              const len = Math.hypot(n.x - p.x, n.y - p.y);
              return (
                <line
                  key={`l${i}`}
                  x1={p.x} y1={p.y} x2={n.x} y2={n.y}
                  className={`net-link ring-${n.ring}`}
                  style={{
                    strokeDasharray: len,
                    strokeDashoffset: ring >= n.ring ? 0 : len,
                    transitionDelay: `${(i % 6) * 40}ms`,
                  }}
                />
              );
            })}

            {/* nodes */}
            {NODES.map((n, i) => (
              <circle
                key={`n${i}`}
                ref={(el) => { nodeRefs.current[i] = el; }}
                cx={n.x}
                cy={n.y}
                r={n.ring === 2 ? 5 : 4}
                className={`net-node ring-${n.ring}${ring >= n.ring ? " is-lit" : ""}${pulse === i ? " is-pulse" : ""}`}
                style={{ transitionDelay: `${(i % 6) * 40 + 250}ms` }}
              />
            ))}

            {/* founder at the centre */}
            <circle cx={CX} cy={CY} r={30} className="net-core-halo" />
            <circle cx={CX} cy={CY} r={22} fill="url(#netCore)" />
            <circle cx={CX} cy={CY - 5} r={7} fill="#0D1F3C" opacity={0.85} />
            <path d={`M${CX - 12} ${CY + 14} q12 -14 24 0`} fill="#0D1F3C" opacity={0.85} />
          </svg>

          <div className="net-foot">
            <div className={`net-legend${ring >= 2 ? " is-on" : ""}`}>
              <span className="net-legend-dot" /> Out-of-network
            </div>
            <div className={`net-chip${ring >= 0 ? " is-on" : ""}`}>
              <span className="net-chip-num">{impLabel}</span>
              <span className="net-chip-label">Impressions</span>
            </div>
          </div>
        </div>

        <p className="wwd-copy">
          We capture your voice, create the content, and manage your entire LinkedIn so the right people find you before you ever walk into the room.
        </p>
      </div>

      {/* ── CARD 2: live inbox ── */}
      <div className={`wwd-card${inView ? " is-in" : ""}`} onMouseMove={trackPointer} style={{ animationDelay: "1.2s" }}>
        <h3 className="wwd-title">
          Turn that reach into <span className="accent">revenue</span>
        </h3>

        <div className={`wwd-visual${fading ? " is-fading" : ""}`}>
          <div ref={inboxRef} className="inbox">
            <div className="inbox-head">
              <span className="inbox-title">Messages</span>
              <span className={`inbox-badge${msgs > 0 ? " is-on" : ""}`} key={msgs}>{msgs}</span>
            </div>
            <div className="inbox-list">
              {typing && (
                <div className="inbox-row inbox-typing">
                  <span className="inbox-avatar" />
                  <span className="typing-dots"><i /><i /><i /></span>
                </div>
              )}
              {MESSAGES.slice(0, msgs)
                .map((text, i) => ({ text, i }))
                .reverse()
                .map(({ text, i }) => (
                  <div key={text} className={`inbox-row inbox-msg${i === msgs - 1 ? " is-new" : ""}`}>
                    <span className={`inbox-avatar av-${i}`} />
                    <span className="inbox-body">
                      <span className="inbox-text">{text}</span>
                      <span className="inbox-skel" />
                    </span>
                    {i === msgs - 1 && <span className="inbox-unread" />}
                  </div>
                ))}
            </div>
          </div>
        </div>

        <p className="wwd-copy">
          Speaker invitations. Partnership proposals. Inbound from decision-makers who found you through your content. We build the system that delivers results consistently.
        </p>
      </div>

      {/* Flying lead dot (desktop only) */}
      {fly && (
        <span
          className="lead-dot"
          style={{
            left: fly.go ? fly.tx : fly.x,
            top: fly.go ? fly.ty : fly.y,
            transition: fly.go
              ? `left ${FLY_MS}ms cubic-bezier(.45,0,.25,1), top ${FLY_MS}ms cubic-bezier(.2,-0.6,.4,1)`
              : "none",
          }}
        />
      )}
    </div>
  );
}
