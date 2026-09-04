export type Product = {
  model: string;
  slug: string;
  tagline: string;
  unlock: string[];
  highlight?: string;
  flagship?: boolean;
};

export type Category = {
  key: string;
  name: string;
  short: string;
  blurb: string;
  image: string;
  products: Product[];
};

export const CATEGORIES: Category[] = [
  {
    key: "wooden",
    name: "Wooden, Fire & Security Doors",
    short: "Wooden / Security",
    blurb:
      "Fully-automatic mortise locks engineered for standard wooden doors, fire-rated doors and reinforced security doors. Push-pull handling, 304 stainless bodies, anti-pry cores.",
    image: "/images/categories/wooden-door.jpg",
    products: [
      { model: "M3", slug: "m3", tagline: "The world's slimmest 18mm fully-auto lock", unlock: ["Fingerprint", "PIN", "App", "Card", "Key"], highlight: "18mm slimmest design", flagship: true },
      { model: "M8 Lite", slug: "m8-lite", tagline: "Everyday keyless entry, refined", unlock: ["Fingerprint", "PIN", "App", "Card"] },
      { model: "M8 Pro", slug: "m8-pro", tagline: "The full M-Series feature set", unlock: ["Fingerprint", "PIN", "App", "Card", "Key"] },
      { model: "X2L", slug: "x2l", tagline: "Slim push-pull for security doors", unlock: ["Fingerprint", "PIN", "App", "Card"] },
      { model: "X2DR", slug: "x2dr", tagline: "Reinforced for heavy security doors", unlock: ["Fingerprint", "PIN", "App", "Card", "Key"] },
      { model: "X2AI", slug: "x2ai", tagline: "AI-grade fingerprint, touch-and-go", unlock: ["Fingerprint", "PIN", "App", "OTP"], highlight: "AI fingerprint", flagship: true },
    ],
  },
  {
    key: "grille",
    name: "Grille & Sliding Grille Doors",
    short: "Grille",
    blurb:
      "Purpose-built for Malaysian metal grille and sliding grille gates. Compact mortise footprint that fits narrow grille stiles without compromising the anti-drill core.",
    image: "/images/categories/grille-door.jpg",
    products: [
      { model: "XC1", slug: "xc1", tagline: "Compact grille lock, keyless entry", unlock: ["Fingerprint", "PIN", "App", "Card"], flagship: true },
      { model: "G8", slug: "g8", tagline: "Full-feature grille automation", unlock: ["Fingerprint", "PIN", "App", "Card", "Key"] },
      { model: "XC2", slug: "xc2", tagline: "Slim profile for sliding grilles", unlock: ["Fingerprint", "PIN", "App", "Card"] },
      { model: "R9", slug: "r9", tagline: "Rugged grille lock for gates", unlock: ["Fingerprint", "PIN", "App", "Card"] },
    ],
  },
  {
    key: "glass",
    name: "Aluminium & Frameless Glass Doors",
    short: "Glass",
    blurb:
      "Engineered for aluminium-framed and frameless glass doors in shopfronts, offices and modern homes. Minimal fixings, precise fit, no unsightly brackets.",
    image: "/images/categories/glass-door.jpg",
    products: [
      { model: "011D", slug: "011d", tagline: "Frameless glass door lock", unlock: ["Fingerprint", "PIN", "App", "Card"], flagship: true },
      { model: "R9S", slug: "r9s", tagline: "Aluminium door automation", unlock: ["Fingerprint", "PIN", "App", "Card"] },
      { model: "GL7", slug: "gl7", tagline: "Slimline glass-door smart lock", unlock: ["Fingerprint", "PIN", "App", "Card"] },
    ],
  },
];

export const FLAGSHIPS = CATEGORIES.flatMap((c) => c.products.filter((p) => p.flagship));

export function totalModels() {
  return CATEGORIES.reduce((n, c) => n + c.products.length, 0);
}
