// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Il = ({
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
      <path strokeLinejoin="round" d="m11.536 22.8-3.648-9.266a.5.5 0 0 1 .107-.531l1.483-1.528a.5.5 0 0 0 .135-.428l-.14-.88a.5.5 0 0 1 .023-.25l1.16-3.185.929-3.577a.5.5 0 0 1 .504-.374l1.426.058a.5.5 0 0 0 .486-.316l.522-1.323 1.707.44-.895 4.773a.5.5 0 0 1-.666.377l-1.27-.473a.5.5 0 0 0-.648.308l-.54 1.595a.5.5 0 0 0 .049.425l.538.863a.5.5 0 0 1-.17.695l-.487.288a.5.5 0 0 0-.225.286l-.507 1.686 2.802-.396a.5.5 0 0 1 .547.647z"/>
    </svg>
  );
};
