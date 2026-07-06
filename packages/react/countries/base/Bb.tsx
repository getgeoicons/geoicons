// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Bb = ({
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
      <path d="m11.341 21.268-4.247-.891a.5.5 0 0 1-.397-.49v-.977a.5.5 0 0 0-.317-.466l-1.042-.408a.5.5 0 0 1-.315-.416L3.665 3.86a.5.5 0 0 1 .174-.43l2.33-1.978a.5.5 0 0 1 .614-.025l2.058 1.47a.5.5 0 0 1 .169.208l2.613 6.042a.5.5 0 0 0 .223.242l7.145 3.842q.083.044.143.115l.994 1.16a.5.5 0 0 1 .051.579l-2.353 3.99a.5.5 0 0 1-.146.158l-4.746 3.275a.5.5 0 0 1-.704-.14l-.572-.883a.5.5 0 0 0-.317-.217Z"/>
    </svg>
  );
};
