// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const KnSaintJohnFigtree = ({
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
      <path strokeLinejoin="round" d="m5.52 9.822-3.086.415a.3.3 0 0 0-.196.482l3.143 4.01a2 2 0 0 1 .425 1.31l-.034.878a.6.6 0 0 0 .196.468l4.641 4.213a2 2 0 0 0 .67.402l1.822.653a1 1 0 0 0 .796-.052l.896-.463a1 1 0 0 1 .583-.104l.884.11a1 1 0 0 0 .903-.364l.67-.834a1 1 0 0 1 .45-.317l3.553-1.237a.3.3 0 0 0 .195-.345L18.429 1.964a.3.3 0 0 0-.553-.089L14.222 8.17a1 1 0 0 1-.84.498l-2.02.049a2 2 0 0 0-.768.174l-1.933.864a2 2 0 0 1-.97.169l-1.541-.12a3 3 0 0 0-.63.018Z"/>
    </svg>
  );
};
