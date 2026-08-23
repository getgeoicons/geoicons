// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const JmSaintCatherine = ({
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
      <path strokeLinejoin="round" d="M3.601 4.335a.6.6 0 0 0-.496.776l2.256 7.163q.074.23.108.469l.988 6.789a.6.6 0 0 0 .776.485l2.824-.902a1 1 0 0 1 1.03.265l.308.325a1 1 0 0 1 .165 1.14l-.37.729a.596.596 0 0 0 .485.865l3.545.279a2.8 2.8 0 0 0 2.759-1.608l2.823-6.044a1 1 0 0 0-.227-1.158L19.18 12.62a1 1 0 0 1-.264-1.07l1.001-2.82a1 1 0 0 0 .043-.505l-.312-1.804a1 1 0 0 0-.542-.727l-.683-.338a2 2 0 0 1-.95-.999l-1.14-2.638a.8.8 0 0 0-.71-.482l-.943-.03a1 1 0 0 0-.455.094l-4.53 2.115a3 3 0 0 1-.89.257z"/>
    </svg>
  );
};
