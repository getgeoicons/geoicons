// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Sd = ({
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
      <path strokeLinejoin="round" d="m20.535 3.566-15.37.04.08 2.792-1.335.04.04 5.865-1.091.063a.5.5 0 0 0-.44.322l-1.14 3.006a.5.5 0 0 0 .024.408l1.884 3.628a.5.5 0 0 0 .604.243l2.087-.706a.5.5 0 0 1 .587.212l.376.615a.5.5 0 0 0 .527.229l3.66-.754a.5.5 0 0 1 .243.01l1.409.42a.5.5 0 0 0 .485-.116l1.078-1.015a.5.5 0 0 0 .153-.425l-.116-.95a.5.5 0 0 1 .396-.55l.652-.133a.5.5 0 0 1 .587.373l.777 3.25 2.846-4.032a.5.5 0 0 0 .085-.206l.877-5.261a.5.5 0 0 1 .208-.328L22.8 9.147l-1.5-1.17a.5.5 0 0 1-.187-.324z"/>
    </svg>
  );
};
