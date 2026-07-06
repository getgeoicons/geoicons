// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Gq = ({
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
      <path strokeLinejoin="round" d="M6.065 9.037 1.35 16.753a.5.5 0 0 0-.012.502l.148.268a.5.5 0 0 0 .583.237l.64-.194a.5.5 0 0 1 .604.281l.219.508a.5.5 0 0 0 .59.285l1.301-.351a.5.5 0 0 1 .449.097l1.388 1.146a.5.5 0 0 0 .708-.072l.32-.397a.5.5 0 0 1 .39-.186l13.59.028a.5.5 0 0 0 .502-.5l.028-11.792a.5.5 0 0 0-.498-.501L7.816 6.054a.5.5 0 0 1-.48-.366l-.321-1.155a.5.5 0 0 0-.51-.365l-.404.023a.5.5 0 0 0-.468.562l.501 3.96a.5.5 0 0 1-.07.324Z"/>
    </svg>
  );
};
