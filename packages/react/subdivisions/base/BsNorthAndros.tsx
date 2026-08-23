// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const BsNorthAndros = ({
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
      <path strokeLinejoin="round" d="M20.723 18.133a1 1 0 0 0 .995-.848l.064-.417a1 1 0 0 0 .007-.251l-.088-.882a2 2 0 0 0-.576-1.217l-2.081-2.081a11 11 0 0 1-1.666-2.137l-1.375-2.303a1 1 0 0 1-.075-.87l.664-1.73a1 1 0 0 0-.032-.791l-1.396-2.909a.6.6 0 0 0-.755-.3l-1.945.74a1 1 0 0 1-.486.056L9.912 1.92a.6.6 0 0 0-.591.906l1.367 2.254a1 1 0 0 1 .135.66l-.465 3.25a2 2 0 0 1-.4.943l-3.828 4.93a1 1 0 0 1-.466.332l-2.362.808a1 1 0 0 0-.562 1.41l.274.522c.203.387.488.725.834.99l4.796 3.668a1 1 0 0 0 .608.206h.361a1 1 0 0 0 .71-.296l1.237-1.248a8 8 0 0 1 1.822-1.375l1.05-.58a8 8 0 0 1 2.326-.844l.947-.186a8 8 0 0 1 1.592-.148z"/>
    </svg>
  );
};
