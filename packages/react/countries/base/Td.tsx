// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Td = ({
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
      <path strokeLinejoin="round" d="m6.097 20.04 1.543 2.191a1 1 0 0 0 1.073.391l3.243-.857a3 3 0 0 0 .962-.448l4.072-2.87a1 1 0 0 0 .288-1.32l-.809-1.394a1 1 0 0 1-.09-.8l.812-2.602a.6.6 0 0 1 .588-.42l.544.013a.6.6 0 0 0 .615-.6V7.237a1 1 0 0 0-.539-.887L8.734 1.333a.6.6 0 0 0-.52-.016l-.68.303a.6.6 0 0 0-.328.732l.92 2.849a2 2 0 0 1 .093.72l-.223 4.22a1 1 0 0 1-.266.629l-2.32 2.496a.6.6 0 0 0-.032.779l1.547 1.97a1 1 0 0 1 .156.286l.868 2.466a.3.3 0 0 1-.2.389l-1.488.423a.3.3 0 0 0-.164.461Z"/>
    </svg>
  );
};
