// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const De = ({
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
      <path strokeLinejoin="round" d="m6.798 21.139.711-2.105a.6.6 0 0 0-.325-.74l-2.027-.9a1 1 0 0 1-.588-.803L3.993 11.4a1 1 0 0 1 .31-.84l1.279-1.196a1 1 0 0 0 .317-.725l.014-2.352a1 1 0 0 1 .798-.974l1.17-.24a1 1 0 0 0 .795-1.064L8.507 2.02a.6.6 0 0 1 .733-.635l1.232.283a2 2 0 0 1 1.013.584l1.433 1.534a1 1 0 0 0 1.243.176l2.081-1.24a1 1 0 0 1 1.278.215l1.06 1.262a1 1 0 0 1 .233.688l-.11 2.473a2 2 0 0 0 .114.763l1.155 3.233a1 1 0 0 1 .042.518l-.15.807a1 1 0 0 1-.69.775l-3.709 1.14a.6.6 0 0 0-.293.947l2.595 3.257a.6.6 0 0 1-.232.925l-.92.396a1 1 0 0 0-.604.896l-.018.79a.6.6 0 0 1-.531.582l-3.097.355a2 2 0 0 1-.946-.12l-1.341-.516a2 2 0 0 0-.988-.115l-1.426.194a.8.8 0 0 1-.866-1.048Z"/>
    </svg>
  );
};
