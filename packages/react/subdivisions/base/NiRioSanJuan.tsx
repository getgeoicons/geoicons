// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const NiRioSanJuan = ({
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
      <path strokeLinejoin="round" d="M6.424 11.757a2 2 0 0 1 .513 1.287l.011.43A1.51 1.51 0 0 1 5.162 15l-3.169-.589a.6.6 0 0 0-.706.53l-.04.385a.6.6 0 0 0 .39.624l3.45 1.268a.6.6 0 0 0 .514-.047l2.759-1.64a1 1 0 0 1 .815-.094l3.216 1.026a2 2 0 0 1 .948.649l1.366 1.692a1 1 0 0 0 .788.372l1.801-.017a1 1 0 0 1 .574.174l.905.619a1 1 0 0 0 .846.134l2.223-.654a1 1 0 0 0 .678-1.24l-.17-.582a2 2 0 0 0-.444-.788l-.927-1.015a2 2 0 0 0-.918-.571l-4.355-1.266a2 2 0 0 1-.753-.41l-3.907-3.39a2 2 0 0 1-.686-1.624l.161-2.844a1 1 0 0 0-.335-.805l-.973-.863a1 1 0 0 0-.663-.251H6.631a1 1 0 0 0-.637.229L2.722 6.713a.6.6 0 0 0-.064.864z"/>
    </svg>
  );
};
