// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Gw = ({
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
      <path strokeLinejoin="round" d="m12.463 17.974-2.356-2.798a1 1 0 0 1-.234-.602l-.108-2.59a.6.6 0 0 0-.815-.535L7.515 12a2 2 0 0 1-1.253.06l-1.365-.38a1 1 0 0 1-.716-.787l-.202-1.128a1 1 0 0 0-.464-.679l-1.68-1.023a.3.3 0 0 1 .09-.549l2.546-.571a3 3 0 0 1 1.135-.035l2.349.38a2 2 0 0 0 1.344-.259l2.295-1.371a2 2 0 0 1 1.049-.283l9.263.105a.6.6 0 0 1 .585.501l.226 1.352a.6.6 0 0 1-.397.666l-1.565.538a.71.71 0 0 0 .007 1.343l1.3.434a.6.6 0 0 1 .41.59l-.044 1.22a.6.6 0 0 1-.58.58l-2.764.085a3 3 0 0 0-.914.172l-2.064.735a1 1 0 0 0-.533.447l-2.13 3.742a.6.6 0 0 1-.98.09Z"/>
    </svg>
  );
};
