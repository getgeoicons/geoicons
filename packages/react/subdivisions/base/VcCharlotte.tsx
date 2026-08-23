// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const VcCharlotte = ({
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
      <path strokeLinejoin="round" d="M7.668 18.12a1 1 0 0 0 .219.937l1.907 2.127a3 3 0 0 0 1.387.875l1.984.584a.6.6 0 0 0 .73-.361l2.308-6.044a4 4 0 0 0 .262-1.503l-.14-7.292a4 4 0 0 0-.353-1.569L14.31 2.187a1 1 0 0 0-.78-.58l-2.543-.339a.3.3 0 0 0-.318.411l1.037 2.534a.3.3 0 0 1-.233.41l-1.225.184a.3.3 0 0 0-.252.344l1.19 7.442a1 1 0 0 1-.562 1.062l-1.552.731a1 1 0 0 0-.537.636z"/>
    </svg>
  );
};
