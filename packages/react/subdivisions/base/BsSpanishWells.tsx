// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const BsSpanishWells = ({
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
      <path strokeLinejoin="round" d="m4.067 16.678-1.948 1.924a.489.489 0 0 1-.819-.466l.808-3.248a1 1 0 0 1 .29-.49l2.8-2.609a1 1 0 0 1 .587-.264l.314-.03a11 11 0 0 0 2.085-.404l.847-.251a2 2 0 0 0 .916-.578l1.314-1.457a1 1 0 0 1 .456-.288l.137-.041a1 1 0 0 1 .422-.033l3.112.422a1 1 0 0 0 .567-.09l2.808-1.347a11 11 0 0 0 1.97-1.215l.86-.666a.637.637 0 0 1 .89.9L21.432 7.78a7.48 7.48 0 0 1-4.244 2.666l-2.961.66c-.922.205-1.814.528-2.653.961l-1.51.779a2 2 0 0 1-.917.222H6.792a1 1 0 0 0-.876.517l-1.332 2.41a3 3 0 0 1-.517.683Z"/>
    </svg>
  );
};
