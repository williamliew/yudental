import type { ReactNode, SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

function IconBase({
  size = 48,
  className,
  children,
  ...props
}: IconProps & { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 48 48"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

/** Classic molar tooth outline */
function ToothOutline({ x = 0, y = 0 }: { x?: number; y?: number }) {
  return (
    <path
      transform={`translate(${x} ${y})`}
      d="M10 8c-2.2 0-4 1.9-4 4.2 0 1.6.7 3 1.8 4.1L9.5 28c.3 1.4 1.5 2.4 3 2.4s2.7-1 3-2.4l1.2-5.8c.2-.8 1.4-.8 1.6 0l1.2 5.8c.3 1.4 1.5 2.4 3 2.4s2.7-1 3-2.4l1.7-11.7c1.1-1.1 1.8-2.5 1.8-4.1 0-2.3-1.8-4.2-4-4.2-1.4 0-2.6.7-3.3 1.8C19.6 8.7 18.4 8 17 8c-1.4 0-2.6.7-3.3 1.8C13 8.7 11.8 8 10.4 8z"
    />
  );
}

/** Dentures & partials: profile view of dental arch with aligned teeth on gum base */
export function IconDentures({ size, className, ...props }: IconProps) {
  return (
    <IconBase size={size} className={className} {...props}>
      {/* Gum base (subtle pink shaded) */}
      <path
        d="M8 22c0-4 4-8 10-8h12c6 0 10 4 10 8v8c0 4-4 8-10 8H18c-6 0-10-4-10-8v-8z"
        fill="currentColor"
        fillOpacity="0.08"
      />
      {/* Dental arch curve */}
      <path d="M10 22c2-3 6-5 14-5s12 2 14 5" strokeWidth="2" />
      {/* Individual teeth (beautifully aligned) */}
      <path d="M12 19v8M16 17v10M20 16v12M24 16v12M28 16v12M32 17v10M36 19v8" strokeWidth="2" />
      {/* Tooth gaps for realism */}
      <path d="M14 22v4M18 20v6M22 19v8M26 19v8M30 20v6M34 22v4" strokeWidth="0.5" opacity="0.3" />
    </IconBase>
  );
}

/** Repairs & relines: denture base with wrench and restoration star */
export function IconRepairs({ size, className, ...props }: IconProps) {
  return (
    <IconBase size={size} className={className} {...props}>
      {/* Denture base outline */}
      <path
        d="M8 18c2-4 6-7 12-7h8c6 0 10 3 12 7v8c0 4-4 7-10 7h-12c-6 0-10-3-10-7v-8z"
        strokeWidth="2"
      />
      {/* Teeth row */}
      <path d="M12 16v8M16 15v10M20 14v11M24 14v11M28 15v10M32 16v8" strokeWidth="1.5" />
      {/* Wrench tool */}
      <circle cx="38" cy="32" r="5" strokeWidth="2" />
      <path d="M38 28v-4M36 26h4" strokeWidth="2" />
      <path d="M41 35l4 4" strokeWidth="2" />
      {/* Restoration sparkle star */}
      <path d="M38 12v4M36 14h4M37 13l2 2M37 15l2-2" strokeWidth="1.5" />
    </IconBase>
  );
}

/** Mouthguards: sleek U-shaped athletic guard with impact shield waves */
export function IconMouthguard({ size, className, ...props }: IconProps) {
  return (
    <IconBase size={size} className={className} {...props}>
      {/* U-shaped mouthguard with thick protective borders */}
      <path
        d="M10 18c0-2 2-3 4-3h20c2 0 4 1 4 3v4c0 4-3 8-10 8h-8c-7 0-10-4-10-8v-4z"
        strokeWidth="2.5"
      />
      {/* Inner detail */}
      <path d="M13 18v3c0 2.5 2.5 5 7 5h8c4.5 0 7-2.5 7-5v-3" strokeWidth="1.5" opacity="0.4" />
      {/* Teeth grip ridges */}
      <path d="M16 16v6M20 16v6M24 16v6M28 16v6M32 16v6" strokeWidth="1" opacity="0.3" />
      {/* Impact shield waves (left) */}
      <path d="M6 20c-1-2-1-4 0-6M3 21c-1.5-3-1.5-5 0-8" strokeWidth="2" opacity="0.6" />
      {/* Impact shield waves (right) */}
      <path d="M42 20c1-2 1-4 0-6M45 21c1.5-3 1.5-5 0-8" strokeWidth="2" opacity="0.6" />
    </IconBase>
  );
}

/** Whitening trays: clear tray over teeth with sparkles above */
export function IconWhitening({ size, className, ...props }: IconProps) {
  return (
    <IconBase size={size} className={className} {...props}>
      {/* Tooth row beneath */}
      <path d="M12 24c2-3 6-5 12-5s10 2 12 5" strokeWidth="1.5" />
      <path
        d="M14 22v8M18 21v10M22 20v11M26 20v11M30 21v10M34 22v8"
        strokeWidth="1.5"
        opacity="0.4"
      />
      {/* Clear transparent tray overlay */}
      <path
        d="M10 22c0-2 2-3 4-3h20c2 0 4 1 4 3v4c0 3-3 6-8 6h-12c-5 0-8-3-8-6v-4z"
        strokeWidth="2"
        opacity="0.7"
        strokeDasharray="2 1"
      />
      {/* Sparkles floating above (✨ ✨) */}
      <path d="M18 10v4M16 12h4M17 11l2 2M17 13l2-2" strokeWidth="1.5" />
      <path d="M30 8v4M28 10h4M29 9l2 2M29 11l2-2" strokeWidth="1.5" />
    </IconBase>
  );
}

/** Sleep apnoea: mandibular advancement splint with hinge/bar + crescent moon */
export function IconSleepApnoea({ size, className, ...props }: IconProps) {
  return (
    <IconBase size={size} className={className} {...props}>
      {/* Upper tray */}
      <path
        d="M12 14h20c2 0 3 1 3 2.5v2c0 1.5-1 2.5-3 2.5H12c-2 0-3-1-3-2.5v-2c0-1.5 1-2.5 3-2.5z"
        strokeWidth="2"
      />
      <path d="M14 14v7M18 14v7M22 14v7M26 14v7M30 14v7" strokeWidth="1" opacity="0.35" />
      {/* Lower tray (advanced forward) */}
      <path
        d="M16 28h20c2 0 3 1 3 2.5v2c0 1.5-1 2.5-3 2.5H16c-2 0-3-1-3-2.5v-2c0-1.5 1-2.5 3-2.5z"
        strokeWidth="2"
      />
      <path d="M18 28v7M22 28v7M26 28v7M30 28v7M34 28v7" strokeWidth="1" opacity="0.35" />
      {/* Connection bar/hinge between trays */}
      <path d="M12 21h4v7h-4z" strokeWidth="1.5" opacity="0.6" />
      {/* Crescent moon (sleep symbol) */}
      <path
        d="M40 10c-2 0-3.5 2-3.5 4.5S38 19 40 19c-3 0-5-2-5-4.5S37 10 40 10z"
        strokeWidth="1.5"
      />
    </IconBase>
  );
}

/** Bruxism splints: flat nightguard over teeth with pressure absorption arrows */
export function IconBruxism({ size, className, ...props }: IconProps) {
  return (
    <IconBase size={size} className={className} {...props}>
      {/* Teeth row beneath the splint */}
      <path d="M10 28c2-3 6-5 14-5s12 2 14 5" strokeWidth="1.5" />
      <path
        d="M12 26v8M16 25v10M20 24v11M24 24v11M28 24v11M32 25v10M36 26v8"
        strokeWidth="1.5"
        opacity="0.4"
      />
      {/* Flat-planed occlusal nightguard resting over teeth */}
      <path d="M8 22h32c1 0 2 1 2 2v2c0 1-1 2-2 2H8c-1 0-2-1-2-2v-2c0-1 1-2 2-2z" strokeWidth="2" />
      <path
        d="M10 22v6M14 22v6M18 22v6M22 22v6M26 22v6M30 22v6M34 22v6M38 22v6"
        strokeWidth="0.8"
        opacity="0.25"
      />
      {/* Vertical pressure absorption arrows (pointing toward each other) */}
      <path d="M16 12v6M16 12l-2 2M16 12l2 2" strokeWidth="1.5" opacity="0.7" />
      <path d="M32 12v6M32 12l-2 2M32 12l2 2" strokeWidth="1.5" opacity="0.7" />
    </IconBase>
  );
}

/** Full dentures: complete upper and lower dental arches */
export function IconFullDenture({ size, className, ...props }: IconProps) {
  return (
    <IconBase size={size} className={className} {...props}>
      {/* Upper full denture arch */}
      <path d="M6 14c3-5 8-8 18-8s15 3 18 8v2c0 3-2 5-4 5H10c-2 0-4-2-4-5v-2z" strokeWidth="2" />
      <path d="M8 14c2 2 6 3.5 12 3.5h8c6 0 10-1.5 12-3.5" opacity="0.45" />
      <path d="M10 10v8M14 9v10M18 8v11M24 8v11M30 8v11M34 9v10M38 10v8" strokeWidth="1.5" />
      {/* Lower full denture arch */}
      <path d="M6 34c3 5 8 8 18 8s15-3 18-8v-2c0-3-2-5-4-5H10c-2 0-4 2-4 5v2z" strokeWidth="2" />
      <path d="M8 34c2-2 6-3.5 12-3.5h8c6 0 10 1.5 12 3.5" opacity="0.45" />
      <path d="M10 30v8M14 29v10M18 29v11M24 29v11M30 29v10M34 29v10M38 30v8" strokeWidth="1.5" />
      {/* Gap between dentures */}
      <path d="M12 21h24" strokeWidth="1" opacity="0.25" strokeDasharray="2 2" />
    </IconBase>
  );
}

/** Partial dentures: partial arch with gaps showing it replaces only some teeth */
export function IconPartialDenture({ size, className, ...props }: IconProps) {
  return (
    <IconBase size={size} className={className} {...props}>
      {/* Partial denture base (left section) */}
      <path
        d="M6 20c2-4 6-7 10-7h6c3 0 5 2 6 4v6c0 3-2 6-6 6h-8c-4 0-8-2-8-6v-3z"
        strokeWidth="2"
      />
      <path d="M8 20c1.5 2 4 3 8 3h6c3 0 5-1 6-3" opacity="0.45" />
      {/* Artificial teeth on partial (left section) */}
      <path d="M10 16v10M14 15v12M18 15v12M22 16v10" strokeWidth="1.5" />
      {/* Gap (missing teeth area) */}
      <path d="M28 24h4" strokeWidth="1" opacity="0.2" strokeDasharray="2 1" />
      {/* Natural teeth (remaining on right) */}
      <path d="M32 14v16M36 13v18M40 14v16" strokeWidth="2" opacity="0.5" />
      {/* Metal clasp connecting to natural tooth */}
      <path d="M26 20c2 0 3.5 1 4.5 2.5M26 28c2 0 3.5-1 4.5-2.5" strokeWidth="1.5" opacity="0.7" />
    </IconBase>
  );
}

/** Cobalt chrome: metal framework with distinctive clasps and structural bars */
export function IconCobaltChrome({ size, className, ...props }: IconProps) {
  return (
    <IconBase size={size} className={className} {...props}>
      {/* Main metal framework arch */}
      <path d="M8 22c3-5 8-8 16-8s13 3 16 8" strokeWidth="2.5" opacity="0.8" />
      {/* Metal palate/lingual bar */}
      <path d="M10 22h28" strokeWidth="2" opacity="0.7" />
      {/* Teeth positions on framework */}
      <path
        d="M12 18v8M16 17v10M20 16v11M24 16v11M28 16v11M32 17v10M36 18v8"
        strokeWidth="1.5"
        opacity="0.4"
      />
      {/* Metal clasps (left side) */}
      <circle cx="14" cy="30" r="2.5" strokeWidth="2" opacity="0.8" />
      <path d="M14 32.5v4M12 36h4" strokeWidth="2" opacity="0.8" />
      {/* Metal clasps (right side) */}
      <circle cx="34" cy="30" r="2.5" strokeWidth="2" opacity="0.8" />
      <path d="M34 32.5v4M32 36h4" strokeWidth="2" opacity="0.8" />
      {/* Reinforcement mesh detail */}
      <path d="M18 22v4M24 22v4M30 22v4" strokeWidth="0.8" opacity="0.35" />
    </IconBase>
  );
}

/** Relines and repairs: denture base with repair bond lines and restoration tools */
export function IconReline({ size, className, ...props }: IconProps) {
  return (
    <IconBase size={size} className={className} {...props}>
      {/* Denture base (split to show repair) */}
      <path
        d="M8 20c2-4 6-7 12-7h8c6 0 10 3 12 7v6c0 3-3 6-8 6H16c-5 0-8-3-8-6v-6z"
        strokeWidth="2"
      />
      {/* Teeth on denture */}
      <path
        d="M12 16v10M16 15v12M20 14v13M24 14v13M28 14v13M32 15v12M36 16v10"
        strokeWidth="1.5"
        opacity="0.4"
      />
      {/* Repair bond/stitch line (diagonal across base) */}
      <path
        d="M18 26l12 6M20 28l-1 1M24 30l-1 1M28 32l-1 1"
        strokeWidth="1.5"
        opacity="0.75"
        strokeDasharray="3 2"
      />
      {/* Relining material layer (bottom) */}
      <path d="M10 32h28" strokeWidth="3" opacity="0.3" />
      {/* Restoration/repair tool accent */}
      <circle cx="38" cy="36" r="4" strokeWidth="1.5" />
      <path d="M38 33v-2M36.5 34.5h3" strokeWidth="1.5" />
    </IconBase>
  );
}

/** Process: consultation & impressions */
export function IconConsultation({ size, className, ...props }: IconProps) {
  return (
    <IconBase size={size} className={className} {...props}>
      {/* Impression tray (horseshoe arch) */}
      <path d="M24 8c-7 0-11 3-13 8v4c2 4 6 6 13 6s11-2 13-6v-4c-2-5-6-8-13-8z" />
      <path d="M11 16c1.5 2 4.5 4 10 4h6c5.5 0 8.5-2 10-4" opacity="0.5" />
      {/* Handle */}
      <path d="M24 8v-4M22 4h4" />
      {/* Conversation bubble */}
      <circle cx="34" cy="32" r="8" />
      <path d="M30 30h8M30 34h6" />
      <path d="M34 40l-1.5-3h3l-1.5 3z" />
    </IconBase>
  );
}

/** Process: bite registration */
export function IconBite({ size, className, ...props }: IconProps) {
  return (
    <IconBase size={size} className={className} {...props}>
      {/* Upper dental arch */}
      <path d="M8 14c2-4 6-6 12-6h8c6 0 10 2 12 6" />
      <path d="M10 14c1 1.5 3 2.5 6 2.5h16c3 0 5-1 6-2.5" opacity="0.5" />
      <path d="M14 10v4M18 8v6M22 8v6M26 8v6M30 8v6M34 10v4" strokeWidth="1.2" />
      {/* Lower dental arch */}
      <path d="M8 34c2 4 6 6 12 6h8c6 0 10-2 12-6" />
      <path d="M10 34c1-1.5 3-2.5 6-2.5h16c3 0 5 1 6 2.5" opacity="0.5" />
      <path d="M14 34v4M18 34v6M22 34v6M26 34v6M30 34v6M34 34v4" strokeWidth="1.2" />
      {/* Registration alignment lines */}
      <path d="M6 24h36M24 20v8" strokeWidth="1.2" opacity="0.7" />
      <circle cx="24" cy="24" r="2" strokeWidth="1.2" opacity="0.7" />
    </IconBase>
  );
}

/** Process: wax teeth try-in */
export function IconWaxTryIn({ size, className, ...props }: IconProps) {
  return (
    <IconBase size={size} className={className} {...props}>
      {/* Dental model base (horseshoe platform) */}
      <path d="M8 28c0-3 3-5 8-5h16c5 0 8 2 8 5v6c0 2-2 3-4 3H12c-2 0-4-1-4-3v-6z" />
      <path d="M10 28h28" />
      {/* Row of teeth on the base */}
      <path d="M12 20c1-3 3-4 6-4h12c3 0 5 1 6 4v3H12v-3z" />
      <path d="M14 18v5M18 17v6M22 16v7M26 16v7M30 17v6M34 18v5" strokeWidth="1.5" />
      {/* Sculpting tool (dental spatula) */}
      <path d="M36 8l6 6M36 8l-2 2M38 14l2-2" />
      <path d="M34 10l2 2c.5.5.5 1 0 1.5l-1 1" strokeWidth="1.2" />
    </IconBase>
  );
}

/** Process: fitting complete */
export function IconFitting({ size, className, ...props }: IconProps) {
  return (
    <IconBase size={size} className={className} {...props}>
      {/* Complete upper denture arch (angled beautifully) */}
      <path d="M6 18c3-6 8-9 18-9s15 3 18 9" />
      <path d="M8 18c2 3 6 5 12 5h8c6 0 10-2 12-5" opacity="0.55" />
      <path d="M12 14v4M16 12v6M20 11v7M24 11v7M28 11v7M32 12v6M36 14v4" strokeWidth="1.5" />
      {/* Complete lower denture arch */}
      <path d="M6 30c3 6 8 9 18 9s15-3 18-9" />
      <path d="M8 30c2-3 6-5 12-5h8c6 0 10 2 12 5" opacity="0.55" />
      <path d="M12 30v4M16 30v6M20 30v7M24 30v7M28 30v7M32 30v6M36 30v4" strokeWidth="1.5" />
      {/* Sparkles (✨ ✨) in top corner */}
      <path d="M38 6v4M36 8h4" strokeWidth="1.5" />
      <path d="M40 10v2M39 11h2" strokeWidth="1.2" />
    </IconBase>
  );
}

export function IconPhone({ size = 24, className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
    </svg>
  );
}

export function IconCalendar({ size = 24, className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zM9 14H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2zm-8 4H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2z" />
    </svg>
  );
}
