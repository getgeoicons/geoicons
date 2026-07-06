// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Gt = ({
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
      <path strokeLinejoin="round" d="m7.975 3.78.04-2.077a.5.5 0 0 1 .499-.49l8.344-.012a.5.5 0 0 1 .5.517l-.314 9.012a.5.5 0 0 0 .505.517l2.583-.025a.5.5 0 0 1 .258.069l1.198.703a.5.5 0 0 1 .025.847l-4.1 2.742a.5.5 0 0 0-.223.433l.078 2.219a.5.5 0 0 1-.172.395l-4.609 3.992a.5.5 0 0 1-.466.102l-2.322-.67a.5.5 0 0 0-.117-.02l-3.392-.15a.5.5 0 0 1-.262-.088l-4.015-2.773a.5.5 0 0 1-.2-.538l.563-2.146a.5.5 0 0 0-.041-.359l-.485-.925a.5.5 0 0 1 .006-.476l2.08-3.736a.5.5 0 0 1 .439-.257l5.968.028a.5.5 0 0 0 .494-.407l.187-.99a.5.5 0 0 0-.169-.475L6.034 4.66a.25.25 0 0 1 .172-.44l1.249.05a.5.5 0 0 0 .52-.49Z"/>
    </svg>
  );
};
