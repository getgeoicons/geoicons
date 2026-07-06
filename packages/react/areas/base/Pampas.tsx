// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Pampas = ({
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
      <path strokeLinejoin="round" d="m2.03 20.563 2.43 1.532 3.106-1.326a1 1 0 0 0 .604-1.012l-.15-1.62a.6.6 0 0 1 .537-.653l2.493-.253a1 1 0 0 0 .245-.057l2.612-.962a1 1 0 0 0 .548-.491l.831-1.662a1 1 0 0 0-.138-1.101l-2.055-2.377a.739.739 0 0 1 .836-1.168l3.457 1.395a1 1 0 0 0 .75-.001l1.441-.584a1 1 0 0 0 .346-.234l1.545-1.61a1 1 0 0 0 .247-.44l.869-3.342a1 1 0 0 0-.574-1.171l-2.894-1.24a3 3 0 0 0-1.363-.238l-4.635.281a3 3 0 0 0-.96.22L8.78 3.842a3 3 0 0 0-1.147.835l-5.29 6.246a3 3 0 0 0-.699 1.663l-.41 4.448a3 3 0 0 0 .02.726l.32 2.107a1 1 0 0 0 .456.697Z"/>
    </svg>
  );
};
