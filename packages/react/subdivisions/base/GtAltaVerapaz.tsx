// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const GtAltaVerapaz = ({
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
      <path strokeLinejoin="round" d="M22.61 8.375a.3.3 0 0 0-.185-.437l-1.078-.286a.3.3 0 0 1-.223-.293l.02-1.728a.6.6 0 0 0-.85-.553L16.324 6.9a1 1 0 0 1-1.03-.118l-1.712-1.325a1 1 0 0 0-.483-.2l-5.515-.72a.8.8 0 0 0-.695.255l-.59.648a1 1 0 0 1-1.063.272l-1.294-.443a1 1 0 0 0-1.273.633L1.503 9.44a1 1 0 0 0 .608 1.253l1.289.469a1 1 0 0 1 .618.66l.254.872a1 1 0 0 1-.394 1.102l-.734.506a.863.863 0 0 0 .211 1.529l4.631 1.578a2 2 0 0 0 .932.086l5.47-.793a1 1 0 0 1 1.121.782l.282 1.33a.6.6 0 0 0 .53.473l1.968.191a.6.6 0 0 0 .586-.312l2.006-3.713a1 1 0 0 0-.03-1l-.562-.912a1 1 0 0 1-.02-1.017z"/>
    </svg>
  );
};
