// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Gf = ({
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
      <path strokeLinejoin="round" d="m6.417 2.704.28-1.001a.5.5 0 0 1 .636-.342l5.976 1.944a.5.5 0 0 1 .199.122l2.501 2.501a.5.5 0 0 0 .133.095l3.436 1.694a.5.5 0 0 1 .242.26l.967 2.373a.5.5 0 0 1-.053.474l-3.751 5.38a.5.5 0 0 0-.056.104l-1.44 3.675a.5.5 0 0 1-.125.184l-2.442 2.266a.5.5 0 0 1-.596.063l-1.385-.826a.5.5 0 0 0-.376-.056l-1.178.291a.5.5 0 0 1-.314-.024l-.885-.373a.5.5 0 0 0-.49.057l-1.49 1.091a.5.5 0 0 1-.43.078L4.55 22.39a.5.5 0 0 1-.118-.05l-1.322-.775 1.06-.646a.5.5 0 0 0 .178-.184l1.114-2.007a.5.5 0 0 0 .06-.288l-.152-1.667a.5.5 0 0 1 .065-.297l1.203-2.073a.5.5 0 0 0-.088-.613l-1.266-1.207a.5.5 0 0 1-.122-.183L4.06 9.523a.5.5 0 0 1-.033-.166L3.93 5.783a.5.5 0 0 1 .126-.346l2.253-2.535a.5.5 0 0 0 .108-.198Z"/>
    </svg>
  );
};
