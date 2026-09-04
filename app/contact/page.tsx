import type { Metadata } from "next";
import FadeInView from "@/components/ui/FadeInView";
import ContactForm from "./ContactForm";
import { Phone, Mail, MessageCircle, Building2 } from "lucide-react";
import { organizationSchema } from "@/lib/structuredData";
import { SITE, BRANCHES } from "@/lib/siteData";

export const metadata: Metadata = {
  title: "Contact Abrain — Get a Quote & Book Installation",
  description:
    "Get a quote for an Abrain stainless steel smart lock and book installation. Branches in Penang, Selangor and Kuching. Reach us by WhatsApp, phone, email or the enquiry form.",
  alternates: { canonical: "https://abrain.com.my/contact" },
};

export default function ContactPage() {
  return (
    <div className="pt-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }} />

      <section className="section-py" style={{ background: "var(--color-bg-alt)" }}>
        <div className="container">
          <FadeInView className="max-w-2xl mb-14">
            <div className="rule-accent mb-5" />
            <p className="eyebrow mb-4">Get in touch</p>
            <h1 className="text-h2 mb-4">Get a quote, or book an installation</h1>
            <p className="text-body-lg" style={{ color: "var(--color-text-muted)" }}>
              Tell us about your door and we&apos;ll recommend the right lock, quote it, and arrange fitting by our
              nearest team. The fastest way to reach us is WhatsApp — a photo of your door helps a lot.
            </p>
          </FadeInView>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <FadeInView className="lg:col-span-2">
              <ContactForm />
            </FadeInView>

            <FadeInView delay={0.1} className="flex flex-col gap-8">
              <div>
                <h2 className="font-semibold mb-5" style={{ fontFamily: "var(--font-display)" }}>Talk to us now</h2>
                <div className="flex flex-col gap-5">
                  <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 group">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: "#E7F8EE" }}>
                      <MessageCircle size={18} style={{ color: "#25D366" }} />
                    </div>
                    <div>
                      <p className="font-semibold text-sm mb-0.5 group-hover:text-[var(--color-accent-dark)] transition-colors">WhatsApp</p>
                      <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>{SITE.phoneMain}</p>
                    </div>
                  </a>
                  <a href={`tel:+${SITE.phoneMainIntl}`} className="flex items-start gap-3 group">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: "var(--color-bg-alt)", border: "1px solid var(--color-border)" }}>
                      <Phone size={18} style={{ color: "var(--color-primary)" }} />
                    </div>
                    <div>
                      <p className="font-semibold text-sm mb-0.5 group-hover:text-[var(--color-accent-dark)] transition-colors">Peninsular hotline</p>
                      <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>{SITE.phoneMain}</p>
                    </div>
                  </a>
                  <a href={`tel:+${SITE.phoneEastIntl}`} className="flex items-start gap-3 group">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: "var(--color-bg-alt)", border: "1px solid var(--color-border)" }}>
                      <Phone size={18} style={{ color: "var(--color-primary)" }} />
                    </div>
                    <div>
                      <p className="font-semibold text-sm mb-0.5 group-hover:text-[var(--color-accent-dark)] transition-colors">East Malaysia hotline</p>
                      <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>{SITE.phoneEast}</p>
                    </div>
                  </a>
                  <a href={`mailto:${SITE.email}`} className="flex items-start gap-3 group">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: "var(--color-bg-alt)", border: "1px solid var(--color-border)" }}>
                      <Mail size={18} style={{ color: "var(--color-primary)" }} />
                    </div>
                    <div>
                      <p className="font-semibold text-sm mb-0.5 group-hover:text-[var(--color-accent-dark)] transition-colors">Email</p>
                      <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>{SITE.email}</p>
                    </div>
                  </a>
                </div>
              </div>
            </FadeInView>
          </div>

          {/* Branches */}
          <div className="mt-16">
            <h2 className="text-h3 mb-6">Our branches</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {BRANCHES.map((b, i) => (
                <FadeInView key={b.name} delay={i * 0.08}>
                  <div className="card h-full p-6">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ background: "var(--color-accent-soft)" }}>
                      <Building2 size={18} style={{ color: "var(--color-accent-dark)" }} />
                    </div>
                    <h3 className="font-semibold mb-1" style={{ fontFamily: "var(--font-display)" }}>{b.name}</h3>
                    <p className="text-xs mb-3" style={{ color: "var(--color-accent-dark)" }}>{b.role}</p>
                    <p className="text-sm mb-3" style={{ color: "var(--color-text-muted)" }}>{b.address}</p>
                    <a href={`tel:${b.phone.replace(/\s/g, "")}`} className="text-sm font-semibold" style={{ color: "var(--color-text)" }}>{b.phone}</a>
                  </div>
                </FadeInView>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
