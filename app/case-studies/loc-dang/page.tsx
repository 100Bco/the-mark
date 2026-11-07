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
  hero: { src: "/images/loc-dang/ld-office-portrait.webp", alt: "Loc Dang at his office in Austin", position: "center 25%" },
  avatar: { src: "/images/loc-dang/Loc Dang.png", position: "center 20%" },
  quote:
    "I never used social media before. Within 4 months, attorneys and business owners were reaching out to connect, podcast hosts were inviting me on their shows, and my name was being recognized in the Austin legal community, all from LinkedIn.",
  work: [
    <>Founder of Dang Law Group, a personal injury law firm based in Austin, Texas. Before working with The Mark, Loc had never used social media. No LinkedIn profile activity, no content, no online presence. His reputation was built entirely through word of mouth and courtroom results.</>,
    <>Starting in June 2026, we built Loc&apos;s LinkedIn presence from scratch. Voice capture sessions extracted his perspective on personal injury law, client advocacy, and what accident victims need to know.</>,
    <><strong>3 to 4 posts per week</strong> covering accident case insights, legal rights education, community involvement, and the story of building Dang Law Group. Full account management handled.</>,
    <>In 4 months, Loc went from invisible online to a recognized voice in Austin&apos;s legal and business community.</>,
  ],
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
  proof: {
    role: "Founder",
    company: "Dang Law Group",
    followers: "3,596",
    followersExtra: "+4,632% growth",
    tags: "Legal • Personal Injury • Austin TX",
    period: "4 Months • From Zero",
    headline: "49K+",
    headlineLabel: "LinkedIn Impressions",
    line1: "3,596 Followers Grown",
    line2: "12% Attorney Audience",
    inbound: [
      { main: "Podcast invitation", sub: "Austin Business Spotlight" },
      { main: "VIP event invite", sub: "Moody Center" },
      { main: "Peer attorney meetings" },
      { main: "Sales director call requests" },
    ],
  },
};

export default function LocDangPage() {
  return <CaseStudyTemplate d={data} />;
}
