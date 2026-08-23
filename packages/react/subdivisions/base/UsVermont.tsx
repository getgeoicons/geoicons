// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const UsVermont = ({
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
      <path strokeLinejoin="round" d="m11.986 22.8-.36-1.715a3 3 0 0 1-.014-1.153l.83-4.563c.056-.307.159-.603.306-.878l1.85-3.459a1 1 0 0 0 .117-.529l-.092-1.613a1 1 0 0 1 .575-.963l2.159-1.007a1 1 0 0 0 .563-.742l.368-2.212.396-2.382a.3.3 0 0 0-.295-.35L6.212 1.202a.3.3 0 0 0-.298.34l.61 4.494a2 2 0 0 1-.171 1.119l-.877 1.868a2 2 0 0 0-.19.837l-.026 4.105a.6.6 0 0 0 .252.493l.887.632a.6.6 0 0 1 .251.507l-.21 6.725a.3.3 0 0 0 .29.309z"/>
    </svg>
  );
};
