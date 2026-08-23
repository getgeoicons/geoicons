// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const UsRhodeIsland = ({
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
      <path strokeLinejoin="round" d="m3.717 20.285-.31 2.085a.3.3 0 0 0 .362.337l8.03-1.762a1 1 0 0 0 .619-.422l1.037-1.556a1 1 0 0 1 .588-.415l3.198-.807a1 1 0 0 1 .794.134l.39.256a1 1 0 0 0 1.167-.05l.94-.738a.3.3 0 0 0 .113-.257l-.339-4.883a.3.3 0 0 0-.172-.251l-1.667-.778a1 1 0 0 1-.365-.29l-1.853-2.374a1 1 0 0 1-.212-.615V4.866l-1.42.16-.029-3.518a.3.3 0 0 0-.31-.297l-8.898.318a.3.3 0 0 0-.29.309l.35 11.568-.225 5.813a.3.3 0 0 1-.2.271l-.903.318a.6.6 0 0 0-.395.477Z"/>
    </svg>
  );
};
