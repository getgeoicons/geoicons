// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const JmTrelawny = ({
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
      <path strokeLinejoin="round" d="M21.587 4a1 1 0 0 0-.76-.556c-5.28-.743-8.472-.952-13.82-1.1a3 3 0 0 1-.87-.154l-1.733-.577a.6.6 0 0 0-.784.485L1.288 18.716a.6.6 0 0 0 .541.681l7.888.696a2 2 0 0 0 .953-.15l1.785-.752a2 2 0 0 1 1.148-.122l1.823.344a2 2 0 0 1 .854.385l2.88 2.235a.6.6 0 0 0 .954-.346L22.706 9.82a3 3 0 0 0 .06-.866l-.194-2.589a2 2 0 0 0-.192-.715z"/>
    </svg>
  );
};
