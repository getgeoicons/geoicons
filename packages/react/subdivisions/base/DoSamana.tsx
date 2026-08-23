// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const DoSamana = ({
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
      <path strokeLinejoin="round" d="M6.558 16.455a1 1 0 0 0-.092-.648l-.725-1.414a1 1 0 0 1-.092-.649l.489-2.496a.6.6 0 0 1 .705-.473l5.799 1.144a3 3 0 0 0 .827.047l2.382-.196a4 4 0 0 1 1.24.091l2.09.49a1 1 0 0 0 1.187-.687l.143-.48a2 2 0 0 1 .798-1.084l.514-.347a2 2 0 0 0 .586-.612l.239-.389a.827.827 0 0 0-1.032-1.19l-1.98.854a.524.524 0 0 1-.568-.86l1.215-1.157a.797.797 0 0 0-1.023-1.218l-2.705 2.002a2 2 0 0 1-1.722.32l-1.361-.376q-.601-.166-1.225-.205l-2.56-.159a2 2 0 0 0-1.119.262l-.395.226a3 3 0 0 1-1.153.378l-5.209.594a.6.6 0 0 0-.531.569l-.055 1.213a.6.6 0 0 0 .52.622l1.8.242a.946.946 0 0 1 .219 1.82l-1.405.549a.6.6 0 0 0-.375.651l.114.729a2 2 0 0 0 .344.847L4.2 17.95a2 2 0 0 0 .64.581l.454.26a.6.6 0 0 0 .887-.406z"/>
    </svg>
  );
};
