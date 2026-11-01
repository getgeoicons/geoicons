// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Gm = ({
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
      <path strokeLinejoin="round" d="m1.985 14.686 6.332-.25a.3.3 0 0 0 .288-.305l-.017-1.257a.3.3 0 0 1 .307-.304l2.537.06a1 1 0 0 0 .856-.445l.45-.675a1 1 0 0 1 1.356-.298l3.345 2.057a3 3 0 0 0 2.512.293l2.215-.73a.6.6 0 0 0 .358-.818l-.451-.997a.6.6 0 0 0-.723-.326l-1.622.497a2 2 0 0 1-1.676-.236L15.375 9.21a3 3 0 0 0-1.853-.478l-1.592.116a1 1 0 0 0-.846.603l-.38.884a.3.3 0 0 1-.28.182l-6.844-.103a1 1 0 0 0-.761.334l-1.325 1.484a1 1 0 0 0-.248.769l.119 1.147a.6.6 0 0 0 .62.538Z"/>
    </svg>
  );
};
