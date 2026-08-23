// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CuCiegoDeAvila = ({
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
      <path strokeLinejoin="round" d="M22.784 10.307a.95.95 0 0 0-.647-.873l-3.62-1.208a2 2 0 0 1-1.108-.911l-.184-.325a2 2 0 0 0-.906-.832l-7.2-3.302a2 2 0 0 0-.741-.18l-1.979-.091a1 1 0 0 0-.959.59L2.963 8.7a.6.6 0 0 0 .243.763l1.283.755a.6.6 0 0 1 .28.65l-.356 1.557a.6.6 0 0 1-.612.466l-.674-.031a.6.6 0 0 0-.591.394l-1.141 3.13a.6.6 0 0 0 .327.756l2.334.999a.6.6 0 0 1 .339.724l-.319 1.06a.3.3 0 0 0 .344.38l3.81-.729a1 1 0 0 1 .866.247L10.373 21a1 1 0 0 0 1.086.177l2.79-1.248a2 2 0 0 0 .715-.54l2.837-3.38a.6.6 0 0 1 .878-.043l.508.495a.6.6 0 0 0 .795.037l.88-.709a.6.6 0 0 0 .076-.861L19.59 13.38a.6.6 0 0 1 .18-.929l2.499-1.276a.95.95 0 0 0 .516-.87Z"/>
    </svg>
  );
};
