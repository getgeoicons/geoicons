// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Ae = ({
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
      <path strokeLinejoin="round" d="m16.963 20.54-11.029-1.4a.5.5 0 0 1-.326-.182l-4.298-5.33a.5.5 0 0 1-.111-.314v-.393a.5.5 0 0 1 .802-.4l1.618 1.224a.5.5 0 0 0 .523.05l1.459-.722a.5.5 0 0 1 .28-.048l4.782.558a.5.5 0 0 0 .211-.021l2.765-.89a.5.5 0 0 0 .291-.247l1.255-2.432a.5.5 0 0 1 .093-.127l5.893-5.8a.5.5 0 0 1 .844.273l.695 4.091a.5.5 0 0 1-.442.581l-1.356.14a.5.5 0 0 0-.439.597l.63 3.12a.5.5 0 0 1-.283.556l-1.62.732a.5.5 0 0 0-.269.3l-1.276 3.887a.5.5 0 0 0-.024.122l-.108 1.612a.5.5 0 0 1-.561.463Z"/>
    </svg>
  );
};
