// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const NiSouthCaribbeanCoast = ({
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
      <path strokeLinejoin="round" d="M8.076 12.351a2 2 0 0 0 .391.655l1.28 1.43a1 1 0 0 1 .25.774l-.264 2.443a1 1 0 0 0 .335.859l2.61 2.291c.313.276.668.5 1.051.666l2.696 1.166a.596.596 0 0 0 .8-.74l-.544-1.596a2 2 0 0 1 .371-1.943L18 17.244a1 1 0 0 0 .227-.8l-.34-2.219a6 6 0 0 1-.024-1.655l.192-1.532a1 1 0 0 1 .775-.852l.273-.06a1.095 1.095 0 0 0 .756-1.528l-.201-.437a5 5 0 0 1-.407-2.822l.086-.587a1 1 0 0 0-.676-1.095l-.86-.284a1 1 0 0 1-.625-.606l-.258-.705a1 1 0 0 0-.865-.655l-2.144-.158a6 6 0 0 0-1.305.045l-4.061.59a6 6 0 0 0-1.094.265l-2.58.89a1 1 0 0 0-.665.813L4.043 5.06a1 1 0 0 0 .57 1.04l1.07.495a1 1 0 0 1 .52.568z"/>
    </svg>
  );
};
