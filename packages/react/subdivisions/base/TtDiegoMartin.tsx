// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const TtDiegoMartin = ({
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
      <path strokeLinejoin="round" d="M22.788 8.992a.6.6 0 0 0-.314-.547l-.574-.312a1 1 0 0 0-1.243.236l-.178.212a1 1 0 0 1-.68.354l-5.802.497a1 1 0 0 0-.47.164L9.84 12.055a1 1 0 0 0-.433.992l.103.63a1 1 0 0 0 .944.838l.689.03a.6.6 0 0 1 .57.674l-.019.142a.6.6 0 0 0 .157.485l.182.194a.6.6 0 0 0 .777.085l.587-.403a1 1 0 0 0 .365-.46l.142-.364a1 1 0 0 1 1.048-.629l5.344.626a1 1 0 0 0 .882-.35l1.26-1.499a1 1 0 0 0 .235-.61z"/>
    </svg>
  );
};
