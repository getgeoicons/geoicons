// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const AuMainland = ({
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
      <path strokeLinejoin="round" d="m2.283 17.706.734.407a1 1 0 0 0 .827.067l6.308-2.286a1 1 0 0 1 1.01.198l1.439 1.297a2 2 0 0 0 .748.426l1.04.322a1 1 0 0 1 .604.52l.548 1.137a1 1 0 0 0 .636.53l1.082.297a2 2 0 0 0 1.233-.057l1.902-.716a1 1 0 0 0 .589-.599l1.646-4.592c.112-.312.145-.648.095-.977l-.214-1.396a2 2 0 0 0-.496-1.042l-2.601-2.867a3 3 0 0 1-.588-.962L17.426 3.68a.699.699 0 0 0-1.352.2l-.191 2.863a.6.6 0 0 1-.233.435l-.036.028a.6.6 0 0 1-.623.066l-1.674-.794a.6.6 0 0 1-.206-.923l.443-.539a.6.6 0 0 0-.367-.973l-1.324-.215a1 1 0 0 0-.984.419l-.764 1.108a.6.6 0 0 1-.695.225l-.882-.314a1 1 0 0 0-1.138.346L5.751 7.83a2 2 0 0 1-1.035.724l-2.57.764a1 1 0 0 0-.708.847l-.188 1.666a2 2 0 0 0 .095.869l.782 2.295a1 1 0 0 1-.003.653l-.299.851a1 1 0 0 0 .458 1.206Z"/>
    </svg>
  );
};
