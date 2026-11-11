"use client";

import { useEffect, useState } from "react";

/**
 * Sticky "Apply" bar for phones. Appears once the visitor scrolls past the
 * first screen, hides again as soon as the closing CTA section comes into view.
 * Desktop never shows it (CSS hides .apply-bar above 900px).
 */
export default function MobileApplyBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const update = () => {
      const cta = document.getElementById("apply");
      const pastHero = window.scrollY > window.innerHeight * 0.8;
      const ctaReached = cta ? cta.getBoundingClientRect().top < window.innerHeight : false;
      setShow(pastHero && !ctaReached);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div className={`apply-bar${show ? " is-visible" : ""}`} aria-hidden={!show}>
      <a href="/apply" className="btn-primary apply-bar-btn" tabIndex={show ? 0 : -1}>
        Apply to Work With Us
      </a>
    </div>
  );
}
