// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Ps = ({
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
      <path strokeLinejoin="round" d="m3.55 22.8-.929-2.038 3.504-4.344a.5.5 0 0 1 .724-.058l.754.678a.5.5 0 0 1 .054.686zm16.033-7.98-.607 3.116a.5.5 0 0 1-.157.277l-2.116 1.893a.5.5 0 0 1-.243.119l-3.898.717a.5.5 0 0 1-.559-.317l-.325-.87a.5.5 0 0 1 .035-.423l.665-1.166a.5.5 0 0 0 .054-.138l.352-1.572a.5.5 0 0 1 .254-.333l3.192-1.686a.5.5 0 0 0 .263-.39l.056-.536a.5.5 0 0 0-.43-.547l-2.247-.305a.5.5 0 0 1-.427-.422l-.746-5.058a.5.5 0 0 1 .025-.244l1.577-4.337a.5.5 0 0 1 .218-.26L16.3 1.296a.5.5 0 0 1 .354-.058l1.62.335a.5.5 0 0 1 .371.324l.41 1.167a.5.5 0 0 0 .343.317l1.323.353a.5.5 0 0 1 .367.422l.278 2.267a.5.5 0 0 1-.014.194l-.724 2.626a.5.5 0 0 0-.015.181l.4 4.103a.5.5 0 0 1-.274.496l-.889.444a.5.5 0 0 0-.267.352Z"/>
    </svg>
  );
};
