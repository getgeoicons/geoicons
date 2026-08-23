// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SvLaPaz = ({
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
      <path strokeLinejoin="round" d="M9.194 3.1a1 1 0 0 1-.701.176l-1.47-.186a1 1 0 0 0-.896.354l-.853 1.032a.6.6 0 0 1-.51.215l-1.71-.136a.3.3 0 0 0-.303.408l.89 2.286a1 1 0 0 1-.024.785l-1.342 2.884a.3.3 0 0 0 .183.413l1.232.38a.3.3 0 0 1 .192.394l-.917 2.365a.3.3 0 0 0 .13.368l5.095 2.92 5.587 2.382 4.17 2.254a1 1 0 0 0 1.27-.27l1.859-2.425a1 1 0 0 0 .197-.47l.537-3.831a1 1 0 0 0-.215-.77l-1.548-1.9a1 1 0 0 1-.194-.88l.62-2.422a2 2 0 0 0-.114-1.319l-1.053-2.333a1 1 0 0 0-.847-.587l-1.547-.1a.6.6 0 0 1-.556-.685l.287-1.955a.6.6 0 0 0-.15-.492l-.363-.396a.6.6 0 0 0-.747-.113l-1.481.871a1 1 0 0 1-.917.05l-1.16-.52a1 1 0 0 0-.986.095z"/>
    </svg>
  );
};
