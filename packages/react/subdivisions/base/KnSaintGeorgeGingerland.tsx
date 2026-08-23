// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const KnSaintGeorgeGingerland = ({
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
      <path strokeLinejoin="round" d="M6.725 22.528 2.373 1.658a.3.3 0 0 1 .36-.353l9.27 2.13a2 2 0 0 1 .84.418l1.462 1.23a1 1 0 0 0 .816.22l1.172-.205a2 2 0 0 1 1.041.096l4.104 1.524a.3.3 0 0 1 .175.39l-.41 1.06a1.6 1.6 0 0 0-.006 1.143c.184.494.201 1.034.05 1.54l-.04.133a2.83 2.83 0 0 1-.868 1.33l-.087.076a3 3 0 0 0-1.019 1.857l-.435 3.077a3 3 0 0 1-.804 1.654l-2.063 2.155a1 1 0 0 1-.882.296l-1.794-.29a3 3 0 0 0-2.031.394l-1.09.658a2 2 0 0 1-.774.272l-2.302.3a.3.3 0 0 1-.333-.235Z"/>
    </svg>
  );
};
