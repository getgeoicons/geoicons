// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Cw = ({
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
      <path strokeLinejoin="round" d="M12.29 17.889 9.61 16.32a1 1 0 0 1-.387-.41l-.929-1.83a1 1 0 0 0-.917-.548l-.944.025a1 1 0 0 1-.898-.51l-1.236-2.2a2 2 0 0 0-.456-.55l-1.68-1.415a1 1 0 0 1-.347-.63l-.565-4.165a.926.926 0 0 1 1.463-.873L4.31 4.377a2 2 0 0 0 .581.292l.24.075a2 2 0 0 1 1.074.807l.603.912a1 1 0 0 1 .165.524l.033 1.248a3 3 0 0 0 .443 1.49l.398.648a3 3 0 0 0 .676.768l1.845 1.484a3 3 0 0 0 1.401.624l3.981.644a3 3 0 0 1 1.16.45l1.15.75a3 3 0 0 1 .915.938l1.148 1.864q.151.245.347.457l1.93 2.098a.3.3 0 0 1-.186.5l-2.836.329a1 1 0 0 1-.649-.148l-2.256-1.422a3 3 0 0 0-.426-.223z"/>
    </svg>
  );
};
