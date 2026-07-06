// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Maghreb = ({
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
      <path strokeLinejoin="round" d="m6.732 13.555.463 4.754-3.336.32a1 1 0 0 1-.357-.03l-1.305-.354a1 1 0 0 1-.696-1.257l.148-.485a1 1 0 0 0 .022-.5l-.244-1.144a1 1 0 0 1 .117-.717l1.703-2.887a1 1 0 0 1 .288-.312l1.334-.932a1 1 0 0 0 .406-.614l.211-1.004a1 1 0 0 1 .245-.473l1.154-1.249A1 1 0 0 1 7.932 6.4l.9.295a1 1 0 0 0 .838-.1l1.233-.763a1 1 0 0 1 .452-.147l4.45-.331-.402 1.404a1 1 0 0 0 .333 1.052l.131.106a1 1 0 0 0 .244.146l2.842 1.184a.835.835 0 0 0 1.126-.548.84.84 0 0 1 .585-.583l.167-.046a1 1 0 0 1 .657.046l.522.223a1 1 0 0 1 .606.888l.184 5.893-.495.874-3.79-2.215-1.079.554-1.34-.7-2.655 2.086a1 1 0 0 1-.456.2l-.878.144a1 1 0 0 1-.828-.241l-3.263-2.917a.773.773 0 0 0-1.284.651Z"/>
    </svg>
  );
};
