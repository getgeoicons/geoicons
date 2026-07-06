// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Br = ({
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
      <path strokeLinejoin="round" d="m14.907 19.791-1.816 2.529a.5.5 0 0 1-.762.06l-1.5-1.515a.5.5 0 0 1 .021-.724l1.626-1.464a.5.5 0 0 0 .122-.574l-.747-1.682a.5.5 0 0 0-.378-.29l-.781-.125a.5.5 0 0 1-.421-.499l.023-2.344a.5.5 0 0 0-.165-.376L6.475 9.472a.5.5 0 0 0-.518-.096l-1.645.644a.5.5 0 0 1-.447-.041l-1.61-1.004a.5.5 0 0 1-.23-.493l.192-1.384a.5.5 0 0 1 .352-.41l1.05-.313a.5.5 0 0 0 .356-.498l-.071-1.93a.5.5 0 0 1 .437-.515l2.747-.345a.25.25 0 0 0 .207-.324l-.19-.598a.5.5 0 0 1 .379-.642l1.08-.214a.5.5 0 0 1 .595.451l.09 1.133a.5.5 0 0 0 .567.455l2.222-.31a.5.5 0 0 0 .294-.152l.79-.838a.5.5 0 0 1 .838.183l.656 1.947a.5.5 0 0 0 .319.315l6.704 2.194a.5.5 0 0 1 .345.465l.032 1.525a.5.5 0 0 1-.138.355l-1.67 1.756a.5.5 0 0 0-.127.243l-.947 4.555a.5.5 0 0 1-.29.356l-3.135 1.371a.5.5 0 0 0-.287.35l-.433 1.945a.5.5 0 0 1-.082.183Z"/>
    </svg>
  );
};
