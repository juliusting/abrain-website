import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { CATEGORIES } from "@/lib/products";
import FadeInView from "@/components/ui/FadeInView";

export default function Categories() {
  return (
    <section id="products" className="section-py" style={{ background: "var(--color-bg)" }}>
      <div className="container">
        <FadeInView className="max-w-2xl mb-14">
          <div className="rule-accent mb-5" />
          <p className="eyebrow mb-3">Built for your door</p>
          <h2 className="text-h2 mb-4">One lock family, every door type</h2>
          <p className="text-body-lg" style={{ color: "var(--color-text-muted)" }}>
            Malaysian homes and shopfronts run on very different doors. Abrain engineers a dedicated mortise for each,
            so the fit is exact and the security core is never compromised.
          </p>
        </FadeInView>

        <div className="grid md:grid-cols-3 gap-8">
          {CATEGORIES.map((c, i) => (
            <FadeInView key={c.key} delay={i * 0.1}>
              <Link href={`/products#${c.key}`} className="card group block h-full overflow-hidden">
                <div className="relative aspect-[4/3] overflow-hidden" style={{ background: "var(--color-bg-alt-2)" }}>
                  <Image
                    src={c.image}
                    alt={c.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 90vw, 30vw"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="text-h3">{c.name}</h3>
                    <ArrowUpRight size={20} className="shrink-0 mt-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" style={{ color: "var(--color-accent-dark)" }} />
                  </div>
                  <p className="text-sm mb-4" style={{ color: "var(--color-text-muted)" }}>{c.blurb}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {c.products.map((p) => (
                      <span key={p.slug} className="text-xs font-medium px-2 py-1 rounded" style={{ background: "var(--color-bg-alt)", color: "var(--color-text)" }}>
                        {p.model}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
}
