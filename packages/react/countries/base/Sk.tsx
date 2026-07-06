// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Sk = ({
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
      <path strokeLinejoin="round" d="m2.287 11.268-.955 2.12a.5.5 0 0 0 .08.535L4.2 17.095a.5.5 0 0 0 .393.17l3.666-.132a.5.5 0 0 0 .47-.387l.186-.808a.5.5 0 0 1 .303-.353l2.217-.875a.5.5 0 0 1 .388.008l.979.437a.5.5 0 0 0 .609-.163l1.369-1.891a.5.5 0 0 1 .372-.206l2.893-.193a.5.5 0 0 1 .47.256l.448.805a.5.5 0 0 0 .499.254l1.226-.154a.5.5 0 0 0 .392-.286l1.72-3.728-3.733-1.903a.5.5 0 0 0-.355-.038l-1.715.452a.5.5 0 0 1-.298-.013l-1.354-.492a.5.5 0 0 0-.388.02l-1.859.897a.5.5 0 0 1-.628-.166l-1.024-1.482a.5.5 0 0 0-.68-.137l-.985.628a.5.5 0 0 1-.314.076l-1.675-.153a.5.5 0 0 0-.43.178L4.615 11.01a.5.5 0 0 1-.46.174l-1.335-.205a.5.5 0 0 0-.532.289Z"/>
    </svg>
  );
};
