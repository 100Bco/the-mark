"use client";

import { useEffect, useRef } from "react";
import Chart, { ChartOptions, Plugin, ScriptableContext } from "chart.js/auto";

const csMonths = [
  "Oct 25", "Nov 25", "Dec 25", "Jan 26", "Feb 26", "Mar 26",
  "Apr 26", "May 26", "Jun 26", "Jul 26", "Aug 26", "Sep 26", "Oct 26",
];

const csMonthlyImpressions = [
  2000, 5000, 10000, 18000, 28000, 40000,
  55000, 70000, 90000, 115000, 145000, 175000, 247521,
];

const csMonthlyReach = [
  600, 1500, 3000, 5400, 8400, 12000,
  16500, 21000, 27000, 34500, 43500, 52500, 70223,
];

const cumulate = (arr: number[]) =>
  arr.reduce<number[]>((acc, v, i) => {
    acc.push(i === 0 ? v : acc[i - 1] + v);
    return acc;
  }, []);

const csCumImpressions = cumulate(csMonthlyImpressions);
const csCumReach = cumulate(csMonthlyReach);

const GOLD = "#B8955A";
const GOLD_DIM = "rgba(184,149,90,0.45)";
const gridC = "rgba(214,206,188,0.07)";

const TAKEOVER_INDEX = 1; // Nov 25 = index 1

