// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CrGuanacaste = ({
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
      <path strokeLinejoin="round" d="M13.908 3.686a.6.6 0 0 0-.382-.698L9.081 1.385a.6.6 0 0 0-.746.308L7.125 4.25a1 1 0 0 1-.851.57l-1.307.071a1 1 0 0 0-.37.095l-.127.06a.875.875 0 0 0 .084 1.613l2.563.918a1 1 0 0 1 .656.829l.094.825a1 1 0 0 1-.49.977l-1.313.764a1 1 0 0 0-.407.45l-.848 1.864a1 1 0 0 0-.047.704l.825 2.725c.097.32.247.622.443.893l1.579 2.174a1 1 0 0 0 .578.386l2.531.6a3 3 0 0 1 .977.427l2.397 1.604.724-1.63a.3.3 0 0 0-.176-.405l-1.299-.451a.3.3 0 0 1-.201-.283v-.693a.3.3 0 0 1 .318-.3l1.24.076a.3.3 0 0 0 .318-.282l.016-.267a.6.6 0 0 0-.19-.475l-1.303-1.21a.6.6 0 0 1-.125-.715l.15-.292a.6.6 0 0 1 .717-.296l3.856 1.24a.6.6 0 0 0 .677-.231l1.587-2.3a1 1 0 0 0 .177-.546l.035-1.681a1 1 0 0 0-.421-.837l-2.806-1.99a5 5 0 0 0-.893-.504l-4.066-1.773a2 2 0 0 1-.854-.708l-.253-.372a.6.6 0 0 1 .269-.893l1.943-.795a.6.6 0 0 0 .358-.422z"/>
    </svg>
  );
};
