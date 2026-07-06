// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Cw = ({
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
      <path strokeLinejoin="round" d="m1.986 7.168-.081.23a1 1 0 0 0 .248 1.052l2.002 1.932a1 1 0 0 1 .24.362l.619 1.619a1 1 0 0 0 .368.467l.606.416a1 1 0 0 0 .988.082l.095-.044a1 1 0 0 1 1.031.114l.357.274a1 1 0 0 1 .318.417L9.51 15.9a1 1 0 0 0 .3.403l1.557 1.256a1 1 0 0 0 .385.192l2.15.537a1 1 0 0 1 .243.096l5.263 2.924a1 1 0 0 0 .486.126h2.522a.5.5 0 0 0 .372-.832l-3.034-3.394a1 1 0 0 1-.185-.3l-.51-1.298a1 1 0 0 0-.354-.452l-1.614-1.139a1 1 0 0 0-.576-.183h-2.201a1 1 0 0 1-.267-.036l-3.088-.855a1 1 0 0 1-.365-.189l-2.09-1.703a1 1 0 0 1-.2-.219L7.162 9.13a1 1 0 0 1-.169-.557v-1.57a1 1 0 0 0-.132-.496l-.889-1.556a1 1 0 0 0-.668-.484l-1.177-.241a1 1 0 0 1-.388-.171l-1.498-1.09a.788.788 0 0 0-1.04 1.175l.285.306a1 1 0 0 1 .254.514l.289 1.708a1 1 0 0 1-.043.5Z"/>
    </svg>
  );
};
