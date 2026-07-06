// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const VisegradRegion = ({
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
      <path strokeLinejoin="round" d="m12.966 22.402-2.037-1.253a1 1 0 0 1-.315-1.395l.724-1.12a1 1 0 0 0 .139-.749l-.253-1.2a1 1 0 0 0-1.199-.77l-2.68.605a1 1 0 0 1-.96-.302l-2.313-2.54a.9.9 0 0 1 .256-1.408l2.857-1.46a1 1 0 0 0 .512-1.145l-1.341-5.08a.6.6 0 0 1 .257-.66l3.681-2.352a1 1 0 0 1 1.139.043l.723.542a1 1 0 0 0 .806.179l4.027-.848a1 1 0 0 1 1.082.497l.957 1.741a1 1 0 0 1 .094.725l-.358 1.432a1 1 0 0 0 .089.714l1.506 2.812a1 1 0 0 1-.196 1.201l-.846.795a1 1 0 0 0-.28.468l-.62 2.294a1 1 0 0 0 .303 1.01l.725.64a.6.6 0 0 1 .157.678l-1.543 3.747a1 1 0 0 1-.748.603l-1.682.302a1 1 0 0 0-.502.25l-.958.886a1 1 0 0 1-1.203.118Z"/>
    </svg>
  );
};
