// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const UsOregon = ({
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
      <path strokeLinejoin="round" d="M21.77 5.249a.6.6 0 0 0-.466-.223l-5.134-.019a1 1 0 0 0-.198.02l-8.107 1.61a1 1 0 0 1-.984-.367l-1.31-1.684a.6.6 0 0 0-.41-.228l-1.846-.194a.6.6 0 0 0-.662.571l-.333 7.908a2 2 0 0 1-.073.458l-.932 3.309a2 2 0 0 0-.055.825l.345 2.41a.3.3 0 0 0 .298.258l19.108-.055a.3.3 0 0 0 .299-.29l.23-6.763a.6.6 0 0 0-.069-.302l-.612-1.155a.6.6 0 0 1-.016-.53l1.803-3.944a.6.6 0 0 0-.079-.626z"/>
    </svg>
  );
};
