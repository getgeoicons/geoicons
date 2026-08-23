// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const MxGuanajuato = ({
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
      <path strokeLinejoin="round" d="M22.13 6.526a1 1 0 0 0-.853-.563l-1.115-.052a1 1 0 0 1-.664-.296l-.789-.799a2 2 0 0 0-1.082-.565l-.55-.095a2 2 0 0 0-1.714.518l-.543.514a1 1 0 0 1-1.23.113l-2.602-1.684a3 3 0 0 0-1.568-.481l-2.794-.058a1 1 0 0 0-1.013.873l-.258 2.021a2 2 0 0 1-.323.86l-3.375 5.03a1 1 0 0 0-.05 1.033l.573 1.06a1 1 0 0 1-.042 1.021l-.532.816a1 1 0 0 0 .074 1.191l.85 1.007a1 1 0 0 0 .774.355l.908-.01a1 1 0 0 0 .814-.432l.256-.372a1 1 0 0 1 1.097-.394l.246.07a1 1 0 0 1 .726.95l.013 1.104a.6.6 0 0 0 .671.589l2.213-.263a.6.6 0 0 1 .628.372l.23.571a.6.6 0 0 0 .605.374l4.173-.338a1 1 0 0 0 .92-1.003l-.012-1.832a1 1 0 0 0-.152-.524l-2.038-3.26a1 1 0 0 1-.008-1.047l.647-1.072a1 1 0 0 1 .825-.483l2.293-.071a1 1 0 0 0 .95-.809l.238-1.224a.6.6 0 0 1 .784-.453l.929.319a.6.6 0 0 0 .646-.173l.459-.525a1 1 0 0 0 .147-1.094z"/>
    </svg>
  );
};
