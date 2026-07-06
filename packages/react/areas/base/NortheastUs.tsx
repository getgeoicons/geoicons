// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const NortheastUs = ({
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
      <path strokeLinejoin="round" d="M8.315 19.576H1.2l.063-4.22a1 1 0 0 1 .431-.808l1.622-1.12a.89.89 0 0 0 .38-.816.892.892 0 0 1 .988-.97l1.86.21a1 1 0 0 0 1.087-.776l.216-.962a1 1 0 0 1 .34-.553l1.896-1.562 5.027.033a1 1 0 0 0 .62-.21l.965-.748a1 1 0 0 0 .296-.372l1.804-3.924a.6.6 0 0 1 .458-.343l.879-.128a.6.6 0 0 1 .475.136l.763.648a.6.6 0 0 1 .212.457v2.525a1 1 0 0 0 .111.458L22.8 8.68l-4.724 2.195a1 1 0 0 0-.51.541l-.59 1.5a1 1 0 0 0 .108.935l.42.608a1 1 0 0 1-.447 1.495l-4.676 1.893a1 1 0 0 0-.53.501l-1.133 2.41a.6.6 0 0 1-1.046.07l-.519-.797a1 1 0 0 0-.838-.455Z"/>
    </svg>
  );
};
