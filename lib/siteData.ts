export const SITE = {
  brand: "Abrain",
  legalName: "AHD Distributions (M) Sdn. Bhd.",
  ssm: "1180073-M",
  tagline: "Enjoy keyless entry now",
  valueProp: "Malaysia's own stainless steel smart lock",
  url: "https://abrain.com.my",
  since: 2018,
  phoneMain: "016-416 8243",
  phoneMainIntl: "60164168243",
  phoneEast: "013-303 3100",
  phoneEastIntl: "60133033100",
  whatsapp: "60164168243",
  email: "enquiry@abrain.com.my",
};

export type Branch = {
  name: string;
  role: string;
  address: string;
  phone: string;
  region: string;
};

export const BRANCHES: Branch[] = [
  {
    name: "Headquarters — Penang",
    role: "Head office & warehouse",
    region: "Northern",
    address: "3, Lorong Perusahaan Sungai Lokan 2, Taman Industri Sungai Lokan, 13800 Butterworth, Pulau Pinang",
    phone: SITE.phoneMain,
  },
  {
    name: "Klang Valley — Selangor",
    role: "Showroom & installation",
    region: "Central",
    address: "G21, The Heritage Village, Jalan Dagang SB, 43300 Seri Kembangan, Selangor",
    phone: SITE.phoneMain,
  },
  {
    name: "East Malaysia — Kuching",
    role: "Showroom & installation",
    region: "Sarawak & Sabah",
    address: "Ground Floor, Lot 12902, Block 16 KCLD, SL 13 Galacity, Jalan Tun Jugah, 93350 Kuching, Sarawak",
    phone: SITE.phoneEast,
  },
];

export const TRUST_STATS = [
  { value: "2018", label: "Building in Malaysia since" },
  { value: "13", label: "Smart lock models" },
  { value: "304", label: "Grade stainless steel" },
  { value: "3", label: "Branches nationwide" },
];
