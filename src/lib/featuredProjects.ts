export type FeaturedProject = {
  name: string;
  href: string;
  description: string;
  impact: string;
  image: string;
  wordmark: string;
  logoClass: "curology" | "rhone" | "compscience";
};

export const featuredProjects: FeaturedProject[] = [
  {
    name: "Curology",
    href: "https://curology.com/",
    description: "Personalized skincare, from digital consultation through the care journey.",
    impact: "A thoughtful digital care journey, from consultation to ongoing support.",
    image: "https://images.ctfassets.net/mdcr7mahi0vp/FT0lyye1tFPctHeH2ltw5/18f2fcbcce8123fad60c19750ec9d46e/Hair_Formula_Product_Image_Homepage.jpg?w=672&h=840&q=80&fm=webp",
    wordmark: "curology",
    logoClass: "curology",
  },
  {
    name: "Rhone",
    href: "https://www.rhone.com/",
    description: "Performance apparel with an elevated, editorial shopping experience.",
    impact: "Rebuilt headless category browsing and mobile product experiences with Vue, Shopify, and Cloudflare.",
    image: "https://vault.rhone.com/transform/1d753c3c-075a-4ea3-881d-593395fc15a3/Site_Week-30_Full-Site-Refresh?io=transform%3Ascale%2Cwidth%3A800",
    wordmark: "RHONE",
    logoClass: "rhone",
  },
  {
    name: "CompScience",
    href: "https://www.compscience.com/",
    description: "Computer vision that helps prevent workplace injuries before they happen.",
    impact: "Redesigned daily underwriting workflows, then shipped AI summaries and a data-accurate analytics assistant.",
    image: "/images/work/compscience-hero.webp",
    wordmark: "CompScience",
    logoClass: "compscience",
  },
];
