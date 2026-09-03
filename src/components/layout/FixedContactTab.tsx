import Link from "next/link";

function IconEnvelope() {
  return (
    <svg
      viewBox="0 0 24 24"
      width={18}
      height={18}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <path d="m22 6-10 7L2 6" />
    </svg>
  );
}

export function FixedContactTab() {
  return (
    <Link
      href="/contact/"
      className="fixed top-1/2 right-0 z-40 flex -translate-y-1/2 flex-col items-center gap-2 rounded-l-lg bg-teal px-2.5 py-4 text-white no-underline shadow-lg transition-colors hover:bg-teal-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2"
      aria-label="Contact us"
    >
      <span className="text-xs leading-none opacity-90" aria-hidden="true">
        ▴
      </span>
      <span className="text-sm font-semibold tracking-wide [writing-mode:vertical-rl]">
        Contact Us
      </span>
      <IconEnvelope />
    </Link>
  );
}
