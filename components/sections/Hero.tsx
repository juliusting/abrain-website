import Image from "next/image";
import { ArrowRight, MessageCircle, Fingerprint, Smartphone, KeyRound, ScanFace } from "lucide-react";
import { SITE, TRUST_STATS } from "@/lib/siteData";

const CHIPS = [
  { icon: Fingerprint, label: "Fingerprint" },
  { icon: ScanFace, label: "Face / OTP" },
  { icon: Smartphone, label: "App unlock" },
  { icon: KeyRound, label: "Key backup" },
];

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center pt-16 overflow-hidden grid-overlay"
      style={{ background: "linear-gradient(150deg, #15181C 0%, #1E2329 55%, #15181C 100%)" }}
    >
      {/* Accent glow */}
      <div
        className="absolute -top-40 -right-40 w-[38rem] h-[38rem] rounded-full opacity-25 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(200,138,61,0.55), transparent 65%)" }}
      />

      <div className="container relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Copy */}
          <div>
            <p className="eyebrow-white mb-6">Malaysian Smart Lock · Since {SITE.since}</p>

            <h1 className="text-display text-white mb-6">
              Keyless entry,{" "}
              <span style={{ color: "var(--color-accent-lt)" }}>engineered in stainless steel</span>
            </h1>

            <p className="text-body-lg mb-8 max-w-xl" style={{ color: "rgba(255,255,255,0.72)" }}>
              Abrain builds fully-automatic 304 stainless steel smart locks in Malaysia — anti-pry, anti-drill,
              app-controlled, and fitted to your door by our own installers.
            </p>

            {/* Unlock chips */}
            <div className="flex flex-wrap gap-2.5 mb-9">
              {CHIPS.map((c) => (
                <span
                  key={c.label}
                  className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full"
                  style={{ background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.82)", border: "1px solid rgba(255,255,255,0.12)" }}
                >
                  <c.icon size={14} style={{ color: "var(--color-accent-lt)" }} /> {c.label}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noopener noreferrer" className="btn btn-accent">
                Get a Quote <ArrowRight size={16} />
              </a>
              <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark">
                <MessageCircle size={16} /> WhatsApp Us
              </a>
            </div>
          </div>

          {/* Product render */}
          <div className="relative">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-md rounded-2xl overflow-hidden border border-white/10">
              <Image
                src="/images/hero-lock.jpg"
                alt="Abrain stainless steel smart lock mounted on a modern door"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 90vw, 40vw"
              />
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 border-t pt-10"
          style={{ borderColor: "var(--color-border-dark)" }}
        >
          {TRUST_STATS.map((s) => (
            <div key={s.label}>
              <div className="text-3xl mb-1" style={{ color: "var(--color-accent-lt)", fontFamily: "var(--font-display)", fontWeight: 800 }}>{s.value}</div>
              <div className="text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
