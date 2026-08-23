// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const GdSaintJohn = ({
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
      <path strokeLinejoin="round" d="M22.398 9.164a.6.6 0 0 0-.572-.781h-1.411a1 1 0 0 1-.754-.343l-1.247-1.43a3 3 0 0 0-.94-.72L13.04 3.712a3 3 0 0 1-.506-.313l-2.68-2.058a.527.527 0 0 0-.842.498l.124.799a2 2 0 0 1-.096.985l-.262.723a2 2 0 0 1-.867 1.044l-.189.11a1 1 0 0 0-.491.799l-.09 1.386a3 3 0 0 1-.177.841l-.83 2.262a1 1 0 0 1-.412.505l-1.332.826a1 1 0 0 0-.393.46l-2.46 5.796a1 1 0 0 0 .028.842l.965 1.906a1 1 0 0 0 1.081.53l1.373-.265a2 2 0 0 1 1.023.07l1.142.39a2 2 0 0 0 .968.08l1.432-.236c.236-.039.479-.035.714.012l5.022 1a.8.8 0 0 0 .784-.29l.757-.959a1 1 0 0 0 .197-.81l-.311-1.598a1 1 0 0 1 .03-.499l.036-.112a1 1 0 0 1 .77-.677l.46-.084a1 1 0 0 0 .653-.43l2.013-3.033q.232-.35.36-.751z"/>
    </svg>
  );
};
