import { Link } from "@tanstack/react-router";
import { Container } from "@/components/ui/mona-layout";
import { Instagram, Twitter, Facebook, Linkedin } from "lucide-react";

const columns = [
  {
    title: "Products",
    links: [
      { label: "Protect My Phone", to: "/phone-protection" },
      { label: "Buy Now, Get Protected & Pay Later", to: "/buy-now-get-protected-pay-later" },
      { label: "Fix Now, Get Protected & Pay Later", to: "/fix-now-get-protected-pay-later" },
      { label: "Protection Calculator", to: "/protection-calculator" },
      { label: "Supported Devices", to: "/supported-devices" },
    ],
  },
  {
    title: "Find Mona",
    links: [
      { label: "Partner Stores", to: "/partner-stores" },
      { label: "Store Locations", to: "/partner-stores" },
      { label: "Contact", to: "/support" },
      { label: "Support", to: "/support" },
    ],
  },
  {
    title: "For Businesses",
    links: [
      { label: "Become a Partner Store", to: "/become-a-partner" },
      { label: "Partner Login", to: "/partner-login" },
      { label: "Business Financing", to: "/business-financing" },
      { label: "Partner Support", to: "/support" },
    ],
  },
  {
    title: "Account",
    links: [
      { label: "Customer Login", to: "/customer-login" },
      { label: "Partner Login", to: "/partner-login" },
      { label: "Request a Repair", to: "/fix-now-get-protected-pay-later" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Mona", to: "/support" },
      { label: "News", to: "/support" },
      { label: "Mona Guides", to: "/faqs" },
      { label: "Careers", to: "/support" },
      { label: "Contact", to: "/support" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms", to: "/terms" },
      { label: "Privacy", to: "/privacy" },
      { label: "Protection Terms", to: "/terms" },
      { label: "Financing Disclosures", to: "/terms" },
      { label: "Complaints", to: "/support" },
      { label: "Regulatory Information", to: "/terms" },
    ],
  },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="pt-16 pb-8" style={{ background: "var(--color-navy)", color: "#fff" }}>
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
          {columns.map((col) => (
            <div key={col.title}>
              <h4
                className="text-white font-semibold mb-4 text-sm uppercase tracking-wider"
                style={{ color: "#fff" }}
              >
                {col.title}
              </h4>
              <ul className="space-y-2">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link to={l.to} className="text-sm text-white/80 hover:text-white">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8 grid gap-6 md:grid-cols-3 items-center">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span
                className="inline-block w-7 h-7 rounded-sm"
                style={{ background: "var(--gradient-brand)" }}
              />
              <span
                className="font-bold text-lg text-white"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Mona Protect
              </span>
            </div>
            <p className="text-xs text-white/70 leading-relaxed">
              Mona Technologies Ltd (RC 7480610). NAICOM-licensed Insurtech, 2025 Insurtech
              Guidelines.
            </p>
          </div>
          <div className="text-sm text-white/80 space-y-1">
            <p>Plot 502, Dalaba Street, Off Michael Okpara Way, Wuse Zone 5, Abuja</p>
            <p>hello@monaprotect.com</p>
            <p>+234 704 810 0101</p>
          </div>
          <div className="flex md:justify-end items-center gap-4">
            <a
              aria-label="Instagram"
              href="https://instagram.com/monaprotect"
              className="text-white/80 hover:text-white"
            >
              <Instagram size={20} />
            </a>
            <a
              aria-label="Twitter"
              href="https://twitter.com/monaprotect"
              className="text-white/80 hover:text-white"
            >
              <Twitter size={20} />
            </a>
            <a
              aria-label="Facebook"
              href="https://facebook.com/monaprotect"
              className="text-white/80 hover:text-white"
            >
              <Facebook size={20} />
            </a>
            <a
              aria-label="LinkedIn"
              href="https://linkedin.com/company/monaprotect"
              className="text-white/80 hover:text-white"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        <p className="text-xs text-white/60 text-center mt-8">
          © {year} Mona Technologies Ltd. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
