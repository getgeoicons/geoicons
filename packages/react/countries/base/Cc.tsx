// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Cc = ({
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
      <path d="M6.412 16.034a.875.875 0 0 1 1.167.59l.91 3.44.125.467.47-.107.965-.221a.874.874 0 1 1 .366 1.71l-1.834.364a1.194 1.194 0 0 1-1.375-.827L5.894 17.1a.875.875 0 0 1 .518-1.066Zm7.162-3.378a.86.86 0 0 1 1.197.316l3.22 5.792a1.19 1.19 0 0 1-.416 1.596l-1.895 1.167a.872.872 0 1 1-.89-1.498l1.169-.67.439-.252-.258-.435-2.86-4.844a.86.86 0 0 1 .294-1.172ZM7.364 1.7a1.123 1.123 0 1 1 0 2.246 1.123 1.123 0 0 1 0-2.246Z"/>
    </svg>
  );
};
