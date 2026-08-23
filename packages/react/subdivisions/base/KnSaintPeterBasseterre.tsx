// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const KnSaintPeterBasseterre = ({
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
      <path strokeLinejoin="round" d="m2.604 9.53-1.002-.39a.6.6 0 0 1-.381-.588l.1-2.049a.6.6 0 0 1 .248-.456L3.357 4.75a1 1 0 0 1 .974-.112l.722.303a3 3 0 0 0 1.408.224l.933-.077a3 3 0 0 1 .912.064l2.823.64a1 1 0 0 0 .63-.062l3.6-1.614a.6.6 0 0 1 .808.34l1.197 3.233a5 5 0 0 0 .992 1.631l1.758 1.931a.6.6 0 0 1 .123.603l-.198.564a2 2 0 0 0 .175 1.696l.031.051a2 2 0 0 0 .974.825l.693.275a1 1 0 0 1 .617.761l.128.752a7 7 0 0 1 .083 1.677l-.08 1.126a.6.6 0 0 1-.607.557l-1.836-.025a.6.6 0 0 1-.56-.406L19.416 19a2 2 0 0 0-.894-1.085l-.14-.08a2 2 0 0 0-1.18-.259l-1.18.108a.6.6 0 0 1-.584-.313l-1.341-2.503a.6.6 0 0 0-.549-.316l-2.414.08a.6.6 0 0 1-.62-.587l-.013-.613a.6.6 0 0 0-.572-.587l-3.475-.164a3 3 0 0 1-1.027-.234l-1.823-.77a1 1 0 0 1-.61-.91l-.008-.684a.6.6 0 0 0-.381-.551Z"/>
    </svg>
  );
};
