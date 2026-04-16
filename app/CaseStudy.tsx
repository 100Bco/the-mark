"use client";

import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

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
const csCumulative = [138, 334, 636, 1258, 2036, 2344, 2530, 2691];
const csImpressions = [640, 229, 1887, 14638, 46635, 12861, 16851, 19782];
const csEngagements = [10, 1, 40, 267, 638, 212, 306, 328];

const GOLD = "#B8955A";
const gridC = "rgba(214,206,188,0.07)";

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

export default function CaseStudy() {
  const followersRef = useRef<HTMLCanvasElement>(null);
  const cumulativeRef = useRef<HTMLCanvasElement>(null);
  const impressionsRef = useRef<HTMLCanvasElement>(null);
  const engagementsRef = useRef<HTMLCanvasElement>(null);
  const introRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    Chart.defaults.color = "#8A8278";
    Chart.defaults.font.family = "'Montserrat', sans-serif";
    Chart.defaults.font.size = 9;

    const baseOpts = {
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
        },
      },
      scales: {
        x: {
          grid: { color: gridC, lineWidth: 0.5 },
          ticks: { font: { size: 9 } },
        },
        y: {
          grid: { color: gridC, lineWidth: 0.5 },
          ticks: { font: { size: 9 } },
        },
      },
      animation: { duration: 1400, easing: "easeOutQuart" as const },
    };

    const charts: Chart[] = [];

    if (followersRef.current) {
      charts.push(
        new Chart(followersRef.current, {
          type: "bar",
          data: {
            labels: csMonths,
            datasets: [
              {
                data: csNewFollowers,
                backgroundColor: csNewFollowers.map((_, i) =>
                  i === 4 ? GOLD : "rgba(184,149,90,0.28)"
                ),
                borderWidth: 0,
                hoverBackgroundColor: GOLD,
              },
            ],
          },
          options: baseOpts,
        })
      );
    }

    if (cumulativeRef.current) {
      const ctx = cumulativeRef.current.getContext("2d");
      if (ctx) {
        const grad = ctx.createLinearGradient(0, 0, 0, 220);
        grad.addColorStop(0, "rgba(184,149,90,0.2)");
        grad.addColorStop(1, "rgba(184,149,90,0)");
        charts.push(
          new Chart(cumulativeRef.current, {
            type: "line",
            data: {
              labels: csMonths,
              datasets: [
                {
                  data: csCumulative,
                  borderColor: GOLD,
                  borderWidth: 2,
                  pointBackgroundColor: GOLD,
                  pointRadius: 3,
                  pointHoverRadius: 5,
                  fill: true,
                  backgroundColor: grad,
                  tension: 0.4,
                },
              ],
            },
            options: baseOpts,
          })
        );
      }
    }

    if (impressionsRef.current) {
      charts.push(
        new Chart(impressionsRef.current, {
          type: "bar",
          data: {
            labels: csMonths,
            datasets: [
              {
                data: csImpressions,
                backgroundColor: csImpressions.map((_, i) =>
                  i === 4 ? "rgba(184,149,90,0.6)" : "rgba(184,149,90,0.18)"
                ),
                borderWidth: 0,
                hoverBackgroundColor: "rgba(184,149,90,0.7)",
              },
            ],
          },
          options: baseOpts,
        })
      );
    }

    if (engagementsRef.current) {
      charts.push(
        new Chart(engagementsRef.current, {
          type: "bar",
          data: {
            labels: csMonths,
            datasets: [
              {
                data: csEngagements,
                backgroundColor: csEngagements.map((_, i) =>
                  i === 4 ? GOLD : "rgba(184,149,90,0.28)"
                ),
                borderWidth: 0,
                hoverBackgroundColor: GOLD,
              },
            ],
          },
          options: baseOpts,
        })
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
                fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
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
              Identity withheld at client request. Import/export industry, Vietnam
              market. Sep 2025 – Apr 2026.
            </p>
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

        <div className="cs-chart-row">
          <div className="cs-chart-wrap reveal">
            <div className="cs-chart-title">Monthly New Followers</div>
            <div style={{ position: "relative", height: 220 }}>
              <canvas ref={followersRef} />
            </div>
          </div>
          <div className="cs-chart-wrap reveal">
            <div className="cs-chart-title">Cumulative Growth</div>
            <div style={{ position: "relative", height: 220 }}>
              <canvas ref={cumulativeRef} />
            </div>
          </div>
        </div>

        <div className="cs-chart-row">
          <div className="cs-chart-wrap reveal">
            <div className="cs-chart-title">Monthly Impressions</div>
            <div style={{ position: "relative", height: 220 }}>
              <canvas ref={impressionsRef} />
            </div>
          </div>
          <div className="cs-chart-wrap reveal">
            <div className="cs-chart-title">Monthly Engagements</div>
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
