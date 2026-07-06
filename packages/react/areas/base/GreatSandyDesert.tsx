// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const GreatSandyDesert = ({
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
      <path strokeLinejoin="round" d="m4.677 7.619-2.816.32a.662.662 0 0 0-.104 1.295l2.409.675a1 1 0 0 1 .564.412l1.276 1.931a1 1 0 0 0 .617.425l2.136.476a.6.6 0 0 0 .728-.526l.011-.116a1 1 0 0 1 1.032-.901l1.354.05a1 1 0 0 1 .45.125l2.392 1.333a.6.6 0 0 1 .126.955l-.11.106a.6.6 0 0 0 .138.96l3.672 1.946a.6.6 0 0 0 .88-.574l-.137-1.862a1 1 0 0 1 .834-1.06l2.115-.35a.594.594 0 0 0-.018-1.175l-4.065-.547a1 1 0 0 1-.451-.18l-1.992-1.434a1 1 0 0 1-.258-.273l-1.106-1.727a1 1 0 0 0-.842-.461h-2.474a1 1 0 0 1-.64-.232l-.586-.488a1 1 0 0 0-.608-.231l-2.24-.073a1 1 0 0 0-.601.178l-1.23.851a1 1 0 0 1-.456.172Z"/>
    </svg>
  );
};
