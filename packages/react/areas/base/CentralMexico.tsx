// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CentralMexico = ({
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
      <path strokeLinejoin="round" d="m2.995 9.995-1.72 4.362a.6.6 0 0 0-.016.391l.41 1.376a.6.6 0 0 0 .858.358l1.174-.628a1 1 0 0 1 1.179.174l1.773 1.774a1 1 0 0 0 .707.293h2.433a1 1 0 0 0 .394-.081l1.685-.723a1 1 0 0 0 .494-.46l.271-.524a.6.6 0 0 1 .933-.173l1.378 1.23a.6.6 0 0 1 .198.388l.124 1.239a.6.6 0 0 0 .228.413l.007.006a.6.6 0 0 0 .653.054l.72-.387a.6.6 0 0 1 .746.145l.907 1.096a.6.6 0 0 0 .414.215l2.407.193a.6.6 0 0 0 .398-.111l.581-.418a.6.6 0 0 0 .15-.82l-1.155-1.736a.6.6 0 0 0-.44-.265l-1.198-.12a.6.6 0 0 1-.404-.217l-.742-.906a.6.6 0 0 0-.318-.202l-2.124-.534a1 1 0 0 1-.643-.507l-1.526-2.925a1 1 0 0 0-.086-.137l-2.412-3.216a1 1 0 0 1-.2-.588l-.019-1.563a1 1 0 0 0-.149-.513l-.958-1.555a1 1 0 0 0-.561-.433l-1.453-.44a.6.6 0 0 0-.77.638l.303 2.824a.6.6 0 0 1-.565.664l-1.752.092a1 1 0 0 0-.697.336L3.176 9.7a1 1 0 0 0-.181.295Z"/>
    </svg>
  );
};
