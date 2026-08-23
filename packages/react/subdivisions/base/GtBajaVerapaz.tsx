// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const GtBajaVerapaz = ({
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
      <path strokeLinejoin="round" d="M9.512 8.129a1 1 0 0 0-1.154.402l-.516.79a.6.6 0 0 1-.96.06l-2.02-2.383a.6.6 0 0 0-.982.096l-.943 1.688a.6.6 0 0 1-.431.3l-.746.116a.6.6 0 0 0-.505.652l.122 1.248a1 1 0 0 0 .301.623l2.924 2.816a1 1 0 0 1 .26.419l.619 1.959a1 1 0 0 0 1.017.696l5.75-.37a1 1 0 0 0 .621-.268l2.374-2.228 4.577-3.397a1 1 0 0 1 .553-.196l1.428-.061a1 1 0 0 0 .956-1.042l-.055-1.277a1 1 0 0 0-.378-.742l-.128-.101a1 1 0 0 0-.985-.147l-1.129.441a1 1 0 0 1-.275.065l-7.332.653a2 2 0 0 1-.81-.094z"/>
    </svg>
  );
};
