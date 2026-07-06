// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Md = ({
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
      <path strokeLinejoin="round" d="m10.939 17.323.329 5.222a.25.25 0 0 0 .27.233l1.378-.117a.25.25 0 0 0 .226-.213l.218-1.493a.5.5 0 0 1 .16-.3l1.917-1.718a.5.5 0 0 0 .158-.459l-.437-2.489a.5.5 0 0 1 .566-.58l5.076.744-.703-2.787a.5.5 0 0 0-.257-.323l-1.367-.698a.5.5 0 0 1-.272-.426l-.084-2.128a.5.5 0 0 0-.313-.444l-1.275-.514a.5.5 0 0 1-.313-.484l.122-2.944a.5.5 0 0 0-.262-.46L9.278 1.266a.5.5 0 0 0-.265-.06l-4.027.22a.5.5 0 0 0-.267.094L3.2 2.624l2.148.938a.5.5 0 0 1 .234.209l6.062 10.551c.068.12.085.26.045.392l-.73 2.434a.5.5 0 0 0-.02.175Z"/>
    </svg>
  );
};
