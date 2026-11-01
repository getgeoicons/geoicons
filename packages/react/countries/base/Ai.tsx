// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Ai = ({
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
      <path strokeLinejoin="round" d="m9.618 13.235-.047.15a1 1 0 0 1-.853.694l-2.928.298a1 1 0 0 0-.51.203l-3.81 2.933a.582.582 0 0 0 .442 1.036l2.388-.364a2 2 0 0 0 .747-.274l1.757-1.082a1 1 0 0 1 1.33.259l.066.09a.6.6 0 0 0 .69.208l1.715-.629a2 2 0 0 0 .712-.45l.84-.823a2 2 0 0 1 .59-.401l4.002-1.774a2 2 0 0 0 .835-.692l.373-.539a1 1 0 0 1 .39-.333l1.57-.753a1 1 0 0 0 .55-.715l.31-1.626a1 1 0 0 1 .43-.647l1.08-.715a.827.827 0 0 0-.87-1.404l-2.474 1.43a1 1 0 0 1-.468.134l-2.151.07a2 2 0 0 0-.904.249L12.07 9.62a1 1 0 0 0-.432 1.276 1 1 0 0 1-.525 1.32l-.933.398a1 1 0 0 0-.562.62Z"/>
    </svg>
  );
};
