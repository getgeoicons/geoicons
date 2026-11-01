// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const BhMainland = ({
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
      <path strokeLinejoin="round" d="m8.07 16.191.056.351a2 2 0 0 0 .612 1.151l1.388 1.294a3 3 0 0 1 .804 1.257l.654 1.988a.3.3 0 0 0 .53.078l1.032-1.47a2 2 0 0 0 .35-.913l.964-8.166a6 6 0 0 1 .617-2.029l1.712-3.345a1 1 0 0 0 .01-.89l-1.443-2.99a1 1 0 0 0-1.627-.253l-2.23 2.36a1 1 0 0 1-.951.287L9.08 4.564a1 1 0 0 0-.901.24l-.818.753a1 1 0 0 0-.316.853l.196 1.651a5 5 0 0 0 .342 1.315l1.016 2.468a3 3 0 0 1 .005 2.27l-.41 1.012a2 2 0 0 0-.123 1.065Z"/>
    </svg>
  );
};
