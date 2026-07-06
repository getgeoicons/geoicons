// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SouthernMexico = ({
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
      <path strokeLinejoin="round" d="M10.115 7.315 1.2 7.27l.028 2.29a1 1 0 0 0 .046.287l.292.932a1 1 0 0 0 .54.611l8.995 4.095a1 1 0 0 0 .816.006l1.392-.61a1 1 0 0 1 .815.006l.585.265q.175.08.307.218l.62.645a1 1 0 0 0 1.407.036l.788-.743a1 1 0 0 0 .302-.883l-.207-1.312 2.484-.297a1 1 0 0 0 .768-.53l1.405-2.693a1 1 0 0 0 .035-.85l-.024-.058a1 1 0 0 0-1.094-.598l-2.516.438a1 1 0 0 0-.79.712l-.412 1.446a1 1 0 0 1-.644.675l-2.841.95a1 1 0 0 1-.795-.07l-1.245-.675a1 1 0 0 1-.433-.467z"/>
    </svg>
  );
};
