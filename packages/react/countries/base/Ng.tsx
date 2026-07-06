// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Ng = ({
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
      <path strokeLinejoin="round" d="m1.295 12.287-.085 4.208a.5.5 0 0 0 .512.51l2.3-.052a.5.5 0 0 1 .414.204l2.509 3.404a.5.5 0 0 0 .48.197l3.848-.605a.5.5 0 0 0 .357-.247l2.453-4.31a.5.5 0 0 1 .72-.164l1.6 1.11a.5.5 0 0 0 .73-.182l4.053-7.86a.5.5 0 0 1 .163-.184l1.087-.743a.5.5 0 0 0 .162-.642l-1.622-3.148a.5.5 0 0 0-.706-.197l-1.538.946a.5.5 0 0 1-.249.074l-9.102.251a.5.5 0 0 1-.266-.068L6.57 3.307a.5.5 0 0 0-.405-.044l-2.093.676a.5.5 0 0 0-.281.228l-.86 1.51a.5.5 0 0 0-.063.31l.388 3.134a.5.5 0 0 1-.087.348L1.386 12.01a.5.5 0 0 0-.091.277Z"/>
    </svg>
  );
};
