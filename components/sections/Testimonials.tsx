import { Star, Quote } from "lucide-react";
import FadeInView from "@/components/ui/FadeInView";

const ITEMS = [
  {
    quote:
      "Fitted the M3 on our main door and the grille lock outside. The auto-lock means my kids can never leave it open again. Installer was fast and neat.",
    name: "Cheryl T.",
    role: "Homeowner, Butterworth",
  },
  {
    quote:
      "We run a small office with a frameless glass door. Abrain had a lock that actually fits it properly, no ugly brackets. Staff use fingerprints now, no more keys.",
    name: "Farid H.",
    role: "Office manager, Seri Kembangan",
  },
  {
    quote:
      "Bought it because it's a local brand and support is here in Kuching. Battery lasted about seven months and the app warned me early. Solid build.",
    name: "Douglas L.",
    role: "Homeowner, Kuching",
  },
];

export default function Testimonials() {
  return (
    <section className="section-py" style={{ background: "var(--color-bg)" }}>
      <div className="container">
        <FadeInView className="max-w-2xl mb-14">
          <div className="rule-accent mb-5" />
          <p className="eyebrow mb-3">Owners across Malaysia</p>
          <h2 className="text-h2 mb-4">Locks that get fitted, then forgotten about</h2>
        </FadeInView>

        <div className="grid md:grid-cols-3 gap-8">
          {ITEMS.map((t, i) => (
            <FadeInView key={t.name} delay={i * 0.1}>
              <figure className="card h-full p-7 flex flex-col">
                <Quote size={26} style={{ color: "var(--color-accent)" }} className="mb-4" />
                <blockquote className="text-sm leading-relaxed mb-6 flex-1" style={{ color: "var(--color-text)" }}>
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} size={15} fill="var(--color-accent)" style={{ color: "var(--color-accent)" }} />
                  ))}
                </div>
                <figcaption>
                  <div className="font-semibold text-sm">{t.name}</div>
                  <div className="text-xs" style={{ color: "var(--color-text-muted)" }}>{t.role}</div>
                </figcaption>
              </figure>
            </FadeInView>
          ))}
        </div>
        <p className="text-xs mt-8" style={{ color: "var(--color-text-muted)" }}>
          Illustrative customer feedback shown for demonstration.
        </p>
      </div>
    </section>
  );
}
