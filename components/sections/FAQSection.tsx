"use client";
import { useState } from "react";
import FadeInView from "@/components/ui/FadeInView";
import { ChevronDown } from "lucide-react";
import { FAQ_ITEMS } from "@/lib/faqData";

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="section-py" style={{ background: "var(--color-bg)" }}>
      <div className="container max-w-3xl">
        <FadeInView className="text-center mb-14">
          <p className="eyebrow mb-4">Frequently Asked Questions</p>
          <h2 className="text-h2">Everything you need to know</h2>
        </FadeInView>

        <div className="flex flex-col gap-3">
          {FAQ_ITEMS.map((item, i) => (
            <FadeInView key={i} delay={i * 0.05}>
              <div
                className="border rounded-xl overflow-hidden"
                style={{ borderColor: open === i ? "var(--color-primary)" : "var(--color-border)", background: "#fff" }}
              >
                <button
                  className="w-full flex items-center justify-between text-left px-6 py-5 gap-4"
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                >
                  <span className="font-semibold text-sm md:text-base">{item.q}</span>
                  <ChevronDown
                    size={18}
                    className="shrink-0 transition-transform duration-200"
                    style={{
                      color: "var(--color-primary)",
                      transform: open === i ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  />
                </button>
                {open === i && (
                  <div className="px-6 pb-5 text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                    {item.a}
                  </div>
                )}
              </div>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
}
