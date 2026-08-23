// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const LcChoiseul = ({
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
      <path strokeLinejoin="round" d="M20.355 2.263a.57.57 0 0 0-.905-.663l-5.702 5.393a2 2 0 0 1-1.11.53l-2.94.39a1 1 0 0 0-.66.383l-.86 1.12a2 2 0 0 1-.9.662l-1.24.454a2 2 0 0 0-.882.639l-1.153 1.46a2 2 0 0 0-.425 1.1l-.024.348a2 2 0 0 0 .802 1.744l2.106 1.566a3 3 0 0 1 .942 1.17l.539 1.19a3 3 0 0 0 .698.967l1.787 1.65a.6.6 0 0 0 .874-.064l1.354-1.674a2 2 0 0 0 .4-.839l.89-4.152q.051-.235.156-.452z"/>
    </svg>
  );
};
