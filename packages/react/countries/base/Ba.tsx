// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Ba = ({
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
      <path strokeLinejoin="round" d="m16.536 22.044-.837.044a.5.5 0 0 1-.371-.138l-1.864-1.777a.5.5 0 0 0-.309-.137l-1.288-.094a.5.5 0 0 1-.463-.526l.068-1.252a.5.5 0 0 0-.135-.37L4.011 10.02a.5.5 0 0 1-.13-.265l-.346-2.198a.5.5 0 0 0-.115-.248L1.454 5.02a.5.5 0 0 1-.12-.302l-.108-2.27a.5.5 0 0 1 .52-.524l.944.04a.5.5 0 0 1 .317.131l1.231 1.131a.5.5 0 0 0 .715-.04l.951-1.09a.5.5 0 0 1 .43-.168l10.696 1.12a.5.5 0 0 1 .382.249l.677 1.178a.5.5 0 0 0 .47.25l2.212-.164a.5.5 0 0 1 .489.713L19.967 8.01a.5.5 0 0 0 .112.58l2.116 1.964a.5.5 0 0 1-.174.838l-.866.306a.5.5 0 0 0-.221.787l.913 1.124a.5.5 0 0 1-.262.799l-1.44.375a.5.5 0 0 0-.373.522l.067.872a.5.5 0 0 1-.52.538l-.825-.036a.5.5 0 0 0-.44.226l-1.655 2.528a.5.5 0 0 0-.042.47l.613 1.445a.5.5 0 0 1-.434.695Z"/>
    </svg>
  );
};
