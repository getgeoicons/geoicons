// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const UsSouthCarolina = ({
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
      <path strokeLinejoin="round" d="M3.432 4.248a3 3 0 0 0-1.021.534l-.65.52a1 1 0 0 0-.345.534l-.017.067a1 1 0 0 0 .52 1.14l1.12.563a3 3 0 0 1 1.303 1.272l.74 1.39q.185.346.453.634l3.708 3.986a3 3 0 0 1 .654 1.107l1.209 3.678a.6.6 0 0 0 .433.396l1.339.314a.6.6 0 0 0 .516-.12l6.042-4.94a2 2 0 0 0 .59-.804l.523-1.303a3 3 0 0 1 .773-1.11l1.246-1.126a.3.3 0 0 0 .012-.433l-4.4-4.474a1 1 0 0 0-.697-.298l-4.26-.068a.6.6 0 0 1-.502-.287l-.756-1.237a.6.6 0 0 0-.475-.286l-5.171-.315a3 3 0 0 0-1.036.118z"/>
    </svg>
  );
};
