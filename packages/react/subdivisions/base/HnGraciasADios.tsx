// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const HnGraciasADios = ({
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
      <path strokeLinejoin="round" d="M1.2 18.295V4.442c0-.211.213-.356.41-.28 2.722 1.034 4.388 1.43 7.081 1.735.22.025.427.121.587.273 3.118 2.954 5.334 4.372 10.016 6.132.176.066.333.182.448.332.908 1.188 1.49 1.926 2.595 2.282.258.083.44.326.41.595a.523.523 0 0 1-.548.465l-3.355-.177a2 2 0 0 0-1.143.287l-2.938 1.782a2 2 0 0 1-1.005.29l-1.754.028a2 2 0 0 0-.705.14L7.71 19.75a2 2 0 0 1-1.263.071l-.955-.26a2 2 0 0 1-1.02-.66l-.428-.52a1 1 0 0 0-1.126-.301l-1.312.496a.3.3 0 0 1-.406-.281Z"/>
    </svg>
  );
};
