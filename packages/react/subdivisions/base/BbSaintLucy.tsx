// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const BbSaintLucy = ({
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
      <path strokeLinejoin="round" d="M21.914 13.842a1 1 0 0 0 .458-.559l.301-.92a1 1 0 0 0-.052-.752l-.726-1.48a1 1 0 0 0-.637-.524l-1.043-.282a1 1 0 0 1-.462-.274l-3.886-4.065a4 4 0 0 0-.658-.554l-1.441-.97a4 4 0 0 0-.672-.364l-.397-.169a4 4 0 0 0-1.744-.313l-.31.014a4 4 0 0 0-1.454.346L5.57 4.6a2 2 0 0 0-.83.691L1.572 9.897a2 2 0 0 0-.351 1.198l.187 5.842a3 3 0 0 0 .108.704l.781 2.824a.6.6 0 0 0 .99.276L5.62 18.54a1 1 0 0 1 .893-.252l2.46.52a1 1 0 0 0 .916-.275l1.728-1.74a1 1 0 0 1 .691-.294l2.45-.045a2 2 0 0 0 1.177-.41l.608-.465a2 2 0 0 1 1.236-.41l1.485.016a1 1 0 0 0 .504-.13z"/>
    </svg>
  );
};
