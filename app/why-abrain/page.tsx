import type { Metadata } from "next";
import Image from "next/image";
import FadeInView from "@/components/ui/FadeInView";
import CTABanner from "@/components/ui/CTABanner";
import { TRUST_STATS, SITE } from "@/lib/siteData";
import { breadcrumbSchema } from "@/lib/structuredData";
import { ShieldCheck, Factory, MapPin, Wrench } from "lucide-react";

export const metadata: Metadata = {
  title: "Why Abrain — Malaysia's Own Smart Lock",
  description:
    "Abrain is a Malaysian smart lock brand, designing and building 304 stainless steel locks since 2018 with local R&D, local installation and local after-sales support.",
  alternates: { canonical: "https://abrain.com.my/why-abrain" },
};

const PILLARS = [
  { icon: Factory, title: "Designed, not rebadged", text: "Abrain engineers its own locks around Malaysian door standards, rather than importing a generic unit and sticking a label on it. That is why there is a dedicated mortise for grille gates and frameless glass." },
  { icon: ShieldCheck, title: "304 stainless, throughout", text: "The lock bodies are cut from 304 stainless steel — the grade used in marine and surgical hardware — with anti-pry and anti-drill protection built into the core, not bolted on." },
  { icon: MapPin, title: "Local support that answers", text: "Branches in Penang, Selangor and Kuching mean warranty, spares and advice come from people in your time zone, not an overseas call centre." },
  { icon: Wrench, title: "We fit it ourselves", text: "Our own installers measure, fit and test every lock, and set up the app with you. No guessing, no self-install kit left on your doorstep." },
];

export default function WhyAbrainPage() {
  return (
    <div className="pt-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Home", href: "/" }, { name: "Why Abrain", href: "/why-abrain" }])) }}
      />

      {/* Header band */}
      <section className="relative overflow-hidden grid-overlay" style={{ background: "linear-gradient(150deg, #15181C 0%, #1E2329 100%)" }}>
        <div className="container py-20 relative z-10">
          <div className="max-w-2xl">
            <div className="rule-accent mb-5" />
            <p className="eyebrow-white mb-3">Why Abrain</p>
            <h1 className="text-display text-white mb-5">A local brand, built to a hard standard</h1>
            <p className="text-body-lg" style={{ color: "rgba(255,255,255,0.7)" }}>
              Since {SITE.since}, Abrain has done something unusual for the Malaysian market — engineer its own smart
              locks in stainless steel, and stand behind them with local installation and support.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-14" style={{ background: "var(--color-bg-alt)" }}>
        <div className="container grid grid-cols-2 md:grid-cols-4 gap-8">
          {TRUST_STATS.map((s) => (
            <div key={s.label}>
              <div className="text-4xl mb-1" style={{ fontFamily: "var(--font-display)", fontWeight: 800, color: "var(--color-text)" }}>{s.value}</div>
              <div className="text-sm" style={{ color: "var(--color-text-muted)" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Story + image */}
      <section className="section-py" style={{ background: "var(--color-bg)" }}>
        <div className="container grid lg:grid-cols-2 gap-12 items-center">
          <FadeInView>
            <div className="rule-accent mb-5" />
            <h2 className="text-h2 mb-5">The &ldquo;real&rdquo; smart lock</h2>
            <div className="prose">
              <p>
                Plenty of smart locks on the market are the same white-label unit sold under a dozen names. When
                something goes wrong, there is no one local to call, and no spare part that fits.
              </p>
              <p>
                Abrain took the harder route. Each model is designed here, built from a single piece of 304 stainless
                steel, and matched to the doors Malaysians actually have — from solid wooden doors to metal grille
                gates and frameless glass shopfronts.
              </p>
              <p>
                The result is a lock that fits properly, resists real-world attacks, and is backed by a team you can
                reach in Penang, Selangor or Kuching.
              </p>
            </div>
          </FadeInView>
          <FadeInView delay={0.1}>
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border" style={{ borderColor: "var(--color-border)" }}>
              <Image src="/images/why-craft.jpg" alt="Abrain stainless steel smart lock craftsmanship" fill className="object-cover" sizes="(max-width: 1024px) 90vw, 45vw" />
            </div>
          </FadeInView>
        </div>
      </section>

      {/* Pillars */}
      <section className="section-py" style={{ background: "var(--color-bg-alt)" }}>
        <div className="container">
          <FadeInView className="max-w-2xl mb-12">
            <p className="eyebrow mb-3">What sets it apart</p>
            <h2 className="text-h2">Four things you won&apos;t get from a rebadged import</h2>
          </FadeInView>
          <div className="grid md:grid-cols-2 gap-6">
            {PILLARS.map((p, i) => (
              <FadeInView key={p.title} delay={i * 0.08}>
                <div className="card h-full p-7 flex gap-5">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0" style={{ background: "var(--color-accent-soft)" }}>
                    <p.icon size={22} style={{ color: "var(--color-accent-dark)" }} />
                  </div>
                  <div>
                    <h3 className="text-h3 mb-2">{p.title}</h3>
                    <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>{p.text}</p>
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
