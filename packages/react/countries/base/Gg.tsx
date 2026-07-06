// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Gg = ({
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
      <path strokeLinejoin="round" d="m1.44 18.862-.128.811a1 1 0 0 0 .528 1.044l1.935 1.004a1 1 0 0 0 .535.109l2.95-.221a1 1 0 0 0 .925-1.03l-.058-1.795a1 1 0 0 1 .366-.806l.426-.348a1 1 0 0 0 .365-.726l.039-.811a1 1 0 0 0-.894-1.043l-.723-.075a1 1 0 0 0-.612.132L1.92 18.156a1 1 0 0 0-.48.706ZM20.857 2.227l-2.035 1.184a.986.986 0 1 0 1.011 1.692l2.007-1.232a.958.958 0 0 0-.983-1.644ZM14.154 20.84l.07.207a1 1 0 0 0 1.42.564l.682-.365a1 1 0 0 0 .351-1.448l-.203-.295a1 1 0 0 0-1.461-.204l-.548.454a1 1 0 0 0-.31 1.086Z"/>
    </svg>
  );
};
