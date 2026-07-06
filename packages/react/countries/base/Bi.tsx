// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Bi = ({
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
      <path strokeLinejoin="round" d="m13.096 21.075-3.225 1.52a.5.5 0 0 1-.656-.22l-3.221-6.143a.5.5 0 0 1-.055-.281l.352-3.592a.5.5 0 0 0-.373-.533l-.564-.146a.5.5 0 0 1-.368-.573l.385-2.118a.5.5 0 0 0-.159-.464c-.471-.423-1.633-1.477-2.375-2.254a.49.49 0 0 1-.11-.48l.438-1.433a.5.5 0 0 1 .564-.347l1.96.343a.5.5 0 0 1 .406.398l.235 1.23a.5.5 0 0 0 .566.4l4.844-.734a.5.5 0 0 0 .425-.48l.096-3.216a.5.5 0 0 1 .681-.451l1.712.667a.5.5 0 0 0 .378-.006l1.963-.842a.5.5 0 0 1 .516.075l.794.657a.5.5 0 0 1 .172.483l-.762 3.823a.5.5 0 0 0 .357.58l2.912.803a.5.5 0 0 1 .367.49l-.033 2.11a.5.5 0 0 1-.191.385l-3.523 2.77a.5.5 0 0 0-.185.317l-.32 2.06a.5.5 0 0 1-.282.377l-.92.43a.5.5 0 0 0-.22.198l-2.363 3.999a.5.5 0 0 1-.218.198Z"/>
    </svg>
  );
};
