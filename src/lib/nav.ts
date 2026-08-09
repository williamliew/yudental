export type NavItem = {
  href: string;
  label: string;
  key: string;
};

export const NAV_ITEMS: NavItem[] = [
  { key: "home", href: "/", label: "Home" },
  { key: "about", href: "/about/", label: "About" },
  { key: "denture-services", href: "/denture-services/", label: "Treatment/ Dental Services" },
  { key: "dental-lab-services", href: "/dental-lab-services/", label: "Dental lab" },
  { key: "denture-referrals", href: "/denture-referrals/", label: "Referrals" },
  { key: "team", href: "/team/", label: "Our team" },
  { key: "faq", href: "/faq/", label: "FAQ" },
  { key: "contact", href: "/contact/", label: "Contact" },
];

export function getNavKeyFromPath(pathname: string): string | undefined {
  const normalised = pathname.endsWith("/") ? pathname : `${pathname}/`;
  if (normalised === "/") return "home";
  const match = NAV_ITEMS.find((item) => item.href === normalised);
  return match?.key;
}
