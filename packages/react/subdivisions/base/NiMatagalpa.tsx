// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const NiMatagalpa = ({
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
      <path strokeLinejoin="round" d="M21.604 15.443a1 1 0 0 0-.29-.979l-.536-.496a1.5 1.5 0 0 1-.478-1.178l.041-.804a1.5 1.5 0 0 1 .464-1.009l1.147-1.091a1 1 0 0 0 .19-.25l.5-.925a.857.857 0 0 0-.967-1.238l-1.836.47a2 2 0 0 1-1.828-.446l-2.689-2.4a1 1 0 0 0-.784-.247l-1.482.178a1 1 0 0 0-.607.305l-4.44 4.682a2 2 0 0 1-1.828.588l-1.373-.264a1 1 0 0 0-.91.29l-2.507 2.61a.6.6 0 0 0-.164.474L1.547 17a.6.6 0 0 0 .399.508l4.288 1.502a1 1 0 0 0 .993-.193l1.195-1.055a2 2 0 0 1 .91-.457l6.727-1.418a1 1 0 0 1 .736.13l2.498 1.561a1 1 0 0 0 .956.057l.482-.227a1 1 0 0 0 .543-.66z"/>
    </svg>
  );
};
