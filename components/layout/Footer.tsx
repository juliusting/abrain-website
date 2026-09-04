import Link from "next/link";
import { ShieldCheck, Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { SITE, BRANCHES } from "@/lib/siteData";
import { CATEGORIES } from "@/lib/products";

const COMPANY = [
  { label: "All Products", href: "/products" },
  { label: "Why Abrain", href: "/why-abrain" },
  { label: "Support & Guides", href: "/support" },
  { label: "Contact", href: "/contact" },
];
const LEGAL = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms & Conditions", href: "/terms" },
];

export default function Footer() {
  return (
    <footer style={{ background: "var(--color-bg-dark)" }} className="text-white/80">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <ShieldCheck size={22} style={{ color: "var(--color-accent)" }} />
              <span className="text-xl text-white" style={{ fontFamily: "var(--font-display)", fontWeight: 800, letterSpacing: "0.14em" }}>
                ABRAIN
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-white/60 mb-6">
              Malaysia&apos;s own 304 stainless steel smart lock. Designed, built and supported locally since {SITE.since}.
            </p>
            <div className="flex flex-col gap-3 text-sm">
              <a href={`tel:+${SITE.phoneMainIntl}`} className="flex items-center gap-2 hover:text-[var(--color-accent-lt)] transition-colors">
                <Phone size={14} /> {SITE.phoneMain}
              </a>
              <a href={`mailto:${SITE.email}`} className="flex items-center gap-2 hover:text-[var(--color-accent-lt)] transition-colors">
                <Mail size={14} /> {SITE.email}
              </a>
              <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[var(--color-accent-lt)] transition-colors">
                <MessageCircle size={14} /> WhatsApp Us
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wide" style={{ fontFamily: "var(--font-display)" }}>Products</h3>
            <ul className="flex flex-col gap-2.5">
              {CATEGORIES.map((c) => (
                <li key={c.key}>
                  <Link href={`/products#${c.key}`} className="text-sm text-white/60 hover:text-[var(--color-accent-lt)] transition-colors">
                    {c.short} Doors
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/products" className="text-sm text-white/60 hover:text-[var(--color-accent-lt)] transition-colors">
                  View all {CATEGORIES.reduce((n, c) => n + c.products.length, 0)} models
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wide" style={{ fontFamily: "var(--font-display)" }}>Company</h3>
            <ul className="flex flex-col gap-2.5">
              {COMPANY.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-white/60 hover:text-[var(--color-accent-lt)] transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Branches */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wide" style={{ fontFamily: "var(--font-display)" }}>Branches</h3>
            <ul className="flex flex-col gap-3">
              {BRANCHES.map((b) => (
                <li key={b.name} className="flex items-start gap-2 text-xs text-white/55 leading-relaxed">
                  <MapPin size={13} className="mt-0.5 shrink-0" style={{ color: "var(--color-accent)" }} />
                  <span><span className="text-white/80 font-medium">{b.region}</span> — {b.phone}</span>
                </li>
              ))}
            </ul>
            <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noopener noreferrer" className="btn btn-accent w-full justify-center text-sm mt-5">
              <MessageCircle size={15} /> Get a Quote
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} {SITE.legalName} ({SITE.ssm}). All rights reserved.
          </p>
          <div className="flex gap-6">
            {LEGAL.map((l) => (
              <Link key={l.href} href={l.href} className="text-xs text-white/40 hover:text-white/70 transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
