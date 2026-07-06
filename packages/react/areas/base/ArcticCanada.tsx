// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ArcticCanada = ({
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
      <path strokeLinejoin="round" d="m3.433 13.529.636 1.907a1 1 0 0 0 .839.678l3.655.402a.6.6 0 0 0 .582-.902l-.284-.478a1 1 0 0 1 .483-1.437l.946-.385a1 1 0 0 1 1.262.46l.29.553a1 1 0 0 0 .976.53l2.385-.217a1 1 0 0 1 .61.142l1.486.904a1 1 0 0 1 .464 1.034l-.378 2.08a.6.6 0 0 0 .513.703l3.676.477a1 1 0 0 0 1.125-1.074l-.262-3.212a1 1 0 0 0-.563-.82l-7.138-3.434a1 1 0 0 1-.54-.676l-.46-1.993a1 1 0 0 1-.01-.403l.956-5.305a1 1 0 0 0-.537-1.072l-.232-.116a1 1 0 0 0-1.018.073l-1.686 1.173a1 1 0 0 0-.293.317L9.757 5.425a1 1 0 0 1-.458.41L3.398 8.458a1 1 0 0 0-.412.339L1.709 10.61a1 1 0 0 0 .147 1.317l1.3 1.175a1 1 0 0 1 .277.426Zm9.577 7.651.127-1.154a.6.6 0 0 1 .872-.467l1.84.952a1 1 0 0 1 .485.558l.12.342a1 1 0 0 1-.944 1.33h-.436a1 1 0 0 1-.388-.078l-1.071-.45a1 1 0 0 1-.606-1.033Z"/>
    </svg>
  );
};
