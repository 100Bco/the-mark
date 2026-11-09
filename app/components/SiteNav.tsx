"use client";

import { useEffect, useState } from "react";

const CASE_LINKS = [
  { href: "/case-studies/tung-cao", name: "Tung Cao", stat: "1M+ impressions", img: "/images/tung-cao/Tung Cao Photo.png" },
  { href: "/case-studies/loc-dang", name: "Loc Dang", stat: "+4,632% followers", img: "/images/loc-dang/loc-dang-headshot.webp" },
];

function CaseItem({ c, onClick }: { c: (typeof CASE_LINKS)[number]; onClick?: () => void }) {
  return (
    <a href={c.href} className="nav-case" onClick={onClick}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={c.img} alt="" className="nav-case-img" />
      <span className="nav-case-text">
        <span className="nav-case-name">{c.name}</span>
        <span className="nav-case-stat">{c.stat}</span>
      </span>
      <span className="nav-case-arrow" aria-hidden>&rarr;</span>
    </a>
  );
}

type Props = {
  active?: "cases" | "about";
};

const LINKS: { key: "cases" | "about"; label: string; href: string }[] = [
  { key: "cases", label: "Case Studies", href: "/case-studies" },
  { key: "about", label: "About", href: "/about" },
];

export default function SiteNav({ active }: Props) {
  const [open, setOpen] = useState(false);

  // Lock page scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    document.body.classList.toggle("menu-open", open);
    return () => {
      document.body.style.overflow = "";
      document.body.classList.remove("menu-open");
    };
  }, [open]);

  return (
    <>
      <nav>
        <a href="/" className="nav-logo">
          <div className="nav-wordmark">The Mark</div>
        </a>

        {/* Desktop */}
        <div className="nav-desktop">
          {LINKS.map((l) =>
            l.key === "cases" ? (
              <div key={l.key} className="nav-drop">
                <a href={l.href} className={`nav-link${active === l.key ? " is-active" : ""}`} aria-haspopup="true">
                  {l.label} <span className="nav-caret" aria-hidden>&#9662;</span>
                </a>
                <div className="nav-drop-panel">
                  {CASE_LINKS.map((c) => <CaseItem key={c.href} c={c} />)}
                  <a href="/case-studies" className="nav-drop-all">View all case studies &rarr;</a>
                </div>
              </div>
            ) : (
              <a key={l.key} href={l.href} className={`nav-link${active === l.key ? " is-active" : ""}`}>
                {l.label}
              </a>
            )
          )}
          <a href="#apply" className="nav-cta">Apply to Work With Us</a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className={`nav-burger${open ? " is-open" : ""}`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </nav>

      {/* Mobile full-screen menu */}
      <div className={`nav-sheet${open ? " is-open" : ""}`} aria-hidden={!open}>
        <div className="nav-sheet-links">
          <a href="/" onClick={() => setOpen(false)}>Home</a>
          {LINKS.map((l) => (
            <div key={l.key}>
              <a href={l.href} className={active === l.key ? "is-active" : ""} onClick={() => setOpen(false)}>
                {l.label}
              </a>
              {l.key === "cases" && (
                <div className="nav-sheet-cases">
                  {CASE_LINKS.map((c) => <CaseItem key={c.href} c={c} onClick={() => setOpen(false)} />)}
                </div>
              )}
            </div>
          ))}
        </div>
        <a href="#apply" className="btn-primary nav-sheet-cta" onClick={() => setOpen(false)}>
          Apply to Work With Us
        </a>
        <a href="mailto:start@100bold.co" className="nav-sheet-mail">start@100bold.co</a>
      </div>
    </>
  );
}
