// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const MxColima = ({
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
      <path strokeLinejoin="round" d="M22.547 14.741a.6.6 0 0 0 .157-.59l-.591-2.112a1 1 0 0 1-.027-.414l.55-3.783a1 1 0 0 0-.171-.719l-1.588-2.26a1 1 0 0 0-1.264-.32l-2.314 1.153a1 1 0 0 1-.752.057l-3.525-1.131a.6.6 0 0 0-.754.386l-.723 2.234a1 1 0 0 1-.801.681l-6.452.98a1 1 0 0 0-.332.112l-2.18 1.2a.3.3 0 0 0 .041.545l2.992 1.088a1 1 0 0 0 .457.054l1.665-.194a.6.6 0 0 1 .419.108l.374.267a.6.6 0 0 1 .249.533l-.051.685a.6.6 0 0 0 .372.6c3.401 1.406 5.396 2.493 9.184 5.368.42.32 1.017.263 1.365-.133l1.22-1.387a.3.3 0 0 0 .047-.323l-.424-.925a.3.3 0 0 1 .044-.32l.354-.415a.3.3 0 0 1 .328-.089l.693.243a.3.3 0 0 0 .309-.07z"/>
    </svg>
  );
};
