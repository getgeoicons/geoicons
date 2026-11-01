// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Bz = ({
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
      <path strokeLinejoin="round" d="m9.617 22.788-1.838-.06a.3.3 0 0 1-.29-.32l.618-9.143.055-7.013a.6.6 0 0 1 .81-.557l.876.325a.6.6 0 0 0 .732-.268l2.12-3.776a1 1 0 0 1 1.259-.432l1.904.796a1 1 0 0 1 .611 1.001l-.105 1.327a3 3 0 0 1-.238.958l-.882 2.03a2 2 0 0 0-.08 1.373l.245.813a1 1 0 0 1-.008.6l-.336 1.026a2 2 0 0 0 0 1.249l.154.466a3 3 0 0 1-.158 2.26l-1.856 3.78a1 1 0 0 1-.512.482l-.696.29a2 2 0 0 0-.99.9l-.846 1.577a.6.6 0 0 1-.549.316Z"/>
    </svg>
  );
};
