// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const GtPeten = ({
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
      <path strokeLinejoin="round" d="M21.814 20.841a.6.6 0 0 0 .402-.534L22.8 9.334l-.087-6.692a.3.3 0 0 0-.3-.296l-16.41-.023a.3.3 0 0 0-.3.3l.004 4.685a.3.3 0 0 1-.302.3l-3.64-.025a.55.55 0 0 0-.302 1.013l6.59 4.255a1 1 0 0 1 .42.567l.415 1.463a1 1 0 0 0 .685.688l.89.256a1 1 0 0 1 .711 1.113l-.288 1.875a.6.6 0 0 0 .452.674l4.496 1.094a1 1 0 0 0 .553-.024l2.972-.992.053 2.112z"/>
    </svg>
  );
};
