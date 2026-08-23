// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const UsMissouri = ({
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
      <path strokeLinejoin="round" d="M5.107 19.202a.3.3 0 0 0 .299.3l14.256.047-.652 2.076 1.993-.02a.6.6 0 0 0 .56-.402l1.113-3.183a1 1 0 0 0-.015-.702l-.98-2.45a1 1 0 0 0-.265-.376l-1.845-1.636a1 1 0 0 1-.257-1.137l.375-.888a1 1 0 0 0-.494-1.293l-1.022-.484a1 1 0 0 1-.407-.354l-1.884-2.859a1 1 0 0 1-.16-.656l.133-1.25a.6.6 0 0 0-.147-.46l-.792-.896a.6.6 0 0 0-.453-.202L1.886 2.45a.3.3 0 0 0-.217.505l2.041 2.18a1 1 0 0 1 .216 1.01l-.135.39a1 1 0 0 0 .164.951L4.982 8.77a.6.6 0 0 1 .131.376z"/>
    </svg>
  );
};
