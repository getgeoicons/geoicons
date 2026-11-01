// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Cl = ({
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
      <path strokeLinejoin="round" d="m13.455 21.948.008-1.117a.6.6 0 0 0-.496-.596l-.276-.048a1 1 0 0 1-.824-.917l-.06-.87a1 1 0 0 1 .05-.386l.8-2.375a1 1 0 0 0 .034-.51l-.287-1.477a1 1 0 0 1 .02-.467l1.091-3.8a1 1 0 0 0 .001-.547l-.174-.618a1 1 0 0 1 .017-.597l1.094-3.185a1 1 0 0 0-.058-.786l-.906-1.741a.6.6 0 0 0-.947-.156l-.357.342a.6.6 0 0 0-.18.37l-.639 6.116a2 2 0 0 1-.126.52l-.64 1.638a2 2 0 0 0-.132.865l.048.684c.016.234-.01.468-.074.693l-.659 2.282a6 6 0 0 0-.156 2.637l.328 1.994a3 3 0 0 0 1.928 2.33l.766.281a.6.6 0 0 0 .806-.559Z"/>
    </svg>
  );
};
