// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const DoMonteCristi = ({
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
      <path strokeLinejoin="round" d="M19.01 8.28a1 1 0 0 0-.767-.569l-2.431-.344a3 3 0 0 1-.91-.281l-3.4-1.68a3 3 0 0 0-1.576-.3l-4.374.36a.804.804 0 0 0-.733.76A2.01 2.01 0 0 1 3.9 7.811L1.45 9.385a.3.3 0 0 0-.092.412l1.374 2.186a.3.3 0 0 1-.117.427l-.815.418a.3.3 0 0 0-.14.383l.697 1.653a1 1 0 0 0 .706.589l1.98.436a1 1 0 0 0 .803-.168l.617-.45a1 1 0 0 1 .804-.168l2.213.487a1 1 0 0 1 .77.802l.085.485a1 1 0 0 0 .58.74l1.854.82a1 1 0 0 0 .667.051l2.703-.732a1 1 0 0 1 .682.057l2.152.998a1 1 0 0 0 .678.06l1.155-.308a1 1 0 0 0 .73-1.126l-.224-1.385a2 2 0 0 1 .057-.89l1.241-4.172a.6.6 0 0 0-.464-.76l-1.431-.27a2 2 0 0 1-1.445-1.122z"/>
    </svg>
  );
};
