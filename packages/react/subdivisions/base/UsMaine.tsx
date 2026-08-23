// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const UsMaine = ({
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
      <path strokeLinejoin="round" d="M6.045 22.649a.3.3 0 0 0 .545.047l1.832-3.28a1 1 0 0 1 .603-.475l1.814-.51a1 1 0 0 0 .568-.417l.433-.666a1 1 0 0 1 .915-.452l1.732.133a1 1 0 0 0 .6-.145l3.055-1.876a1 1 0 0 0 .295-1.427l-2.26-3.215a1 1 0 0 1-.182-.57l-.034-5.76a1 1 0 0 0-.312-.72l-.641-.608a1 1 0 0 0-1.18-.145l-.854.483a.6.6 0 0 1-.875-.367l-.131-.49a.6.6 0 0 0-.467-.433l-.02-.004a.6.6 0 0 0-.613.258L8.173 6.086a1 1 0 0 0-.151.378L7.4 9.992a1 1 0 0 1-.345.595l-1.88 1.567a.6.6 0 0 0-.216.48l.238 7.321q.01.307.111.598z"/>
    </svg>
  );
};
