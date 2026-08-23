// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const MxYucatan = ({
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
      <path strokeLinejoin="round" d="M1.419 9.391a1 1 0 0 0-.217.627l.008 1.887a.6.6 0 0 0 .43.573l2.265.667a1 1 0 0 1 .523.366l4.653 6.318a.6.6 0 0 0 .888.087l3.797-3.464a3 3 0 0 1 .793-.52l3.552-1.596a2 2 0 0 0 .585-.4l2.408-2.375q.202-.199.34-.446l1.095-1.952a2 2 0 0 0 .256-.998l-.03-2.996a.6.6 0 0 0-.46-.578l-3.416-.82a2 2 0 0 0-1.119.051C13.394 5.3 10.602 5.908 5.844 6.574a3 3 0 0 0-.879.262l-1.804.857a3 3 0 0 0-1.062.843z"/>
    </svg>
  );
};
