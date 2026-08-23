// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const MxGuerrero = ({
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
      <path strokeLinejoin="round" d="M15.503 6.162a1 1 0 0 0-1.207-.207l-2.362 1.257a.6.6 0 0 1-.858-.363l-.395-1.367a.6.6 0 0 0-.528-.432l-.74-.06a.6.6 0 0 0-.64.695l.171 1.057a.6.6 0 0 1-.72.683l-4.046-.879a1 1 0 0 0-.888.241l-.018.016a1 1 0 0 0-.31.573l-.08.474a1 1 0 0 1-.634.772l-.364.136a.943.943 0 0 0-.15 1.694l5.768 3.415 5.921 2.573 3.952 1.098q.432.12.825.331l1.436.773a1 1 0 0 0 1.301-.32l1.577-2.326a1 1 0 0 0 .113-.9l-1.652-4.578a1 1 0 0 0-.574-.591l-1.835-.723a2 2 0 0 1-.742-.51z"/>
    </svg>
  );
};
