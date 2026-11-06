"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  { label: "Strategy\n& Voice", week: "Week 1-2", icon: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" },
  { label: "Launch\n& Manage", week: "Week 3-4", icon: "M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" },
  { label: "Grow\n& Engage", week: "Month 2-4", icon: "M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" },
  { label: "Convert\n& Scale", week: "Month 5+", icon: "M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" },
];

export default function JourneyTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          obs.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [started]);

  return (
    <div
      ref={ref}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 0,
        flexWrap: "nowrap",
      }}
    >
      {steps.map((step, i, arr) => (
        <div key={step.week} style={{ display: "flex", alignItems: "center" }}>
          <div style={{ textAlign: "center", width: 180 }}>
            <div
              className={started ? `j-circle j-circle-${i + 1}` : ""}
              style={{
                width: 110,
                height: 110,
                borderRadius: "50%",
                border: "2px solid var(--gold)",
                background:
                  i === arr.length - 1
                    ? "rgba(91,155,213,0.12)"
                    : "transparent",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 20px",
              }}
            >
              <svg
                width="44"
                height="44"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--gold)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d={step.icon} />
              </svg>
            </div>
            <div
              style={{
                fontSize: 20,
                fontWeight: 600,
                color: "var(--white)",
                lineHeight: 1.3,
                marginBottom: 8,
                whiteSpace: "pre-line",
              }}
            >
              {step.label}
            </div>
            <div
              style={{
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: 1.5,
                color: "var(--gold)",
                textTransform: "uppercase",
              }}
            >
              {step.week}
            </div>
          </div>
          {i < arr.length - 1 && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                padding: "0 4px",
                marginBottom: 56,
                position: "relative",
              }}
            >
              <div
                style={{
                  width: 56,
                  height: 2,
                  background: "rgba(91,155,213,0.2)",
                }}
              />
              <div
                style={{
                  width: 0,
                  height: 0,
                  borderTop: "6px solid transparent",
                  borderBottom: "6px solid transparent",
                  borderLeft: "10px solid var(--gold)",
                  marginLeft: -1,
                }}
              />
              <div
                className={started ? `j-dot j-dot-${i + 1}` : ""}
                style={{
                  position: "absolute",
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "var(--gold)",
                  top: "50%",
                  transform: "translateY(-50%)",
                  boxShadow: "0 0 14px rgba(91,155,213,0.7)",
                  opacity: 0,
                  left: 0,
                }}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
