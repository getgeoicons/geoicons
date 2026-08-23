// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const NiManagua = ({
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
      <path strokeLinejoin="round" d="M18.106 3.992a1 1 0 0 0-.548-.634L13.61 1.566a4 4 0 0 0-1.694-.357l-1.528.016a1 1 0 0 0-.905.597l-.596 1.354a1 1 0 0 0 .015.837l.03.064a1 1 0 0 0 .684.541l.728.163a1 1 0 0 1 .7.577l1.383 3.189a.6.6 0 0 0 .967.193l.501-.483a.889.889 0 0 1 1.476.867l-.48 1.815a1 1 0 0 1-.795.73l-2.235.387a.92.92 0 0 1-1.056-1.098l.056-.263A1.284 1.284 0 0 0 9.33 9.17l-2.55.558a1 1 0 0 0-.711.594l-1.24 2.993a1 1 0 0 1-.898.617l-.925.024a1 1 0 0 0-.963.848l-.175 1.14a.6.6 0 0 0 .129.47l4.956 6.064a.3.3 0 0 0 .486-.03l3.27-5.17a1 1 0 0 1 .658-.447l1.155-.218a1 1 0 0 0 .811-.907l.067-.876a1 1 0 0 1 .694-.878l6.939-2.199a1 1 0 0 0 .635-.605l.342-.92a.6.6 0 0 0-.22-.701l-2.024-1.403a2 2 0 0 1-.783-1.09z"/>
    </svg>
  );
};
