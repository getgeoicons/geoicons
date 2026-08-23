// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CrHeredia = ({
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
      <path strokeLinejoin="round" d="M7.46 1.325a.6.6 0 0 0-.574.595l-.113 16.877a3 3 0 0 1-.128.848l-.675 2.23a.6.6 0 0 0 .512.77l1.006.107a2 2 0 0 0 .898-.112l1.35-.496a1 1 0 0 0 .615-.66l.99-3.414a2 2 0 0 1 .687-1.018l2.355-1.845a1 1 0 0 0 .359-1.009l-.586-2.576a1 1 0 0 1 .198-.85l.597-.737a1 1 0 0 0 .222-.674l-.16-3.68a1 1 0 0 1 .655-.982l1.872-.683a.6.6 0 0 0 .3-.886l-.61-.96a.6.6 0 0 0-.715-.241l-3.328 1.234a1 1 0 0 1-1.04-.215l-1.519-1.453a1 1 0 0 0-.734-.276z"/>
    </svg>
  );
};
