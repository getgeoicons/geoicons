// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const UsMississippi = ({
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
      <path strokeLinejoin="round" d="M6.97 9.71a4 4 0 0 0 .26 1.145l.696 1.799a1 1 0 0 1-.126.953L6.11 15.91a3 3 0 0 0-.542 1.294l-.226 1.392a.6.6 0 0 0 .594.696l6.542-.018-.387 1.59a.6.6 0 0 0 .063.44l.658 1.144a.6.6 0 0 0 .604.295l3.617-.51a.6.6 0 0 0 .516-.617l-.252-6.671a1 1 0 0 1 .005-.146l1.395-12.887a.6.6 0 0 0-.593-.665l-7.674-.044a1 1 0 0 0-.9.551L7.033 6.721a2 2 0 0 0-.207 1.049z"/>
    </svg>
  );
};
