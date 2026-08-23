// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const HtNordEst = ({
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
      <path strokeLinejoin="round" d="M8.494 19.304a2 2 0 0 0 .628.712l2.498 1.74a3 3 0 0 0 1.209.495l4.026.689a1 1 0 0 0 .817-.224l.1-.085a1 1 0 0 0 .234-1.236l-.627-1.165a.6.6 0 0 1 .3-.839l2.746-1.133a1 1 0 0 0 .606-.769l.394-2.493c.048-.306.049-.618.002-.924l-.255-1.655a3 3 0 0 0-.5-1.254L19.13 8.941a2 2 0 0 1-.342-1.383l.239-1.953a1 1 0 0 0-.105-.582l-.806-1.551a1 1 0 0 0-.722-.525l-8.31-1.4a.7.7 0 0 0-.815.644l-.026.385a.7.7 0 0 1-.737.652L6.052 3.15a.7.7 0 0 0-.736.648l-.102 1.394a1 1 0 0 1-.941.926l-.66.037a.7.7 0 0 0-.636.515l-.241.882a3 3 0 0 0 .037 1.702l.27.845a3 3 0 0 0 .511.957l1.122 1.407a.6.6 0 0 1 .078.62l-.436.973a.6.6 0 0 0 .23.755l1.662 1.032a3 3 0 0 1 1.075 1.155z"/>
    </svg>
  );
};
