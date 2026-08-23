// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const UsArizona = ({
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
      <path strokeLinejoin="round" d="M21.09 1.51a.3.3 0 0 0-.3-.3L5.624 1.2a.3.3 0 0 0-.3.304l.041 2.982a.3.3 0 0 1-.3.304h-1.64a.3.3 0 0 0-.299.324l.308 3.796a2 2 0 0 0 .386 1.03l1.008 1.359a.6.6 0 0 1 .053.63l-1.518 2.985a2 2 0 0 0-.21.743l-.196 2.378a.6.6 0 0 0 .392.612l11.018 4.031c.22.08.453.122.687.122h5.726a.3.3 0 0 0 .3-.3z"/>
    </svg>
  );
};