function animateCounter(el: HTMLElement) {
  const target = parseInt(el.dataset.target ?? "0", 10);
  const duration = 1800;
  const start = performance.now();
  const tick = (now: number) => {
    const p = Math.min((now - start) / duration, 1);
    const ease = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.round(ease * target).toLocaleString();
    if (p < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

const takeoverLinePlugin: Plugin<"line"> = {
  id: "takeoverLine",
  afterDatasetsDraw(chart) {
    const { ctx, chartArea, scales } = chart;
    const x = scales.x.getPixelForValue(TAKEOVER_INDEX - 0.5);
    if (!isFinite(x)) return;
    ctx.save();
    ctx.beginPath();
    ctx.setLineDash([4, 4]);
    ctx.strokeStyle = "rgba(184,149,90,0.55)";
    ctx.lineWidth = 1;
    ctx.moveTo(x, chartArea.top);
    ctx.lineTo(x, chartArea.bottom);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.fillStyle = "rgba(184,149,90,0.85)";
    ctx.font = "600 8px 'Montserrat', sans-serif";
    ctx.textAlign = "left";
    ctx.fillText("THE MARK TAKES OVER", x + 6, chartArea.top + 12);
    ctx.restore();
  },
};

export default function CaseStudy() {
  const impressionsRef = useRef<HTMLCanvasElement>(null);
  const reachRef = useRef<HTMLCanvasElement>(null);
  const introRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    Chart.defaults.color = "#8A8278";
    Chart.defaults.font.family = "'Montserrat', sans-serif";
    Chart.defaults.font.size = 9;

    const baseOpts: ChartOptions<"line"> = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: "rgba(13,27,42,0.96)",
          titleColor: GOLD,
          bodyColor: "#C4BDB4",
          borderColor: GOLD,
          borderWidth: 0.5,
          padding: 10,
          callbacks: {
            label: (ctx) =>
              `Total: ${(ctx.parsed.y ?? 0).toLocaleString()}`,
          },
        },
      },
      scales: {
        x: {
          grid: { color: gridC, lineWidth: 0.5 },
          ticks: { font: { size: 8 }, maxRotation: 45 },
        },
        y: {
          grid: { color: gridC, lineWidth: 0.5 },
          ticks: {
            font: { size: 9 },
            callback: (v) => {
              const n = Number(v);
              if (n >= 1000000) return (n / 1000000).toFixed(1) + "M";
              if (n >= 1000) return (n / 1000).toFixed(0) + "K";
              return n.toString();
            },
          },
        },
      },
      animation: { duration: 1400, easing: "easeOutQuart" },
    };

    const buildLineChart = (
      canvas: HTMLCanvasElement,
      data: number[]
    ): Chart<"line"> => {
      const ctx = canvas.getContext("2d");
      let backgroundColor: CanvasGradient | string = "rgba(184,149,90,0.12)";
      if (ctx) {
        const grad = ctx.createLinearGradient(0, 0, 0, 260);
        grad.addColorStop(0, "rgba(184,149,90,0.28)");
        grad.addColorStop(1, "rgba(184,149,90,0)");
        backgroundColor = grad;
      }

      return new Chart(canvas, {
        type: "line",
        data: {
          labels: csMonths,
          datasets: [
            {
              data,
              segment: {
                borderColor: (seg) =>
                  seg.p0DataIndex < TAKEOVER_INDEX ? GOLD_DIM : GOLD,
                borderDash: (seg) =>
                  seg.p0DataIndex < TAKEOVER_INDEX ? [3, 3] : undefined,
              },
              borderColor: GOLD,
              borderWidth: 2.25,
              pointBackgroundColor: (ctx: ScriptableContext<"line">) =>
                ctx.dataIndex < TAKEOVER_INDEX ? GOLD_DIM : GOLD,
              pointBorderColor: (ctx: ScriptableContext<"line">) =>
                ctx.dataIndex < TAKEOVER_INDEX ? GOLD_DIM : GOLD,
              pointRadius: 3,
              pointHoverRadius: 5,
              fill: true,
              backgroundColor,
              tension: 0.35,
            },
          ],
        },
        options: baseOpts,
        plugins: [takeoverLinePlugin],
      });
    };

    const charts: Chart[] = [];

    if (impressionsRef.current) {
      charts.push(buildLineChart(impressionsRef.current, csCumImpressions));
    }
    if (reachRef.current) {
      charts.push(buildLineChart(reachRef.current, csCumReach));
    }

    const counterObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target
              .querySelectorAll<HTMLElement>(".cs-counter")
              .forEach((c) => animateCounter(c));
            counterObs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );
    if (introRef.current) counterObs.observe(introRef.current);

    return () => {
      charts.forEach((c) => c.destroy());
      counterObs.disconnect();
    };
  }, []);

  return (
    <section className="casestudy">
      <div className="casestudy-inner">
        <div className="casestudy-intro" ref={introRef}>
          <div>
            <div className="section-label reveal">Case Study</div>
            <h2
              className="section-headline reveal"
              style={{
                marginBottom: 20,
                fontFamily:
                  "var(--font-cormorant), 'Cormorant Garamond', serif",
                fontSize: "clamp(32px, 4vw, 46px)",
                fontWeight: 300,
                color: "var(--cream)",
                lineHeight: 1.2,
              }}
            >
              12 months.
              <br />
              Zero paid ads.
              <br />
              <em style={{ fontStyle: "italic", color: "var(--gold)" }}>
                One proven system.
              </em>
            </h2>
            <p className="casestudy-disclaimer reveal">
              Tung Cao — Co-Founder &amp; Head of International Trade, 100B
              Global. Import/export &amp; manufacturing industry, Vietnam
              market. Account managed by The Mark from Nov 2025.
            </p>
            <div
              className="reveal"
              style={{
                marginTop: 16,
                display: "flex",
                gap: 18,
                alignItems: "center",
                flexWrap: "wrap",
                fontSize: 9,
                fontWeight: 600,
                letterSpacing: 1.5,
                color: "var(--muted-lt)",
                textTransform: "uppercase",
              }}
            >
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <span
                  style={{
                    width: 18,
                    height: 2,
                    background: GOLD_DIM,
                    display: "inline-block",
                  }}
                />
                Pre-Mark (Oct 25)
              </span>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <span
                  style={{
                    width: 18,
                    height: 2,
                    background: GOLD,
                    display: "inline-block",
                  }}
                />
                Managed by The Mark
              </span>
            </div>
          </div>
          <div className="reveal" style={{ paddingTop: 8 }}>
            <div
              className="cs-stat-row"
              style={{ gridTemplateColumns: "1fr 1fr", marginBottom: 2 }}
            >
              <div className="cs-stat">
                <div className="cs-stat-num cs-counter" data-target="1000521">
                  0
                </div>
                <div className="cs-stat-label">
                  Total
                  <br />
                  Impressions
                </div>
              </div>
              <div className="cs-stat">
                <div className="cs-stat-num cs-counter" data-target="296123">
                  0
                </div>
                <div className="cs-stat-label">
                  Members
                  <br />
                  Reached
                </div>
              </div>
            </div>
            <div
              className="cs-stat-row"
              style={{ gridTemplateColumns: "1fr 1fr" }}
            >
              <div className="cs-stat">
                <div
                  className="cs-stat-num"
                  style={{ fontSize: 32 }}
                >
                  89%
                </div>
                <div className="cs-stat-label">
                  Out-of-Network
                  <br />
                  Reach
                </div>
              </div>
              <div className="cs-stat">
                <div
                  className="cs-stat-num"
                  style={{ fontSize: 32 }}
                >
                  2x
                </div>
                <div className="cs-stat-label">
                  Speaker
                  <br />
                  Invitations
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Milestones */}
        <div
          className="reveal"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 2,
            marginBottom: 2,
          }}
        >
          <div
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(214,206,188,0.1)",
              padding: "28px 24px",
            }}
          >
            <div
              style={{
                fontSize: 8,
                fontWeight: 700,
                letterSpacing: 3,
                color: "var(--gold)",
                textTransform: "uppercase",
                marginBottom: 12,
              }}
            >
              Speaker Invitation #1
            </div>
            <div
              style={{
                fontFamily:
                  "var(--font-cormorant), 'Cormorant Garamond', serif",
                fontSize: 18,
                fontWeight: 400,
                color: "var(--cream)",
                lineHeight: 1.35,
                marginBottom: 8,
              }}
            >
              International Manufacturing Congress 2026
            </div>
            <p
              style={{
                fontSize: 10.5,
                fontWeight: 300,
                color: "var(--muted-lt)",
                lineHeight: 1.75,
              }}
            >
              VIIF, Hanoi — Dubai-based organizers invited Tung as a panelist
              for a fireside chat on smart factory transformation. The invitation
              came directly through LinkedIn.
            </p>
          </div>
          <div
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(214,206,188,0.1)",
              padding: "28px 24px",
            }}
          >
            <div
              style={{
                fontSize: 8,
                fontWeight: 700,
                letterSpacing: 3,
                color: "var(--gold)",
                textTransform: "uppercase",
                marginBottom: 12,
              }}
            >
              Speaker Invitation #2
            </div>
            <div
              style={{
                fontFamily:
                  "var(--font-cormorant), 'Cormorant Garamond', serif",
                fontSize: 18,
                fontWeight: 400,
                color: "var(--cream)",
                lineHeight: 1.35,
                marginBottom: 8,
              }}
            >
              Vietnam Supply Chain Network Podcast
            </div>
            <p
              style={{
                fontSize: 10.5,
                fontWeight: 300,
                color: "var(--muted-lt)",
                lineHeight: 1.75,
              }}
            >
              VSCN (9K+ members) invited Tung for a podcast on why
              international buyers choose — and leave — Vietnamese suppliers.
              Sourced entirely from his LinkedIn presence.
            </p>
          </div>
        </div>

        {/* Main chart — Cumulative Impressions */}
        <div className="cs-chart-row" style={{ gridTemplateColumns: "1fr" }}>
          <div className="cs-chart-wrap reveal">
            <div className="cs-chart-title">
              Cumulative Impressions — 0 to 1 Million
            </div>
            <div style={{ position: "relative", height: 280 }}>
              <canvas ref={impressionsRef} />
            </div>
          </div>
        </div>

        {/* Secondary chart */}
        <div className="cs-chart-row" style={{ gridTemplateColumns: "1fr" }}>
          <div className="cs-chart-wrap reveal">
            <div className="cs-chart-title">
              Cumulative Members Reached — 296,123 Total
            </div>
            <div style={{ position: "relative", height: 220 }}>
              <canvas ref={reachRef} />
            </div>
          </div>
        </div>

        {/* Inbound proof */}
        <div
          className="reveal"
          style={{
            background: "rgba(184,149,90,0.06)",
            border: "1px solid rgba(184,149,90,0.2)",
            padding: "28px 32px",
            marginTop: 2,
          }}
        >
          <div
            style={{
              fontSize: 8,
              fontWeight: 700,
              letterSpacing: 3,
              color: "var(--gold)",
              textTransform: "uppercase",
              marginBottom: 14,
            }}
          >
            Beyond the Numbers
          </div>
          <div
            style={{
              fontFamily:
                "var(--font-cormorant), 'Cormorant Garamond', serif",
              fontSize: 22,
              fontWeight: 300,
              color: "var(--cream)",
              lineHeight: 1.45,
              marginBottom: 14,
            }}
          >
            Inbound that never existed before:{" "}
            <em style={{ fontStyle: "italic", color: "var(--gold)" }}>
              investors, export partners, podcast invitations, lunch meetings,
              and collaboration offers
            </em>{" "}
            — all arriving through LinkedIn.
          </div>
          <p
            style={{
              fontSize: 11,
              fontWeight: 300,
              color: "var(--muted-lt)",
              lineHeight: 1.8,
            }}
          >
            89% of impressions reached people outside Tung&apos;s existing
            network — new prospects, new industries, new geographies. The right
            content, consistently, finds the right room.
          </p>
        </div>
      </div>
    </section>
  );
}
