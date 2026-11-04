"use client";

import { useEffect, useRef } from "react";
import Chart, { ChartOptions, Plugin, ScriptableContext } from "chart.js/auto";

const GOLD = "#B8955A";
const GOLD_DIM = "rgba(184,149,90,0.45)";
const gridC = "rgba(214,206,188,0.07)";

const csMonths = [
  "Oct 25", "Nov 25", "Dec 25", "Jan 26", "Feb 26", "Mar 26",
  "Apr 26", "May 26", "Jun 26", "Jul 26", "Aug 26", "Sep 26", "Oct 26",
];
const csMonthly = [
  2000, 5000, 10000, 18000, 28000, 40000,
  55000, 70000, 90000, 115000, 145000, 175000, 247521,
];
const csCum = csMonthly.reduce<number[]>((a, v, i) => {
  a.push(i === 0 ? v : a[i - 1] + v);
  return a;
}, []);

function animateCounter(el: HTMLElement) {
  const target = parseInt(el.dataset.target ?? "0", 10);
  const dur = 1800;
  const t0 = performance.now();
  const tick = (now: number) => {
    const p = Math.min((now - t0) / dur, 1);
    el.textContent = Math.round((1 - Math.pow(1 - p, 3)) * target).toLocaleString();
    if (p < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

const takeoverLine: Plugin<"line"> = {
  id: "takeoverLine",
  afterDatasetsDraw(chart) {
    const { ctx, chartArea, scales } = chart;
    const x = scales.x.getPixelForValue(0.5);
    if (!isFinite(x)) return;
    ctx.save();
    ctx.setLineDash([4, 4]);
    ctx.strokeStyle = "rgba(184,149,90,0.5)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(x, chartArea.top);
    ctx.lineTo(x, chartArea.bottom);
    ctx.stroke();
    ctx.restore();
  },
};

export default function CaseStudy() {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    Chart.defaults.color = "#8A8278";
    Chart.defaults.font.family = "'Montserrat', sans-serif";
    Chart.defaults.font.size = 9;

    let chart: Chart<"line"> | null = null;
    if (chartRef.current) {
      const ctx2d = chartRef.current.getContext("2d");
      let bg: CanvasGradient | string = "rgba(184,149,90,0.12)";
      if (ctx2d) {
        const g = ctx2d.createLinearGradient(0, 0, 0, 240);
        g.addColorStop(0, "rgba(184,149,90,0.22)");
        g.addColorStop(1, "rgba(184,149,90,0)");
        bg = g;
      }
      const opts: ChartOptions<"line"> = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: "rgba(13,27,42,0.96)",
            titleColor: GOLD, bodyColor: "#C4BDB4",
            borderColor: GOLD, borderWidth: 0.5, padding: 10,
            callbacks: { label: (c) => `${(c.parsed.y ?? 0).toLocaleString()} impressions` },
          },
        },
        scales: {
          x: { grid: { color: gridC, lineWidth: 0.5 }, ticks: { font: { size: 8 }, maxRotation: 45 } },
          y: {
            grid: { color: gridC, lineWidth: 0.5 },
            ticks: {
              font: { size: 9 },
              callback: (v) => { const n = Number(v); return n >= 1e6 ? (n / 1e6).toFixed(1) + "M" : n >= 1e3 ? (n / 1e3).toFixed(0) + "K" : String(n); },
            },
          },
        },
        animation: { duration: 1400, easing: "easeOutQuart" },
      };
      chart = new Chart(chartRef.current, {
        type: "line",
        data: {
          labels: csMonths,
          datasets: [{
            data: csCum,
            segment: {
              borderColor: (s) => s.p0DataIndex < 1 ? GOLD_DIM : GOLD,
              borderDash: (s) => s.p0DataIndex < 1 ? [3, 3] : undefined,
            },
            borderColor: GOLD, borderWidth: 2.5,
            pointBackgroundColor: (c: ScriptableContext<"line">) => c.dataIndex < 1 ? GOLD_DIM : GOLD,
            pointBorderColor: (c: ScriptableContext<"line">) => c.dataIndex < 1 ? GOLD_DIM : GOLD,
            pointRadius: 3, pointHoverRadius: 5,
            fill: true, backgroundColor: bg, tension: 0.35,
          }],
        },
        options: opts,
        plugins: [takeoverLine],
      });
    }

    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.querySelectorAll<HTMLElement>(".cs-counter").forEach(animateCounter);
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.3 });
    if (counterRef.current) obs.observe(counterRef.current);

    return () => { chart?.destroy(); obs.disconnect(); };
  }, []);

  return (
    <section className="casestudy">
      <div className="casestudy-inner">
        {/* Section Header */}
        <div className="section-label reveal">Results</div>
        <h2
          className="what-headline reveal"
          style={{ marginBottom: 64 }}
        >
          Real clients. <em>Real outcomes.</em>
        </h2>

        {/* ─── CASE 1: TUNG CAO ─── */}
        <div className="reveal" style={{ marginBottom: 80 }}>
          {/* Case header */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 40,
            alignItems: "center",
            marginBottom: 40,
          }}>
            <div>
              <div style={{ fontSize: 8, fontWeight: 700, letterSpacing: 3, color: "var(--gold)", textTransform: "uppercase", marginBottom: 16 }}>
                Case Study
              </div>
              <h3 style={{
                fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
                fontSize: "clamp(28px, 3.5vw, 40px)",
                fontWeight: 300,
                color: "var(--cream)",
                lineHeight: 1.25,
                marginBottom: 12,
              }}>
                Tung Cao
              </h3>
              <p style={{ fontSize: 11, fontWeight: 300, color: "var(--muted-lt)", lineHeight: 1.8, marginBottom: 16 }}>
                Co-Founder &amp; Head of International Trade, 100B Global.
                Import/export &amp; manufacturing, Vietnam market.
              </p>
              <p style={{ fontSize: 12, fontWeight: 300, color: "var(--cream)", lineHeight: 1.8 }}>
                From zero LinkedIn presence to <strong style={{ color: "var(--gold)", fontWeight: 500 }}>1 million impressions</strong> in
                12 months. Zero paid ads. Two speaking invitations. A pipeline
                of inbound deals — all from LinkedIn alone.
              </p>
            </div>
            {/* Speaker photo */}
            <div style={{
              position: "relative",
              overflow: "hidden",
              borderRadius: 0,
              border: "1px solid rgba(214,206,188,0.12)",
            }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/casestudy/tc-imc-stage.jpg"
                alt="Tung Cao speaking at International Manufacturing Congress 2026"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
              <div style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                padding: "12px 16px",
                background: "linear-gradient(transparent, rgba(13,27,42,0.9))",
                fontSize: 9,
                fontWeight: 600,
                letterSpacing: 2,
                color: "var(--gold)",
                textTransform: "uppercase",
              }}>
                Speaker — International Manufacturing Congress 2026
              </div>
            </div>
          </div>

          {/* Stats row */}
          <div ref={counterRef} style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 2, marginBottom: 32 }}>
            {([
              ["1000521", "Total Impressions"],
              ["296123", "Members Reached"],
              ["7000", "Followers"],
            ] as const).map(([target, label]) => (
              <div className="cs-stat" key={label}>
                <div className="cs-stat-num cs-counter" data-target={target}>0</div>
                <div className="cs-stat-label">{label}</div>
              </div>
            ))}
            <div className="cs-stat">
              <div className="cs-stat-num" style={{ fontSize: 32 }}>89%</div>
              <div className="cs-stat-label">Out-of-Network</div>
            </div>
          </div>

          {/* Chart */}
          <div className="cs-chart-wrap" style={{ marginBottom: 32 }}>
            <div className="cs-chart-title">Cumulative Impressions — 0 to 1M</div>
            <div style={{ position: "relative", height: 260 }}>
              <canvas ref={chartRef} />
            </div>
          </div>

          {/* Highlights row */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 2 }}>
            <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(214,206,188,0.1)", padding: "24px 20px" }}>
              <div style={{ fontSize: 8, fontWeight: 700, letterSpacing: 3, color: "var(--gold)", textTransform: "uppercase", marginBottom: 10 }}>Speaker</div>
              <p style={{ fontSize: 11, fontWeight: 300, color: "var(--muted-lt)", lineHeight: 1.75 }}>
                International Manufacturing Congress 2026, Hanoi — invited directly via LinkedIn
              </p>
            </div>
            <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(214,206,188,0.1)", padding: "24px 20px" }}>
              <div style={{ fontSize: 8, fontWeight: 700, letterSpacing: 3, color: "var(--gold)", textTransform: "uppercase", marginBottom: 10 }}>Podcast</div>
              <p style={{ fontSize: 11, fontWeight: 300, color: "var(--muted-lt)", lineHeight: 1.75 }}>
                Vietnam Supply Chain Network (9K+ members) — founder reached out after reading content
              </p>
            </div>
            <div style={{ background: "rgba(184,149,90,0.06)", border: "1px solid rgba(184,149,90,0.2)", padding: "24px 20px" }}>
              <div style={{ fontSize: 8, fontWeight: 700, letterSpacing: 3, color: "var(--gold)", textTransform: "uppercase", marginBottom: 10 }}>Inbound Pipeline</div>
              <p style={{ fontSize: 11, fontWeight: 300, color: "var(--muted-lt)", lineHeight: 1.75 }}>
                Partnership proposals, sourcing inquiries, investor meetings — all from LinkedIn
              </p>
            </div>
          </div>
        </div>

        {/* ─── CASE 2: LOC DANG ─── */}
        <div className="reveal" style={{ marginBottom: 80 }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 40,
            alignItems: "center",
            marginBottom: 40,
          }}>
            <div>
              <div style={{ fontSize: 8, fontWeight: 700, letterSpacing: 3, color: "var(--gold)", textTransform: "uppercase", marginBottom: 16 }}>
                Case Study
              </div>
              <h3 style={{
                fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
                fontSize: "clamp(28px, 3.5vw, 40px)",
                fontWeight: 300,
                color: "var(--cream)",
                lineHeight: 1.25,
                marginBottom: 12,
              }}>
                Loc Dang
              </h3>
              <p style={{ fontSize: 11, fontWeight: 300, color: "var(--muted-lt)", lineHeight: 1.8, marginBottom: 16 }}>
                Founder, Dang Law Group — Personal injury law firm, Austin TX.
                Never used social media before.
              </p>
              <p style={{ fontSize: 12, fontWeight: 300, color: "var(--cream)", lineHeight: 1.8 }}>
                From <strong style={{ color: "var(--gold)", fontWeight: 500 }}>zero social media presence</strong> to
                49K+ impressions and 3,596 followers in just 4 months. Audience
                is 12% attorneys, 8% founders, 4% business owners — exactly the
                referral partners a law firm needs.
              </p>
            </div>
            {/* Stats block instead of image */}
            <div style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(214,206,188,0.1)",
              padding: "32px 28px",
            }}>
              <div style={{ fontSize: 8, fontWeight: 700, letterSpacing: 3, color: "var(--gold)", textTransform: "uppercase", marginBottom: 24 }}>
                4 Months In — Results
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                <div>
                  <div style={{
                    fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
                    fontSize: 36, fontWeight: 300, color: "var(--gold)", lineHeight: 1, marginBottom: 4,
                  }}>49K+</div>
                  <div className="cs-stat-label">Impressions</div>
                </div>
                <div>
                  <div style={{
                    fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
                    fontSize: 36, fontWeight: 300, color: "var(--gold)", lineHeight: 1, marginBottom: 4,
                  }}>3,596</div>
                  <div className="cs-stat-label">Followers</div>
                </div>
                <div>
                  <div style={{
                    fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
                    fontSize: 36, fontWeight: 300, color: "var(--gold)", lineHeight: 1, marginBottom: 4,
                  }}>4,632%</div>
                  <div className="cs-stat-label">Growth Rate</div>
                </div>
                <div>
                  <div style={{
                    fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
                    fontSize: 36, fontWeight: 300, color: "var(--gold)", lineHeight: 1, marginBottom: 4,
                  }}>0</div>
                  <div className="cs-stat-label">Prior Social Presence</div>
                </div>
              </div>
            </div>
          </div>

          {/* Demographics + Inbound highlights */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 2 }}>
            <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(214,206,188,0.1)", padding: "24px 20px" }}>
              <div style={{ fontSize: 8, fontWeight: 700, letterSpacing: 3, color: "var(--gold)", textTransform: "uppercase", marginBottom: 14 }}>
                Audience by Job Title
              </div>
              {[
                ["Attorney", "12%"],
                ["Founder", "8%"],
                ["Owner", "4%"],
                ["Trial Attorney / Lawyer", "4%"],
                ["CEO / Managing Partner", "3%"],
              ].map(([title, pct]) => (
                <div key={title} style={{ display: "flex", justifyContent: "space-between", padding: "4px 0", borderBottom: "1px solid rgba(214,206,188,0.06)" }}>
                  <span style={{ fontSize: 10.5, fontWeight: 300, color: "var(--muted-lt)" }}>{title}</span>
                  <span style={{ fontSize: 10.5, fontWeight: 500, color: "var(--cream)" }}>{pct}</span>
                </div>
              ))}
            </div>
            <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(214,206,188,0.1)", padding: "24px 20px" }}>
              <div style={{ fontSize: 8, fontWeight: 700, letterSpacing: 3, color: "var(--gold)", textTransform: "uppercase", marginBottom: 10 }}>
                Inbound After 4 Months
              </div>
              <p style={{ fontSize: 11, fontWeight: 300, color: "var(--muted-lt)", lineHeight: 1.85 }}>
                Podcast invitation from Austin Business Spotlight Series (200+
                episodes). Strategic partnership invitations to Moody Center
                events. Fellow attorneys and firm owners reaching out for lunch
                meetings. Sales directors requesting calls. All inbound. All
                from LinkedIn.
              </p>
            </div>
            <div style={{ background: "rgba(184,149,90,0.06)", border: "1px solid rgba(184,149,90,0.2)", padding: "24px 20px" }}>
              <div style={{ fontSize: 8, fontWeight: 700, letterSpacing: 3, color: "var(--gold)", textTransform: "uppercase", marginBottom: 10 }}>
                The Takeaway
              </div>
              <p style={{
                fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
                fontSize: 20, fontWeight: 300, color: "var(--cream)", lineHeight: 1.45, marginBottom: 12,
              }}>
                A lawyer who never posted online now gets inbound calls,
                podcast invitations, and peer meetings weekly.
              </p>
              <p style={{ fontSize: 11, fontWeight: 300, color: "var(--muted-lt)", lineHeight: 1.75 }}>
                Started June 2026. No prior social media. No paid ads. Same
                system. Different industry. Same results.
              </p>
            </div>
          </div>
        </div>

        {/* Coming Soon / CTA */}
        <div className="reveal" style={{
          textAlign: "center",
          padding: "48px 32px",
          border: "1px solid rgba(214,206,188,0.1)",
          background: "rgba(255,255,255,0.02)",
        }}>
          <div style={{ fontSize: 8, fontWeight: 700, letterSpacing: 4, color: "var(--gold)", textTransform: "uppercase", marginBottom: 16 }}>
            More Case Studies
          </div>
          <p style={{
            fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
            fontSize: 24,
            fontWeight: 300,
            color: "var(--cream)",
            lineHeight: 1.4,
            maxWidth: 500,
            margin: "0 auto 8px",
          }}>
            New client results added regularly.
          </p>
          <p style={{ fontSize: 11, fontWeight: 300, color: "var(--muted-lt)", lineHeight: 1.8 }}>
            Each client starts from zero. The system is the same. The results speak for themselves.
          </p>
        </div>
      </div>
    </section>
  );
}
