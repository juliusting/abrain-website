"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ShieldCheck } from "lucide-react";
import { SITE } from "@/lib/siteData";

const NAV = [
  { label: "Products", href: "/products" },
  { label: "Why Abrain", href: "/why-abrain" },
  { label: "Support", href: "/support" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // On the homepage the hero is dark gunmetal — use light text until scrolled.
  const onDark = isHome && !scrolled;
  const navColor = onDark ? "rgba(255,255,255,0.82)" : "var(--color-text)";
  const wordColor = onDark ? "#FFFFFF" : "var(--color-text)";
  const mobileIconColor = onDark ? "#fff" : "var(--color-text)";

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-[var(--color-border)]" : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16">
        {/* Wordmark */}
        <Link href="/" className="flex items-center gap-2" aria-label="Abrain home">
          <ShieldCheck size={22} style={{ color: "var(--color-accent)" }} />
          <span
            style={{ color: wordColor, fontFamily: "var(--font-display)", fontWeight: 800, letterSpacing: "0.14em" }}
            className="text-lg"
          >
            ABRAIN
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="text-sm font-medium transition-colors duration-150 hover:opacity-70"
              style={{ color: navColor }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={`https://wa.me/${SITE.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-accent text-sm px-5 py-2.5"
          >
            Get a Quote
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 rounded-lg"
          style={{ color: mobileIconColor }}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer — opaque */}
      {open && (
        <div className="md:hidden bg-white border-t border-[var(--color-border)] px-6 py-4 flex flex-col gap-4">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="text-sm font-medium text-[var(--color-text)] hover:text-[var(--color-accent-dark)] transition-colors"
              onClick={() => setOpen(false)}
            >
              {n.label}
            </Link>
          ))}
          <a
            href={`https://wa.me/${SITE.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-accent text-sm w-full justify-center mt-2"
            onClick={() => setOpen(false)}
          >
            Get a Quote
          </a>
        </div>
      )}
    </header>
  );
}
