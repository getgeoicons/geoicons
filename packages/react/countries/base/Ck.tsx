// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Ck = ({
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
      <path strokeLinejoin="round" d="M4.45 2.43a1.23 1.23 0 1 1-2.46 0 1.23 1.23 0 0 1 2.46 0Zm2.109 15.856a1.312 1.312 0 1 1-2.624 0 1.312 1.312 0 0 1 2.624 0ZM10.09 4.814a1.267 1.267 0 1 1-2.534 0 1.267 1.267 0 0 1 2.534 0Zm8.731 16.691a1.295 1.295 0 1 1-2.59 0 1.295 1.295 0 0 1 2.59 0ZM17.336 6.159l-2.285 1.697a1 1 0 0 0-.185 1.428l.06.075a1 1 0 0 0 1.363.19l1.503-1.075 1.888 1.732a1 1 0 0 0 1.3.045l.128-.102a1 1 0 0 0 .063-1.51l-2.553-2.405a1 1 0 0 0-1.282-.075Z"/>
    </svg>
  );
};
