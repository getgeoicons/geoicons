// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Mw = ({
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
      <path strokeLinejoin="round" d="m14.821 20.754-.015 1.798a.25.25 0 0 1-.25.247h-.637a.25.25 0 0 1-.206-.108l-1.962-2.87a.5.5 0 0 1 .008-.577l.961-1.323a.5.5 0 0 0 .083-.406l-.38-1.66a.5.5 0 0 0-.622-.37l-1.36.38a.5.5 0 0 1-.497-.137l-2.117-2.234a.5.5 0 0 1-.067-.6l1.697-2.86a.5.5 0 0 0 .069-.223l.3-4.65a.5.5 0 0 0-.05-.253L7.946 1.2l3.011 1.008a.5.5 0 0 1 .303.282l.7 1.683q.03.071.037.147l.277 3.095a.5.5 0 0 1-.036.236l-.661 1.597a.5.5 0 0 0-.019.33l.776 2.693a.5.5 0 0 0 .386.353l.948.183a.5.5 0 0 1 .296.179l2.354 2.95a.5.5 0 0 1 .11.327l-.098 3.182a.5.5 0 0 1-.293.44l-.922.418a.5.5 0 0 0-.294.451Z"/>
    </svg>
  );
};
