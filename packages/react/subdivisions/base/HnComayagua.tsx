// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const HnComayagua = ({
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
      <path strokeLinejoin="round" d="M3.244 9.321a1 1 0 0 0 .59.74l1.127.48a2 2 0 0 1 .96.865l2.005 3.586a1 1 0 0 0 .745.504l2.67.344a1 1 0 0 1 .86.834l.135.845a.8.8 0 0 1-.642.912l-2.36.444a.7.7 0 0 0-.4 1.145l1.928 2.24a.8.8 0 0 0 1.054.142l3.925-2.646a1 1 0 0 0 .407-1.087l-.314-1.176a1 1 0 0 1 .327-1.028l.568-.47a1 1 0 0 0 .205-1.307l-.829-1.302a1 1 0 0 1 .161-1.268l3.117-2.91a1 1 0 0 0 .27-.425l.983-3.062a.8.8 0 0 0-.367-.94l-1.595-.904a1 1 0 0 0-.823-.073l-.974.34a1 1 0 0 1-1.226-.498l-.853-1.713a1 1 0 0 0-1.155-.52l-2.798.753a2 2 0 0 0-.96.586l-1.26 1.386a5 5 0 0 1-.78.697L3.577 7.973a1 1 0 0 0-.4.992z"/>
    </svg>
  );
};
