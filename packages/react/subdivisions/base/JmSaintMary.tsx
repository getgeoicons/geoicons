// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const JmSaintMary = ({
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
      <path strokeLinejoin="round" d="M5.11 13.35a.8.8 0 0 0 .766.411l2.145-.18a.6.6 0 0 1 .597.35l2.334 5.164a1 1 0 0 0 1.112.567l4.023-.824a1 1 0 0 1 .748.142l2.16 1.41a.6.6 0 0 0 .887-.283l2.604-6.634a.6.6 0 0 0-.546-.82l-3.264-.07a1 1 0 0 1-.9-.609L16.77 9.598a2 2 0 0 0-.902-.985l-3.425-1.825a1 1 0 0 1-.53-.89l.006-.734a1 1 0 0 0-1.128-1l-2.775.358a2 2 0 0 1-.68-.028L1.997 3.338a.623.623 0 0 0-.653.95l.815 1.243a2 2 0 0 1 .32.933l.17 2.07a2 2 0 0 0 .242.803z"/>
    </svg>
  );
};
