// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const UsKentucky = ({
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
      <path strokeLinejoin="round" d="M22.251 13.518a.6.6 0 0 0 .118-.884l-.908-1.07a1 1 0 0 1-.236-.588l-.023-.392a2 2 0 0 0-.346-1.011l-.42-.616a1 1 0 0 0-.95-.428l-1.393.174a1 1 0 0 1-.648-.141l-1.784-1.1a1 1 0 0 0-1.032-.01l-1.651.97a1 1 0 0 0-.334.32l-1.228 1.906a1 1 0 0 1-.766.456l-4.595.343a.6.6 0 0 0-.488.323l-1.229 2.374a.6.6 0 0 1-.643.314l-.885-.166a.6.6 0 0 0-.661.353L1.567 16a.6.6 0 0 0 .563.837l15.548-.304a.6.6 0 0 0 .328-.105z"/>
    </svg>
  );
};
