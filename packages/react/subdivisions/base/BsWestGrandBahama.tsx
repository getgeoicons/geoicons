// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const BsWestGrandBahama = ({
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
      <path strokeLinejoin="round" d="M15.256 13.902a1 1 0 0 1 .916.034l1.109.626a.6.6 0 0 0 .5.041l4.478-1.623a.6.6 0 0 0 .367-.745l-1.178-3.729a1.5 1.5 0 0 0-.766-.892l-.767-.38a1.5 1.5 0 0 0-1.09-.093l-.865.256a1.5 1.5 0 0 0-.896.729l-1.335 2.485a5.37 5.37 0 0 1-5.227 2.806l-.482-.045a3.3 3.3 0 0 1-2.248-1.195l-.4-.49a10.6 10.6 0 0 0-2.333-2.112L3.034 8.242a.92.92 0 0 0-1.103 1.47l2.434 2.052q.661.559 1.228 1.213l.695.804c.632.73 1.362 1.367 2.17 1.894l.032.02a10 10 0 0 0 2.555 1.19.55.55 0 0 0 .658-.297l.433-.956a1 1 0 0 1 .486-.492z"/>
    </svg>
  );
};
