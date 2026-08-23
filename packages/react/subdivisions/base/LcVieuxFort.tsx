// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const LcVieuxFort = ({
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
      <path strokeLinejoin="round" d="M6.55 1.243a.42.42 0 0 0-.322.377l-.182 2.546a1 1 0 0 0 .118.548L8.67 9.332a3 3 0 0 1 .338 1.814l-.627 4.87a1 1 0 0 0 .073.522l.764 1.784a1 1 0 0 0 .888.605l1.815.058c.267.008.526.098.742.256l.073.055a1.072 1.072 0 0 1 .138 1.606l-.333.346a.774.774 0 0 0 .435 1.302l.866.14a3 3 0 0 0 1.351-.093l.256-.078a.82.82 0 0 0 .28-1.417l-.205-.168a1.5 1.5 0 0 1-.348-1.914l2.558-4.425a1 1 0 0 0 .066-.864l-.572-1.47a4 4 0 0 0-.751-1.221L9.613 3.398a4 4 0 0 0-.626-.565L6.89 1.312a.42.42 0 0 0-.34-.07Z"/>
    </svg>
  );
};
