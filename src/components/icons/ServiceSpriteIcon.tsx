import { type ServiceSpriteId, getServiceSpriteById } from "@/lib/service-sprites";
import Image from "next/image";

type ServiceSpriteIconProps = {
  spriteId: ServiceSpriteId;
  size?: number;
  className?: string;
};

export function ServiceSpriteIcon({ spriteId, size = 64, className = "" }: ServiceSpriteIconProps) {
  const sprite = getServiceSpriteById(spriteId);

  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center overflow-hidden rounded-md bg-white ${className}`.trim()}
      style={{ width: size, height: size }}
    >
      <Image
        src={sprite.src}
        alt=""
        width={sprite.width}
        height={sprite.height}
        className="max-h-full max-w-full object-contain"
        loading="lazy"
      />
    </span>
  );
}
