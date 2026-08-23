// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const GtRetalhuleu = ({
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
      <path strokeLinejoin="round" d="M22.526 3.667a.625.625 0 0 0-.93-.792L18.739 5.06a.6.6 0 0 1-.96-.407l-.199-1.694a.6.6 0 0 0-.988-.385l-.745.644a3 3 0 0 0-.568.656L13.843 6.12a2 2 0 0 0-.244.552l-.547 2.01a1 1 0 0 1-1.273.689L5.238 7.256a.6.6 0 0 0-.533.082l-2.86 2.045a.6.6 0 0 0-.028.956l7.136 5.728 3.728 3.32a8 8 0 0 0 1.768 1.194l2.645 1.31a.6.6 0 0 0 .81-.285l.976-2.1a2 2 0 0 0 .184-.904l-.045-1.484a2 2 0 0 1 .094-.67l1.06-3.318c.108-.337.155-.69.14-1.044l-.15-3.43A2 2 0 0 1 20.4 7.62z"/>
    </svg>
  );
};
