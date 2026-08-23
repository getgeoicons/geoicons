// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const MxAguascalientes = ({
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
      <path strokeLinejoin="round" d="M22.332 12.38a1 1 0 0 0-.432-.659l-2.28-1.51a1 1 0 0 1-.444-.75l-.187-2.27a1 1 0 0 0-.947-.916l-1.26-.063a1 1 0 0 1-.703-.342L13.64 3.076a.6.6 0 0 0-.83-.071L9.173 5.958a1 1 0 0 1-.579.222l-2.32.119a.6.6 0 0 0-.566.546l-.273 3.052a1 1 0 0 1-.434.738l-1.198.813a1 1 0 0 0-.339.391l-1.942 4.005a1 1 0 0 0 .218 1.168l1.907 1.777a1 1 0 0 0 1.153.15l1.054-.563a1 1 0 0 1 .923-.01l5.46 2.764a1 1 0 0 0 .909-.002l2.68-1.374a3 3 0 0 0 1.126-1.003l1.499-2.242a1 1 0 0 1 .552-.404l3.28-.954a.6.6 0 0 0 .422-.681z"/>
    </svg>
  );
};
