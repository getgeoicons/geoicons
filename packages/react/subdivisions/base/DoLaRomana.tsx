// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const DoLaRomana = ({
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
      <path strokeLinejoin="round" d="M16.73 1.525a1 1 0 0 0-.754-.312l-1.565.043a1 1 0 0 0-.57.199l-1.512 1.13a1 1 0 0 0-.32.405l-1.502 3.488a2 2 0 0 1-.925.99l-1.463.748a1 1 0 0 0-.463.496l-.63 1.469a2 2 0 0 1-.97 1.014l-1.754.844a1 1 0 0 0-.387.33L1.76 15.465a1 1 0 0 0 .077 1.24l1.326 1.475a2 2 0 0 1 .493 1.055l.427 3.006a.6.6 0 0 0 .642.514l4.933-.398a6 6 0 0 0 1.231-.23l2.713-.809a2 2 0 0 1 1.185.013l3.168 1.023a.6.6 0 0 0 .76-.404l1.166-4.005c.108-.37.258-.727.448-1.063l2.185-3.864a1 1 0 0 0 .115-.664l-.535-3.065a1 1 0 0 0-.284-.54l-3.45-3.394a1 1 0 0 1-.295-.786l.079-1.075a1 1 0 0 0-.271-.761z"/>
    </svg>
  );
};
