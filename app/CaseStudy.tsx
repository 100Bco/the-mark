"use client";

import { useEffect, useRef } from "react";
import Chart, { ChartOptions, Plugin, ScriptableContext } from "chart.js/auto";

const csMonths = [
  "Sep 25",
  "Oct 25",
  "Nov 25",
  "Dec 25",
  "Jan 26",
  "Feb 26",
  "Mar 26",
  "Apr 26",
];
const csNewFollowers = [138, 196, 302, 622, 778, 308, 186, 161];
const csImpressions = [640, 229, 1887, 14638, 46635, 12861, 16851, 19782];
const csEngagements = [10, 1, 40, 267, 638, 212, 306, 328];

// Cumulative running totals
const cumulate = (arr: number[]) =>
  arr.reduce<number[]>((acc, v, i) => {
    acc.push(i === 0 ? v : acc[i - 1] + v);
    return acc;
  }, []);

const csCumulativeFollowers = cumulate(csNewFollowers);
const csCumulativeImpressions = cumulate(csImpressions);
const csCumulativeEngagements = cumulate(csEngagements);

const GOLD = "#B8955A";
const GOLD_DIM = "rgba(184,149,90,0.45)";
const gridC = "rgba(214,206,188,0.07)";

// Index where The Mark takes over (Nov 25)
const TAKEOVER_INDEX = 2;

const seniorityData: [string, number][] = [
  ["Senior", 36.5],
  ["Entry", 20.6],
  ["Director", 9.4],
  ["Manager", 8.3],
  ["CXO", 4.2],
];

const industriesData: [string, number][] = [
  ["Transport & Logistics", 14.1],
  ["Import/Export", 7.1],
  ["Retail", 5.3],
  ["Food & Beverage", 4.3],
];

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

// Plugin: vertical dashed line marking The Mark takeover (between Oct and Nov)
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
    ctx.font = "600 9px 'Montserrat', sans-serif";
    ctx.textAlign = "left";
    ctx.fillText("THE MARK TAKES OVER", x + 6, chartArea.top + 12);
    ctx.restore();
  },
};

