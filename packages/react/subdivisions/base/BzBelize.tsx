// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const BzBelize = ({
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
      <path strokeLinejoin="round" d="M6.507 13.26a.3.3 0 0 0 .381.265l.76-.216a.3.3 0 0 1 .381.272l.33 6.014a3 3 0 0 1-.074.841l-.358 1.546a.6.6 0 0 0 .575.735l4.89.08a.6.6 0 0 0 .321-.087l.6-.363a.6.6 0 0 0 .289-.503l.05-2.86q.006-.4.092-.79l.852-3.872c.09-.41.5-.667.91-.57l.027.007a.914.914 0 0 0 .548-1.74l-1.338-.526a1 1 0 0 1-.58-1.254l.937-2.736q.09-.263.13-.537l.384-2.613q.05-.34.176-.66l.553-1.409a.6.6 0 0 0-.484-.814l-1.796-.225a2 2 0 0 0-.706.037L9.155 2.504a1 1 0 0 0-.71.627l-.28.758a1 1 0 0 0-.062.361l.048 3.123a1 1 0 0 1-.216.635l-1.421 1.8a1 1 0 0 0-.213.694z"/>
    </svg>
  );
};
