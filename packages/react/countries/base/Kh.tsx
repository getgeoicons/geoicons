// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Kh = ({
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
      <path strokeLinejoin="round" d="M3.602 15.336 1.603 9.629a2 2 0 0 1 .437-2.037l1.878-1.98a2 2 0 0 1 1.16-.602l1.517-.223a4 4 0 0 1 .758-.04l3.722.165a3 3 0 0 1 1.173.296l3.616 1.747a.631.631 0 0 0 .887-.718l-.229-.939a.6.6 0 0 1 .385-.709l.585-.204a1 1 0 0 1 .737.03l.679.304a1 1 0 0 0 1.007-.113l1.76-1.32a.629.629 0 0 1 .956.747l-.767 1.825a2 2 0 0 0-.018 1.506l.374.952a2 2 0 0 1 .134.86l-.234 3.641a1 1 0 0 1-.63.866L16.116 15.8a.8.8 0 0 0-.285 1.298l1.173 1.226a.838.838 0 0 1-1.008 1.316l-.74-.404a2 2 0 0 0-1.842-.037l-3.171 1.564a2 2 0 0 1-.844.207l-2.81.058a.608.608 0 0 1-.405-1.075l.404-.339a.741.741 0 0 0-.734-1.263l-.617.229a.8.8 0 0 1-1.064-.6l-.342-1.79a6 6 0 0 0-.23-.854Z"/>
    </svg>
  );
};
