import { heroMasthead, type PictureImage } from "@/lib/responsive-images";
import { CONTACT_PHONES } from "@/lib/contact";

export type HeroLink = {
  label: string;
  to:
    | "/contact"
    | "/programme"
    | "/about"
    | "/services"
    | "/gallery"
    | "/funders"
    | "/events";
  search?: { interest: "Taster session" };
  hash?: string;
};

export type HeroPhone = {
  display: string;
  href: string;
};

export type HeroContent = {
  image: PictureImage;
  imageAlt: string;
  name: string;
  tagline: string;
  subhead: string;
  trustLine: string;
  proofLine: string;
  phones: readonly HeroPhone[];
  primaryCta: HeroLink;
  secondaryCta: HeroLink;
  scrollTargetId: string;
};

export const homeHero: HeroContent = {
  image: heroMasthead,
  imageAlt:
    "Djembe drum with flute, violin, piano and stethoscope, symbolising culture and care",
  name: "Global Echoes Ireland",
  tagline: "Global harmony through sound and creative collaborations",
  subhead:
    "Wellbeing music programmes for care homes, schools, universities and communities across Ireland and beyond.",
  trustLine:
    "Led by Dr John Nutekpor (PhD) and Natalie Sone, Programme Coordinator.",
  proofLine:
    "Delivering therapeutic drumming programmes in care homes across Ireland.",
  phones: CONTACT_PHONES,
  primaryCta: {
    label: "Book a Taster Session",
    to: "/contact",
    search: { interest: "Taster session" },
  },
  secondaryCta: {
    label: "See the Programme",
    to: "/programme",
  },
  scrollTargetId: "after-hero",
};
