import type { Metadata } from "next";
import SiteNav from "../components/SiteNav";
import SiteFooter from "../components/SiteFooter";
import ApplyForm from "./ApplyForm";

export const metadata: Metadata = {
  title: "Apply | The Mark",
  description: "Apply to work with The Mark. Tell us about your business and your goals on LinkedIn.",
};

export default function ApplyPage() {
  return (
    <>
      <SiteNav />
      <main className="ap">
        <div className="ap-wrap">
          <div className="ap-head">
            <div className="csx-label">Application</div>
            <h1 className="ap-title">Apply to work <span className="accent">with us.</span></h1>
            <p className="ap-lead">Limited spots. Tell us a little about you and your business, and we will be in touch.</p>
          </div>
          <ApplyForm />
          <p className="ap-alt">Prefer email? Reach us directly at <a href="mailto:start@100bold.co">start@100bold.co</a></p>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
