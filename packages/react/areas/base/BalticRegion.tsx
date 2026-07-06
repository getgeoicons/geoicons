// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const BalticRegion = ({
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
      <path strokeLinejoin="round" d="m4.434 12.616.406 4.213a1 1 0 0 0 .71.863l1.852.55a1 1 0 0 1 .707 1.088l-.12.925a1 1 0 0 0 .172.704l.914 1.301a1 1 0 0 0 1.024.405l3.54-.744a1 1 0 0 0 .79-1.083l-.082-.781a1 1 0 0 1 .442-.939l1.053-.697a1 1 0 0 0 .448-.877l-.03-.67a1 1 0 0 1 .876-1.036l.87-.109a1 1 0 0 0 .718-.451l.58-.902a1 1 0 0 0 .071-.949L17.767 9.83a1 1 0 0 1 .067-.94l.321-.512a1 1 0 0 0-.018-1.092L16.71 5.178a.9.9 0 0 1 .767-1.402l.337.008a.6.6 0 0 0 .566-.362l.313-.725a.6.6 0 0 0-.462-.831l-4.208-.63a1 1 0 0 0-.472.043l-1.782.61a1 1 0 0 0-.236.118l-1.522 1.03a1 1 0 0 0-.39 1.135l.454 1.412a1 1 0 0 0 .604.63l.502.187a1 1 0 0 1 .651.958l-.054 2.597a1 1 0 0 1-.353.742l-.495.42a1 1 0 0 1-1.15.101l-.343-.2a1 1 0 0 1-.388-.408l-.916-1.787a.6.6 0 0 0-.757-.283l-.788.316a1 1 0 0 0-.501.44l-1.531 2.735a1 1 0 0 0-.123.584Z"/>
    </svg>
  );
};
