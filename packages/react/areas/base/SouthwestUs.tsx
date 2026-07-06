// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SouthwestUs = ({
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
      <path strokeLinejoin="round" d="m1.681 6.533-.43 3.44a.6.6 0 0 0 .31.603l2.932 1.579a1 1 0 0 0 .546.117l3.994-.287a1 1 0 0 1 .86.381l2.095 2.68a.6.6 0 0 0 .859.089l.505-.425a1 1 0 0 1 .906-.2l.484.131a1 1 0 0 1 .6.458l1.75 2.973a1 1 0 0 0 .708.48l1.646.256-.379-1.512a1 1 0 0 1 .05-.633l.037-.087a1 1 0 0 1 .251-.353l.39-.351a1 1 0 0 1 .128-.098l2.328-1.499a.6.6 0 0 0 .275-.49l.03-1.294a.6.6 0 0 0-.04-.23L21.49 9.59a1 1 0 0 1-.058-.228l-.417-3.153a.604.604 0 0 0-.644-.521c-7.953.58-14.546-.022-17.181-.445a.6.6 0 0 0-.516.16l-.81.77a.6.6 0 0 0-.182.36Z"/>
    </svg>
  );
};
