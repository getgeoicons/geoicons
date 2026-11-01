// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Aw = ({
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
      <path strokeLinejoin="round" d="m2.954 10.446 5.247 4.96c.245.23.544.397.87.482l1.213.316a2 2 0 0 1 .889.501l2.466 2.397a6 6 0 0 0 1.294.957l4.589 2.518a1 1 0 0 0 .838.058l.575-.22a1 1 0 0 0 .592-1.25L19.85 16.14a3 3 0 0 0-.725-1.172l-4.952-4.952a4 4 0 0 0-.982-.72L10.568 7.93a4 4 0 0 1-1.011-.75l-1.62-1.654a3 3 0 0 1-.493-.668l-.454-.836a3 3 0 0 0-.894-1.012L4.117 1.6a.954.954 0 0 0-1.28 1.394l.4.47a2 2 0 0 1 .367.647l.61 1.776a1 1 0 0 1-.067.801L2.762 9.242a1 1 0 0 0 .192 1.204Z"/>
    </svg>
  );
};
