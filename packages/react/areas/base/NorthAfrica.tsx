// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const NorthAfrica = ({
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
      <path strokeLinejoin="round" d="M3.739 13.233 1.2 13.33l1.636-2.81a1 1 0 0 1 .226-.267l1.356-1.126a1 1 0 0 0 .31-.453l.18-.54a1 1 0 0 1 .329-.468l.868-.686a1 1 0 0 1 .898-.176l.563.163a1 1 0 0 0 .783-.098l.904-.529a1 1 0 0 1 .476-.136l2.065-.06a.6.6 0 0 1 .618.589l.01.544a1 1 0 0 0 .576.889l1.713.8a.6.6 0 0 0 .799-.294l.144-.313a.6.6 0 0 1 .782-.3l1.45.624a1 1 0 0 0 .413.081l1.574-.028a.6.6 0 0 1 .609.546l.058.646c.016.175.079.344.18.488l1.254 1.767q.073.102.118.22l.587 1.525a.6.6 0 0 1-.083.58l-.353.46a1 1 0 0 0-.132.23l-.71 1.737a1 1 0 0 1-.834.617l-2.804.257a1 1 0 0 1-1.002-.585l-.249-.55a1 1 0 0 1 .122-1.025l.545-.702.038-1.319-2.54-1.41a1 1 0 0 0-.37-.12l-1.017-.118a1 1 0 0 0-.728.204l-2.175 1.688a.6.6 0 0 1-.733.002l-3.815-2.92-1.092-.017z"/>
    </svg>
  );
};
