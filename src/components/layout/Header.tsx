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

  return (
    <header className="sticky top-0 z-50 bg-navy text-white shadow-md">
      <div className="h-1 bg-teal" aria-hidden="true" />
      <div className="border-b border-white/10 bg-navy-deep/50 px-4 py-1.5 text-center text-sm text-white/90">
        <p>Quality craftsmanship · NZ-made dentures · Wellington since 2000</p>
      </div>
      <div className="mx-auto flex max-w-[var(--max-width-content)] items-center gap-4 px-4 py-3 md:px-6">
        <Link
          href="/"
          className="inline-flex shrink-0 overflow-hidden rounded-lg bg-white leading-none no-underline"
          aria-label="Yu Dental Laboratory home"
        >
          <Image
            src="/yu-dental.png"
            alt="Yu Dental Laboratory"
            width={200}
            height={67}
            className="block h-12 w-auto md:h-14"
            priority
          />
        </Link>

        <button
          type="button"
          className="ml-auto flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded border border-white/20 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={navOpen}
          aria-controls="main-nav"
          onClick={() => setNavOpen((open) => !open)}
        >
          <span
            className={`block h-0.5 w-5 bg-white transition-transform ${navOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-5 bg-white transition-opacity ${navOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-5 bg-white transition-transform ${navOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>

        <div
          className={`${
            navOpen
              ? "fixed inset-x-0 top-[7.5rem] bottom-0 z-40 flex flex-col bg-navy p-6 md:static md:inset-auto md:top-auto md:bottom-auto md:z-auto md:flex md:flex-1 md:flex-row md:items-center md:justify-end md:gap-6 md:bg-transparent md:p-0"
              : "hidden md:flex md:flex-1 md:flex-row md:items-center md:justify-end md:gap-6"
          }`}
        >
          <nav
            id="main-nav"
            className="flex flex-col gap-1 md:flex-row md:flex-wrap md:items-center md:gap-x-4 md:gap-y-2"
            aria-label="Main navigation"
          >
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                onClick={closeNav}
                className={`rounded px-2 py-2 text-sm font-medium no-underline transition-colors md:py-1 ${
                  isActive(item.href) ? "text-teal" : "text-white/90 hover:text-teal"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-6 flex flex-col gap-3 border-t border-white/10 pt-6 md:mt-0 md:flex-row md:items-center md:border-0 md:pt-0">
            <a
              href={`tel:${SITE.phoneTel}`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-white no-underline hover:text-teal"
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
                <br className="hidden sm:inline" />
                <span className="sm:hidden"> </span>
                now
              </span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
