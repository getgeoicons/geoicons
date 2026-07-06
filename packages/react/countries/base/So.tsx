// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const So = ({
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
      <path strokeLinejoin="round" d="m3.99 21.614.948 1.186 4.32-4.779a.5.5 0 0 1 .124-.098l2.203-1.259a.5.5 0 0 0 .11-.085l3.14-3.212a.5.5 0 0 0 .075-.097l4.169-7.155a.5.5 0 0 0 .053-.132l.891-3.61a.5.5 0 0 0-.274-.573l-.846-.394a.5.5 0 0 0-.66.231l-.4.81a.5.5 0 0 1-.356.268l-8.149 1.54a.5.5 0 0 1-.479-.174l-.894-1.089a.5.5 0 0 0-.81.053l-.45.718a.5.5 0 0 0 .017.554l1.493 2.1a.5.5 0 0 0 .276.194l5.924 1.61-4.282 4.346a.5.5 0 0 1-.218.13L5.81 13.879a.5.5 0 0 0-.24.153l-1.506 1.737a.5.5 0 0 0-.122.322l-.062 5.205a.5.5 0 0 0 .11.318Z"/>
    </svg>
  );
};
