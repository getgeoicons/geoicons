// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const MxVeracruz = ({
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
      <path strokeLinejoin="round" d="M1.891 4.222V2.336a1 1 0 0 1 .767-.972l.546-.131a1 1 0 0 1 .786.14l.982.65a1 1 0 0 1 .246.233L6.854 4.43a2 2 0 0 1 .372.854l.448 2.535a2 2 0 0 0 .48.988l2.372 2.641a3 3 0 0 1 .396.558l1.955 3.55a1 1 0 0 0 .825.517l2.084.105a1 1 0 0 1 .737.382l1.015 1.297a1 1 0 0 0 .863.381l1.175-.089a1 1 0 0 1 .855.371l1.549 1.93a1 1 0 0 1 .215.528l.043.436a1 1 0 0 1-.388.893l-.285.219a1 1 0 0 1-.608.205h-3.395a1 1 0 0 1-.746-.334l-.74-.829a1 1 0 0 0-1.015-.297l-.826.23a1 1 0 0 1-.974-.253l-.008-.009a1 1 0 0 1-.267-.946l.107-.44A1 1 0 0 0 12.7 18.8l-1.77-1.254a1 1 0 0 0-1.146-.007l-.141.098a1 1 0 0 1-.954.099l-1.1-.46a1 1 0 0 1-.614-.912l-.055-4.91a1 1 0 0 0-.547-.88l-1.435-.729a1 1 0 0 0-.99.048l-.51.326A.991.991 0 0 1 2.08 8.833l.613-.92a1 1 0 0 0 .105-.906l-.78-2.083a2 2 0 0 1-.128-.702Z"/>
    </svg>
  );
};
