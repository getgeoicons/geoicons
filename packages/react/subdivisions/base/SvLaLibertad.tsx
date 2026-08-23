// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SvLaLibertad = ({
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
      <path strokeLinejoin="round" d="M4.209 18.765a.3.3 0 0 0 .157.502l3.36.671 5.937.403c.382.026.755.125 1.099.29l4.21 2.027a.3.3 0 0 0 .41-.164l.65-1.718a.3.3 0 0 0-.256-.405l-1.318-.107a1 1 0 0 1-.815-.555l-.381-.772a2 2 0 0 1-.206-.884v-3.544a1 1 0 0 0-.26-.673l-.793-.872a1 1 0 0 1-.239-.877l1.202-5.755a1 1 0 0 0-.21-.843l-1.069-1.287a1 1 0 0 1-.141-1.052l.177-.39a.83.83 0 0 0-.433-1.108l-.647-.273a1 1 0 0 0-.836.027l-1.32.66a1 1 0 0 0-.548.799l-.158 1.65a1 1 0 0 1-.311.634l-1.316 1.236a1 1 0 0 0-.315.719l-.037 3.689a1 1 0 0 1-.367.763l-1.414 1.159a1 1 0 0 0-.362.866l.094 1.014a1 1 0 0 1-.276.788z"/>
    </svg>
  );
};
