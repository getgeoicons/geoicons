// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Au = ({
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
      <path strokeLinejoin="round" d="m3.473 15.944-.92-.342a.5.5 0 0 1-.326-.505l.149-2.008a.5.5 0 0 0-.035-.224l-.906-2.255a.5.5 0 0 1-.034-.235l.218-2.237a.5.5 0 0 1 .355-.43l3.176-.945a.5.5 0 0 0 .246-.164L7.844 3.58a.5.5 0 0 1 .655-.109l.665.418a.5.5 0 0 0 .652-.105l1.403-1.699a.5.5 0 0 1 .482-.172l1.665.325a.5.5 0 0 1 .32.768l-.4.601a.5.5 0 0 0 .171.714l1.707.955a.5.5 0 0 0 .731-.324l.695-3.001a.25.25 0 0 1 .474-.041l1.8 4.264a.5.5 0 0 0 .098.15l3.12 3.277a.5.5 0 0 1 .13.252l.374 1.986a.5.5 0 0 1-.022.264l-1.968 5.38a.5.5 0 0 1-.333.31l-2.136.604a.5.5 0 0 1-.25.006l-2.042-.48a.5.5 0 0 1-.367-.352l-.304-1.089a.5.5 0 0 0-.345-.346l-1.7-.482a.5.5 0 0 1-.198-.11L11 13.813a.5.5 0 0 0-.493-.103l-6.703 2.24a.5.5 0 0 1-.332-.006Zm16.145 4.332-1.35.151a.5.5 0 0 0-.417.659l.458 1.34a.5.5 0 0 0 .521.336l.722-.07a.5.5 0 0 0 .449-.438l.17-1.422a.5.5 0 0 0-.553-.556Z"/>
    </svg>
  );
};
