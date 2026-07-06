// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Kw = ({
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
      <path strokeLinejoin="round" d="M11.538 16.142 1.2 14.839l3.809-4.466a.5.5 0 0 0 .08-.13L7.966 3.46a.5.5 0 0 1 .207-.236l2.315-1.357a.5.5 0 0 1 .248-.069l3.703-.041a.5.5 0 0 1 .213.045l2.761 1.259a.5.5 0 0 0 .317.033l1.689-.38a.5.5 0 0 1 .514.195l2.159 2.978a.5.5 0 0 1-.01.6l-1.854 2.39a.5.5 0 0 1-.563.164l-1.873-.67a.5.5 0 0 0-.49.089l-2.564 2.154a.5.5 0 0 0 .068.814l1.114.654a.5.5 0 0 0 .588-.06l.827-.744a.5.5 0 0 1 .52-.093l.791.317a.5.5 0 0 1 .304.365l.9 4.453a.5.5 0 0 0 .096.21l2.162 2.744a.5.5 0 0 1 .096.201l.596 2.683-7.928.086a.5.5 0 0 1-.385-.174l-1.102-1.28a.5.5 0 0 1-.12-.326v-2.006a.5.5 0 0 0-.093-.289l-1.289-1.82a.5.5 0 0 0-.345-.206Z"/>
    </svg>
  );
};
