// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SvAhuachapan = ({
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
      <path strokeLinejoin="round" d="M21.358 3.794a1 1 0 0 0-.705-.327l-1.406-.05a2 2 0 0 1-1.094-.375l-.715-.513a2 2 0 0 0-1.711-.3l-2.196.62a2 2 0 0 0-.965.614L10.46 5.886a2 2 0 0 1-.475.4L7.14 8.006a1 1 0 0 0-.423.515l-.531 1.47a1 1 0 0 1-.393.497l-2.031 1.33a2 2 0 0 0-.835 1.15l-.36 1.326a2 2 0 0 0 .107 1.343l.16.355a1 1 0 0 1-.333 1.224l-.878.625a.3.3 0 0 0 .05.517l7.633 3.496a.6.6 0 0 0 .687-.135l1.617-1.721a1 1 0 0 1 1.267-.159l1.762 1.125a1 1 0 0 0 .882.096l.718-.263a1 1 0 0 0 .566-.523l1.193-2.61a1 1 0 0 0 .078-.253l.82-4.986a1 1 0 0 0-.083-.591l-.43-.907a.3.3 0 0 1 .214-.423l2.468-.473a.6.6 0 0 0 .461-.416l1.111-3.69a1 1 0 0 0-.217-.96z"/>
    </svg>
  );
};
