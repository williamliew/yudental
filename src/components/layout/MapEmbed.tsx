import { MAP_EMBED_URL, MAP_GOOGLE_URL } from "@/lib/site";

type MapEmbedProps = {
  className?: string;
};

export function MapEmbed({ className = "" }: MapEmbedProps) {
  return (
    <div className={className}>
      <iframe
        title="Map: Yu Dental Laboratory, Wellington"
        src={MAP_EMBED_URL}
        className="h-80 w-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <p className="mt-2 text-sm">
        <a href={MAP_GOOGLE_URL} target="_blank" rel="noopener noreferrer">
          Open in Google Maps
          <span className="sr-only"> (opens in new tab)</span>
        </a>
      </p>
    </div>
  );
}
