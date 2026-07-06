// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Sh = ({
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
      <path strokeLinejoin="round" d="M17.144 17.439v1.106a1 1 0 0 1-.574.905l-1.685.793a1 1 0 0 1-.267.083l-1.511.243a1 1 0 0 0-.45.194l-1.919 1.47a1 1 0 0 1-1.356-.13l-.469-.529a1 1 0 0 0-.364-.26l-.66-.275a1 1 0 0 1-.49-1.408l1.261-2.27a1 1 0 0 1 .266-.308l3.571-2.741a1 1 0 0 1 .805-.187l1.96.392a1 1 0 0 1 .678.495l1.079 1.94a1 1 0 0 1 .125.486Zm-8.75-7.735L7.187 8.618a1 1 0 0 1-.331-.744v-3.03a1 1 0 0 1 .108-.453l.95-1.876a1 1 0 0 1 .157-.226l.638-.69a1 1 0 0 1 .902-.308l2.455.418a1 1 0 0 1 .403.165l2.53 1.759a1 1 0 0 1 .218.207l1.277 1.643a1 1 0 0 1-.222 1.437l-3.24 2.232a1 1 0 0 1-.384.16l-3.402.632a1 1 0 0 1-.852-.24Z"/>
    </svg>
  );
};