export default function CaseStudy() {
  const followersRef = useRef<HTMLCanvasElement>(null);
  const impressionsRef = useRef<HTMLCanvasElement>(null);
  const engagementsRef = useRef<HTMLCanvasElement>(null);
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
          ticks: { font: { size: 9 } },
        },
        y: {
          grid: { color: gridC, lineWidth: 0.5 },
          ticks: {
            font: { size: 9 },
            callback: (v) => Number(v).toLocaleString(),
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
        const grad = ctx.createLinearGradient(0, 0, 0, 220);
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
              // Dim line color before takeover, gold after
              segment: {
                borderColor: (seg) =>
                  seg.p0DataIndex < TAKEOVER_INDEX - 1 ? GOLD_DIM : GOLD,
                borderDash: (seg) =>
                  seg.p0DataIndex < TAKEOVER_INDEX - 1 ? [3, 3] : undefined,
              },
              borderColor: GOLD,
              borderWidth: 2.25,
              pointBackgroundColor: (ctx: ScriptableContext<"line">) =>
                ctx.dataIndex < TAKEOVER_INDEX ? GOLD_DIM : GOLD,
              pointBorderColor: (ctx: ScriptableContext<"line">) =>
                ctx.dataIndex < TAKEOVER_INDEX ? GOLD_DIM : GOLD,
              pointRadius: 3.5,
              pointHoverRadius: 6,
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

    if (followersRef.current) {
      charts.push(buildLineChart(followersRef.current, csCumulativeFollowers));
    }
    if (impressionsRef.current) {
      charts.push(
        buildLineChart(impressionsRef.current, csCumulativeImpressions)
      );
    }
    if (engagementsRef.current) {
      charts.push(
        buildLineChart(engagementsRef.current, csCumulativeEngagements)
      );
    }

    // Counter observer
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

  const renderDemo = (data: [string, number][]) => {
    const max = Math.max(...data.map((d) => d[1]));
    return data.map(([label, pct]) => {
      const w = Math.round((pct / max) * 100);
      return (
        <div className="cs-demo-row" key={label}>
          <div className="cs-demo-label-row">
            <span className="cs-demo-name">{label}</span>
            <span className="cs-demo-pct">{pct}%</span>
          </div>
          <div className="cs-bar-bg">
            <div className="cs-bar-fill" data-w={w} />
          </div>
        </div>
      );
    });
  };

  return (
    <section className="casestudy">
      <div className="casestudy-inner">
        <div className="casestudy-intro" ref={introRef}>
          <div>
            <div className="section-label reveal">Inside the Numbers</div>
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
              228 days.
              <br />
              Zero paid ads.
              <br />
              <em style={{ fontStyle: "italic", color: "var(--gold)" }}>
                One proven system.
              </em>
            </h2>
            <p className="casestudy-disclaimer reveal">
              Identity withheld at client request. Import/export industry,
              Vietnam market. Account opened Sep 2025 — fully managed by The
              Mark from Nov 2025 onwards.
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
                style={{ display: "inline-flex", alignItems: "center", gap: 8 }}
              >
                <span
                  style={{
                    width: 18,
                    height: 2,
                    background: GOLD_DIM,
                    display: "inline-block",
                  }}
                />
                Pre-Mark baseline (Sep–Oct)
              </span>
              <span
                style={{ display: "inline-flex", alignItems: "center", gap: 8 }}
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
                <div className="cs-stat-num cs-counter" data-target="113523">
                  0
                </div>
                <div className="cs-stat-label">
                  Total
                  <br />
                  Impressions
                </div>
              </div>
              <div className="cs-stat">
                <div className="cs-stat-num cs-counter" data-target="45899">
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
                <div className="cs-stat-num cs-counter" data-target="2864">
                  0
                </div>
                <div className="cs-stat-label">
                  Total
                  <br />
                  Followers
                </div>
              </div>
              <div className="cs-stat">
                <div className="cs-stat-num cs-counter" data-target="1812">
                  0
                </div>
                <div className="cs-stat-label">
                  Total
                  <br />
                  Engagements
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Headline metric — full width */}
        <div className="cs-chart-row" style={{ gridTemplateColumns: "1fr" }}>
          <div className="cs-chart-wrap reveal">
            <div className="cs-chart-title">Cumulative Followers</div>
            <div style={{ position: "relative", height: 260 }}>
              <canvas ref={followersRef} />
            </div>
          </div>
        </div>

        {/* Supporting metrics — side by side */}
        <div className="cs-chart-row">
          <div className="cs-chart-wrap reveal">
            <div className="cs-chart-title">Cumulative Impressions</div>
            <div style={{ position: "relative", height: 220 }}>
              <canvas ref={impressionsRef} />
            </div>
          </div>
          <div className="cs-chart-wrap reveal">
            <div className="cs-chart-title">Cumulative Engagements</div>
            <div style={{ position: "relative", height: 220 }}>
              <canvas ref={engagementsRef} />
            </div>
          </div>
        </div>

        <div className="cs-demo-grid">
          <div className="cs-demo-block reveal">
            <div className="cs-demo-title">Audience Seniority</div>
            <div>{renderDemo(seniorityData)}</div>
          </div>
          <div className="cs-demo-block reveal">
            <div className="cs-demo-title">Top Industries</div>
            <div>{renderDemo(industriesData)}</div>
          </div>
          <div
            className="cs-demo-block reveal"
            style={{
              background: "rgba(184,149,90,0.06)",
              borderColor: "rgba(184,149,90,0.2)",
            }}
          >
            <div className="cs-demo-title">The Takeaway</div>
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
              36.5% of the audience is{" "}
              <em style={{ fontStyle: "italic", color: "var(--gold)" }}>
                Senior
              </em>{" "}
              level or above.
            </div>
            <p
              style={{
                fontSize: 11,
                fontWeight: 300,
                color: "var(--muted-lt)",
                lineHeight: 1.8,
              }}
            >
              CXOs, Directors, and Senior professionals. These are the exact
              decision-makers in Tùng&apos;s target market. The right content,
              consistently, finds the right room.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
