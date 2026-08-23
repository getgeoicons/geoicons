// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const BsInagua = ({
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
      <path strokeLinejoin="round" d="M12.337 19.967a4 4 0 0 1 1.112-.222l2.64-.145a1 1 0 0 0 .812-.499l3.125-5.422a1 1 0 0 0 .126-.379l.475-3.918a.6.6 0 0 0-.8-.636l-1.11.403a.6.6 0 0 0-.34.314l-1.307 2.855a3 3 0 0 1-1.779 1.597l-.924.308a2.946 2.946 0 0 1-3.52-1.39l-.344-.633a.6.6 0 0 0-.968-.121l-.504.545a2 2 0 0 1-1.146.616l-1.203.197a1 1 0 0 0-.687.458l-.24.385a2 2 0 0 1-1.225.885l-1.069.26a.6.6 0 0 0-.457.615l.035.648a1 1 0 0 1-.63.985l-.609.24a.6.6 0 0 0-.32.82l1.09 2.251a.6.6 0 0 0 .734.307l1.65-.564a3 3 0 0 1 1.378-.134l2.568.352a2 2 0 0 0 .937-.096z"/>
    </svg>
  );
};
