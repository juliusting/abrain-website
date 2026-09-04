const BASE_URL = "https://abrain.com.my";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    name: "Abrain (AHD Distributions (M) Sdn. Bhd.)",
    url: BASE_URL,
    logo: `${BASE_URL}/logo.png`,
    telephone: "+60164168243",
    email: "enquiry@abrain.com.my",
    address: [
      {
        "@type": "PostalAddress",
        streetAddress: "3, Lorong Perusahaan Sungai Lokan 2, Taman Industri Sungai Lokan",
        addressLocality: "Butterworth",
        postalCode: "13800",
        addressRegion: "Pulau Pinang",
        addressCountry: "MY",
      },
      {
        "@type": "PostalAddress",
        streetAddress: "Ground Floor, Lot 12902, Block 16 KCLD, SL 13 Galacity, Jalan Tun Jugah",
        addressLocality: "Kuching",
        postalCode: "93350",
        addressRegion: "Sarawak",
        addressCountry: "MY",
      },
    ],
    areaServed: { "@type": "Country", name: "Malaysia" },
    description:
      "Abrain designs and manufactures 304 stainless steel smart door locks in Malaysia — fully-automatic keyless entry for wooden, security, grille and glass doors, with nationwide installation.",
    sameAs: ["https://www.facebook.com/abrainsmartdoorlock/"],
  };
}

export function productSchema(p: { model: string; tagline: string; slug: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `Abrain ${p.model} Smart Lock`,
    description: p.tagline,
    brand: { "@type": "Brand", name: "Abrain" },
    manufacturer: { "@type": "Organization", name: "AHD Distributions (M) Sdn. Bhd." },
    category: "Smart Door Lock",
    url: `${BASE_URL}/products#${p.slug}`,
  };
}

export function breadcrumbSchema(items: { name: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${BASE_URL}${item.href}`,
    })),
  };
}

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}
