// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Am = ({
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
      <path strokeLinejoin="round" d="m2.482 8.504 1.11 3.274a.5.5 0 0 0 .443.338l3.687.224a.5.5 0 0 1 .345.168l2.034 2.31a.5.5 0 0 0 .494.155l1.673-.407a.5.5 0 0 1 .575.281l.53 1.184a.5.5 0 0 0 .457.295h2.996a.5.5 0 0 1 .461.308l2.405 5.784a.5.5 0 0 0 .564.297l1.866-.39a.5.5 0 0 0 .388-.588l-.621-3.09a.5.5 0 0 1 .025-.281l.563-1.429a.5.5 0 0 0-.249-.634l-4.453-2.144a.5.5 0 0 1-.246-.64l1.173-2.875a.5.5 0 0 0-.31-.665l-2.042-.654a.5.5 0 0 1-.248-.177l-1.46-1.956a.5.5 0 0 1 .049-.654l1.2-1.188a.5.5 0 0 0-.014-.723l-3.547-3.27a.5.5 0 0 0-.4-.128L2.25 2.437a.5.5 0 0 0-.326.812l1.617 1.983a.5.5 0 0 1 .066.526L2.502 8.133a.5.5 0 0 0-.02.371Z"/>
    </svg>
  );
};
