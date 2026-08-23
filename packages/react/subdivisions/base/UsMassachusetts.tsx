// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const UsMassachusetts = ({
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
      <path strokeLinejoin="round" d="M2.953 7.617a.3.3 0 0 0-.297.22l-1.25 4.542a.6.6 0 0 0 .57.76l11.113.15a.6.6 0 0 1 .552.386l1.193 3.124a.6.6 0 0 0 .895.283l1.08-.727a.6.6 0 0 1 .906.314l.115.353a.6.6 0 0 0 .72.397l3.022-.772a1.497 1.497 0 0 0 1.075-1.846l-.519-1.894a.79.79 0 1 0-1.514.448l.127.396a1 1 0 0 1-.666 1.261l-.039.012a1 1 0 0 1-1.082-.351l-.142-.186a1 1 0 0 1-.128-.223l-.704-1.695a1 1 0 0 0-.463-.505l-1.095-.567a.947.947 0 0 1-.13-1.6l1.098-.817a1 1 0 0 0 .25-1.333l-.326-.52a1 1 0 0 0-1.312-.355l-1.685.884a1 1 0 0 1-.488.115z"/>
    </svg>
  );
};
