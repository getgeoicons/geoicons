// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const MackenzieBasin = ({
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
      <path strokeLinejoin="round" d="m11.438 22.622-1.33.112a1 1 0 0 1-1.03-.674l-.756-2.224a1 1 0 0 0-.426-.531l-1.11-.678a1 1 0 0 1-.44-.579l-.37-1.294a1 1 0 0 1 .068-.722l.282-.564a1 1 0 0 0-.188-1.155l-.707-.707a1 1 0 0 1-.242-1.024l.602-1.805a1 1 0 0 1 .717-.656l.734-.175a1 1 0 0 0 .768-.973v-.996a1 1 0 0 0-.463-.844l-2.16-1.375a.6.6 0 0 1-.279-.516l.008-.48a.6.6 0 0 1 .65-.587l.992.083a1 1 0 0 0 .98-.551l.867-1.745a.913.913 0 0 1 1.652.777l-.254.571a1 1 0 0 0-.053.664l.218.816a1 1 0 0 0 .319.505l1.252 1.064a1 1 0 0 0 1.012.17l.939-.369a1 1 0 0 1 1.19.366l.603.88a1 1 0 0 1 .168.69l-.143 1.138a1 1 0 0 0 .685 1.076l1.882.609a1 1 0 0 1 .69.876l.215 2.87a1 1 0 0 1-.175.644l-.303.437a1 1 0 0 1-1.012.413l-.955-.184a.6.6 0 0 0-.604.242l-.337.475a.6.6 0 0 0 .197.871l1.043.583a.855.855 0 0 1-.188 1.57l-.685.19a1 1 0 0 0-.571.417l-.364.558a1 1 0 0 1-.423.363l-2.835 1.292a1 1 0 0 1-.33.086Z"/>
    </svg>
  );
};
