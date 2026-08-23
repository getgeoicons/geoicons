// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SvLaUnion = ({
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
      <path strokeLinejoin="round" d="M6.95 21.949a.3.3 0 0 0 .238.444l4.708.38a.3.3 0 0 0 .324-.31l-.023-.608a1 1 0 0 1 .633-.968l1.105-.436a2 2 0 0 0 .886-.687l.17-.234a1 1 0 0 0-.258-1.42l-1.249-.828a1 1 0 0 1-.447-.855l.002-.132a1 1 0 0 1 .783-.955l2.526-.56a.8.8 0 0 0 .625-.733l.035-.58a.8.8 0 0 0-.688-.841l-.698-.098a.6.6 0 0 1-.492-.764l2.002-6.78a1 1 0 0 0-.164-.89L15.141 1.7a1 1 0 0 0-.997-.373l-2.306.476a1 1 0 0 0-.795 1.056l.07.924a1 1 0 0 1-.109.537l-.765 1.475a1 1 0 0 0-.094.653l.47 2.395a1 1 0 0 1-.31.935l-1.507 1.36a1 1 0 0 0-.328.696l-.357 7.587a2 2 0 0 1-.248.875z"/>
    </svg>
  );
};
