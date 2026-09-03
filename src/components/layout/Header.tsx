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
    `rounded px-2 py-2 text-sm font-semibold uppercase tracking-wide transition-colors md:px-2.5 md:py-1 md:text-[0.9375rem] ${
      isActive(href)
        ? "text-navy underline decoration-2 underline-offset-4 decoration-teal"
        : "text-grey-mid no-underline hover:text-navy"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-surface-muted bg-white text-grey-dark shadow-sm">
      <div className="h-1 bg-teal" aria-hidden="true" />
      <div className="border-b border-surface-muted bg-surface-muted/60 px-4 py-2 text-center text-sm text-grey-mid">
        <p>
          Quality craftsmanship ·{" "}
          <span className="inline-block leading-tight">
            Locally Made
            <br className="sm:hidden" />
            <span className="hidden sm:inline"> </span>
            Dentures
          </span>{" "}
          · Wellington since 2000
        </p>
      </div>
      <div className="mx-auto flex max-w-[var(--max-width-content)] items-center gap-4 px-4 py-3 md:px-6 md:py-4">
        <Link
          href="/"
          className="inline-flex shrink-0 items-center gap-3 no-underline"
          aria-label="Yu Dental Laboratory home"
        >
          <Image
            src="/yu-dental.png"
            alt=""
            width={200}
            height={67}
            className="block h-14 w-auto md:h-[4.5rem]"
            priority
          />
          <span className="hidden font-display text-lg font-bold leading-tight text-navy sm:block md:text-xl">
            Yu Dental
            <br />
            Laboratory
          </span>
        </Link>

        <button
          type="button"
          className="ml-auto flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded border border-surface-muted md:hidden"
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

        <div
          className={`${
            navOpen
              ? "fixed inset-x-0 top-[8.75rem] bottom-0 z-40 flex flex-col overflow-y-auto bg-white p-6 md:static md:inset-auto md:top-auto md:bottom-auto md:z-auto md:flex md:flex-1 md:flex-row md:items-center md:overflow-visible md:bg-transparent md:p-0"
              : "hidden md:flex md:flex-1 md:flex-row md:items-center"
          }`}
        >
          <nav
            id="main-nav"
            className="flex flex-col gap-1 md:flex-1 md:flex-row md:flex-wrap md:items-center md:justify-center md:gap-x-3 md:gap-y-2 lg:gap-x-4"
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
          </nav>
          <div className="mt-6 flex flex-col gap-3 border-t border-surface-muted pt-6 md:mt-0 md:shrink-0 md:flex-row md:items-center md:gap-4 md:border-0 md:pt-0">
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
              className="inline-flex items-center gap-2 rounded bg-teal px-4 py-2.5 text-sm font-semibold text-white no-underline hover:bg-teal-hover"
              aria-label="Book online now"
            >
              <IconCalendar size={18} />
              <span className="leading-tight">
                Book online
                <br className="hidden xl:inline" />
                <span className="xl:hidden"> </span>
                now
              </span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
