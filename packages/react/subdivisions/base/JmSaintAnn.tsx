// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const JmSaintAnn = ({
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
      <path strokeLinejoin="round" d="M1.316 17.617a.6.6 0 0 0 .428.703l1.544.425a1 1 0 0 0 .78-.107l1.616-.968a1 1 0 0 1 .755-.113l5.26 1.309a3 3 0 0 0 1.098.065l5.778-.725c.346-.044.682-.147.993-.306l2.7-1.383a.6.6 0 0 0 .263-.804l-1.563-3.097a2 2 0 0 1-.195-.619l-.417-2.923a1 1 0 0 0-1.045-.857l-1.386.075a3 3 0 0 1-1.213-.185l-5.45-2.036a2 2 0 0 0-.747-.125l-2.906.07a4 4 0 0 1-1.162-.144l-2.813-.778a.962.962 0 0 0-1.195 1.14l.564 2.486a2 2 0 0 1 .006.854z"/>
    </svg>
  );
};
