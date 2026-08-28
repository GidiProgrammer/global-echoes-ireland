import { heroMasthead, type PictureImage } from "@/lib/responsive-images";

export type HeroLink = {
  label: string;
  to:
    | "/contact"
    | "/programme"
    | "/about"
    | "/services"
    | "/gallery"
    | "/events";
  search?: { interest: "Taster session" };
  hash?: string;
};

export type HeroContent = {
  image: PictureImage;
  imageAlt: string;
  name: string;
  tagline: string;
  subhead: string;
  trustLine: string;
  proofLine: string;
  primaryCta: HeroLink;
  secondaryCta: HeroLink;
  scrollTargetId: string;
};

export const homeHero: HeroContent = {
  image: heroMasthead,
  imageAlt:
    "Sunlit room with a Yamaha piano, djembe with a stethoscope, wooden flute and violin",
  name: "Global Echoes Ireland",
  tagline: "Global harmony through sound and creative collaborations",
  subhead:
    "Wellbeing music programmes for care homes, schools, universities and communities across Ireland and beyond.",
  trustLine:
    "Led by Dr. John Nutekpor (PhD) and Natalie Rogers, Programme Coordinator.",
  proofLine:
    "Delivering therapeutic drumming programmes in care homes across Ireland.",
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
