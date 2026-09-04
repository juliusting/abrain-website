import { ArrowRight, MessageCircle } from "lucide-react";
import { SITE } from "@/lib/siteData";

interface Props {
  heading?: string;
  sub?: string;
}

export default function CTABanner({
  heading = "Ready to go keyless?",
  sub = "Send us a photo of your door on WhatsApp and we'll recommend the right Abrain lock, with a quote and installation slot.",
}: Props) {
  return (
    <section style={{ background: "linear-gradient(150deg, #15181C 0%, #1E2329 100%)" }} className="py-20 grid-overlay relative overflow-hidden">
      <div
        className="absolute -bottom-40 -left-40 w-[34rem] h-[34rem] rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(200,138,61,0.5), transparent 65%)" }}
      />
      <div className="container text-center relative z-10">
        <p className="eyebrow-white mb-4">Get a quote</p>
        <h2 className="text-h2 text-white mb-4 max-w-2xl mx-auto">{heading}</h2>
        <p className="text-body-lg mb-10 max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.65)" }}>
          {sub}
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noopener noreferrer" className="btn btn-accent">
            WhatsApp Us <ArrowRight size={16} />
          </a>
          <a href="/contact" className="btn btn-outline-dark">
            <MessageCircle size={16} /> All contact options
          </a>
        </div>
      </div>
    </section>
  );
}
