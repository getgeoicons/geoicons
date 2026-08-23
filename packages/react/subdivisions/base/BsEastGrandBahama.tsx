// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const BsEastGrandBahama = ({
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
      <path strokeLinejoin="round" d="M10.355 9.565a1 1 0 0 1-.502-.05l-1.458-.54a1 1 0 0 0-.953.142l-1.184.9a1 1 0 0 1-.769.191l-3.263-.542a.6.6 0 0 0-.66.804l1.053 2.794a.6.6 0 0 0 .643.383L7.989 13l7.31-1.122a4 4 0 0 1 2.073.232l.377.148a4 4 0 0 1 2.025 1.77l1.15 2.055a.6.6 0 0 0 1.023.039l.614-.927a1 1 0 0 0 .14-.781l-.564-2.397a1 1 0 0 0-.503-.653l-1.619-.864a1 1 0 0 1-.519-.737l-.258-1.76a.6.6 0 0 0-.93-.41l-1.209.82a1 1 0 0 1-.406.16z"/>
    </svg>
  );
};
