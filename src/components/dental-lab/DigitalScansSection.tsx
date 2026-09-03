import Image from "next/image";

const SCANNERS = [
  {
    src: "/images/digital-scans/3shape.png",
    alt: "3Shape",
    width: 200,
    height: 56,
  },
  {
    src: "/images/digital-scans/dentsply-sirona.png",
    alt: "Dentsply Sirona",
    width: 200,
    height: 56,
  },
  {
    src: "/images/digital-scans/itero.png",
    alt: "iTero",
    width: 200,
    height: 56,
  },
] as const;

type DigitalScansSectionProps = {
  className?: string;
};

export function DigitalScansSection({ className = "" }: DigitalScansSectionProps) {
  return (
    <section
      id="digital-scans-heading"
      className={`rounded-lg border border-surface-muted bg-surface-muted p-6 md:p-8 ${className}`}
      aria-labelledby="digital-scans-title"
    >
      <h2 id="digital-scans-title" className="font-display text-xl font-bold text-navy md:text-2xl">
        Digital Scans Accepted
      </h2>
      <ul className="mt-6 grid gap-4 sm:grid-cols-3">
        {SCANNERS.map((scanner) => (
          <li key={scanner.alt}>
            <div className="flex h-full items-center justify-center rounded-lg bg-white p-4 shadow-sm">
              <Image
                src={scanner.src}
                alt={scanner.alt}
                width={scanner.width}
                height={scanner.height}
                className="h-auto max-h-14 w-full max-w-[12rem] object-contain"
                loading="lazy"
              />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
