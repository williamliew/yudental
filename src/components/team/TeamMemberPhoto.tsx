import Image from "next/image";

const PORTRAIT_SIZE = 1024;

type TeamMemberPhotoProps = {
  src: string;
  alt: string;
  /** Full width of parent (e.g. about page cards). Default caps width for profile layouts. */
  layout?: "profile" | "card";
  className?: string;
};

export function TeamMemberPhoto({
  src,
  alt,
  layout = "profile",
  className = "",
}: TeamMemberPhotoProps) {
  const layoutClass =
    layout === "card"
      ? "w-full"
      : "mx-auto w-full max-w-[min(100%,220px)] md:mx-0 md:max-w-[220px]";

  return (
    <div
      className={`overflow-hidden rounded-lg ${layoutClass} ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        width={PORTRAIT_SIZE}
        height={PORTRAIT_SIZE}
        className="aspect-square w-full object-cover"
        sizes={
          layout === "card"
            ? "(max-width: 768px) 90vw, (max-width: 1024px) 30vw, 280px"
            : "(max-width: 768px) 60vw, 220px"
        }
        loading="lazy"
      />
    </div>
  );
}
