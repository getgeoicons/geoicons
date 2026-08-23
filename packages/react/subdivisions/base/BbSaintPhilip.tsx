// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const BbSaintPhilip = ({
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
      <path strokeLinejoin="round" d="M9.94 22.49a.3.3 0 0 0 .439.115l1.961-1.34a6 6 0 0 0 1.36-1.281l4.975-6.427a4 4 0 0 0 .57-1.011L20.764 8.6a2.8 2.8 0 0 0-.537-2.885l-.701-.774a2 2 0 0 0-1.398-.656L16.84 4.23a1 1 0 0 1-.717-.348L14.221 1.66a.6.6 0 0 0-.85-.062l-.751.657a2 2 0 0 0-.533.745l-.438 1.064a2 2 0 0 1-1.17 1.12L7.145 6.388a1 1 0 0 0-.612.634l-.509 1.574a1 1 0 0 1-.415.537l-1.455.925a1 1 0 0 0-.426.57l-.617 2.168a2 2 0 0 0-.048.882l.077.453a.6.6 0 0 0 .602.5l1.124-.021a.6.6 0 0 1 .608.662l-.116 1.112a1 1 0 0 0 .166.664l1.154 1.706a2 2 0 0 1 .252.52l.588 1.868a.3.3 0 0 0 .358.201l1.098-.272a.3.3 0 0 1 .341.159z"/>
    </svg>
  );
};
