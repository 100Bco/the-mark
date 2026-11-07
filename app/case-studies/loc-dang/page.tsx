import type { Metadata } from "next";
import CaseStudyTemplate, { type CaseStudyData } from "../../components/CaseStudyTemplate";

export const metadata: Metadata = {
  title: "Loc Dang: 49K+ Impressions in 4 Months From Zero | The Mark",
  description:
    "How The Mark took Loc Dang from zero social media presence to 49K+ impressions, 3,596 followers, and a stream of inbound opportunities in just 4 months.",
};

const data: CaseStudyData = {
  firstName: "Loc",
  name: "Loc Dang",
  hero: { src: "/images/loc-dang/ld-billboard.webp", alt: "Dang Law Group billboard in Austin, Texas", position: "center 38%" },
  avatar: { src: "/images/loc-dang/Loc Dang.png", position: "center 20%" },
  quote:
    "I never used social media before. Within 4 months, attorneys and business owners were reaching out to connect, podcast hosts were inviting me on their shows, and my name was being recognized in the Austin legal community, all from LinkedIn.",
  work: [
    <>Founder of Dang Law Group, a personal injury law firm based in Austin, Texas. Before working with The Mark, Loc had never used social media. No LinkedIn profile activity, no content, no online presence. His reputation was built entirely through word of mouth and courtroom results.</>,
    <>Starting in June 2026, we built Loc&apos;s LinkedIn presence from scratch. Voice capture sessions extracted his perspective on personal injury law, client advocacy, and what accident victims need to know.</>,
    <><strong>3 to 4 posts per week</strong> covering accident case insights, legal rights education, community involvement, and the story of building Dang Law Group. Full account management handled.</>,
    <>In 4 months, Loc went from invisible online to a recognized voice in Austin&apos;s legal and business community.</>,
  ],
  numbersTitle: "In 4 months",
  bigNumbers: [
    { value: "4,632%", label: "Follower growth" },
    { value: "0 → 3,596", label: "Followers in 4 months" },
  ],
  results: [
    "49,055 total impressions",
    "3,596 followers from zero",
    "4,632% growth rate",
    "12% attorney audience",
    "Podcast invitation received",
    "10+ inbound conversations",
  ],
  milestones: [
    { kicker: "Podcast", title: "Austin Business Spotlight Series", desc: "Featured podcast (200+ episodes) reached out via LinkedIn and followed up three times to book Loc as a guest." },
    { kicker: "VIP Event", title: "Moody Center", desc: "Invited to exclusive Moody Center events for strategic partnerships within the legal industry." },
    { title: "Peer & Partner Inbound", desc: "Attorneys, firm owners, and sales directors reaching out for lunch meetings, calls, and collaboration. All inbound." },
  ],
  proofImages: [
    { src: "/images/loc-dang/ld-proof-analytics.webp", alt: "LinkedIn analytics: 49,055 impressions, 13,238 members reached", fit: "contain" },
    { src: "/images/loc-dang/ld-proof-2.webp", alt: "Loc Dang: +4,632% follower growth in 4 months" },
    { src: "/images/loc-dang/ld-proof-inbox.webp", alt: "Real inbound LinkedIn messages to Loc Dang, sender names blurred", href: "/images/loc-dang/ld-proof-inbox-all.webp", cta: "View all messages \u2197" },
  ],
  feedImages: [
    { src: "/images/loc-dang/ld-feed-1.webp", alt: "LinkedIn post: Hit by a drunk driver? Call Dang Law Group", href: "https://lnkd.in/p/g_M7-kNS" },
    { src: "/images/loc-dang/ld-feed-2.webp", alt: "LinkedIn post: Tennessee says no to private equity owning law firms", href: "https://lnkd.in/p/g7Avgk6u" },
    { src: "/images/loc-dang/ld-feed-3.webp", alt: "LinkedIn post: Dang Law Group, accidents and injuries", href: "https://lnkd.in/p/gUNfc6Ds" },
  ],
  linkedin: { url: "https://www.linkedin.com/in/loc-dang-dlg/", handle: "loc-dang-dlg" },
};

export default function LocDangPage() {
  return <CaseStudyTemplate d={data} />;
}
