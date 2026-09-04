import Image from "next/image";
import { Ruler, ShieldAlert, RefreshCw, BellRing, BatteryMedium, MapPin } from "lucide-react";
import FadeInView from "@/components/ui/FadeInView";

const FEATURES = [
  { icon: Ruler, title: "18mm slimmest body", text: "The M3 is engineered at just 18mm — thin enough to sit between a wooden door and a grille without a bulky handle." },
  { icon: ShieldAlert, title: "Anti-pry, anti-drill", text: "Lock bodies are cut from 304 stainless steel with a hardened core that resists prying and drilling attacks." },
  { icon: RefreshCw, title: "Smart Mortise auto-lock", text: "The bolt throws itself the moment the door closes, so the door is never left unlocked by accident." },
  { icon: BellRing, title: "Instant phone alerts", text: "Get notified for a door left ajar, a wrong-code attempt, or a low battery — anywhere, through the app." },
  { icon: BatteryMedium, title: "~7 months per charge", text: "Four AA batteries drive a fully-automatic lock for around seven months, with early low-power warnings." },
  { icon: MapPin, title: "Local brand, local support", text: "Designed and supported in Malaysia since 2018, with branches in Penang, Selangor and Kuching." },
];

export default function Features() {
  return (
    <section className="section-py relative overflow-hidden grid-overlay" style={{ background: "linear-gradient(160deg, #1E2329 0%, #15181C 100%)" }}>
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* Left: heading + macro image */}
          <div className="lg:sticky lg:top-24">
            <div className="rule-accent mb-5" />
            <p className="eyebrow-white mb-3">Engineering</p>
            <h2 className="text-h2 text-white mb-5">The &ldquo;real&rdquo; smart lock, made local</h2>
            <p className="text-body-lg mb-8" style={{ color: "rgba(255,255,255,0.68)" }}>
              Abrain is not a rebadged import. Every model is designed around Malaysian doors and built from a
              single piece of 304 stainless steel — the same grade used in marine and surgical hardware.
            </p>
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/10">
              <Image src="/images/steel-macro.jpg" alt="Macro detail of brushed 304 stainless steel Abrain lock body" fill className="object-cover" sizes="(max-width: 1024px) 90vw, 45vw" />
            </div>
          </div>

          {/* Right: feature grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {FEATURES.map((f, i) => (
              <FadeInView key={f.title} delay={i * 0.06}>
                <div className="h-full p-6 rounded-xl" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <div className="w-11 h-11 rounded-lg flex items-center justify-center mb-4" style={{ background: "rgba(200,138,61,0.14)" }}>
                    <f.icon size={20} style={{ color: "var(--color-accent-lt)" }} />
                  </div>
                  <h3 className="text-white font-semibold mb-2" style={{ fontFamily: "var(--font-display)" }}>{f.title}</h3>
                  <p className="text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>{f.text}</p>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
