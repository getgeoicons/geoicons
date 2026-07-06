// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Iq = ({
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
      <path strokeLinejoin="round" d="m1.216 12.068.787 2.603a.5.5 0 0 0 .294.32l5.624 2.236a.5.5 0 0 1 .145.088l5.707 5.002a.5.5 0 0 0 .282.122l3.439.328a.5.5 0 0 0 .5-.284l.87-1.84a.5.5 0 0 1 .534-.28l3.496.583-2.169-2.653a.5.5 0 0 1-.113-.322l.023-2.046a.5.5 0 0 0-.155-.368l-4.991-4.75a.5.5 0 0 1-.105-.58l2.078-4.282a.5.5 0 0 0-.335-.705l-1.621-.383a.5.5 0 0 1-.342-.284l-1.13-2.552a.5.5 0 0 0-.391-.294L9.947 1.24a.5.5 0 0 0-.472.205L8.347 3.021a.5.5 0 0 1-.257.186l-1.143.36a.5.5 0 0 0-.35.454L6.41 8.086a.5.5 0 0 1-.231.4L1.427 11.5a.5.5 0 0 0-.211.567Z"/>
    </svg>
  );
};
