// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const GtEscuintla = ({
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
      <path strokeLinejoin="round" d="M1.617 14.644a.6.6 0 0 0 .251.892l3.122 1.37c1.153.505 2.365.864 3.608 1.067l1.552.253c.883.144 1.777.209 2.672.194l7.701-.131a.6.6 0 0 0 .586-.67l-.21-1.792a2 2 0 0 1 .144-1.01l1.53-3.627a2 2 0 0 0 .129-1.114l-.516-3.03a1 1 0 0 0-.775-.809l-1.454-.314a1 1 0 0 0-1.123.568l-.534 1.19a.63.63 0 0 1-1.172-.06l-.563-1.687a.55.55 0 0 0-1.008-.084l-1.041 1.964a.69.69 0 0 1-1.283-.175l-.049-.22a.974.974 0 0 0-1.346-.681l-.408.181a1 1 0 0 0-.582.756l-.485 3.039a1 1 0 0 1-.13.357l-.355.593a.6.6 0 0 1-.612.283l-.515-.084a.6.6 0 0 1-.488-.729l.229-.982a1 1 0 0 0-.452-1.08L7.43 8.7a1 1 0 0 0-.7-.132l-2.745.494a1 1 0 0 0-.815 1.105l.187 1.53a1 1 0 0 1-.172.693z"/>
    </svg>
  );
};
