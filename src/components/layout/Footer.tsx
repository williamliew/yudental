"use client";

import { MapEmbed } from "@/components/layout/MapEmbed";
import { SITE } from "@/lib/site";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SERVICE_LINKS = [
  { href: "/denture-services/", label: "Denture services" },
  { href: "/dental-lab-services/", label: "Dental lab services" },
  { href: "/denture-referrals/", label: "Patient referral" },
  { href: "/book/", label: "Book online" },
] as const;

export function Footer() {
  const pathname = usePathname();
  const isHome = pathname === "/" || pathname === "";

  return (
    <footer className="surface-dark bg-navy-deep text-white">
      <div className="mx-auto max-w-[var(--max-width-content)] px-4 py-12 md:px-6 md:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-3 no-underline"
              aria-label={`${SITE.legalName} home`}
            >
              <Image
                src="/yu-dental-dark.jpg"
                alt=""
                width={1024}
                height={1024}
                className="h-16 w-16 shrink-0 md:h-[4.5rem] md:w-[4.5rem]"
              />
              <span className="font-display text-lg font-bold leading-tight text-white md:text-xl">
                {SITE.legalName}
              </span>
            </Link>
            <p className="mt-4 text-sm text-white/75">
              Quality craftsmanship · Locally made dentures · Wellington since 2000
            </p>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-white">Services</p>
            <ul className="mt-4 space-y-2 text-sm">
              {SERVICE_LINKS.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-white/85 no-underline hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-white">Location</p>
            <address className="mt-4 space-y-1 text-sm not-italic text-white/85">
              <p>{SITE.address.street}</p>
              <p>
                {SITE.address.suburb}, {SITE.address.city}
              </p>
            </address>
            <p className="mt-4 text-sm text-white/85">{SITE.hours}</p>
            <p className="text-sm text-white/85">Saturday &amp; Sunday closed</p>
            <p className="mt-2 text-sm text-white/85">Closed on All Public Holidays</p>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-white">Call us</p>
            <p className="mt-4">
              <a
                href={`tel:${SITE.phoneTel}`}
                className="text-lg font-semibold text-white no-underline hover:underline"
              >
                {SITE.phone}
              </a>
            </p>
            <p className="mt-6 text-sm font-bold uppercase tracking-wide text-white">Email us</p>
            <p className="mt-4">
              <a
                href={`mailto:${SITE.email}`}
                className="text-sm text-white/85 no-underline hover:text-white hover:underline"
              >
                {SITE.email}
              </a>
            </p>
          </div>
        </div>

        {isHome ? (
          <div className="mt-12">
            <p className="mb-4 text-lg font-bold text-white">Find us</p>
            <MapEmbed onDark />
          </div>
        ) : null}
      </div>

      <div className="border-t border-white/10 px-4 py-6 text-center text-sm text-white/70">
        <p>
          &copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.{" "}
          <Link href="/privacy/" className="text-white/85 no-underline hover:text-white hover:underline">
            Privacy policy
          </Link>
        </p>
      </div>
    </footer>
  );
}
