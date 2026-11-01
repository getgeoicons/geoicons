// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Ar = ({
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
      <path strokeLinejoin="round" d="m6.642 18.619.956-3.633a2 2 0 0 0 .063-.622l-.159-2.808a2 2 0 0 1 .118-.798l.98-2.683a2 2 0 0 0 .083-1.069L8.51 6.12a2 2 0 0 1 .093-1.091l1.182-3.12a1 1 0 0 1 .894-.646l1.053-.044a1 1 0 0 1 .78.326l1.375 1.51a1 1 0 0 0 1.098.26l1.174-.452a.818.818 0 0 1 .717 1.462l-1.624.983a1 1 0 0 0-.456.63l-.39 1.677a1 1 0 0 0 .144.784l.37.55a1 1 0 0 1 .01 1.1l-.148.23a1 1 0 0 1-.72.45l-1.053.13a1 1 0 0 0-.75.5l-2.021 3.574a1 1 0 0 0 .032 1.038l.188.288a1 1 0 0 1-.012 1.11l-.671.982a1 1 0 0 0-.072 1.006l1.262 2.563a.6.6 0 0 1-.548.864l-1.034-.016a.6.6 0 0 1-.59-.605l.01-1.189a1 1 0 0 0-.495-.871l-1.388-.814a.6.6 0 0 1-.278-.67Z"/>
    </svg>
  );
};
