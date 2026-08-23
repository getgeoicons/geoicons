// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const MxBajaCalifornia = ({
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
      <path strokeLinejoin="round" d="M12.68 1.67a.3.3 0 0 0-.302-.42l-8.575.83a.3.3 0 0 0-.246.42l5.366 12.17a1 1 0 0 0 .283.372l5.636 4.595a1 1 0 0 1 .361.665l.247 2.231a.3.3 0 0 0 .299.267h4.507a.3.3 0 0 0 .296-.35l-.207-1.23a1 1 0 0 0-.38-.63l-2.108-1.604a1 1 0 0 1-.351-.505l-.473-1.556a1 1 0 0 0-.28-.445l-3.007-2.761a1 1 0 0 1-.319-.644l-.631-6.751a1 1 0 0 0-.14-.423l-.8-1.329a1 1 0 0 1-.057-.923z"/>
    </svg>
  );
};
