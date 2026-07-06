// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Ug = ({
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
      <path strokeLinejoin="round" d="m3.33 22.79-1.23-.05a.5.5 0 0 1-.473-.576l1.17-7.615a.5.5 0 0 1 .129-.265l1.23-1.317a.5.5 0 0 1 .611-.095l.422.239a.5.5 0 0 0 .633-.119L8.348 9.91a.5.5 0 0 0-.13-.747L6.131 7.92a.5.5 0 0 1-.24-.5l.49-3.446a.5.5 0 0 1 .344-.407l2.495-.791a.5.5 0 0 1 .416.052l1.432.896a.5.5 0 0 0 .47.031l2.557-1.152a.5.5 0 0 1 .324-.03l1.823.443a.5.5 0 0 0 .47-.13L18.415 1.2l3.34 6.138q.035.065.05.135l.606 2.844a.5.5 0 0 1-.082.395l-4.008 5.601a.5.5 0 0 1-.617.163l-1.627-.752a.5.5 0 0 0-.563.1l-.989.988a.5.5 0 0 1-.233.132l-3.44.852a.5.5 0 0 0-.364.358l-.723 2.749a.5.5 0 0 1-.484.372H5.14a.5.5 0 0 0-.375.17L3.726 22.62a.5.5 0 0 1-.396.17Z"/>
    </svg>
  );
};
