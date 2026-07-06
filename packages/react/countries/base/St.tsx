// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const St = ({
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
      <path strokeLinejoin="round" d="m5.807 22.032-.735-3.948a.5.5 0 0 1 .112-.416l1.994-2.338a1 1 0 0 1 .779-.35l1.11.02a1 1 0 0 1 .85.5l.491.856a1 1 0 0 1 .129.406l.1 1.072a1 1 0 0 1-.172.66l-1.383 2.01a1 1 0 0 1-.245.25l-2.25 1.594a.5.5 0 0 1-.78-.316ZM15.5 3.64c.12-.629.381-1.517.527-1.992a.49.49 0 0 1 .453-.347l1.782-.072a.5.5 0 0 1 .498.648l-.754 2.42a.5.5 0 0 1-.622.329l-1.556-.47a.454.454 0 0 1-.329-.515Z"/>
    </svg>
  );
};
