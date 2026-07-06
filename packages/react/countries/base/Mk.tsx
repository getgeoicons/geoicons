// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Mk = ({
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
      <path strokeLinejoin="round" d="M1.245 12.958 3.437 19.5a.5.5 0 0 0 .439.34l6.646.472a.5.5 0 0 0 .396-.151l2.761-2.86a.5.5 0 0 1 .37-.153l5.388.098a.5.5 0 0 0 .503-.42l.198-1.233a.5.5 0 0 1 .456-.42l1.15-.086a.5.5 0 0 0 .457-.423l.579-3.794a.5.5 0 0 0-.03-.258l-1.149-2.923a.5.5 0 0 0-.295-.287l-2.292-.828a.5.5 0 0 1-.219-.156l-2.044-2.53a.5.5 0 0 0-.451-.182l-6.17.78a.5.5 0 0 0-.344.206l-.99 1.391a.5.5 0 0 1-.611.167L6.68 5.579a.5.5 0 0 0-.353-.02l-1.975.62a.5.5 0 0 0-.344.55l.26 1.758a.5.5 0 0 1-.454.572l-1.408.111a.5.5 0 0 0-.448.386l-.727 3.13a.5.5 0 0 0 .013.272Z"/>
    </svg>
  );
};
