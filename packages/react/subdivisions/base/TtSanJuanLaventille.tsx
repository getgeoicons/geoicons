// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const TtSanJuanLaventille = ({
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
      <path strokeLinejoin="round" d="M5.38 11.421a.6.6 0 0 0 .219.875l1.072.554a.6.6 0 0 1 .303.694l-.612 2.188a1 1 0 0 0 .06.698l2.617 5.507a.6.6 0 0 0 1.009.118l.876-1.088a.7.7 0 0 1 .506-.257l1.366-.062a.6.6 0 0 0 .56-.724l-1.015-4.8a1 1 0 0 1-.016-.314l.318-2.923a1 1 0 0 0-.045-.423l-.93-2.807a1 1 0 0 1 .434-1.172l.498-.3a1 1 0 0 1 .656-.132l3.419.489a.6.6 0 0 0 .685-.594V4.47a1 1 0 0 1 .219-.625l.968-1.21a.6.6 0 0 0-.195-.91l-.63-.322a.6.6 0 0 0-.709.121l-1.46 1.538a1 1 0 0 1-.591.302l-1.378.188a1 1 0 0 0-.627.342l-.765.897a1 1 0 0 1-1.1.292L9.246 4.42a1 1 0 0 0-.988.18l-.98.836a1 1 0 0 0-.35.766l.013 2.648a1 1 0 0 1-.177.574z"/>
    </svg>
  );
};
