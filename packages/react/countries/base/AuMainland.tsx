// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const AuMainland = ({
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
      <path strokeLinejoin="round" d="m3.324 18.238-.946-.351a.5.5 0 0 1-.325-.506l.152-2.053a.5.5 0 0 0-.035-.223l-.924-2.3a.5.5 0 0 1-.034-.234l.223-2.285a.5.5 0 0 1 .355-.431l3.24-.964a.5.5 0 0 0 .246-.164l2.5-3.08a.5.5 0 0 1 .654-.108l.69.433a.5.5 0 0 0 .652-.105l1.437-1.739a.5.5 0 0 1 .481-.172l1.713.334a.5.5 0 0 1 .32.768l-.42.631a.5.5 0 0 0 .172.714l1.756.982a.5.5 0 0 0 .73-.323l.713-3.08a.25.25 0 0 1 .474-.041l1.838 4.354a.5.5 0 0 0 .099.15l3.178 3.338a.5.5 0 0 1 .13.252l.382 2.027a.5.5 0 0 1-.022.264l-2.005 5.483a.5.5 0 0 1-.334.31l-2.18.616a.5.5 0 0 1-.25.005l-2.085-.49a.5.5 0 0 1-.367-.352l-.313-1.118a.5.5 0 0 0-.345-.346l-1.737-.492a.5.5 0 0 1-.198-.11l-1.96-1.768a.5.5 0 0 0-.493-.103l-6.83 2.282a.5.5 0 0 1-.332-.005Z"/>
    </svg>
  );
};
