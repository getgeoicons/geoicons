// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const MxSinaloa = ({
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
      <path strokeLinejoin="round" d="M7.673 1.224a.7.7 0 0 0-.582.337L6.082 3.226a2 2 0 0 1-.529.577L3.81 5.079a1 1 0 0 0-.409.774l-.028.866a1 1 0 0 0 .472.882l4.25 2.637a2 2 0 0 1 .762.863l.499 1.082a2 2 0 0 0 .53.694l3.647 3.063q.32.27.58.6l3.197 4.09 1.777 1.845a.7.7 0 0 0 .738.174l.34-.12a.7.7 0 0 0 .466-.68l-.053-1.811a1 1 0 0 0-.312-.697l-1.195-1.13a2 2 0 0 1-.578-1.024l-.52-2.369a1 1 0 0 0-.927-.784l-.964-.049a1 1 0 0 1-.768-.423l-2.076-2.949a1 1 0 0 1-.157-.796l.449-1.983a1 1 0 0 0-.204-.858l-.891-1.08a1 1 0 0 0-.586-.345l-1.114-.211a1 1 0 0 1-.754-.641L8.882 1.673a.7.7 0 0 0-.674-.461z"/>
    </svg>
  );
};
