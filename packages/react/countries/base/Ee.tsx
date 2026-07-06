// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Ee = ({
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
      <path strokeLinejoin="round" d="m11.136 13.8-.663 1.453a.5.5 0 0 0 .683.653l1.418-.729a.5.5 0 0 1 .454-.001l2.054 1.037a.5.5 0 0 1 .162.132l1.44 1.775a.5.5 0 0 0 .599.139l.762-.353a.5.5 0 0 1 .37-.02l.784.266a.5.5 0 0 0 .582-.205l1.078-1.696a.5.5 0 0 0 .02-.502l-2.637-4.99a.5.5 0 0 1 .077-.574l.624-.669a.5.5 0 0 1 .429-.154l1.118.143a.5.5 0 0 0 .55-.384l.135-.585a.5.5 0 0 1 .209-.303l.967-.649a.5.5 0 0 0 .114-.725l-.292-.37a.5.5 0 0 0-.667-.107l-.944.621a.5.5 0 0 1-.425.06l-4.545-1.438a.5.5 0 0 0-.302 0L7.675 8.03a.5.5 0 0 0-.348.507l.206 3.408a.5.5 0 0 0 .116.29l1.055 1.263a.5.5 0 0 0 .82-.076l.18-.323a.5.5 0 0 1 .646-.21l.542.25a.5.5 0 0 1 .245.662ZM3.42 8.15l-.915.434a.5.5 0 0 0-.122.821l.813.741a.5.5 0 0 0 .585.065l.774-.444a.5.5 0 0 0 .12-.772l-.672-.732a.5.5 0 0 0-.583-.114Zm.986 3.585-2.675.795a.5.5 0 0 0-.333.636l.29.882a.5.5 0 0 1 .002.308l-.333 1.046a.5.5 0 0 0 .34.633l.3.085a.5.5 0 0 0 .607-.312l.48-1.34a.5.5 0 0 1 .252-.281l2.02-.984a.5.5 0 0 0 .12-.818l-.59-.54a.5.5 0 0 0-.48-.11Z"/>
    </svg>
  );
};
