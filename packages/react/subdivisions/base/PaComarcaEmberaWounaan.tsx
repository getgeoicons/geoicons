// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const PaComarcaEmberaWounaan = ({
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
      <path strokeLinejoin="round" d="M13.91 1.834a2 2 0 0 1 .847.582l3.193 3.73q.339.395.604.842l2.54 4.283a1 1 0 0 1-.117 1.18l-.784.869a4 4 0 0 1-1.56 1.063l-2.276.858a.6.6 0 0 1-.664-.168l-2.51-2.88a5 5 0 0 1-.61-.873l-3.026-5.5a2 2 0 0 1 .081-2.064l.631-.958a2 2 0 0 1 .44-.477l.569-.444a2 2 0 0 1 1.903-.307zM4.253 13.712a1 1 0 0 1 1.483-.025l1.974 2.109q.347.37.59.817l1.1 2.013a2 2 0 0 1 .244.959v1.909a1.14 1.14 0 0 1-1.604 1.043l-2.342-1.039a3 3 0 0 1-1.274-1.07L2.91 18.172a2 2 0 0 1-.339-1.057l-.018-.651a2 2 0 0 1 .494-1.375z"/>
    </svg>
  );
};
