// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Ki = ({
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
      <path strokeLinejoin="round" d="m2.869 10.026-1.37 1.544a.5.5 0 0 0 .006.67l.915.995a.5.5 0 0 0 .561.123l1.353-.567a.5.5 0 0 1 .488.057l.936.683a.5.5 0 0 1 .179.24l.39 1.13a.5.5 0 0 0 .2.255l2.178 1.418a.5.5 0 0 0 .195.074l3.635.575q.102.015.188.07l6.993 4.402a.5.5 0 0 0 .402.058l2.317-.65a.5.5 0 0 0 .365-.48v-2.226a.5.5 0 0 0-.278-.448l-8.9-4.406a.5.5 0 0 1-.276-.397l-.255-2.469a.5.5 0 0 1 .029-.225l.657-1.768a.5.5 0 0 1 .282-.29l1.494-.6a.5.5 0 0 0 .31-.414l.047-.457a.5.5 0 0 0-.064-.299l-.29-.508a.5.5 0 0 0-.356-.246l-3.619-.577a.5.5 0 0 1-.277-.143l-2.26-2.293a.5.5 0 0 0-.183-.119l-1.397-.513a.5.5 0 0 0-.212-.03l-1.735.136a.5.5 0 0 0-.405.268l-.282.544a.5.5 0 0 0-.019.42l1.185 2.88a.5.5 0 0 1 .03.276l-.28 1.617a.5.5 0 0 1-.27.363L3.021 9.91a.5.5 0 0 0-.153.117Z"/>
    </svg>
  );
};
