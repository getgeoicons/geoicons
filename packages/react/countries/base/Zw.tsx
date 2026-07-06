// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Zw = ({
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
      <path strokeLinejoin="round" d="M6.211 9.026 1.2 8.556l2.675 4.762a.5.5 0 0 0 .195.193l2.23 1.222a.5.5 0 0 1 .244.316l.222.88a.5.5 0 0 0 .485.378h1.094l.637 2.758a.5.5 0 0 0 .258.332l3.217 1.66q.076.038.162.05l5.333.729 3.07-3.16a.5.5 0 0 0 .095-.14l1.588-3.488a.5.5 0 0 0-.002-.42l-.65-1.385a.5.5 0 0 1-.028-.348l.754-2.664a.5.5 0 0 0 .019-.157l-.177-4.339a.5.5 0 0 0-.338-.452l-4.199-1.439a.5.5 0 0 0-.162-.027h-2.34V2.164L11.714 3.17a.5.5 0 0 0-.374.484v1.588a.5.5 0 0 1-.316.465l-2.749 1.09a.5.5 0 0 0-.216.165l-1.4 1.867a.5.5 0 0 1-.447.198Z"/>
    </svg>
  );
};
