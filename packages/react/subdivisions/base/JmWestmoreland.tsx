// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const JmWestmoreland = ({
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
      <path strokeLinejoin="round" d="M21.403 7.917a1 1 0 0 0-.837-.549l-3.67-.207a.6.6 0 0 1-.27-.082l-2.83-1.668a.6.6 0 0 0-.3-.083L8.44 5.277a.6.6 0 0 0-.46.208l-1.51 1.75a.6.6 0 0 1-.542.2L3.302 7.05a1 1 0 0 0-.965.415l-.82 1.17a1 1 0 0 0-.104.96l.363.87a1 1 0 0 0 .696.588l1.97.457q.576.135 1.106.4l1.21.605a1 1 0 0 0 .782.048l1.546-.55a3 3 0 0 1 1.11-.172l3.588.126a2.27 2.27 0 0 1 2.176 2.015l.126 1.125a1 1 0 0 0 .46.733l.783.496c.314.199.588.454.81.753l.555.753a.6.6 0 0 0 1.044-.144l.764-2.013a.6.6 0 0 0-.033-.497l-.374-.693a.6.6 0 0 1 .069-.671l2.211-2.63a1 1 0 0 0 .128-1.094z"/>
    </svg>
  );
};
