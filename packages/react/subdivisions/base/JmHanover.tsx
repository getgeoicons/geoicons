// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const JmHanover = ({
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
      <path strokeLinejoin="round" d="M18.289 8.659a1 1 0 0 0-1.08-.679l-3.798.497a2 2 0 0 1-.971-.114l-.77-.293a2 2 0 0 0-.922-.12l-2.567.27a2 2 0 0 0-.933.347l-5.61 3.905a1 1 0 0 0-.428.84l.034 1.785a.6.6 0 0 0 .527.584l3.32.407a.6.6 0 0 0 .526-.201l1.848-2.122a1 1 0 0 1 .758-.343l5.254.024c.174 0 .344.046.494.133l3.356 1.928a1 1 0 0 0 .416.13l4.424.364a.56.56 0 0 0 .39-1L21.2 13.94a3 3 0 0 1-.755-.868l-1.484-2.575a3 3 0 0 1-.25-.559z"/>
    </svg>
  );
};
