// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const LevantSimplified = ({
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
      <path strokeLinejoin="round" d="m6.756 8.645-3.6 8.17a1 1 0 0 0-.06.625l.955 4.187a1 1 0 0 0 .787.76l1.585.304a1 1 0 0 0 .948-.331l.805-.94a1 1 0 0 1 .618-.34l1.293-.184 1.25-1.31-2.44-2.736 5.058-1.548-.952-3.153 4.124-2.52a1 1 0 0 0 .274-.248l.673-.882a1 1 0 0 0 .197-.49l.193-1.636a1 1 0 0 0 0-.23l-.134-1.174a1 1 0 0 1 .663-1.058l.203-.07a1 1 0 0 0 .402-.264l1.032-1.111a.645.645 0 0 0-.755-1.02l-1.523.743a1 1 0 0 1-.61.086l-.7-.121a1 1 0 0 0-.66.113l-1.744.978a1 1 0 0 1-.805.076l-1.618-.539a1 1 0 0 0-.572-.018l-1.875.496a1 1 0 0 1-.637-.042L7.41 2.51 6.8 3.863a1 1 0 0 0-.087.442L6.84 8.21a1 1 0 0 1-.084.435Z"/>
    </svg>
  );
};
