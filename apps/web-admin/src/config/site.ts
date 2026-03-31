/** Public site copy, SEO, and licensed imagery references (web-admin). */

export const SITE = {
  name: "SK Enterprises",
  shortName: "SK",
  tagline: "Plastic molding operations platform",
  description:
    "SK Enterprises — plastic injection molding and batch production in Pune: task planning, live progress, employees, salary ledger, and leave tracking in one place.",
  keywords: [
    "SK Enterprises",
    "plastic molding",
    "injection molding",
    "Pune",
    "manufacturing",
    "shop floor",
    "task planning",
    "production tracking",
    "payroll",
    "leave management"
  ].join(", "),
  locale: "en_IN",
  location: "Pune, India",
  /** Plastics / production floor — distinct from AJ’s PNG banner and from MAC metal imagery. */
  bannerPath:
    "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=1280&q=82",
  /** Open-licensed stock (Unsplash License — https://unsplash.com/license). */
  heroPhoto: {
    src: "https://images.unsplash.com/photo-1581093577421-f561a654a353?auto=format&fit=crop&w=1800&q=82",
    alt: "Plastic molding and industrial polymer production context",
    licenseUrl: "https://unsplash.com/license"
  },
  secondaryPhoto: {
    src: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=1200&q=82",
    alt: "Manufacturing floor and tooling for molded components",
    licenseUrl: "https://unsplash.com/license"
  }
} as const;

export function pageTitle(segment: string): string {
  return segment === SITE.name ? SITE.name : `${segment} · ${SITE.name}`;
}
