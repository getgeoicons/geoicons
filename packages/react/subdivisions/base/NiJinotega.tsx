// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const NiJinotega = ({
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
      <path strokeLinejoin="round" d="M3.242 16.786a1.5 1.5 0 0 0-.857 1.057l-.32 1.497a1.5 1.5 0 0 0 .643 1.566l2.238 1.472a1 1 0 0 0 1.214-.088l3.877-3.448a1 1 0 0 1 .405-.219l1.074-.289a1 1 0 0 0 .71-.724l.678-2.723a2 2 0 0 1 .693-1.08l1.97-1.573a.6.6 0 0 1 .655-.06l1.238.655a.6.6 0 0 0 .755-.163l1.917-2.477a2 2 0 0 0 .393-.905l.616-3.802a.6.6 0 0 0-.6-.696l-.814.011a.6.6 0 0 1-.606-.554l-.152-1.994a1 1 0 0 0-1.124-.915l-.57.072a1 1 0 0 0-.863.847l-.334 2.277a2 2 0 0 1-.909 1.398L9.34 9.623a1 1 0 0 0-.442.628l-1.069 4.82a1 1 0 0 1-.852.776l-1.377.172a6 6 0 0 0-1.697.473z"/>
    </svg>
  );
};
