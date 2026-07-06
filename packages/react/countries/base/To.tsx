// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const To = ({
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
      <path strokeLinejoin="round" d="m1.385 3.553 1.812-1.945.327.541a.5.5 0 0 1 .018.484l-.673 1.336a.5.5 0 0 0-.014.42l.238.562a.5.5 0 0 0 .413.302l1.37.13a1 1 0 0 0 .54-.1l.907-.45a1 1 0 0 1 .921.017l2.523 1.37a1 1 0 0 0 .898.028l2.43-1.13a1 1 0 0 1 .63-.07l1.293.277a1 1 0 0 1 .497.27l.605.605a.868.868 0 0 1-.44 1.464l-.826.17a1 1 0 0 0-.592.37l-.865 1.123a1 1 0 0 0-.191.79l.2 1.09a1 1 0 0 1-.277.888l-.584.585a1 1 0 0 1-1.095.214l-1.596-.671a1 1 0 0 1-.533-.532l-.498-1.176a1 1 0 0 0-.68-.58L5.49 9.277a1 1 0 0 1-.31-.136l-3-1.978a.5.5 0 0 1-.21-.298l-.705-2.852a.5.5 0 0 1 .12-.461Zm17.445 12.97 1.536-2.664a1 1 0 0 1 .33-.345l.746-.474a.5.5 0 0 1 .767.384l.577 7.497a.5.5 0 0 1-.087.323l-.463.667a.5.5 0 0 1-.756.077l-2.863-2.735a.5.5 0 0 1-.15-.422l.237-1.93a1 1 0 0 1 .126-.378Z"/>
    </svg>
  );
};
