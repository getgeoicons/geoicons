// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const UsWashington = ({
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
      <path strokeLinejoin="round" d="M22.483 5.378a.3.3 0 0 0-.297-.301l-15.097-.12a.3.3 0 0 0-.302.309l.062 2.044a1 1 0 0 1-1.217 1.006l-3.693-.82a.6.6 0 0 0-.729.547l-.001.026a.6.6 0 0 0 .039.256l1.266 3.268a7 7 0 0 1 .42 1.671l.294 2.381a.6.6 0 0 0 .515.521l1.866.253a1 1 0 0 1 .853.835l.12.753a1 1 0 0 0 .8.826l.767.146a1 1 0 0 0 .665-.104l.914-.498a1 1 0 0 1 .475-.122l2.955-.01a4 4 0 0 0 1.113-.163l2.332-.686c.358-.106.729-.16 1.102-.163l4.759-.032a.3.3 0 0 0 .296-.336l-.308-2.56z"/>
    </svg>
  );
};
