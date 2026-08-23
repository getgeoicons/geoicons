// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CaManitoba = ({
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
      <path strokeLinejoin="round" d="M12.077 22.799a.3.3 0 0 0 .3-.3l.002-6.504a.3.3 0 0 1 .076-.199l6.624-7.477a.3.3 0 0 0-.112-.477L17.55 7.27a1 1 0 0 0-.682-.025l-.728.235a.6.6 0 0 1-.767-.427L14.68 4.24a.3.3 0 0 0-.272-.227l-.903-.057a.6.6 0 0 1-.56-.547l-.17-1.935a.3.3 0 0 0-.3-.274H4.95a.3.3 0 0 0-.3.3l-.01 8.629.713 12.362a.3.3 0 0 0 .298.283z"/>
    </svg>
  );
};
