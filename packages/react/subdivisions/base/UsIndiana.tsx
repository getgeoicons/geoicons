// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const UsIndiana = ({
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
      <path strokeLinejoin="round" d="M10.23 1.2a.3.3 0 0 0-.054.005l-2.662.493a.3.3 0 0 0-.245.294L7.228 17.37a1 1 0 0 1-.194.589L5.57 19.954a1 1 0 0 0-.191.662l.097 1.378a.6.6 0 0 0 .812.518l1.077-.41a1 1 0 0 1 .54-.049l1.586.297a1 1 0 0 0 .837-.225l1.278-1.102a1 1 0 0 1 1.151-.11l.4.23a1 1 0 0 0 1.36-.358l1.54-2.61a1 1 0 0 1 .637-.466l1.72-.397a.3.3 0 0 0 .233-.293l-.043-15.52a.3.3 0 0 0-.3-.3z"/>
    </svg>
  );
};
