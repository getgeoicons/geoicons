// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const GtIzabal = ({
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
      <path strokeLinejoin="round" d="M1.58 17.205a.59.59 0 0 0 .776.825l4.117-2.078a1 1 0 0 1 .742-.063l.258.078a1 1 0 0 1 .695 1.123l-.084.495a1 1 0 0 0 .07.565l.218.504a.8.8 0 0 0 1.026.425l1.639-.643c.29-.113.56-.271.8-.468l9.964-8.13a1 1 0 0 0-.04-1.58L17.338 5a.76.76 0 0 0-.99 1.145l.706.716a.921.921 0 0 1-1.095 1.456L12.64 6.51a1 1 0 0 0-.428-.12L5.89 6.07a1 1 0 0 0-.955.572l-2.454 5.21a1 1 0 0 0 .013.88l.544 1.07a1 1 0 0 1-.028.958z"/>
    </svg>
  );
};
