import type { Metadata } from "next";
import CaseStudyTemplate, { type CaseStudyData } from "../../components/CaseStudyTemplate";

export const metadata: Metadata = {
  title: "Tung Cao: 1M+ LinkedIn Impressions in 12 Months | The Mark",
  description:
    "How The Mark took Tung Cao from zero LinkedIn presence to 1 million impressions, 296K members reached, 2 speaker invitations, and a pipeline of inbound deals.",
};

const data: CaseStudyData = {
  firstName: "Tung",
  name: "Tung Cao",
  hero: { src: "/images/tung-cao/tc-imc-group.webp", alt: "Tung Cao at International Manufacturing Congress 2026", position: "center 72%" },
  avatar: { src: "/images/tung-cao/Tung Cao Photo.png" },
  quote:
    "Within 12 months, investors and partners I had never met started reaching out. I was invited to speak at the International Manufacturing Congress in Hanoi. The content opened doors that moved my business forward.",
  work: [
    <>Co-Founder and Head of International Trade at 100B Global, a company bridging Vietnamese manufacturers with international buyers. Despite years of industry expertise, Tung had zero LinkedIn presence. No followers, no content, no visibility to the global buyers and partners he needed to reach.</>,
    <>We started with deep-dive voice capture sessions to extract Tung&apos;s expertise in sourcing, export compliance, and Vietnam&apos;s manufacturing landscape. From there, we built a content strategy focused on the specific problems his target audience faces when sourcing from Vietnam.</>,
    <><strong>3 to 4 posts per week.</strong> Strategic commentary on trade regulations, factory selection, quality control, and cross-border logistics. Full account management. An amplification network that triggered the algorithm from day one.</>,
    <>The content wasn&apos;t generic industry news. It was Tung&apos;s real experience, published consistently and distributed to the right audience.</>,
  ],
  numbersTitle: "In 12 months",
  bigNumbers: [
    { value: "1M+", label: "Impressions in 12 months" },
    { value: "89%", label: "Reach outside existing network" },
  ],
  results: [
    "1,000,521 total impressions",
    "296,123 members reached",
    "7,000+ followers from zero",
    "89% out-of-network reach",
    "2x speaker invitations",
    "Daily inbound conversations",
  ],
  milestones: [
    { kicker: "Speaker", title: "International Manufacturing Congress 2026", desc: "Invited as a panelist at VIIF Hanoi. Organizers found Tung directly through LinkedIn content." },
    { kicker: "Podcast", title: "Vietnam Supply Chain Network", desc: "VSCN (9K+ members) invited Tung for a podcast on sourcing and export, sourced from his LinkedIn posts." },
    { title: "Global Inbound Pipeline", desc: "Partnership proposals from Indonesia, sourcing inquiries from Brazil, collaboration from NUS Singapore. All inbound through LinkedIn." },
  ],
  proofImages: [
    { src: "/images/tung-cao/tc-linkedin-profile.webp", alt: "Tung Cao LinkedIn profile, 7,072 followers", href: "https://www.linkedin.com/in/tungcao-thomas/", fit: "contain" },
  ],
  feedImages: [
    { src: "/images/tung-cao/tc-feed-1.webp", alt: "LinkedIn post: IKEA has sourced from Vietnam for 33 years", href: "https://lnkd.in/p/gmaU2XbA" },
    { src: "/images/tung-cao/tc-feed-2.webp", alt: "LinkedIn post: The world's #2 shipping giant eyes $3.5 billion in Vietnam", href: "https://lnkd.in/p/gM3MNyrY" },
    { src: "/images/tung-cao/tc-feed-3.webp", alt: "LinkedIn post: Vietnam's most powerful women in Asia", href: "https://lnkd.in/p/gw-JGzTf" },
  ],
  linkedin: { url: "https://www.linkedin.com/in/tungcao-thomas/", handle: "tungcao-thomas" },
};

export default function TungCaoPage() {
  return <CaseStudyTemplate d={data} />;
}
