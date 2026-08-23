// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const TtTobago = ({
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
      <path strokeLinejoin="round" d="M1.22 18.146a.6.6 0 0 0 .509.585l2.566.394a1 1 0 0 0 .87-.292l2.09-2.153a1 1 0 0 1 1.128-.215l.408.184a1 1 0 0 0 1.05-.143l1.141-.948a1 1 0 0 1 .627-.231l2.413-.031a1 1 0 0 0 .693-.292l2.956-2.943a1 1 0 0 1 .705-.291l1.614-.001a1 1 0 0 0 .577-.184l.889-.63a1 1 0 0 0 .391-.568l.865-3.39a1 1 0 0 0-.062-.668l-.356-.766a1 1 0 0 0-1.17-.544l-4.256 1.163a1 1 0 0 0-.157.058L11.12 8.827a1 1 0 0 0-.18.108l-5.43 4.074a1 1 0 0 0-.232.246l-1.829 2.75a1 1 0 0 1-.685.435l-1.046.156a.6.6 0 0 0-.512.602z"/>
    </svg>
  );
};
