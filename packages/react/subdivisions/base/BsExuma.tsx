// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const BsExuma = ({
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
      <path strokeLinejoin="round" d="m3.385 6.44-.851-.925a.721.721 0 0 0-1.229.667l1.017 3.96a1 1 0 0 0 .937.751l.477.015a6.9 6.9 0 0 1 4.534 1.89l.421.4a.78.78 0 0 1-.373 1.328l-4.936 1.058a.698.698 0 0 0 .25 1.374l7.435-1.101a1 1 0 0 1 .61.103l1.578.826q.22.114.459.173l7.937 1.917a.742.742 0 0 0 .438-1.414l-6.57-2.501a2 2 0 0 0-.585-.127l-1.675-.107a1 1 0 0 1-.758-.427l-1.1-1.586a1 1 0 0 0-.708-.423l-.445-.05a1 1 0 0 1-.681-.387L7.614 9.3a3 3 0 0 0-.887-.778L4.097 7.01a3 3 0 0 1-.712-.57Z"/>
    </svg>
  );
};
