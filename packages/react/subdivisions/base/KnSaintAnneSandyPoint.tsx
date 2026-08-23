// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const KnSaintAnneSandyPoint = ({
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
      <path strokeLinejoin="round" d="m1.22 8.1.589-5.273a.3.3 0 0 1 .421-.24l5.177 2.33a.3.3 0 0 0 .416-.21l.261-1.217a.3.3 0 0 1 .406-.215l1.063.43a.3.3 0 0 1 .183.33l-.344 1.958a.3.3 0 0 0 .295.352h1.59a2 2 0 0 1 1.051.299l1.74 1.076a3 3 0 0 0 .845.357l7.38 1.86a.6.6 0 0 1 .45.648l-.068.605a.6.6 0 0 1-.227.407l-3.188 2.484a1 1 0 0 1-.644.21l-1.391-.04a1 1 0 0 0-.864.447l-.816 1.234a2 2 0 0 1-.36.411l-2.263 1.954a3 3 0 0 0-.886 1.326l-.495 1.494a.602.602 0 0 1-1.126.045l-.468-1.111a3 3 0 0 0-1.2-1.395l-.755-.461a1 1 0 0 1-.475-.939l.078-.904a1 1 0 0 0-.129-.582l-1.83-3.201a1 1 0 0 0-.348-.358l-3.042-1.856a2 2 0 0 1-.9-1.225l-.08-.325a2 2 0 0 1-.047-.704Z"/>
    </svg>
  );
};
