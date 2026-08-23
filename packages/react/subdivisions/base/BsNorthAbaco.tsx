// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const BsNorthAbaco = ({
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
      <path d="M8.975 9.682 2.18 8.04a.944.944 0 0 1 .406-1.843l5.811 1.157a1 1 0 0 0 .634-.082l1.513-.737a1 1 0 0 1 1.093.143l3.884 3.365a10 10 0 0 1 1.49 1.61l.612.826a10 10 0 0 0 2.075 2.08l2.154 1.6a.994.994 0 0 1-.64 1.791l-1.008-.048a1 1 0 0 1-.721-.358l-.451-.541a1 1 0 0 0-1.097-.305l-.64.223a1 1 0 0 1-1.125-.34l-.847-1.113a1 1 0 0 1-.202-.554l-.114-2.198a1 1 0 0 0-.284-.647l-2.56-2.616a1 1 0 0 0-.99-.262l-1.687.482a1 1 0 0 1-.51.01Z"/>
    </svg>
  );
};
