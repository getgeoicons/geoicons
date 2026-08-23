// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const BzCayo = ({
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
      <path strokeLinejoin="round" d="M7.098 4.286a1 1 0 0 0-.42.816l.01 4.3-.773 12.824a.526.526 0 0 0 .929.368l.666-.801a2 2 0 0 1 .877-.609l1.549-.54a3 3 0 0 0 .934-.53l1.794-1.5q.332-.278.572-.638l1.854-2.78c.133-.199.23-.42.284-.653l.343-1.466a1 1 0 0 1 .218-.426l1.26-1.456a1 1 0 0 0 .136-1.109l-.186-.363a1 1 0 0 1 .067-1.02l.695-1.012a1 1 0 0 0 .17-.673l-.525-4.932a.6.6 0 0 0-.88-.465l-2.136 1.144a2 2 0 0 1-.756.228l-5.345.505a1 1 0 0 0-.487.181z"/>
    </svg>
  );
};
