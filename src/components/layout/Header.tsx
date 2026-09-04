"use client";

import { IconCalendar, IconPhone } from "@/components/icons/ServiceIcons";
import { NAV_ITEMS } from "@/lib/nav";
import { SITE } from "@/lib/site";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export function Header() {
  const pathname = usePathname();
  const [navOpen, setNavOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/" || pathname === "";
    return pathname === href || pathname === href.replace(/\/$/, "");
  };

  const closeNav = () => setNavOpen(false);

  const navLinkClass = (href: string) =>
    `rounded px-2 py-1.5 text-sm font-semibold uppercase tracking-wide transition-colors md:px-2.5 md:text-[0.8125rem] lg:text-sm ${
      isActive(href)
        ? "text-navy underline decoration-2 underline-offset-4 decoration-teal"
        : "text-grey-mid no-underline hover:text-navy"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-surface-muted bg-white text-grey-dark shadow-sm">
      <div className="h-1 bg-teal" aria-hidden="true" />
      <div className="border-b border-surface-muted bg-surface-muted/60 px-4 py-2 text-center text-sm text-grey-mid">
        <p>Quality craftsmanship · Locally made dentures · Wellington since 2000</p>
      </div>

      <div className="mx-auto max-w-[var(--max-width-content)] px-4 md:px-6">
        <div className="flex items-center justify-between gap-4 py-3 md:py-4">
          <Link
            href="/"
            className="inline-flex min-w-0 shrink items-center gap-3 no-underline"
            aria-label="Yu Dental Laboratory home"
          >
            <Image
              src="/yu-dental.png"
              alt=""
              width={200}
              height={67}
              className="block h-16 w-auto md:h-20"
              priority
            />
            <span className="hidden font-display text-xl font-bold leading-tight text-navy sm:block md:text-2xl">
              Yu Dental Laboratory
            </span>
          </Link>

          <button
            type="button"
            className="flex h-10 w-10 shrink-0 flex-col items-center justify-center gap-1.5 rounded border border-surface-muted md:hidden"
            aria-label="Toggle menu"
            aria-expanded={navOpen}
            aria-controls="main-nav"
            onClick={() => setNavOpen((open) => !open)}
          >
            <span
              className={`block h-0.5 w-5 bg-navy transition-transform ${navOpen ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`block h-0.5 w-5 bg-navy transition-opacity ${navOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 w-5 bg-navy transition-transform ${navOpen ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </button>

          <div className="hidden items-center gap-3 md:flex lg:gap-4">
            <a
              href={`tel:${SITE.phoneTel}`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-navy no-underline underline-offset-2 hover:text-teal hover:underline"
              aria-label="Call Yu Dental Laboratory"
            >
              <IconPhone size={18} />
              <span>{SITE.phone}</span>
            </a>
            <Link
              href="/book/"
              className="inline-flex items-center gap-2 rounded bg-teal px-4 py-2.5 text-sm font-semibold text-white no-underline hover:bg-teal-hover"
              aria-label="Book online now"
            >
              <IconCalendar size={18} />
              <span>Book online now</span>
            </Link>
          </div>
        </div>

        <nav
          id="main-nav"
          className={`${navOpen ? "flex" : "hidden"} md:flex flex-col md:flex-row flex-wrap items-center justify-center gap-x-3 gap-y-2 border-t border-surface-muted py-3 md:pb-4`}
          aria-label="Main navigation"
        >
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              onClick={closeNav}
              className={navLinkClass(item.href)}
              aria-current={isActive(item.href) ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}

          <div className="mt-4 flex w-full flex-col gap-3 border-t border-surface-muted pt-4 md:hidden">
            <a
              href={`tel:${SITE.phoneTel}`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-navy no-underline underline-offset-2 hover:text-teal hover:underline"
              aria-label="Call Yu Dental Laboratory"
            >
              <IconPhone size={18} />
              <span>{SITE.phone}</span>
            </a>
            <Link
              href="/book/"
              onClick={closeNav}
              className="inline-flex items-center justify-center gap-2 rounded bg-teal px-4 py-2.5 text-sm font-semibold text-white no-underline hover:bg-teal-hover"
              aria-label="Book online now"
            >
              <IconCalendar size={18} />
              <span>Book online now</span>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
