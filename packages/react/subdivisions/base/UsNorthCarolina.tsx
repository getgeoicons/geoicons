// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const UsNorthCarolina = ({
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
      <path strokeLinejoin="round" d="M8.09 7.948a.3.3 0 0 0-.238.113l-.779.983a1 1 0 0 1-.401.303L1.79 11.366a.6.6 0 0 0-.36.442l-.09.476a.6.6 0 0 0 .613.711l2.255-.09a2 2 0 0 0 .56-.103l1.392-.47c.229-.078.469-.113.71-.105l2.383.082a.6.6 0 0 1 .472.258l.328.47a.6.6 0 0 0 .477.257l1.94.05a.6.6 0 0 1 .412.179l2.275 2.315a.6.6 0 0 0 .51.174l.967-.135a.6.6 0 0 0 .433-.287l.639-1.072a1 1 0 0 1 .697-.474l1.642-.269a1 1 0 0 0 .837-.926l.024-.39a1 1 0 0 1 .486-.798l.688-.41a1 1 0 0 0 .425-1.21l-.602-1.602a.6.6 0 0 0-.557-.39z"/>
    </svg>
  );
};
