// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Senegambia = ({
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
      <path strokeLinejoin="round" d="m2.654 10.045-1.454.803 1.516.879a.5.5 0 0 1 .186.19l1.432 2.572a1 1 0 0 1 .075.801l-.466 1.405a1 1 0 0 0-.05.307L3.88 18.58a1 1 0 0 0 1.254.975l4.176-1.1q.127-.032.26-.032l7.018.036a1 1 0 0 1 .442.105l2.073 1.037a1 1 0 0 0 .567.098l2.178-.262a1 1 0 0 0 .879-.937l.048-.849a1 1 0 0 0-.268-.74l-1.793-1.915a1 1 0 0 1-.263-.573l-.366-3.293a1 1 0 0 0-.253-.562l-3.85-4.245a1 1 0 0 0-.48-.294l-1.492-.402a1 1 0 0 1-.498-.313l-.717-.833a1 1 0 0 0-.804-.346l-5.823.264a1 1 0 0 0-.848.55L2.859 9.831a.5.5 0 0 1-.205.213Z"/>
    </svg>
  );
};
