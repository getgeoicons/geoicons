// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const PaPanamaOeste = ({
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
      <path strokeLinejoin="round" d="M4.522 7.117a1 1 0 0 0-.293.324l-.609 1.08a2 2 0 0 0-.236 1.277l.24 1.62a2 2 0 0 0 .327.831l.862 1.264A2 2 0 0 1 5.16 14.6l.105 5.105a2 2 0 0 0 .326 1.054l1.007 1.54a.6.6 0 0 0 .83.173l2.048-1.34a1 1 0 0 0 .13-.101l1.674-1.546a3 3 0 0 1 1.443-.737l1.126-.227a3 3 0 0 0 1.379-.68l1.816-1.583a.604.604 0 0 0-.707-.974l-1.639.982a.806.806 0 0 1-1.215-.79l.002-.02a.83.83 0 0 1 .392-.608l.1-.062a1.89 1.89 0 0 0 .796-2.237 1.89 1.89 0 0 1 .194-1.65l.126-.194a2 2 0 0 1 1.505-.909l2.88-.254a1.301 1.301 0 0 0 .872-2.144l-3.375-3.926a1 1 0 0 0-.786-.348l-1.785.05a1 1 0 0 1-1.007-.794l-.048-.232a1 1 0 0 0-.915-.793L10.9 1.257a1 1 0 0 0-1.048.822L9.57 3.66a1 1 0 0 0-.016.166l-.02 2.09a1 1 0 0 1-.736.955l-1.024.281a1 1 0 0 1-.903-.194l-.626-.518a.6.6 0 0 0-.73-.027z"/>
    </svg>
  );
};
