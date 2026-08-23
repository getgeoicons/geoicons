// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const JmSaintThomas = ({
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
      <path strokeLinejoin="round" d="M2.955 7.109a.6.6 0 0 0-.979.396l-.17 1.528a1 1 0 0 0 .068.487l.537 1.318a1 1 0 0 1-.042.843l-.882 1.671a1 1 0 0 0 .07 1.047l1.697 2.383a1 1 0 0 0 .72.415l3.57.341c.425.041.854.013 1.27-.082l3.425-.781a2 2 0 0 1 1.104.061l1.92.67a1 1 0 0 0 .65.003l4.299-1.454a3 3 0 0 1 1.023-.158l.35.007a1 1 0 0 0 1.005-1.172l-.016-.095a1 1 0 0 0-.91-.824l-.448-.034a1 1 0 0 1-.826-.567l-.665-1.393a1 1 0 0 0-1.058-.558l-1.193.188a2 2 0 0 1-1.019-.104l-5.733-2.168a2 2 0 0 0-.88-.122l-3.804.331a1 1 0 0 1-.724-.226z"/>
    </svg>
  );
};
