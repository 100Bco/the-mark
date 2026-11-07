"use client";

import { useEffect, useState } from "react";

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
          {LINKS.map((l) => (
            <a key={l.key} href={l.href} className={`nav-link${active === l.key ? " is-active" : ""}`}>
              {l.label}
            </a>
          ))}
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
            <a key={l.key} href={l.href} className={active === l.key ? "is-active" : ""} onClick={() => setOpen(false)}>
              {l.label}
            </a>
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
