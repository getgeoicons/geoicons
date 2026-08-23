// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const UsNewHampshire = ({
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
      <path strokeLinejoin="round" d="M16.592 21.492a.6.6 0 0 0 .28-.293l.461-1.037a.6.6 0 0 0-.028-.543L16.22 17.73a2 2 0 0 1-.263-.905l-.679-14.899a.6.6 0 0 0-.74-.556l-.71.171a1 1 0 0 0-.727.693l-1.05 3.609a1 1 0 0 0-.028.427l.211 1.413a1 1 0 0 1-.575 1.058l-1.76.8a.6.6 0 0 0-.35.587l.062.93a2 2 0 0 1-.206 1.027l-1.75 3.509a1 1 0 0 0-.09.269l-.983 5.467a.6.6 0 0 0 .07.404l.308.539a.6.6 0 0 0 .5.301l6.263.217a1 1 0 0 0 .482-.105z"/>
    </svg>
  );
};
