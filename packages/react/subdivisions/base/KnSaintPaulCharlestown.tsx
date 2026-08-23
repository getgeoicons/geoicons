// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const KnSaintPaulCharlestown = ({
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
      <path strokeLinejoin="round" d="m9.036 12.956-5.761-.125a.3.3 0 0 0-.307.285l-.092 1.893a.6.6 0 0 1-.502.562l-.472.078a.6.6 0 0 0-.468.79l.394 1.131a.75.75 0 0 0 .812.497l3.345-.468q.293-.04.588-.024l1.709.099c.47.027.942-.057 1.374-.246l2.353-1.029q.52-.226 1.078-.332l1.174-.221q.492-.092.992-.086l1.13.015a.6.6 0 0 0 .511-.273l5.649-8.703a.507.507 0 0 0-.79-.63l-6.446 6.643a2 2 0 0 1-.88.528l-1.206.35a2 2 0 0 1-1.073.01l-2.402-.642a3 3 0 0 0-.71-.102Z"/>
    </svg>
  );
};
