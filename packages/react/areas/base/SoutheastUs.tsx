// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SoutheastUs = ({
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
      <path strokeLinejoin="round" d="M1.256 11.893 1.2 7.832l5.048-.21a1 1 0 0 0 .715-.346L8.27 5.764a1 1 0 0 1 .625-.338l1.264-.167a1 1 0 0 0 .632-.347l.81-.959a.6.6 0 0 1 .592-.197l1.592.366a.6.6 0 0 0 .64-.262l.993-1.556a1 1 0 0 1 .74-.457l2.327-.242a1 1 0 0 1 .752.233L21 3.338a1 1 0 0 1 .26.343l1.256 2.723a1 1 0 0 1-.18 1.106l-3.937 4.166c-1.649 1.665-1.283 3.575-.815 4.312l1.549 2.705c.596.963.754 2.024.736 2.72-.01.33-.24.593-.546.713l-.136.054a1 1 0 0 1-1.123-.276l-1.953-2.254a1 1 0 0 1-.244-.642l-.015-1.1a1 1 0 0 0-.289-.69l-.66-.667a1 1 0 0 0-1.175-.183l-.494.259a1 1 0 0 1-1.054-.079l-.578-.422a1 1 0 0 0-.701-.186l-2.216.249a.83.83 0 0 0-.717 1.014.83.83 0 0 1-.682 1.01l-1.063.165a1 1 0 0 1-.322-.002l-3.219-.55a.6.6 0 0 1-.485-.72l.335-1.543a1 1 0 0 0-.056-.603l-1.14-2.691a1 1 0 0 1-.08-.376Z"/>
    </svg>
  );
};
