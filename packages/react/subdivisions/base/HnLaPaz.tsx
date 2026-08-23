// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const HnLaPaz = ({
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
      <path strokeLinejoin="round" d="M20.394 22.17a1 1 0 0 0 .967-.47l.656-1.068a4 4 0 0 0 .56-1.597l.15-1.2c.049-.384.04-.773-.023-1.155l-.46-2.757a.6.6 0 0 0-.8-.464l-1.631.601a.6.6 0 0 1-.665-.174l-3.368-3.96a1 1 0 0 1 .532-1.62l4.813-1.137a1 1 0 0 0 .708-1.319l-.594-1.617a1 1 0 0 0-1.255-.603l-1.03.343a1 1 0 0 1-.774-.059l-3.84-1.972a1 1 0 0 0-.75-.067l-2.452.75a1 1 0 0 0-.705.896l-.095 1.562a1 1 0 0 1-.403.743L6.971 8.022l-5.526 4.934a.6.6 0 0 0-.193.543l.438 2.724a.6.6 0 0 0 .631.503l3.324-.213a1 1 0 0 1 .934.504l1.905 3.357a.6.6 0 0 0 .65.29l5.849-1.288a1 1 0 0 1 1.028.396l1.214 1.699a1 1 0 0 0 .698.412z"/>
    </svg>
  );
};
