// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const BsLongIsland = ({
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
      <path strokeLinejoin="round" d="M10.328 12.439a1 1 0 0 0-.256.824l.025.167a2 2 0 0 0 .523 1.08l1.763 1.871a1 1 0 0 0 .385.254l1.521.554a1 1 0 0 1 .568.524l1.985 4.348a.6.6 0 0 0 .945.199l.557-.497a.6.6 0 0 0 .191-.558l-.494-2.65a1 1 0 0 0-.239-.485l-1.948-2.168a1 1 0 0 0-.56-.315l-.472-.089a2.8 2.8 0 0 1-2.097-1.748l-.072-.19a3 3 0 0 1-.197-.942l-.07-1.587a2 2 0 0 0-.301-.97l-1.41-2.26c-.25-.4-.442-.832-.57-1.286l-.246-.867a4 4 0 0 0-.63-1.286L7.344 1.81a1 1 0 0 0-1.16-.34l-.095.036a1 1 0 0 0-.643.994l.06.992a1 1 0 0 0 .59.853l.634.284a1 1 0 0 1 .523.547l1.063 2.701a3 3 0 0 0 .85 1.189l.706.6a2 2 0 0 1 .617.94l.213.695a1 1 0 0 1-.222.971z"/>
    </svg>
  );
};
