// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Vg = ({
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
      <path strokeLinejoin="round" d="m5.976 14.102 2.039-2.071a2 2 0 0 1 1.166-.58l2.74-.358a2 2 0 0 1 .85.073l1.034.32a.748.748 0 0 1-.388 1.443l-.184-.042a1.94 1.94 0 0 0-1.6.341l-.079.06a2 2 0 0 1-1.067.397l-.404.028a2 2 0 0 0-.968.328l-1.083.717a1 1 0 0 1-.804.134l-1.113-.289a.3.3 0 0 1-.139-.5Zm12.452-2.719.627-2.163a.3.3 0 0 1 .297-.217l2.509.079a.3.3 0 0 1 .157.55l-3.136 2.085a.3.3 0 0 1-.454-.334Zm-16.42 1.05 1.769-.216a.735.735 0 0 0 .007-1.458l-.647-.086a1 1 0 0 0-.625.122l-.88.5a.611.611 0 0 0 .375 1.137Z"/>
    </svg>
  );
};
