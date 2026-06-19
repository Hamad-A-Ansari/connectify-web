import Link from "next/link";

const FOOTER_LINKS = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
  { label: "Delete Account", href: "/delete-account" },
  { label: "Child Safety", href: "/child-safety" },
];

const CONTACT_EMAIL = "hamad.ansarif90@gmail.com";

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Page Links */}
          <nav className="flex flex-wrap items-center gap-6">
            {FOOTER_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-white hover:text-[#6C63FF] transition-colors duration-200 min-h-[44px] inline-flex items-center"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Contact Email */}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            aria-label={`Send email to ${CONTACT_EMAIL}`}
            className="text-sm text-white hover:text-[#6C63FF] transition-colors duration-200 min-h-[44px] inline-flex items-center"
          >
            {CONTACT_EMAIL}
          </a>
        </div>

        <div className="mt-6 text-center text-xs text-white/60">
          © {new Date().getFullYear()} Connectify. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
