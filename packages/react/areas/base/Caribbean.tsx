// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Caribbean = ({
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
      <path strokeLinejoin="round" d="m2.017 8.668-.475.613a.701.701 0 0 0 .678 1.12l.227-.041a1 1 0 0 0 .165-.048l1.665-.664a1 1 0 0 1 .672-.025l4.298 1.359a1 1 0 0 1 .58.482l.427.798a1 1 0 0 0 .864.529l2.427.043a1 1 0 0 0 .423-.086l.582-.258a.6.6 0 0 0 .03-1.082L8.077 8.074a1 1 0 0 0-.37-.106l-2.955-.256a1 1 0 0 0-.38.041l-1.859.572a1 1 0 0 0-.496.343Zm17.891 3.804-1.887-.021a.6.6 0 0 0-.534.887l.8 1.468a1 1 0 0 0 1.248.45l.236-.093a1 1 0 0 1 .397-.071l1.649.043a.769.769 0 0 0 .415-1.428l-1.82-1.093a1 1 0 0 0-.504-.142Zm-7.804 2.202-1.298-.329a.91.91 0 1 0-.301 1.79l1.333.115a.802.802 0 0 0 .266-1.576Z"/>
    </svg>
  );
};
