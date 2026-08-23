// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const UsVirginia = ({
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
      <path strokeLinejoin="round" d="M18.853 16.205a.3.3 0 0 0 .29-.38l-.882-3.156a1 1 0 0 0-.36-.528l-1.103-.835a1 1 0 0 1-.328-1.16l.137-.351a.6.6 0 0 0-.295-.757l-2.035-.997a.6.6 0 0 0-.785.241l-1.115 1.948a.6.6 0 0 1-.575.3l-.472-.043a.6.6 0 0 0-.597.342L9.73 12.964a1 1 0 0 1-.644.54l-1.652.447a1 1 0 0 1-.912-.205l-.584-.5a.3.3 0 0 0-.362-.022L1.2 16.157z"/>
    </svg>
  );
};
