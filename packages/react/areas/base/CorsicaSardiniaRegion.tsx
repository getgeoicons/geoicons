// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CorsicaSardiniaRegion = ({
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
      <path strokeLinejoin="round" d="m10.308 22.07-.57-.523a1 1 0 0 1-.283-1.019l.538-1.827q.048-.166.039-.339l-.125-2.182a1 1 0 0 0-.21-.558L8.69 14.33a1 1 0 0 1-.184-.844l.058-.247a1 1 0 0 1 1.2-.745l.747.174a1 1 0 0 0 .953-.288l.751-.795a1 1 0 0 1 1.002-.275l.575.165a1 1 0 0 1 .633.542l.964 2.09a1 1 0 0 1-.037.912l-.61 1.078a1 1 0 0 0-.129.49l-.008 3.628a1 1 0 0 1-1.154.986l-.393-.061a1 1 0 0 0-.94.37l-.348.442a1 1 0 0 1-1.462.118Zm1.277-12.898.418.19a1 1 0 0 0 1.031-.122l.26-.203a1 1 0 0 0 .384-.788v-.755a1 1 0 0 1 .175-.564l.5-.732a1 1 0 0 0 .175-.591l-.091-3.477a.909.909 0 1 0-1.814.108l.016.174a1 1 0 0 1-.778 1.068l-.289.064a1 1 0 0 0-.556.343l-.51.623a1 1 0 0 0-.201.859l.72 3.118a1 1 0 0 0 .56.685Z"/>
    </svg>
  );
};
