/**
 * Public marketing copy and contact defaults for the unauthenticated landing page.
 * Override social/contact URLs via Vite env (see `vite-env.d.ts`).
 */

export const PUBLIC_MARKETING = {
  owner: {
    name: "Shubham Kale",
    title: "Owner"
  },
  workshop: {
    headline: "Plastic molding for reliable OEM programs",
    employees: "Growing shop-floor team",
    shifts: "Flexible production shifts",
    experience: "Focused on quality molded components"
  },
  services: [
    {
      title: "Injection molding",
      description: "Production runs for plastic parts with process-controlled cycles and tooling care."
    },
    {
      title: "Tooling & setup",
      description: "Mold changes, maintenance windows, and batch scheduling aligned to customer demand."
    },
    {
      title: "Quality & traceability",
      description: "Lot tracking and shop-floor visibility so issues surface before they hit dispatch."
    }
  ],
  clients: ["OEM partners", "Industrial suppliers", "Local programs"] as const
} as const;

export function getPublicContact() {
  return {
    email: import.meta.env.VITE_PUBLIC_CONTACT_EMAIL ?? "contact@skenterprises.example",
    phone: import.meta.env.VITE_PUBLIC_CONTACT_PHONE ?? "+91 —",
    address:
      import.meta.env.VITE_PUBLIC_CONTACT_ADDRESS ?? "Pune, Maharashtra, India"
  };
}

export function getSocialUrls() {
  return {
    youtube: import.meta.env.VITE_PUBLIC_YOUTUBE_URL?.trim() ?? "",
    instagram: import.meta.env.VITE_PUBLIC_INSTAGRAM_URL?.trim() ?? "",
    x: import.meta.env.VITE_PUBLIC_X_URL?.trim() ?? ""
  };
}
