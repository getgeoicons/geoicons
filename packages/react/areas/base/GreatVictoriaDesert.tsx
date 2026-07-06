// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const GreatVictoriaDesert = ({
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
      <path strokeLinejoin="round" d="m2.13 13.585 1.678 1.172a.6.6 0 0 0 .814-.12l1.935-2.448a1 1 0 0 1 .785-.38h2.176q.173 0 .335.058l6.45 2.3a1 1 0 0 1 .48.364l1.576 2.222a1 1 0 0 0 .554.387l3.887 1.056-.333-2.124a1 1 0 0 0-.439-.68l-3.694-2.43 2.413-.747a.6.6 0 0 0 .41-.69l-.209-1.051a1 1 0 0 0-.338-.571l-1.761-1.475a2 2 0 0 0-.927-.434l-5.97-1.086a2 2 0 0 0-1.304.206L8.022 8.522a1 1 0 0 1-1.096-.1L4.51 6.496a1 1 0 0 0-1.465.242L1.405 9.29a1 1 0 0 0-.147.694l.456 2.934a1 1 0 0 0 .416.666Z"/>
    </svg>
  );
};
