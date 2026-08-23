// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const DmSaintPatrick = ({
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
      <path strokeLinejoin="round" d="M11.13 3.79a1 1 0 0 0-.403 1.005l.037.19a2 2 0 0 1-.159 1.24L9.562 8.411a3 3 0 0 1-.866 1.078l-.5.388c-.308.24-.675.396-1.062.451a2.25 2.25 0 0 0-1.39.763l-1.053 1.23a3 3 0 0 0-.616 1.159l-.239.871a3 3 0 0 0-.08 1.197l.313 2.3c.054.395.196.773.415 1.105.18.271.307.572.377.89l.513 2.316a.6.6 0 0 0 .767.442l.267-.085a.6.6 0 0 0 .42-.563l.006-.447a1 1 0 0 1 .57-.888l.886-.423a1 1 0 0 0 .539-.655l.398-1.559a1 1 0 0 1 .825-.742l.248-.036a3 3 0 0 1 1.634.22l.293.128a1 1 0 0 0 .554.072l2.052-.32a3 3 0 0 0 1.116-.413l.983-.608a1 1 0 0 0 .46-.686l.687-4.128a1 1 0 0 1 .44-.675l.496-.322a1 1 0 0 0 .451-.927l-.12-1.339a4 4 0 0 1 .029-.95l.367-2.442c.041-.273.12-.54.234-.792l.234-.517a.6.6 0 0 0-.007-.509l-.658-1.36a.6.6 0 0 0-.682-.322l-6.08 1.475a2 2 0 0 0-.687.313z"/>
    </svg>
  );
};
