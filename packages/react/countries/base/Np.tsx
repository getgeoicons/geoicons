// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Np = ({
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
      <path strokeLinecap="round" strokeLinejoin="round" d="m22.272 16.199.169 1.829a.5.5 0 0 1-.569.54l-5.615-.798a.5.5 0 0 1-.22-.088l-2.72-1.947a.5.5 0 0 0-.286-.093l-3.137-.03a.5.5 0 0 1-.228-.059l-8.079-4.26a.5.5 0 0 1-.236-.615l1.574-4.276a.5.5 0 0 1 .809-.194l.672.622a.5.5 0 0 0 .778-.126L5.6 5.95a.5.5 0 0 1 .804-.098L9.89 9.617a.5.5 0 0 0 .452.153l1.041-.18a.5.5 0 0 1 .563.344l.28.902a.5.5 0 0 0 .227.284l4.284 2.488a.5.5 0 0 0 .22.067l5.238.324a.5.5 0 0 1 .454.624l-.363 1.405a.5.5 0 0 0-.014.17"/>
    </svg>
  );
};
