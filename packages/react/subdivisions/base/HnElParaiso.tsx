// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const HnElParaiso = ({
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
      <path strokeLinejoin="round" d="M7.17 14.844a2 2 0 0 1 1.42-.488l3.757.201a1 1 0 0 0 .864-.412l1.75-2.42a1 1 0 0 1 1.36-.25l3.006 1.976a.8.8 0 0 0 1.225-.52l.107-.56a1 1 0 0 1 .416-.639l1.07-.735a.8.8 0 0 0 .211-1.107L22 9.36a.8.8 0 0 0-.809-.339l-2.516.466a1 1 0 0 1-.828-.22L15.209 7.03a1 1 0 0 0-.96-.187l-1.514.5a1 1 0 0 1-.653-.01L8.576 6.07a1 1 0 0 0-1.079.267L5.033 9.043a1 1 0 0 0-.256.583l-.248 2.761a2 2 0 0 1-.587 1.244l-2.118 2.092a.8.8 0 0 0 .047 1.181l.966.813a.8.8 0 0 0 1.04-.008z"/>
    </svg>
  );
};
