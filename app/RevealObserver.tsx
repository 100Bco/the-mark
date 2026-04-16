"use client";

import { useEffect } from "react";

export default function RevealObserver() {
  useEffect(() => {
    const reveals = document.querySelectorAll<HTMLElement>(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("visible");
              entry.target
                .querySelectorAll<HTMLElement>(".cs-bar-fill")
                .forEach((b) => {
                  setTimeout(() => {
                    b.style.width = (b.dataset.w ?? "0") + "%";
                  }, 400);
                });
            }, 80);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    reveals.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
}
