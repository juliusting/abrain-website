"use client";
import { usePathname } from "next/navigation";
import { MessageCircle } from "lucide-react";
import { SITE } from "@/lib/siteData";

export default function FloatingWhatsApp() {
  const path = usePathname();
  if (path === "/contact") return null;

  return (
    <a
      href={`https://wa.me/${SITE.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-transform duration-200 hover:scale-110 hover:shadow-xl"
      // #25D366 = WhatsApp brand green — third-party brand colour
      style={{ background: "#25D366" }}
    >
      <MessageCircle size={26} fill="white" className="text-white" />
    </a>
  );
}
