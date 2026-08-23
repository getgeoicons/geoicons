// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const BsHarbourIsland = ({
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
      <path strokeLinejoin="round" d="M12.12 3.703V2.31a.962.962 0 0 0-1.74-.565l-.125.172a1 1 0 0 0-.177.755l.512 3.03a1 1 0 0 1-.04.491L9.488 9.295a1 1 0 0 0-.01.613l.905 2.992q.105.348.29.66l.367.619a1 1 0 0 1 .104.774l-.411 1.498a1 1 0 0 0 .236.95l.905.962a1 1 0 0 1 .27.619l.176 2.65a1 1 0 0 0 .58.84l.22.103a1 1 0 0 0 .945-.058l.051-.032a1 1 0 0 0 .473-.896l-.097-2.1a2 2 0 0 0-.217-.819l-.8-1.564a1 1 0 0 1-.11-.445l-.09-8.903a2 2 0 0 0-.105-.62l-.945-2.794a2 2 0 0 1-.105-.64Z"/>
    </svg>
  );
};
