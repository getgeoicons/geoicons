// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const GdSaintDavid = ({
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
      <path strokeLinejoin="round" d="M5.882 5.008a1 1 0 0 0-.712.252L2.903 7.278a1 1 0 0 0-.332.834l.442 5.048a1 1 0 0 1-.467.935l-.76.474a1 1 0 0 0-.467.763l-.065.747a2 2 0 0 0 .266 1.181l.954 1.632a1 1 0 0 0 1.18.444l.804-.268a1 1 0 0 1 .665.01l1.947.723q.315.117.65.161l1.3.172a.99.99 0 0 0 1.118-.92.99.99 0 0 1 .487-.794l.082-.048a.917.917 0 0 1 1.327.481.917.917 0 0 0 1.32.484l4.197-2.421a3 3 0 0 0 .886-.78l1.61-2.112 2.327-2.3a1 1 0 0 0 .256-.994l-.11-.37a1 1 0 0 0-.61-.655l-4.498-1.667a3 3 0 0 1-.965-.584L12.59 3.981a.6.6 0 0 0-.633-.108L9.324 4.976a2 2 0 0 1-.868.154z"/>
    </svg>
  );
};
