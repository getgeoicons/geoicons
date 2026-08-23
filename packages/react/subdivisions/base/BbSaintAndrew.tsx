// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const BbSaintAndrew = ({
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
      <path strokeLinejoin="round" d="M19.651 14.176a1 1 0 0 0-.082-.968L17.02 9.42l-2.554-4.692a7 7 0 0 1-.621-1.567l-.338-1.287a.6.6 0 0 0-.51-.444l-1.548-.183a.6.6 0 0 0-.594.303l-.938 1.68a1 1 0 0 1-1.257.436L6.123 2.613a.6.6 0 0 0-.64.117l-.998.936a.6.6 0 0 0-.095.761l.916 1.429a1 1 0 0 1 .156.592l-.513 9.687a1 1 0 0 0 .177.623l1.1 1.586a.6.6 0 0 1 .052.595l-.313.676a.6.6 0 0 0 .478.849l2.864.318a1 1 0 0 1 .662.36l1.09 1.327a.3.3 0 0 0 .49-.037l.46-.776a2 2 0 0 0 .26-.75l.144-1.044a2 2 0 0 1 .26-.748l1.128-1.902a1 1 0 0 1 .846-.49l2.584-.037a2 2 0 0 0 .85-.202l.034-.017a2 2 0 0 0 .947-.978z"/>
    </svg>
  );
};
