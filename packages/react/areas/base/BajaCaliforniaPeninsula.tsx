// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const BajaCaliforniaPeninsula = ({
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
      <path strokeLinejoin="round" d="M11.243 1.613 5.74 1.2l1.968 6.17a1 1 0 0 0 .228.385l1.397 1.468a1 1 0 0 1-.327 1.606l-.97.422L9.203 13a1 1 0 0 0 .32.304l2.305 1.375q.171.103.29.264l.48.648a1 1 0 0 1 .178.787l-.241 1.231a1 1 0 0 0 .285.911l2.247 2.177a1 1 0 0 1 .196.265l.331.652a1 1 0 0 0 1.574.278l.453-.423a1 1 0 0 0 .134-1.309l-1.742-2.46a1 1 0 0 1-.14-.28l-1.158-3.735a1 1 0 0 0-.086-.198l-3.776-6.64a1 1 0 0 1-.124-.605z"/>
    </svg>
  );
};
