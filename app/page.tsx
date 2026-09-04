import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import Categories from "@/components/sections/Categories";
import Features from "@/components/sections/Features";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import FAQSection from "@/components/sections/FAQSection";
import CTABanner from "@/components/ui/CTABanner";
import { organizationSchema, faqSchema } from "@/lib/structuredData";
import { FAQ_ITEMS } from "@/lib/faqData";

export const metadata: Metadata = {
  title: "Abrain — Malaysia's Stainless Steel Smart Lock",
  description:
    "Fully-automatic 304 stainless steel smart door locks, engineered in Malaysia for wooden, security, grille and glass doors. Keyless entry, anti-pry, app-controlled, installed nationwide.",
  alternates: { canonical: "https://abrain.com.my" },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQ_ITEMS)) }}
      />

      <Hero />
      <Categories />
      <Features />
      <Process />
      <Testimonials />
      <FAQSection />
      <CTABanner />
    </>
  );
}
