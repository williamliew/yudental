import { MAP_EMBED_URL, MAP_GOOGLE_DIRECTIONS_URL, MAP_GOOGLE_URL } from "@/lib/site";

type MapEmbedProps = {
  className?: string;
};

export function MapEmbed({ className = "" }: MapEmbedProps) {
  return (
    <div className={className}>
      <div className="overflow-hidden rounded-lg border border-surface-muted bg-surface-muted shadow-sm">
        <iframe
          title="Map: Yu Dental Laboratory, Wellington"
          src={MAP_EMBED_URL}
          className="h-72 w-full border-0 md:h-80"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <p className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
        <a href={MAP_GOOGLE_URL} target="_blank" rel="noopener noreferrer">
          Open in Google Maps
          <span className="sr-only"> (opens in new tab)</span>
        </a>
        <a href={MAP_GOOGLE_DIRECTIONS_URL} target="_blank" rel="noopener noreferrer">
          Get directions
          <span className="sr-only"> (opens in new tab)</span>
        </a>
      </p>
    </div>
  );
}
