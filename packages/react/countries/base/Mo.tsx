// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Mo = ({
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
      <path strokeLinejoin="round" d="M6.476 6.113 5.628 7.12a1 1 0 0 0-.236.644v.145a1 1 0 0 0 .15.527l1.742 2.809a1 1 0 0 1 .134.35l.294 1.63a1 1 0 0 0 .225.475l1.592 1.852a1 1 0 0 1 .238.741l-.46 5.124a1 1 0 0 0 .338.842l.083.072a1 1 0 0 0 1.154.116l.364-.208a1 1 0 0 1 .402-.127l1.384-.13a.6.6 0 0 0 .54-.666l-.087-.762a1 1 0 0 1 .945-1.112l1.253-.06a1 1 0 0 0 .47-.145l1.762-1.07a1 1 0 0 0 .425-1.185l-1.707-4.87a1 1 0 0 0-.994-.668l-3.414.172-.233-6.523a1 1 0 0 0-.018-.155l-.429-2.206a1 1 0 0 0-.673-.76l-2.063-.67a1 1 0 0 0-.632.006l-.932.319a1 1 0 0 0-.567 1.4l.149.292a1 1 0 0 1 .1.585L6.702 5.6a1 1 0 0 1-.226.513Z"/>
    </svg>
  );
};
