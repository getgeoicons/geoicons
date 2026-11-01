// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Br = ({
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
      <path strokeLinejoin="round" d="m13.207 22.224 1.448-2.017a3 3 0 0 0 .493-1.099l.266-1.197a1 1 0 0 1 .575-.7l2.228-.974a2 2 0 0 0 1.144-1.366l.846-3.524a2 2 0 0 1 .415-.822l1.247-1.481a1.82 1.82 0 0 0-.823-2.901l-5.374-1.768a2 2 0 0 1-1.234-1.161l-.38-.957a.6.6 0 0 0-.771-.34l-3.2 1.22a.6.6 0 0 1-.812-.514l-.06-.751a.6.6 0 0 0-.714-.541l-1.096.217a.6.6 0 0 0-.478.51l-.058.442a1 1 0 0 1-1.094.865L4.55 3.238a.6.6 0 0 0-.66.639l.1 1.451a1 1 0 0 1-.603.988l-.731.314a1 1 0 0 0-.51.492l-.194.41a1 1 0 0 0 .318 1.237l1.411 1.022a1 1 0 0 0 .951.121L5.688 9.5a1 1 0 0 1 1.066.218l2.823 2.777a2 2 0 0 1 .594 1.546l-.059.976a1 1 0 0 0 .743 1.027l.44.117a1 1 0 0 1 .678.605l.42 1.08a1 1 0 0 1-.244 1.088l-1.197 1.136a.6.6 0 0 0-.013.857l1.355 1.369a.6.6 0 0 0 .913-.072Z"/>
    </svg>
  );
};
