// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Ao = ({
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
      <path strokeLinejoin="round" d="m3.7 1.236-.877.344a.5.5 0 0 0-.259.7l1.758 3.295a.5.5 0 0 1-.006.48l-.552.978a.5.5 0 0 0-.004.484l1.824 3.366a.5.5 0 0 1-.075.58l-2.57 2.73a.5.5 0 0 0-.126.24L1.52 20.63a.5.5 0 0 0 .484.602l10.622.127a.5.5 0 0 1 .148.024l4.235 1.377a.5.5 0 0 0 .253.014l4.123-.829-2.125-2.2a.5.5 0 0 1-.14-.335L19 14.176a.5.5 0 0 1 .5-.511h2.567a.5.5 0 0 0 .5-.494l.032-2.517a.5.5 0 0 0-.575-.5l-1.717.26a.5.5 0 0 1-.528-.282l-1.095-2.33a.5.5 0 0 1-.045-.257l.307-3.36a.5.5 0 0 0-.418-.54l-3.2-.519a.5.5 0 0 0-.574.421l-.14.951a.5.5 0 0 1-.452.426l-2.41.205a.5.5 0 0 1-.502-.304L9.889 1.59a.5.5 0 0 0-.454-.306L3.89 1.202a.5.5 0 0 0-.19.034Z"/>
    </svg>
  );
};
