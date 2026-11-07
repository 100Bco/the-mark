const PAGES: [string, string][] = [
  ["Home", "/"],
  ["Case Studies", "/case-studies"],
  ["About", "/about"],
];

const SERVICES = [
  "LinkedIn Management",
  "Content Strategy",
  "Outreach & Conversion",
  "Amplification Network",
];

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-container">
        <div className="footer-grid">
          <div className="footer-contact">
            <div className="footer-label">Contact</div>
            <a href="mailto:start@100bold.co" className="footer-link">start@100bold.co</a>
            <a
              href="https://www.linkedin.com/in/minhlaunch/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social"
            >
              <span className="footer-social-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="var(--muted-lt)">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              </span>
              LinkedIn
            </a>
            <p className="footer-muted">Austin, Texas</p>
          </div>

          <div>
            <div className="footer-label">Pages</div>
            {PAGES.map(([label, href]) => (
              <a key={label} href={href} className="footer-link">{label}</a>
            ))}
          </div>

          <div>
            <div className="footer-label">Services</div>
            {SERVICES.map((item) => (
              <p key={item} className="footer-service">{item}</p>
            ))}
          </div>
        </div>

        {/* Giant brand name with light sweep */}
        <div className="footer-brand-wrap">
          <div className="footer-brand-glow">THE MARK</div>
        </div>

        <div className="footer-bar">
          <p>&copy; 2026 The Mark by 100Bold</p>
          <p>Application Only</p>
        </div>
      </div>
    </footer>
  );
}
