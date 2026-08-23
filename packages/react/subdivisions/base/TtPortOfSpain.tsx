// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const TtPortOfSpain = ({
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
      <path strokeLinejoin="round" d="M3.11 7.054a2 2 0 0 1 1.06.592l.744.791a2 2 0 0 1 .514 1.039l.207 1.237a2 2 0 0 1-.067.938l-.308.967a1 1 0 0 0 .534 1.212l1.109.51a1 1 0 0 0 1.2-.286l.033-.04a1 1 0 0 1 1.292-.239l6.71 3.968a1 1 0 0 1 .47.661l.2.98a1 1 0 0 0 .433.636l.297.195a1 1 0 0 0 .754.141l2.604-.55a.6.6 0 0 0 .472-.657l-.508-4.374a.6.6 0 0 1 .486-.66l.953-.177a.6.6 0 0 0 .49-.585l.008-.939a.6.6 0 0 0-.182-.437l-1.372-1.328a.6.6 0 0 1-.183-.433l.013-3.082a.6.6 0 0 0-.78-.575l-3.595 1.136a1 1 0 0 1-.613-.003l-3.072-1.007a1 1 0 0 1-.624-.596l-.566-1.495a.6.6 0 0 0-.445-.376L8.74 3.7a.6.6 0 0 0-.715.594v.036a1 1 0 0 1-.99 1.01l-4.773.05a.6.6 0 0 0-.517.306l-.142.253a.6.6 0 0 0 .404.881z"/>
    </svg>
  );
};
