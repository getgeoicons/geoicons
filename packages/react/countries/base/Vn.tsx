// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Vn = ({
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
      <path strokeLinejoin="round" d="m10.667 22.8-.473-2.217a.5.5 0 0 1 .257-.547l1.13-.594a.5.5 0 0 0 .254-.321l.137-.548a.5.5 0 0 1 .285-.337l1.711-.747a.5.5 0 0 0 .3-.44l.128-3.481a.5.5 0 0 0-.116-.339L9.216 7.157l1.111-.44a.5.5 0 0 0 .26-.696l-.48-.918a.5.5 0 0 0-.525-.262l-.653.109a.5.5 0 0 1-.476-.185L6.655 2.47l4.432-1.235a.5.5 0 0 1 .25-.005l1.525.365a.5.5 0 0 1 .372.383l.197.93a.5.5 0 0 0 .31.364l1.863.715-2.976 2.17a1 1 0 0 0-.385.583l-.07.304a1 1 0 0 0-.002.441l.099.443a1 1 0 0 0 .235.454l3.066 3.386q.033.036.058.078l1.123 1.871q.08.136.116.29l.435 1.883q.042.181.015.366l-.21 1.47a1 1 0 0 1-.192.463l-.595.785a1 1 0 0 1-.244.23z"/>
    </svg>
  );
};
