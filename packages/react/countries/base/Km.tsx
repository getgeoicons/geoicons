// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Km = ({
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
      <path strokeLinejoin="round" d="m5.877 13.24.43-.338a1 1 0 0 0 .272-1.247L4.982 8.571a3 3 0 0 1-.315-1.734l.197-1.653a2 2 0 0 0-.049-.731l-.152-.596a1 1 0 0 0-.881-.749l-.723-.063a1 1 0 0 0-1.078.859l-.7 5.041a2 2 0 0 0 .174 1.13l.429.907a2 2 0 0 0 .657.781l2.144 1.508a1 1 0 0 0 1.192-.031Zm1.52 5.923.452.755a1 1 0 0 0 .668.467l1.777.344 1.3.19a.899.899 0 0 0 .49-1.714l-3.412-1.488a1 1 0 0 0-1.013.127l-.019.015a1 1 0 0 0-.244 1.304Zm10.344-1.862 4.042 2.728a.6.6 0 0 0 .934-.537l-.269-3.973a.6.6 0 0 0-.786-.53l-3.773 1.245a.6.6 0 0 0-.148 1.067Z"/>
    </svg>
  );
};
