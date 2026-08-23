// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const UsWestVirginia = ({
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
      <path strokeLinejoin="round" d="M22.726 10.238a.3.3 0 0 0-.03-.302l-1.23-1.701a1 1 0 0 0-.922-.407l-1.932.216a2 2 0 0 0-1.022.423l-2.803 2.23a.3.3 0 0 1-.487-.243l.067-2.433a.3.3 0 0 0-.301-.309l-2.99.02a.3.3 0 0 1-.301-.299l-.02-4.914a.6.6 0 0 0-.599-.597h-.191a.6.6 0 0 0-.586.465l-1.306 5.7a2 2 0 0 1-.745 1.15l-3.18 2.397a1 1 0 0 0-.181.176L1.51 14.9a1 1 0 0 0-.216.573L1.22 16.97a1 1 0 0 0 .229.687l2.803 3.39a2 2 0 0 0 2.134.636l4.286-1.33a1 1 0 0 0 .601-.513l2.466-5.012a.6.6 0 0 1 .744-.299l1.069.39a.6.6 0 0 0 .69-.211l3.285-4.523a.3.3 0 0 1 .438-.051l1.706 1.467a.3.3 0 0 0 .467-.101z"/>
    </svg>
  );
};
