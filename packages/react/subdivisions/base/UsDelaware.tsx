// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const UsDelaware = ({
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
      <path strokeLinejoin="round" d="M7.595 2.967a.3.3 0 0 0-.048.18l1.115 19.236a.3.3 0 0 0 .294.282l6.826.123a.6.6 0 0 0 .608-.661l-.444-4.33a.6.6 0 0 0-.142-.33l-3.367-3.917a1 1 0 0 1-.241-.642l-.024-2.33a1 1 0 0 0-.147-.513L10.31 7.266a1 1 0 0 1-.142-.424l-.17-1.712a1 1 0 0 1 .156-.64l1.601-2.482a.275.275 0 0 0-.135-.406l-.433-.163a2.73 2.73 0 0 0-2.215.134l-.023.012a2.9 2.9 0 0 0-1.069.956z"/>
    </svg>
  );
};
