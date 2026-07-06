// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Th = ({
  size = 24,
  strokeWidth = 1,
  'aria-label': ariaLabel,
  role,
  ...props
}: Props) => {
  const uid = useId();
  // Compliance nudge: warns once if icons render without a licensed <IconProvider>.
  // noteIconRender is a plain guarded fn (no client-only React API), so it does NOT
  // taint this as a Client Component — it no-ops on the server (window guard) and
  // only schedules a deferred client-side check. Do NOT wrap in useEffect (that would
  // force "use client" and break RSC/SSG consumers like the site).
  noteIconRender();
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      stroke="currentColor"
      strokeWidth={strokeWidth}
      fill="none"
      role={ariaLabel ? (role ?? 'img') : role}
      aria-labelledby={ariaLabel ? `${uid}-title` : undefined}
      aria-hidden={ariaLabel ? undefined : true}
      {...props}
    >
      {ariaLabel && <title id={`${uid}-title`}>{ariaLabel}</title>}
      <path strokeLinejoin="round" d="m6.725 2.88-.41 1.11a.5.5 0 0 0 .045.44l1.62 2.561a.5.5 0 0 1 .005.525l-1.001 1.67a.5.5 0 0 0 .048.58l1.11 1.302a.5.5 0 0 1 .118.298l.118 2.276a.5.5 0 0 1-.035.212l-1.09 2.72a.5.5 0 0 0-.032.118l-.337 2.476a.5.5 0 0 0 .427.562l.978.136a.5.5 0 0 1 .35.223l.867 1.336a.5.5 0 0 0 .137.14l1.8 1.235 1.144-.554a.5.5 0 0 0 .135-.804l-.602-.602a.5.5 0 0 0-.153-.104l-1.097-.479a.5.5 0 0 1-.28-.318l-.707-2.43-1.147.018 1.4-3.92a.5.5 0 0 0 .028-.199l-.087-1.441a.5.5 0 0 1 .505-.53l.457.005a.5.5 0 0 1 .494.5v.726l2.36 1.651-.579-2.508a.5.5 0 0 1 .118-.45l.677-.742a.5.5 0 0 1 .39-.163l2.322.095a.5.5 0 0 0 .505-.378L17.7 8.68a.5.5 0 0 0-.148-.49l-.912-.833a.5.5 0 0 1-.162-.354l-.028-.932a.5.5 0 0 0-.172-.362l-1.46-1.272a.5.5 0 0 0-.545-.074l-2.28 1.09a.5.5 0 0 1-.708-.535l.278-1.63a.5.5 0 0 0-.137-.434L10.14 1.55a.5.5 0 0 0-.7-.011l-.791.753a.5.5 0 0 1-.292.135l-1.215.13a.5.5 0 0 0-.416.324Z"/>
    </svg>
  );
};
