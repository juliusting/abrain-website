import type { Metadata } from "next";
import Image from "next/image";
import FadeInView from "@/components/ui/FadeInView";
import CTABanner from "@/components/ui/CTABanner";
import { CATEGORIES } from "@/lib/products";
import { SITE } from "@/lib/siteData";
import { breadcrumbSchema } from "@/lib/structuredData";
import { Fingerprint, Star, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Smart Lock Range — 13 Models for Every Door",
  description:
    "Browse the full Abrain smart lock range: M-Series and X-Series for wooden and security doors, XC/G/R for grille gates, and 011D/R9S/GL7 for glass doors. 304 stainless steel, keyless entry.",
  alternates: { canonical: "https://abrain.com.my/products" },
};

export default function ProductsPage() {
  return (
    <div className="pt-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Home", href: "/" }, { name: "Products", href: "/products" }])) }}
      />

      {/* Header band */}
      <section className="relative overflow-hidden grid-overlay" style={{ background: "linear-gradient(150deg, #15181C 0%, #1E2329 100%)" }}>
        <div className="container py-20 relative z-10">
          <div className="max-w-2xl">
            <div className="rule-accent mb-5" />
            <p className="eyebrow-white mb-3">The range</p>
            <h1 className="text-display text-white mb-5">Thirteen models. One standard of build.</h1>
            <p className="text-body-lg" style={{ color: "rgba(255,255,255,0.7)" }}>
              Every Abrain lock shares the same 304 stainless steel core and Smart Mortise auto-lock. What changes is
              the mortise shape — matched precisely to wooden, grille and glass doors.
            </p>
          </div>
        </div>
      </section>

      {/* Category sections */}
      {CATEGORIES.map((c, ci) => (
        <section
          key={c.key}
          id={c.key}
          className="section-py scroll-mt-20"
          style={{ background: ci % 2 === 0 ? "var(--color-bg)" : "var(--color-bg-alt)" }}
        >
          <div className="container">
            <div className="grid lg:grid-cols-5 gap-10 items-start">
              {/* Category intro */}
              <FadeInView className="lg:col-span-2 lg:sticky lg:top-24">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6 border" style={{ borderColor: "var(--color-border)" }}>
                  <Image src={c.image} alt={c.name} fill className="object-cover" sizes="(max-width: 1024px) 90vw, 40vw" />
                </div>
                <p className="eyebrow mb-2">Series {ci + 1}</p>
                <h2 className="text-h2 mb-3">{c.name}</h2>
                <p className="text-body-lg" style={{ color: "var(--color-text-muted)" }}>{c.blurb}</p>
              </FadeInView>

              {/* Model cards */}
              <div className="lg:col-span-3 grid sm:grid-cols-2 gap-5">
                {c.products.map((p, i) => (
                  <FadeInView key={p.slug} delay={i * 0.05}>
                    <div className="card h-full p-6 flex flex-col">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-2xl" style={{ fontFamily: "var(--font-display)", fontWeight: 800 }}>{p.model}</span>
                        {p.flagship && (
                          <span className="inline-flex items-center gap-1 text-xs font-semibold px-2 py-1 rounded" style={{ background: "var(--color-accent-soft)", color: "var(--color-accent-dark)" }}>
                            <Star size={11} fill="currentColor" /> Popular
                          </span>
                        )}
                      </div>
                      <p className="text-sm mb-4 flex-1" style={{ color: "var(--color-text-muted)" }}>{p.tagline}</p>
                      {p.highlight && (
                        <p className="text-xs font-semibold mb-3" style={{ color: "var(--color-accent-dark)" }}>{p.highlight}</p>
                      )}
                      <div className="flex items-center gap-1.5 flex-wrap pt-3 border-t" style={{ borderColor: "var(--color-border)" }}>
                        <Fingerprint size={14} style={{ color: "var(--color-steel)" }} className="shrink-0" />
                        <span className="text-xs" style={{ color: "var(--color-text-muted)" }}>{p.unlock.join(" · ")}</span>
                      </div>
                      <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(`Hi Abrain, I'm interested in the ${p.model} smart lock.`)}`} target="_blank" rel="noopener noreferrer" className="btn btn-outline w-full justify-center text-sm mt-5">
                        <MessageCircle size={14} /> Ask about {p.model}
                      </a>
                    </div>
                  </FadeInView>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      <CTABanner heading="Not sure which model fits your door?" sub="Send us a photo and a couple of measurements on WhatsApp. We'll tell you exactly which Abrain lock fits, and quote it." />
    </div>
  );
}
