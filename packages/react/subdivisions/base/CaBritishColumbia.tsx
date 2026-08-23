// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CaBritishColumbia = ({
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
      <path strokeLinejoin="round" d="M17.67 4.047a.3.3 0 0 0-.3-.297H1.742a.3.3 0 0 0-.254.46l1.033 1.645a.3.3 0 0 0 .325.132l1.597-.388a.6.6 0 0 1 .662.285l1.93 3.363a1 1 0 0 0 .377.374l1.009.567a1 1 0 0 1 .494.694l.062.343a1 1 0 0 1-.066.574l-.46 1.067a1 1 0 0 0 .124 1.002l1.974 2.587a1 1 0 0 1 .201.693l-.053.617a1 1 0 0 0 .279.782l1.5 1.546a3 3 0 0 0 .927.649l.53.237a1 1 0 0 0 1.076-.168l.382-.341a1 1 0 0 1 .673-.256l6.308.04a.3.3 0 0 0 .284-.4l-.492-1.382a2 2 0 0 0-.51-.78l-3.587-3.395a1 1 0 0 1-.313-.718z"/>
    </svg>
  );
};
