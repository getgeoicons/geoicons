// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Ag = ({
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
      <path strokeLinejoin="round" d="M9.421 21.019a94 94 0 0 0-.212-1.629c-.04-.287.046-.577.236-.796l1.382-1.592a1 1 0 0 1 1.34-.156l2.936 2.115a1 1 0 0 1 .41.705l.098.918a1 1 0 0 1-.367.885l-.984.793a2 2 0 0 1-1.517.425l-1.369-.18a2 2 0 0 1-.592-.175l-.661-.312c-.382-.18-.65-.582-.7-1.001Zm1.517-14.192 2.185.599a.6.6 0 0 0 .755-.508l.163-1.373a1 1 0 0 0-.202-.73l-2.411-3.117a.6.6 0 0 0-.865-.088l-.678.58a.6.6 0 0 0-.056.857l.863.958a1 1 0 0 1 .202.997l-.364 1.05a.6.6 0 0 0 .408.775Z"/>
    </svg>
  );
};
