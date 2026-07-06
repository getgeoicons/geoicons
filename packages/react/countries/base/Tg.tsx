// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Tg = ({
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
      <path strokeLinejoin="round" d="m15.166 19.163 1.082 2.773-3.024.864-2.477-3.194a1 1 0 0 1-.2-.753l.708-5.02a.5.5 0 0 0-.069-.33l-1.16-1.894a.5.5 0 0 1-.056-.394l.568-2.067a.5.5 0 0 0-.46-.632l-.41-.02a.5.5 0 0 1-.473-.567l.393-2.864a.5.5 0 0 0-.164-.442L7.982 3.347a.5.5 0 0 1-.153-.5L8.256 1.2l3.96.504-.624 2.373a.5.5 0 0 0 .226.556l1.732 1.04a1 1 0 0 1 .485.822l.045 1.32a1 1 0 0 0 .111.425l.863 1.668a1 1 0 0 1 .112.468l-.068 8.416a1 1 0 0 0 .068.371Z"/>
    </svg>
  );
};
