import type { Metadata } from "next";
import FadeInView from "@/components/ui/FadeInView";
import CTABanner from "@/components/ui/CTABanner";
import FAQSection from "@/components/sections/FAQSection";
import { SITE } from "@/lib/siteData";
import { breadcrumbSchema } from "@/lib/structuredData";
import { Ruler, DoorClosed, Move, MessageCircle, BatteryMedium, Smartphone, ShieldQuestion } from "lucide-react";

export const metadata: Metadata = {
  title: "Support & Door Measurement Guide",
  description:
    "How to measure your door for an Abrain smart lock, battery and care tips, and app help. Get the right lock the first time, or ask our team on WhatsApp.",
  alternates: { canonical: "https://abrain.com.my/support" },
};

const MEASURE = [
  { icon: DoorClosed, title: "Door thickness", text: "Measure the thickness of the door leaf in millimetres. Most Malaysian doors fall between 35mm and 60mm; grille gates and glass doors vary more, so measure carefully." },
  { icon: Move, title: "Backset & stile width", text: "For grille and glass doors, measure the width of the frame member (stile) the lock mounts on. This decides whether a slim model like the XC2 or GL7 is required." },
  { icon: Ruler, title: "Existing lock cut-out", text: "If you are replacing a lock, note the size and position of the existing mortise cut-out and the hole spacing, so we can match or advise on adaptation." },
];

const CARE = [
  { icon: BatteryMedium, title: "Batteries", text: "Replace all four AA batteries together when the low-power alert appears — roughly every seven months. Use good-quality alkaline cells; avoid mixing old and new." },
  { icon: Smartphone, title: "App & access", text: "Manage fingerprints, PINs, guest one-time passwords and time-limited access from the Abrain app. Each family member can have their own credentials." },
  { icon: ShieldQuestion, title: "Something wrong?", text: "If the lock behaves unexpectedly, message us on WhatsApp with the model and a short video. Most issues are settings, and we can often fix them remotely." },
];

export default function SupportPage() {
  return (
    <div className="pt-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Home", href: "/" }, { name: "Support", href: "/support" }])) }}
      />

      {/* Header band */}
      <section className="relative overflow-hidden grid-overlay" style={{ background: "linear-gradient(150deg, #15181C 0%, #1E2329 100%)" }}>
        <div className="container py-20 relative z-10">
          <div className="max-w-2xl">
            <div className="rule-accent mb-5" />
            <p className="eyebrow-white mb-3">Support</p>
            <h1 className="text-display text-white mb-5">Measure once, fit right</h1>
            <p className="text-body-lg" style={{ color: "rgba(255,255,255,0.7)" }}>
              A smart lock is only as good as its fit. Use this guide to measure your door, or skip it entirely — send
              us a photo on WhatsApp and we&apos;ll do the rest.
            </p>
          </div>
        </div>
      </section>

      {/* Measurement guide */}
      <section className="section-py" style={{ background: "var(--color-bg)" }}>
        <div className="container">
          <FadeInView className="max-w-2xl mb-12">
            <p className="eyebrow mb-3">Door measurement guide</p>
            <h2 className="text-h2">Three numbers that decide the model</h2>
          </FadeInView>
          <div className="grid md:grid-cols-3 gap-6">
            {MEASURE.map((m, i) => (
              <FadeInView key={m.title} delay={i * 0.08}>
                <div className="card h-full p-7">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-5" style={{ background: "var(--color-accent-soft)" }}>
                    <m.icon size={22} style={{ color: "var(--color-accent-dark)" }} />
                  </div>
                  <h3 className="text-h3 mb-2">{m.title}</h3>
                  <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>{m.text}</p>
                </div>
              </FadeInView>
            ))}
          </div>
          <div className="mt-8 rounded-xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4" style={{ background: "var(--color-bg-alt)", border: "1px solid var(--color-border)" }}>
            <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>
              Rather not measure? Send a photo of your door and its edge on WhatsApp — that&apos;s usually enough for us to recommend the right lock.
            </p>
            <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noopener noreferrer" className="btn btn-accent shrink-0">
              <MessageCircle size={16} /> Send a photo
            </a>
          </div>
        </div>
      </section>

      {/* Care */}
      <section className="section-py" style={{ background: "var(--color-bg-alt)" }}>
        <div className="container">
          <FadeInView className="max-w-2xl mb-12">
            <p className="eyebrow mb-3">Owning your lock</p>
            <h2 className="text-h2">Care, batteries and the app</h2>
          </FadeInView>
          <div className="grid md:grid-cols-3 gap-6">
            {CARE.map((m, i) => (
              <FadeInView key={m.title} delay={i * 0.08}>
                <div className="card h-full p-7">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-5" style={{ background: "var(--color-accent-soft)" }}>
                    <m.icon size={22} style={{ color: "var(--color-accent-dark)" }} />
                  </div>
                  <h3 className="text-h3 mb-2">{m.title}</h3>
                  <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>{m.text}</p>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      <FAQSection />
      <CTABanner heading="Still have a question?" sub="Our team answers within one business day. WhatsApp is fastest — include your lock model if you have one." />
    </div>
  );
}
