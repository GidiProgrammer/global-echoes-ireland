export const primaryNav = [
  { to: "/about", label: "About" },
  { to: "/programme", label: "Programme" },
  { to: "/services", label: "Services" },
  { to: "/funders", label: "For Funders" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export const moreNav = [
  { to: "/events", label: "Events & Communities" },
  { to: "/blog", label: "Blog" },
] as const;

export const tasterCta = {
  to: "/contact",
  search: { interest: "Taster session" as const },
  label: "Book a Taster Session",
} as const;
