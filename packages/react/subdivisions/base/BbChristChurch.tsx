// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const BbChristChurch = ({
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
      <path strokeLinejoin="round" d="M7.118 9.906a.3.3 0 0 1-.169.301l-5.061 2.435a.3.3 0 0 0 .04.556l5.788 1.795a1 1 0 0 0 .43.036l1.2-.163a3 3 0 0 1 1.236.09l.54.156a1.96 1.96 0 0 1 1.287 1.185l.384 1.01a1 1 0 0 0 .446.518l.526.295a1 1 0 0 0 .808.075l2.595-.874a2 2 0 0 0 1.072-.858l.871-1.437a1 1 0 0 1 .675-.465l.728-.133c.35-.065.676-.22.945-.453l.872-.751a.6.6 0 0 0 .051-.86l-2.739-2.99a2 2 0 0 1-.524-1.276l-.035-.95a1 1 0 0 0-.811-.945l-2.397-.46a1 1 0 0 0-.767.167l-1.76 1.25a2 2 0 0 1-.734.323L7.257 8.644a.3.3 0 0 0-.234.324z"/>
    </svg>
  );
};
