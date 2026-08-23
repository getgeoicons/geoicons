// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const DoSantiago = ({
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
      <path strokeLinejoin="round" d="M22.298 6.838a.6.6 0 0 0-.241-.93l-1.319-.538a1 1 0 0 1-.614-.805l-.108-.888a1 1 0 0 0-.494-.746l-1.046-.603a.6.6 0 0 0-.825.23l-.413.75a1 1 0 0 1-1.34.403l-2.33-1.22a.6.6 0 0 0-.873.456l-.138 1.083a.3.3 0 0 1-.442.225l-.687-.378a.3.3 0 0 0-.424.154l-.357.917a.3.3 0 0 0 .158.384l.986.434a.6.6 0 0 1 .359.562l-.03 1.408a1 1 0 0 1-1.174.963l-3.86-.682a.8.8 0 0 0-.77.296L5.138 9.82a2 2 0 0 1-1.425.764l-.339.025a2 2 0 0 0-1.458.807l-.137.186a2 2 0 0 0-.38.97l-.133 1.223a2 2 0 0 0 .212 1.138l.88 1.697a2 2 0 0 0 .65.734l1.377.935a1 1 0 0 1 .43.7l.089.7a1 1 0 0 0 .424.696l1.916 1.322a1 1 0 0 0 .817.145l1.49-.384a1 1 0 0 0 .74-.829l.008-.054a1 1 0 0 1 .916-.858l1.759-.13a3 3 0 0 0 1.272-.39l2.033-1.167a1 1 0 0 0 .485-.681l.128-.678a.6.6 0 0 1 .703-.478l.51.098a.6.6 0 0 0 .712-.586l.018-2.827a1 1 0 0 1 .363-.764l1.898-1.568a1 1 0 0 0 .363-.739l.054-1.689a1 1 0 0 1 .219-.592z"/>
    </svg>
  );
};
