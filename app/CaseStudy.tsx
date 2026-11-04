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

const cumulate = (arr: number[]) =>
  arr.reduce<number[]>((acc, v, i) => {
    acc.push(i === 0 ? v : acc[i - 1] + v);
    return acc;
  }, []);

const csCumImpressions = cumulate(csMonthlyImpressions);

const GOLD = "#B8955A";
const GOLD_DIM = "rgba(184,149,90,0.45)";
const gridC = "rgba(214,206,188,0.07)";
const TAKEOVER_INDEX = 1;

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
    ctx.strokeStyle = "rgba(184,149,90,0.5)";
    ctx.lineWidth = 1;
    ctx.moveTo(x, chartArea.top);
    ctx.lineTo(x, chartArea.bottom);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.restore();
  },
};

export default function CaseStudy() {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

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
              `${(ctx.parsed.y ?? 0).toLocaleString()} impressions`,
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

    let chart: Chart<"line"> | null = null;

    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");
      let bg: CanvasGradient | string = "rgba(184,149,90,0.12)";
      if (ctx) {
        const grad = ctx.createLinearGradient(0, 0, 0, 280);
        grad.addColorStop(0, "rgba(184,149,90,0.25)");
        grad.addColorStop(1, "rgba(184,149,90,0)");
        bg = grad;
      }

      chart = new Chart(chartRef.current, {
        type: "line",
        data: {
          labels: csMonths,
          datasets: [
            {
              data: csCumImpressions,
              segment: {
                borderColor: (seg) =>
                  seg.p0DataIndex < TAKEOVER_INDEX ? GOLD_DIM : GOLD,
                borderDash: (seg) =>
                  seg.p0DataIndex < TAKEOVER_INDEX ? [3, 3] : undefined,
              },
              borderColor: GOLD,
              borderWidth: 2.5,
              pointBackgroundColor: (ctx: ScriptableContext<"line">) =>
                ctx.dataIndex < TAKEOVER_INDEX ? GOLD_DIM : GOLD,
              pointBorderColor: (ctx: ScriptableContext<"line">) =>
                ctx.dataIndex < TAKEOVER_INDEX ? GOLD_DIM : GOLD,
              pointRadius: 3,
              pointHoverRadius: 5,
              fill: true,
              backgroundColor: bg,
              tension: 0.35,
            },
          ],
        },
        options: baseOpts,
        plugins: [takeoverLinePlugin],
      });
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
    if (sectionRef.current) counterObs.observe(sectionRef.current);

    return () => {
      chart?.destroy();
      counterObs.disconnect();
    };
  }, []);

  return (
    <section className="casestudy">
      <div className="casestudy-inner" ref={sectionRef}>
        {/* Header */}
        <div className="section-label reveal">Case Study — Tung Cao</div>
        <h2
          className="reveal"
          style={{
            fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
            fontSize: "clamp(30px, 4vw, 46px)",
            fontWeight: 300,
            color: "var(--cream)",
            lineHeight: 1.2,
            textAlign: "center",
            maxWidth: 700,
            margin: "0 auto 16px",
          }}
        >
          From zero to{" "}
          <em style={{ fontStyle: "italic", color: "var(--gold)" }}>
            1 million impressions
          </em>{" "}
          in 12 months.
        </h2>
        <p
          className="reveal"
          style={{
            fontSize: 12,
            fontWeight: 300,
            color: "var(--muted-lt)",
            textAlign: "center",
            maxWidth: 520,
            margin: "0 auto 56px",
            lineHeight: 1.8,
          }}
        >
          Co-Founder &amp; Head of International Trade at 100B Global.
          Import/export &amp; manufacturing, Vietnam market. Zero paid ads.
        </p>

        {/* 4 Stats */}
        <div
          className="reveal"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 2,
            marginBottom: 32,
          }}
        >
          {[
            ["1000521", "Total Impressions"],
            ["296123", "Members Reached"],
            ["7000", "Followers"],
          ].map(([target, label]) => (
            <div className="cs-stat" key={label}>
              <div className="cs-stat-num cs-counter" data-target={target}>
                0
              </div>
              <div className="cs-stat-label">{label}</div>
            </div>
          ))}
          <div className="cs-stat">
            <div className="cs-stat-num" style={{ fontSize: 32 }}>
              89%
            </div>
            <div className="cs-stat-label">Out-of-Network</div>
          </div>
        </div>

        {/* Chart */}
        <div className="cs-chart-wrap reveal" style={{ marginBottom: 32 }}>
          <div className="cs-chart-title">Cumulative Impressions</div>
          <div style={{ position: "relative", height: 280 }}>
            <canvas ref={chartRef} />
          </div>
        </div>

        {/* Quote */}
        <div
          className="proof-quote reveal"
          style={{
            marginBottom: 32,
            background: "rgba(255,255,255,0.04)",
            borderLeftColor: "var(--gold)",
          }}
        >
          <div
            className="proof-quote-mark"
            style={{ color: "var(--gold)" }}
          >
            &ldquo;
          </div>
          <p
            className="proof-quote-text"
            style={{ color: "var(--cream)" }}
          >
            I was invited to speak at the International Manufacturing Congress
            in Hanoi and featured on a podcast by Vietnam Supply Chain Network.
            Investors and partners I had never met started reaching out. The
            content opened doors that moved my business forward.
          </p>
          <div
            className="proof-quote-attr"
            style={{ color: "var(--muted-lt)" }}
          >
            Tung Cao — 100B Global
          </div>
        </div>

        {/* Highlights */}
        <div
          className="reveal"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: 2,
          }}
        >
          <div
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(214,206,188,0.1)",
              padding: "24px 20px",
            }}
          >
            <div
              style={{
                fontSize: 8,
                fontWeight: 700,
                letterSpacing: 3,
                color: "var(--gold)",
                textTransform: "uppercase",
                marginBottom: 10,
              }}
            >
              Speaker
            </div>
            <p
              style={{
                fontSize: 11,
                fontWeight: 300,
                color: "var(--muted-lt)",
                lineHeight: 1.75,
              }}
            >
              International Manufacturing Congress 2026, Hanoi — invited
              directly via LinkedIn DM
            </p>
          </div>
          <div
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(214,206,188,0.1)",
              padding: "24px 20px",
            }}
          >
            <div
              style={{
                fontSize: 8,
                fontWeight: 700,
                letterSpacing: 3,
                color: "var(--gold)",
                textTransform: "uppercase",
                marginBottom: 10,
              }}
            >
              Podcast
            </div>
            <p
              style={{
                fontSize: 11,
                fontWeight: 300,
                color: "var(--muted-lt)",
                lineHeight: 1.75,
              }}
            >
              Vietnam Supply Chain Network (9K+ members) — founder reached out
              after reading LinkedIn content
            </p>
          </div>
          <div
            style={{
              background: "rgba(184,149,90,0.06)",
              border: "1px solid rgba(184,149,90,0.2)",
              padding: "24px 20px",
            }}
          >
            <div
              style={{
                fontSize: 8,
                fontWeight: 700,
                letterSpacing: 3,
                color: "var(--gold)",
                textTransform: "uppercase",
                marginBottom: 10,
              }}
            >
              Inbound Pipeline
            </div>
            <p
              style={{
                fontSize: 11,
                fontWeight: 300,
                color: "var(--muted-lt)",
                lineHeight: 1.75,
              }}
            >
              Partnership proposals, sourcing inquiries, investor meetings — all
              from LinkedIn presence alone
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
