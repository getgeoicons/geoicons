// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const VcSaintGeorge = ({
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
      <path strokeLinejoin="round" d="M9.436 1.56a.6.6 0 0 0-.773-.066l-.193.137a.6.6 0 0 0-.19.758l.817 1.633a.6.6 0 0 1-.152.729L4.39 8.55a2 2 0 0 0-.647 1.003l-.392 1.421a2 2 0 0 1-.494.862l-1.445 1.485a.6.6 0 0 0 .142.945l1.933 1.057a1 1 0 0 1 .392 1.367l-.553.985a1 1 0 0 0 .361 1.348l.066.04a1 1 0 0 0 .987.02l1.435-.776a1 1 0 0 1 1.013.037l3.443 2.195a1 1 0 0 1 .46.913l-.014.195a1 1 0 0 0 1.071 1.067l4.621-.34a1 1 0 0 0 .846-.604l1.742-4.071a1 1 0 0 1 .867-.605l.905-.047a1 1 0 0 0 .831-.53l.675-1.27a3 3 0 0 0 .34-1.147l.112-1.292a1 1 0 0 0-.441-.918l-3.592-2.4a1 1 0 0 0-.494-.166l-2.154-.134a1 1 0 0 1-.723-.377l-3.76-4.754z"/>
    </svg>
  );
};
