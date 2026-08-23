// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const BbSaintJames = ({
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
      <path strokeLinejoin="round" d="M15.615 2.444a.6.6 0 0 0-.51-.578l-3.962-.601a.3.3 0 0 0-.339.358l.236 1.12a.6.6 0 0 1-.583.725l-2.662.014a.6.6 0 0 0-.586.713l.537 2.793a2 2 0 0 1-.039.917l-.39 1.393a1 1 0 0 0 .082.744l.522.971a2 2 0 0 1 .238 1.028l-.323 8.112a3 3 0 0 0 .052.69l.266 1.37a.6.6 0 0 0 .702.474l.502-.096a.6.6 0 0 0 .477-.698l-.163-.881a.3.3 0 0 1 .247-.351l2.583-.424a.6.6 0 0 0 .503-.59l.016-9.844a.6.6 0 0 1 .416-.57l1.096-.353a2 2 0 0 0 1.077-.836l1.045-1.654a.8.8 0 0 0-.003-.859l-.699-1.092a2 2 0 0 1-.315-1.029z"/>
    </svg>
  );
};
