// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const LcDennery = ({
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
      <path strokeLinejoin="round" d="M1.567 21.63a.6.6 0 0 0 .843.662l4.83-2.272a1 1 0 0 1 .897.023l2.87 1.534a1 1 0 0 0 1.158-.156l1.946-1.843a1 1 0 0 1 1.085-.191l1.164.504a1 1 0 0 0 .582.066l3.555-.665a1 1 0 0 0 .809-.86l.058-.462a1 1 0 0 0-.263-.807l-.65-.695a1 1 0 0 1-.164-1.13l.383-.768a1 1 0 0 0-.407-1.32l-.316-.177a1 1 0 0 1-.504-1.002l.061-.473a1 1 0 0 1 .549-.767l1.856-.918a1 1 0 0 0 .555-.822l.162-2.197q.045-.607-.016-1.212l-.227-2.272a1 1 0 0 0-.79-.88l-3.12-.656a2 2 0 0 0-1.272.151l-.963.459a1 1 0 0 1-.845.007l-2.317-1.056a2 2 0 0 0-1.08-.164l-2.035.257a2 2 0 0 0-.827.3L7.66 2.77a.6.6 0 0 0-.27.595l.228 1.515a2 2 0 0 1-.127 1.058L6.764 7.71a2 2 0 0 1-.687.867l-1.113.796a1 1 0 0 0-.412.704l-.431 3.895a1 1 0 0 1-.293.603l-1.864 1.833a1 1 0 0 0-.292.83l.252 2.127a2 2 0 0 1-.026.632z"/>
    </svg>
  );
};
