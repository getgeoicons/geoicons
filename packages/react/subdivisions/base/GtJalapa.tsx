// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const GtJalapa = ({
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
      <path strokeLinejoin="round" d="M5.74 10.433a3 3 0 0 0-1.903 1.177l-1.302 1.77a3 3 0 0 0-.464.937l-.738 2.526a.6.6 0 0 0 .28.69l1.16.657a1 1 0 0 0 .63.12l3.026-.417a1 1 0 0 1 .72.18l1.89 1.36a1 1 0 0 0 .948.12l2.32-.906a1 1 0 0 1 .879.074l1.223.734a.6.6 0 0 0 .81-.184l1.176-1.786a1 1 0 0 1 1.041-.428l2.945.62a1 1 0 0 0 1.185-.772l1.178-5.596a1 1 0 0 0-.03-.522l-.548-1.646a1 1 0 0 0-1.097-.673l-1.263.19a1 1 0 0 1-.962-.407L16.43 4.875a1 1 0 0 0-1.168-.353l-.9.342a2 2 0 0 0-1.14 1.108l-.063.155a.8.8 0 0 1-.852.487l-.77-.108a.8.8 0 0 0-.8.383l-1.54 2.59a1 1 0 0 1-.688.473z"/>
    </svg>
  );
};
