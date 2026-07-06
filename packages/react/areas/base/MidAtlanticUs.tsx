// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const MidAtlanticUs = ({
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
      <path strokeLinejoin="round" d="M17.393 20.472C13.229 21.74 6.933 22.55 4.243 22.8l3.007-2.478-1.144-1.168a1 1 0 0 1-.183-1.142l2.19-4.44a1 1 0 0 0 .092-.587l-.413-2.83 1.64-1.264a1 1 0 0 0 .384-.903l-.093-.84a.6.6 0 0 1 .523-.662l2.439-.3a1 1 0 0 0 .868-1.128l-.08-.586a1 1 0 0 1 .14-.66l1.01-1.636a1 1 0 0 1 .651-.455l1.967-.4a.6.6 0 0 1 .709.472l1.767 9.019a1 1 0 0 1-.004.404l-1.917 8.815a.59.59 0 0 1-.403.441Z"/>
    </svg>
  );
};
