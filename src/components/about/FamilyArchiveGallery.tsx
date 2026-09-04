import Image from "next/image";

const ARCHIVE_PHOTOS = [
  {
    src: "/images/family-archive/pic-1.png",
    alt: "Yu Dental Laboratory workshop with benches and equipment",
  },
  {
    src: "/images/family-archive/pic-2.png",
    alt: "Dental laboratory work area with tools and storage",
  },
  {
    src: "/images/family-archive/pic-3.png",
    alt: "Laboratory bench with dental manufacturing equipment",
  },
  {
    src: "/images/family-archive/pic-4.png",
    alt: "Yu Dental Laboratory reception and waiting area",
  },
] as const;

export function FamilyArchiveGallery() {
  return (
    <section
      className="bg-lavender px-4 py-12 md:px-6 md:py-16"
      aria-labelledby="family-archive-heading"
    >
      <div className="mx-auto max-w-[var(--max-width-content)]">
        <h2
          id="family-archive-heading"
          className="text-center font-sans text-2xl font-bold text-navy md:text-3xl"
        >
          From the family archive
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-grey-mid">
          Photographs from our workshop, laboratory, and clinic over the years.
        </p>
        <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-2 md:gap-4 lg:grid-cols-4">
          {ARCHIVE_PHOTOS.map((photo) => (
            <li key={photo.src} className="overflow-hidden rounded-lg shadow-sm">
              <Image
                src={photo.src}
                alt={photo.alt}
                width={600}
                height={600}
                className="aspect-square h-full w-full object-cover"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 280px"
                loading="lazy"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
