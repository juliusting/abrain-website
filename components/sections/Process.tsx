import { Ruler, ListChecks, Wrench, KeyRound } from "lucide-react";
import FadeInView from "@/components/ui/FadeInView";

const STEPS = [
  { icon: Ruler, title: "Measure", text: "Send us a photo and a few measurements of your door, or book a free site visit. We confirm the exact model that fits." },
  { icon: ListChecks, title: "Choose", text: "Pick the right lock for your door type and budget. We walk you through unlock methods, finishes and warranty." },
  { icon: Wrench, title: "Install", text: "Our own installers fit the lock, test every unlock method and set up the Abrain app with you on the spot." },
  { icon: KeyRound, title: "Go keyless", text: "Walk up, touch, and go. Manage access, guests and alerts from your phone — no keys to lose again." },
];

export default function Process() {
  return (
    <section className="section-py" style={{ background: "var(--color-bg-alt)" }}>
      <div className="container">
        <FadeInView className="max-w-2xl mb-14">
          <div className="rule-accent mb-5" />
          <p className="eyebrow mb-3">How it works</p>
          <h2 className="text-h2 mb-4">From door measurement to keyless in four steps</h2>
        </FadeInView>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((s, i) => (
            <FadeInView key={s.title} delay={i * 0.08}>
              <div className="card h-full p-6 relative">
                <span className="absolute top-5 right-6 text-5xl leading-none" style={{ fontFamily: "var(--font-display)", fontWeight: 800, color: "var(--color-bg-alt-2)" }}>
                  {i + 1}
                </span>
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-5" style={{ background: "var(--color-accent-soft)" }}>
                  <s.icon size={22} style={{ color: "var(--color-accent-dark)" }} />
                </div>
                <h3 className="text-h3 mb-2">{s.title}</h3>
                <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>{s.text}</p>
              </div>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
}
