import type { ReactNode } from "react";

type Props = {
  /** Custom headline. Defaults to "Become the best-known name in your industry." */
  title?: ReactNode;
  sub?: string;
  showEmail?: boolean;
};

export default function CtaSection({
  title,
  sub = "Limited spots. Application only.",
  showEmail = true,
}: Props) {
  return (
    <section id="apply" className="cta2-section">
      <h2 className="cta2-title reveal">
        {title ?? (
          <>
            Become the<br className="br-m" />{" "}
            <span className="nowrap">best-known</span> name<br />
            <span className="accent">in your industry.</span>
          </>
        )}
      </h2>
      <p className="cta2-sub reveal">{sub}</p>
      <a
        href="mailto:start@100bold.co?subject=The Mark - Application"
        className="btn-primary cta2-btn reveal"
      >
        Apply to Work With Us
      </a>
      {showEmail && (
        <p className="cta2-mail reveal">
          Or reach us directly at <a href="mailto:start@100bold.co">start@100bold.co</a>
        </p>
      )}
    </section>
  );
}
