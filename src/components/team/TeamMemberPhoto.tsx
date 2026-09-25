import Image from "next/image";

const PORTRAIT_SIZE = 1024;

type TeamMemberPhotoProps = {
  src: string;
  alt: string;
  /** Compact centred portrait for about page cards; profile is larger for the team page. */
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
      ? "mx-auto w-full max-w-[min(100%,152px)]"
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
            ? "(max-width: 768px) 38vw, 152px"
            : "(max-width: 768px) 60vw, 220px"
        }
        loading="lazy"
      />
    </div>
  );
}
