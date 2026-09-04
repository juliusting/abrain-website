"use client";
import { useState, FormEvent } from "react";
import { CheckCircle, Loader2 } from "lucide-react";

const DOOR_TYPES = [
  "Wooden / security door",
  "Fire-rated door",
  "Metal grille / sliding grille",
  "Aluminium-framed glass door",
  "Frameless glass door",
  "Not sure — please advise",
];

const REGIONS = ["Northern (Penang / Kedah / Perak)", "Central (Klang Valley)", "Southern", "East Coast", "Sarawak", "Sabah"];

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data as unknown as Record<string, string>).toString(),
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="card p-10 flex flex-col items-center justify-center text-center min-h-[400px]">
        <CheckCircle size={48} style={{ color: "var(--color-accent-dark)" }} className="mb-4" />
        <h3 className="text-h3 mb-3">Thank you!</h3>
        <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>
          We&apos;ve received your enquiry and will be in touch within one business day to recommend the right lock and
          arrange installation. For a faster reply, message us on WhatsApp.
        </p>
      </div>
    );
  }

  return (
    <form
      name="abrain-inquiry"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="card p-8 flex flex-col gap-5"
    >
      <input type="hidden" name="form-name" value="abrain-inquiry" />
      <p className="hidden"><label>Don&apos;t fill this out: <input name="bot-field" /></label></p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-semibold mb-1.5">Full Name *</label>
          <input name="name" required placeholder="Encik Ahmad / Ms Priya" className="w-full border rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[var(--color-accent-dark)] transition-colors" style={{ borderColor: "var(--color-border)" }} />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1.5">Phone Number *</label>
          <input name="phone" type="tel" required placeholder="+6011-1234 5678" className="w-full border rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[var(--color-accent-dark)] transition-colors" style={{ borderColor: "var(--color-border)" }} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-semibold mb-1.5">Door Type *</label>
          <select name="door_type" required className="w-full border rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[var(--color-accent-dark)] transition-colors bg-white" style={{ borderColor: "var(--color-border)" }}>
            <option value="">Select door type</option>
            {DOOR_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1.5">Your Region *</label>
          <select name="region" required className="w-full border rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[var(--color-accent-dark)] transition-colors bg-white" style={{ borderColor: "var(--color-border)" }}>
            <option value="">Select region</option>
            {REGIONS.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold mb-1.5">Email Address</label>
        <input name="email" type="email" placeholder="you@email.com" className="w-full border rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[var(--color-accent-dark)] transition-colors" style={{ borderColor: "var(--color-border)" }} />
      </div>

      <div>
        <label className="block text-sm font-semibold mb-1.5">Message</label>
        <textarea name="message" rows={4} placeholder="Tell us about your door, and which model you're interested in (if any)..." className="w-full border rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[var(--color-accent-dark)] transition-colors resize-none" style={{ borderColor: "var(--color-border)" }} />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600">Something went wrong. Please try WhatsApp or phone instead.</p>
      )}

      <button type="submit" disabled={status === "loading"} className="btn btn-accent w-full justify-center">
        {status === "loading" ? <><Loader2 size={16} className="animate-spin" /> Sending...</> : "Send Enquiry"}
      </button>

      <p className="text-xs text-center" style={{ color: "var(--color-text-muted)" }}>
        We respond within one business day. Your information is never shared with third parties.
      </p>
    </form>
  );
}
