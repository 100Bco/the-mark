import type { CSSProperties } from "react";

export type CaseCardData = {
  href: string;
  img: { src: string; alt: string; style?: CSSProperties };
  name: string;
  title: string;
  intro: string;
  stats: { value: string; label: string }[];
};

/* Shared data so both pages always show the same cards */
export const CASES: CaseCardData[] = [
  {
    href: "/case-studies/tung-cao",
    img: {
      src: "/images/tung-cao/tc-imc-group.webp",
      alt: "Tung Cao at International Manufacturing Congress",
      // Zoom on the three speakers instead of the whole stage
      style: { objectPosition: "66% 64%", transformOrigin: "66% 64%", ["--zoom" as string]: "1.9" },
    },
    name: "Tung Cao",
    title: "Co-Founder, 100B Global",
    intro: "From zero to 1M+ impressions in 12 months. 2 speaker invitations, daily inbound from decision‑makers worldwide.",
    stats: [
      { value: "1M+", label: "Impressions" },
      { value: "7K", label: "Followers" },
    ],
  },
  {
    href: "/case-studies/loc-dang",
    img: {
      src: "/images/loc-dang/ld-office-portrait.webp",
      alt: "Loc Dang at his office in Austin",
      style: { objectPosition: "62% 22%", transformOrigin: "62% 22%", ["--zoom" as string]: "1.15" },
    },
    name: "Loc Dang",
    title: "Founder, Dang Law Group",
    intro: "Never used social media. 49K+ impressions and 3,596 followers in 4 months, reaching attorneys, founders, and CEOs.",
    stats: [
      { value: "49K+", label: "Impressions" },
      { value: "3,596", label: "Followers" },
    ],
  },
];
