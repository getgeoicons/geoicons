// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const JmManchester = ({
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
      <path strokeLinejoin="round" d="M5.424 1.8a.8.8 0 0 0-.57.796l.169 4.487a3 3 0 0 0 .126.756l1.782 5.888a3 3 0 0 1 .098.443l.978 6.821a1 1 0 0 0 .593.776l2.128.92a1 1 0 0 0 .543.071l6.706-.991a1 1 0 0 0 .829-.768l.25-1.1a1 1 0 0 0-.231-.888l-.667-.745a2 2 0 0 1-.42-.74l-.312-1.002a2 2 0 0 1-.071-.874l.285-2.021a1 1 0 0 0-.105-.605l-4.872-9.27a1 1 0 0 0-.481-.45L8.098 1.5a2 2 0 0 0-1.384-.087z"/>
    </svg>
  );
};
