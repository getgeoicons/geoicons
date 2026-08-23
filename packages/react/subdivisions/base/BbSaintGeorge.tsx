// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const BbSaintGeorge = ({
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
      <path strokeLinejoin="round" d="M22.588 13.456a1 1 0 0 0-.134-.98L19.66 8.828a.6.6 0 0 0-.445-.234l-.853-.045a.6.6 0 0 1-.568-.57l-.073-1.516a.6.6 0 0 0-.139-.355L14.44 2.34a1 1 0 0 0-.705-.357l-2.818-.178a1 1 0 0 0-1.002.654l-.157.427a2 2 0 0 1-1.003 1.111l-2.162 1.05a3 3 0 0 1-1.225.301l-2.292.066a1 1 0 0 0-.626.244l-.875.758a1 1 0 0 0-.344.817l.256 4.156a5 5 0 0 0 .183 1.067l2.652 9.277a.6.6 0 0 0 .564.435l2.698.061a.6.6 0 0 0 .613-.585l.012-.475a.6.6 0 0 1 .608-.586l2.804.039c.311.004.622-.04.92-.132l1.72-.527c.307-.094.598-.237.86-.424l2.93-2.085a2 2 0 0 1 1.098-.37l1.356-.042a1 1 0 0 0 .897-.627z"/>
    </svg>
  );
};
