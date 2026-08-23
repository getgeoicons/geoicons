// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const JmClarendon = ({
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
      <path strokeLinejoin="round" d="M5.109 1.74a.3.3 0 0 0-.232.435l3.686 7.2a1.5 1.5 0 0 1 .16.818l-.12 1.335a1.5 1.5 0 0 0 .132.76l.936 2.035a.6.6 0 0 1-.42.838l-1.111.235a.533.533 0 0 0-.199.956l7.974 5.67q.204.146.436.236l.54.21a1.68 1.68 0 0 0 1.6-.214l.072-.053a1.53 1.53 0 0 0-.043-2.495l-.529-.362a1 1 0 0 1-.4-1.087l.718-2.65a3 3 0 0 0 .076-1.199l-.735-5.275a3 3 0 0 0-.094-.436L15.86 2.944a1 1 0 0 0-.77-.7l-4.96-.956a3 3 0 0 0-.92-.033z"/>
    </svg>
  );
};
