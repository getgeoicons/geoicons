// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const BalearicIslands = ({
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
      <path strokeLinejoin="round" d="M13.6 6.847 9.778 9.535a.6.6 0 0 0 .169 1.065l1.367.42a1 1 0 0 1 .365.204l1.445 1.266a1 1 0 0 0 1.485-.188l1.613-2.367a1 1 0 0 0-.012-1.144l-1.22-1.707a1 1 0 0 0-1.388-.237ZM2.131 14.285l-.585.946a1 1 0 0 0 .029 1.097l.807 1.16a1 1 0 0 0 .618.408l.337.07a1 1 0 0 0 1.13-1.353l-.167-.415a1 1 0 0 1-.067-.47l.088-.906a1 1 0 0 0-1.238-1.067l-.344.086a1 1 0 0 0-.608.444ZM20.4 5.657H19a.877.877 0 0 0-.865.968c.05.537.518 1.051 1.056 1.027l.448-.02a1 1 0 0 1 .782.325l.572.626a.879.879 0 0 0 1.331-1.147l-1.146-1.41a1 1 0 0 0-.776-.37Z"/>
    </svg>
  );
};
