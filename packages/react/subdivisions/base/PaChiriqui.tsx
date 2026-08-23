// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const PaChiriqui = ({
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
      <path strokeLinejoin="round" d="M1.86 14.19a.6.6 0 0 1 .146-.985l1.98-.944a1 1 0 0 0 .569-.864l.041-1.083a1 1 0 0 0-.148-.563L3.382 8.02a.6.6 0 0 1-.004-.622l.45-.753a.6.6 0 0 1 .266-.239l1.82-.83a.6.6 0 0 1 .407-.032l7.303 1.987a.6.6 0 0 1 .435.674l-.486 3.031a.6.6 0 0 0 .534.692l1.16.114a.6.6 0 0 1 .458.293l.565.961a1 1 0 0 0 .757.488l2.815.297a1 1 0 0 0 .937-.44l.47-.703a.81.81 0 0 1 1.483.499l-.06.969a.6.6 0 0 1-.062.231l-1.572 3.146a.6.6 0 0 1-.952.164l-.967-.927a2 2 0 0 0-.746-.452l-2.575-.867a3 3 0 0 0-1.535-.1l-.606.118a.6.6 0 0 1-.7-.45l-.22-.937a.6.6 0 0 0-.746-.44l-1.994.558a1 1 0 0 1-.553-.004L8.02 14.02a3 3 0 0 0-1.967.092l-.446.18a1.5 1.5 0 0 0-.936 1.532l.12 1.28a.8.8 0 0 1-1.587.191l-.267-1.819a1 1 0 0 0-.317-.594z"/>
    </svg>
  );
};
