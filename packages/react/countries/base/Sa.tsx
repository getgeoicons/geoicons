// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Sa = ({
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
      <path strokeLinejoin="round" d="m1.271 7.795.267-.935a.5.5 0 0 1 .327-.338l2.914-.947L3.682 4l2.426-.789a.5.5 0 0 1 .377.028l2.57 1.274a.5.5 0 0 1 .114.078l2.318 2.1a.5.5 0 0 0 .27.125l3.72.487 3.924 6.285a.5.5 0 0 0 .353.23l2.526.364a.5.5 0 0 1 .42.59l-.458 2.353-6.36 1.496a.5.5 0 0 0-.265.162l-1.181 1.378a.5.5 0 0 1-.482.165l-2.805-.588a.5.5 0 0 0-.433.115l-.68.6a.5.5 0 0 1-.76-.12l-1.772-2.989a.5.5 0 0 0-.128-.143l-1.012-.768a.5.5 0 0 1-.156-.197l-.392-.89a.5.5 0 0 1-.042-.178l-.065-1.375a.5.5 0 0 0-.11-.29L1.363 8.246a.5.5 0 0 1-.092-.451Z"/>
    </svg>
  );
};
