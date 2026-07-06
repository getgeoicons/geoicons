// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Bf = ({
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
      <path strokeLinejoin="round" d="m8.594 15.848.483 4.04-2.648-1.298a.5.5 0 0 0-.35-.033l-1.68.453a.5.5 0 0 1-.402-.064l-2.536-1.649a.5.5 0 0 1-.223-.48l.425-3.505a.5.5 0 0 1 .298-.399l2.266-.983a.5.5 0 0 0 .299-.505l-.15-1.593a.5.5 0 0 1 .167-.421l.841-.745a.5.5 0 0 1 .407-.12l1.686.259a.5.5 0 0 0 .486-.209L9.479 6.42a.5.5 0 0 1 .21-.172l4.774-2.08a.5.5 0 0 1 .263-.038l1.89.24a.5.5 0 0 1 .433.439l.24 2.077a.5.5 0 0 0 .242.372l1.511.897a.5.5 0 0 1 .24.503l-.108.733a.5.5 0 0 0 .351.552l2.08.62a.5.5 0 0 1 .319.288l.707 1.703a.5.5 0 0 1-.212.625l-3.528 2.033a.5.5 0 0 1-.34.058l-2.46-.455a.5.5 0 0 0-.294.035l-1.305.58a.5.5 0 0 1-.22.042l-5.164-.182a.5.5 0 0 0-.514.559Z"/>
    </svg>
  );
};
