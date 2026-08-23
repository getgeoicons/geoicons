// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const GtElProgreso = ({
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
      <path strokeLinejoin="round" d="M18.586 4.17a1 1 0 0 0-.368-.209l-1.135-.354a2 2 0 0 0-1.417.085l-1.149.517q-.3.136-.567.334l-9.213 6.899a.6.6 0 0 0-.237.55l.058.487a.6.6 0 0 1-.608.67l-2.1-.041a.6.6 0 0 0-.61.636l.026.436a.6.6 0 0 0 .565.562l1.384.077a.6.6 0 0 1 .548.749l-.218.846a2 2 0 0 0 .233 1.547l.378.614a2 2 0 0 0 .981.817l2.194.85a2 2 0 0 0 1.844-.21l.858-.58a2 2 0 0 1 1.224-.342l1.09.055a1 1 0 0 0 .939-.538l1.362-2.63a.6.6 0 0 1 .695-.303l.816.23a.6.6 0 0 0 .702-.314l.369-.757a2 2 0 0 1 .984-.951l2.43-1.083a1 1 0 0 0 .59-.835l.048-.605a1 1 0 0 0-.34-.833l-1.77-1.54a.549.549 0 0 1 .502-.944l2.22.593a.603.603 0 0 0 .557-1.032z"/>
    </svg>
  );
};
