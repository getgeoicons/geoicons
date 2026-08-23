// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const BsRumCay = ({
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
      <path d="m10.537 17.604-.373-1.257a1 1 0 0 1 .615-1.224l6.773-2.478a4 4 0 0 1 1.815-.22l1.967.218a1 1 0 0 1 .821.628l.316.803a3 3 0 0 1 .145 1.714l-.378 1.8a1 1 0 0 1-.505.676l-1.863 1a1 1 0 0 1-1.035-.053l-2.245-1.524a1 1 0 0 0-.743-.156l-4.17.772a1 1 0 0 1-1.14-.699ZM2.713 9.208 1.594 7.486a1 1 0 0 1 .06-1.17l.89-1.109a1 1 0 0 1 1.384-.17l.896.68a1 1 0 0 1 .279 1.264L3.954 9.152a.72.72 0 0 1-1.24.056Z"/>
    </svg>
  );
};
